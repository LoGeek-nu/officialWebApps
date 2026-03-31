/* ===== FAQ ===== */
export default function FAQ() {
  const faqs = [
    {
      q: "プログラミング初心者でも参加できますか？",
      a: "もちろんです！「やってみたい」という気持ちがあれば十分です。経験は問いませんので、お気軽にどうぞ。",
    },
    {
      q: "途中参加・途中退室はできますか？",
      a: "大丈夫です。来られる時間だけ参加してください。事前連絡も不要です。",
    },
    {
      q: "活動はどこで行っていますか？",
      a: "主に日本大学文理学部 8号館2階の計算機室で活動しています。変更がある場合は事前にお知らせします。",
    },
    {
      q: "参加費はかかりますか？",
      a: "年会費は無料です。",
    },
    {
      q: "どのような活動をしていますか？",
      a: "AtCoder会・勉強会・もくもく会・学期ごとのLT会などを行っています。興味のある活動だけ参加するのも大歓迎です！",
    },
    {
      q: "入会・見学の連絡はどこからすればいいですか？",
      a: "X（旧Twitter）のDM、またはこのページ下部のお問い合わせフォームからご連絡ください。",
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
            <summary style={{ cursor: "pointer", fontWeight: 700 }}>
              {f.q}
            </summary>
            <div style={{ marginTop: 8, lineHeight: 1.7 }}>{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
