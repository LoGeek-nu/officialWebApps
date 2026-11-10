import { useEffect, useRef, useState } from "react";

// 送信完了（iframe の読み込み）を待つ上限
const SUBMIT_TIMEOUT_MS = 10000;

export default function Contact() {
  // idle: 未送信 / sending: 送信中 / success: 送信完了 / error: 送信失敗
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);
  const noticeRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    if (status === "success" || status === "error") {
      noticeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const handleSubmit = (e) => {
    // 別ドメインの応答は中身を読めず成否を判定できないため、オフラインは送信前に止める
    if (!navigator.onLine) {
      e.preventDefault();
      setStatus("error");
      return;
    }
    // preventDefault せず、hidden_iframe に向けてそのまま送信させる
    setStatus("sending");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("error"), SUBMIT_TIMEOUT_MS);
  };

  // Google Forms からの応答が iframe に読み込まれたら送信完了とみなす
  const handleIframeLoad = () => {
    if (status !== "sending") return;
    clearTimeout(timeoutRef.current);
    formRef.current?.reset();
    setStatus("success");
  };

  const isSending = status === "sending";

  return (
    <section id="contact">
      <h2>お問い合わせ</h2>

      <p>
        入会についてのご相談やご質問などは、
        <a
          href="https://x.com/nu_chs_logeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式XのDM
        </a>
        または以下のお問い合わせフォームよりお気軽にご連絡ください。
      </p>

      <iframe
        name="hidden_iframe"
        title="お問い合わせ送信用"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      ></iframe>

      {(status === "success" || status === "error") && (
        <div
          ref={noticeRef}
          className={`c-form__notice c-form__notice--${status}`}
          role="status"
        >
          {status === "success" ? (
            <>
              <p>お問い合わせを送信しました。ありがとうございます。</p>
              <p>内容を確認の上、担当者よりご連絡いたします。</p>
            </>
          ) : (
            <p>
              送信を確認できませんでした。時間をおいて再度お試しいただくか、公式XのDMからご連絡ください。
            </p>
          )}
        </div>
      )}

      <form
        ref={formRef}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-bRZSX93ikIqg1JXve3tSS7z5iLpfutlrURecrSuKQ1PEKg/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="c-form"
      >
        <div className="c-form__item">
          <label className="c-form__label" htmlFor="field-name">
            お名前<span className="c-form__required">必須</span>
          </label>
          <input
            name="entry.335491494"
            className="c-form__input"
            id="field-name"
            placeholder="計算機 花子"
            type="text"
            required
          />
        </div>
        <div className="c-form__item">
          <label className="c-form__label" htmlFor="field-affiliation">
            所属
            <span className="c-form__required">必須</span>
          </label>
          <input
            name="entry.791759906"
            className="c-form__input"
            id="field-affiliation"
            placeholder="日本大学文理学部情報科学科"
            type="text"
            required
          />
        </div>
        <div className="c-form__item">
          <label className="c-form__label" htmlFor="field-email">
            連絡の取れるメールアドレス
            <span className="c-form__required">必須</span>
          </label>
          <input
            name="entry.417623452"
            className="c-form__input"
            id="field-email"
            placeholder="sample@gmail.com"
            type="email"
            required
          />
        </div>
        <div className="c-form__item">
          <label className="c-form__label" htmlFor="field-message">
            お問い合わせ内容<span className="c-form__required">必須</span>
          </label>
          <textarea
            name="entry.424051204"
            className="c-form__input"
            id="field-message"
            placeholder="お問い合わせ内容"
            required
          ></textarea>
        </div>
        <div className="c-form__submit">
          <button type="submit" disabled={isSending}>
            {isSending ? "送信中…" : "送信する"}
          </button>
        </div>
      </form>
    </section>
  );
}
