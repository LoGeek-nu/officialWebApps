import { useState } from "react";
import Thanks from "./Thanks";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Thanks onBack={() => setSubmitted(false)} />;
  }

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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "24px 0",
        }}
      ></div>

      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-bRZSX93ikIqg1JXve3tSS7z5iLpfutlrURecrSuKQ1PEKg/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
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
          <button type="submit">送信する</button>
        </div>
      </form>
    </section>
  );
}
