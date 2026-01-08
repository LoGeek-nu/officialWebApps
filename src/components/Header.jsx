import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="site-logo">
        <div className="site-logo">
  <img
    src="/log_log.png"
    alt="LoGeek ロゴ"
    className="site-logo-img"
  />
  <span className="site-title">LoGeek</span>
</div>
        <div className="site-title">LoGeek公式サイト</div>
      </div>

      {/* モバイル用ハンバーガーボタン */}
      <button
        className="menu-toggle"
        aria-label="メニューを開閉"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ナビゲーション */}
      <nav className="site-nav">
        <ul>
          <li>
            <a href="#about">サークル紹介</a>
          </li>
          <li>
            <a href="#activities">活動内容</a>
          </li>
          <li>
            <a href="#members">メンバー募集</a>
          </li>
          <li>
            <a href="#contact">お問い合わせ</a>
          </li>
            <a href="#access">アクセス</a>
        </ul>
      </nav>
    </header>
  );
}