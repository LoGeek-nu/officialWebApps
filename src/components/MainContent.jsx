import { useEffect, useMemo, useRef, useState } from "react";

/* ===== お知らせ ===== */
function Notice() {
  const items = [
    { title: "次回AtCoder会", body: "毎週金曜 18:00〜（8号館2階 計算機室）" },
    { title: "新歓/見学", body: "いつでも歓迎！途中参加OK。DMかフォームで連絡してね。" },
    { title: "LT会", body: "学期ごとに開催。発表テーマは自由（5分でもOK）" },
  ];

  return (
    <section id="notice">
      <h2>お知らせ</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((it, i) => (
          <div
            key={i}
            style={{
              padding: 14,
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            <div style={{ fontWeight: 700 }}>{it.title}</div>
            <div style={{ marginTop: 6 }}>{it.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===== 参加導線 ===== */
function CTA() {
  const btnStyle = {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #333",
    textDecoration: "none",
  };

  return (
    <section id="cta">
      <h2>参加はこちら</h2>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a href="#contact" style={btnStyle}>
          フォームで連絡
        </a>
        <a
          href="https://twitter.com/nu_chs_logeek"
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle}
        >
          XのDMへ
        </a>
        <a href="#access" style={btnStyle}>
          活動場所を見る
        </a>
      </div>
    </section>
  );
}

/* ===== FAQ（検索したときだけ表示） ===== */
function FAQ() {
  const faqs = useMemo(
    () => [
      {
        q: "初心者でも参加できますか？",
        a: "参加できます！やってみたい気持ちがあればOK。ゆるくサポートします。",
      },
      {
        q: "途中参加・途中退室はできますか？",
        a: "できます。来られる時間だけで大丈夫です。",
      },
      {
        q: "活動場所はどこですか？",
        a: "日本大学文理学部8号館2階の計算機室が主な活動場所です（変更がある場合はお知らせします）。",
      },
      { q: "参加費はかかりますか？", a: "年会費は無料です。" },
      {
        q: "どんな活動をしていますか？",
        a: "AtCoder会、勉強会、もくもく会、学期ごとのLT会などです。",
      },
      {
        q: "連絡手段は何がありますか？",
        a: "X（旧Twitter）のDMまたはお問い合わせフォームから連絡できます。",
      },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!trimmed) return [];
    return faqs.filter((f) => (f.q + " " + f.a).toLowerCase().includes(trimmed));
  }, [faqs, trimmed]);

  const btnStyle = {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #333",
    textDecoration: "none",
  };

  return (
    <section id="faq">
      <h2>よくある質問（Q&amp;A）</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ここで検索（例：初心者、場所、参加費、途中参加）"
        style={{
          width: "100%",
          maxWidth: 520,
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid #ddd",
          marginTop: 8,
          marginBottom: 12,
        }}
      />

      {/* 入力がない時は一覧を出さない */}
      {!trimmed ? (
        <p style={{ marginTop: 0, opacity: 0.75 }}>
          キーワードを入力すると、該当するQ&amp;Aだけ表示されます。
        </p>
      ) : filtered.length > 0 ? (
        <div style={{ display: "grid", gap: 10 }}>
          {filtered.map((f, i) => (
            <details
              key={i}
              style={{
                padding: 12,
                border: "1px solid #ddd",
                borderRadius: 12,
              }}
            >
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>{f.q}</summary>
              <div style={{ marginTop: 8, lineHeight: 1.7 }}>{f.a}</div>
            </details>
          ))}
        </div>
      ) : (
        <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 12 }}>
          <p style={{ marginTop: 0 }}>
            「{query}」に一致するQ&amp;Aは見つかりませんでした（まだ掲載していない質問かも）。
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#contact" style={btnStyle}>
              フォームで質問する
            </a>
            <a
              href="https://twitter.com/nu_chs_logeek"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              XのDMで質問する
            </a>
          </div>

          <p style={{ marginBottom: 0, marginTop: 10, fontSize: 12, opacity: 0.75 }}>
            ※「見学」「活動日」「持ち物」「PC」なども気軽に聞いてOKです。
          </p>
        </div>
      )}
    </section>
  );
}

/* ===== Twitterタイムライン（表示できない環境があるのでフォールバック付き） ===== */
function TwitterTimeline() {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const SCRIPT_ID = "twitter-wjs";

    const loadWidget = async () => {
      try {
        if (!document.getElementById(SCRIPT_ID)) {
          const s = document.createElement("script");
          s.id = SCRIPT_ID;
          s.src = "https://platform.twitter.com/widgets.js";
          s.async = true;
          document.body.appendChild(s);

          await new Promise((resolve, reject) => {
            s.onload = resolve;
            s.onerror = reject;
          });
        }

        if (ref.current) ref.current.innerHTML = "";

        await window.twttr.widgets.createTimeline(
          { sourceType: "profile", screenName: "nu_chs_logeek" },
          ref.current,
          { height: 800 }
        );

        setFailed(false);
      } catch (e) {
        console.error("Twitter embed failed:", e);
        setFailed(true);
      }
    };

    loadWidget();
  }, []);

  return (
    <section id="social">
      <h2>最新情報</h2>
      <div ref={ref} />
      {failed && (
        <div style={{ marginTop: 12 }}>
          <a href="https://twitter.com/nu_chs_logeek" target="_blank" rel="noopener noreferrer">
            最新ツイートを見る（Xへ移動）
          </a>
        </div>
      )}
    </section>
  );
}

/* ===== メイン ===== */
export default function MainContent() {
  return (
    <main>
      <section id="about">
        <h2>概要</h2>
        <p>
          日本大学文理学部の情報研究会 LoGeek です。<br />
          学年や学科に縛られず、情報技術を深めることを目的に活動しています。<br />
          2023年に設立しました。<br />
        </p>
      </section>

      <section id="activities">
        <h2>活動内容</h2>
        <p>
          毎週金曜日18:00~ AtCoder会<br />
          学期ごとのLT会<br />
          TechTrainを活用した勉強会<br />
          もくもくと勉強する会<br />
        </p>
      </section>

      <section id="members">
        <h2>メンバー募集</h2>
        <p>
          学年学科関係なく常時新規メンバー募集中！<br />
          年会費は無料！<br />
          「やってみたい」という興味があれば、経験は問いません。<br />
          初心者から経験者まで、誰でも歓迎しています。<br />
        </p>
      </section>

      <Notice />
      <CTA />
      <FAQ />
      <TwitterTimeline />

      <section id="contact">
        <h2>お問い合わせ</h2>
        cookieを許可するとお問い合わせフォームが見えるようになります。<br />
        参加希望・質問はSNSのDMまたはフォームからお気軽にどうぞ。
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSedBSDOTbhLqP6bC8a5q07XM9obSwJ26sY7CY3G9B4OoEXYvg/viewform?embedded=true"
          width="640"
          height="739"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="LoGeek contact form"
        >
          読み込んでいます…
        </iframe>
      </section>

      <section id="access">
        <h2>アクセス</h2>
        <div className="map-container">
          日本大学文理学部8号館2階計算機室が主な活動場所です。
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=139.632225%2C35.66001%2C139.636225%2C35.66401&layer=mapnik&marker=35.66201%2C139.634225"
            style={{ border: 0, width: "100%", height: "300px" }}
            loading="lazy"
            title="OpenStreetMap"
          ></iframe>
        </div>
      </section>
    </main>
  );
}