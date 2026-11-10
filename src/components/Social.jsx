import XLogo from "./XLogo.jsx";

export default function Social() {
  return (
    <section id="social">
      <h2>最新情報</h2>

      <p>
        最新の活動状況やお知らせは、公式X（旧Twitter）にて随時発信しています。
      </p>

      <div>
        <a
          href="https://x.com/nu_chs_logeek"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LoGeek公式Xアカウントを開く"
          className="link-button link-button--x"
        >
          <XLogo />
          公式Xを見る
        </a>
      </div>
    </section>
  );
}
