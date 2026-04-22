const activities = [
  {
    title: "AtCoder会",
    summary: "毎週水曜日 18:00〜｜8号館2階 計算機室",
    detail:
      "競技プログラミングサイト「AtCoder」の問題を各自で解き、わからないところを教え合う会です。途中参加・途中退室もOKです！",
    images: ["/Atcoder_1.jpg", "/Atcoder_2.jpg"],
  },
  {
    title: "LT会（ライトニングトーク）",
    summary: "学期ごと開催｜発表5分〜",
    detail:
      "勉強したことや作ったもの、気になった技術などをテーマに発表します。発表に慣れる練習の場としても活用できます。聴講のみの参加も歓迎です。",
    images: ["/LT_1.jpg", "/LT_2.jpg"],
  },
  {
    title: "TechTrain 勉強会",
    summary: "オンライン学習サービスを利用",
    detail: "TechTrainを活用し、Web開発などの学習を一緒に進める会です。",
    images: ["/TechTrain_1.jpg", "/TechTrain_2.jpg"],
  },
  {
    title: "もくもく会",
    summary: "各自の作業・勉強を持ち寄る",
    detail:
      "課題や個人開発、資格勉強など、それぞれが取り組みたいことを進める会です。Discordのボイスチャットを利用して実施しています。",
    images: ["/mokumokukai.jpg"],
  },
  {
    title: "他大学サークルとの交流",
    summary: "不定期で開催",
    detail:
      "毎年3月に、技術系サークルによる合同LTイベント「CircLeT」を開催しています。",
    images: ["/CircLeT_1.jpg", "/CircLeT_2.jpg"],
  },
];

export default function Activities() {
  return (
    <section id="activities">
      <h2>活動内容</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {activities.map((act, i) => (
          <div
            key={i}
            style={{
              padding: 12,
              border: "1px solid #ddd",
              borderRadius: 12,
            }}
          >
            <div style={{ fontWeight: 700 }}>
              {act.title}
              <span
                style={{
                  fontWeight: 400,
                  marginLeft: 10,
                  opacity: 0.65,
                  fontSize: 13,
                }}
              >
                {act.summary}
              </span>
            </div>
            <div style={{ marginTop: 8, lineHeight: 1.7 }}>{act.detail}</div>
            {act.images.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 12,
                  flexWrap: "wrap",
                }}
              >
                {act.images.map((src, j) => (
                  <img
                    key={j}
                    src={src}
                    alt={`${act.title} 画像${j + 1}`}
                    style={{ width: 240, objectFit: "cover" }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
