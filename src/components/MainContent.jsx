//ここが中身
import { useEffect, useRef } from "react";

export default function MainContent() {
  const twitterRef = useRef(null);

  useEffect(() => {
    const SCRIPT_ID = "twitter-wjs";

    const render = () => {
      if (window.twttr?.widgets?.load && twitterRef.current) {
        window.twttr.widgets.load(twitterRef.current);
      }
    };
    if (window.twttr?.widgets) {
      render();
      return;
    }
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.onload = render; 
      document.body.appendChild(s);
    } else {
      const t = setTimeout(render, 500);
      return () => clearTimeout(t);
    }
  }, []);

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



      <section id="social">
        <h2>最新情報</h2>
        <a class="twitter-timeline" href="https://twitter.com/nu_chs_logeek?ref_src=twsrc%5Etfw">Tweets by nu_chs_logeek</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      
      </section>


      <section id="contact">
        <h2>お問い合わせ</h2>
        cookieを許可するとお問い合わせフォームが見えるようになります。<br />

        参加希望・質問はSNSのDMまたはフォームからお気軽にどうぞ。
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedBSDOTbhLqP6bC8a5q07XM9obSwJ26sY7CY3G9B4OoEXYvg/viewform?embedded=true" width="640" height="739" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        <p>
        </p>
      </section>
      <section id="access">
        <h2>アクセス</h2>
        <div className="map-container">
          日本大学文理学部8号館2階計算機室が主な活動場所です。
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