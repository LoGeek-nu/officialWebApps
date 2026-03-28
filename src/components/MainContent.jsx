import Access from "./Access.jsx";
import Social from "./Social.jsx";
import Activities from "./Activities.jsx";
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";

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

      <Activities />

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
      <FAQ />
      <Social />

      <Contact />

      <Access />
    </main>
  );
}