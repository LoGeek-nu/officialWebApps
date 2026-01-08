//ここが中身
export default function MainContent() {
  return (
    <main>
      <section id="about">
        <h2>概要</h2>
        <p>
          日本大学文理学部の情報研究会 LoGeek です。学年・学科を越えて、情報技術を深めることを目的に活動しています。<br />
          2023年設立<br />
          <br />
        </p>
      </section>

      <section id="activities">
        <h2>活動内容</h2>
        <p>
          毎週金曜日18:00~ AtCoder会
          1term1回のLT会
          TechTrainとのあああああ
          各企業様とのあああああああ
        </p>
      </section>

      <section id="members">
        <h2>メンバー募集</h2>
        <p>
          学年学科関係なく常時新規メンバー募集中！
        </p>
      </section>

      <section id="contact">
        <h2>お問い合わせ</h2>
        <p>
          ついったーあとで載せる
        </p>
      </section>
      <section id="access">
        <h2>アクセス</h2>
        <div className="map-container">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=139.632225%2C35.66001%2C139.636225%2C35.66401&layer=mapnik&marker=35.66201%2C139.634225"
            style={{ border: 0, width: '100%', height: '300px' }}
            loading="lazy"
          ></iframe>
        </div>
      </section>  
    </main>
  );
}