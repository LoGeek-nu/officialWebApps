import { useEffect, useMemo, useRef, useState } from "react";
import Access from "./Access.jsx";
import Members from "./Members.jsx";
import Social from "./Social.jsx";
import Activities from "./Activities.jsx";
import Contact from "./Contact.jsx";

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
          キーワードを入力すると、該当するQ&amp;Aが表示されます。
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
            「{query}」を含むQ&amp;Aは見つかりませんでした。
          </p>

          <p style={{ marginBottom: 10, marginTop: 10, fontSize: 14, opacity: 0.75 }}>
            情報が見つかりませんか？ 公式X または Googleフォームからお気軽にお問い合わせください！
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
        <h2>サークル紹介</h2>
        <p>
          日本大学文理学部情報研究会 LoGeek です。<br />
          学年や学科に縛られず、情報技術を深めることを目的に活動しています。<br />
          2023年に設立しました。<br />
        </p>
      </section>
      <Activities />
      <Members />
      <Notice />
      <FAQ />
      <Social />
      <Contact />
      <Access />
    </main>
  );
}
