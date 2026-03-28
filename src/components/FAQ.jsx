/* ===== FAQ ===== */
export default function FAQ() {
  const faqs = [
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
  ];

  return (
    <section id="faq">
      <h2>よくある質問（Q&amp;A）</h2>

      <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
        {faqs.map((f, i) => (
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
    </section>
  );
}
