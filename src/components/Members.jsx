const points = [
  { label: "対象", text: "日本大学の学生（学年・学科は問いません）" },
  { label: "費用", text: "年会費はかかりません" },
  { label: "経験", text: "不問です。プログラミング未経験の方も歓迎します" },
  {
    label: "参加方法",
    text: "見学からでもOKです。公式xのDMまたはお問い合わせフォームよりお気軽にご連絡ください",
  },
];

export default function Members() {
  return (
    <section id="members">
      <h2>メンバー募集</h2>
      <p style={{ marginTop: 8, lineHeight: 1.7 }}>
        技術に興味があれば、経験やスキルは関係ありません。
        まずは見学からでも気軽にご連絡ください！
      </p>
      <div style={{ display: "grid", gap: 8, marginTop: 16 }}>
        {points.map((p) => (
          <div
            key={p.label}
            style={{
              display: "flex",
              gap: 16,
              padding: "10px 14px",
              border: "1px solid #ddd",
              borderRadius: 10,
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                minWidth: 72,
                fontSize: 14,
                opacity: 0.6,
              }}
            >
              {p.label}
            </span>
            <span style={{ lineHeight: 1.6 }}>{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
