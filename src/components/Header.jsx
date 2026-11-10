import { useState } from "react";
import XLogo from "./XLogo.jsx";

const navItems = [
  { href: "#about", label: "サークル紹介" },
  { href: "#activities", label: "活動内容" },
  { href: "#members", label: "メンバー募集" },
  { href: "#contact", label: "お問い合わせ" },
  { href: "#access", label: "アクセス" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <a href="#" className="site-logo" onClick={closeMenu}>
        <img src="/log_log.png" alt="LoGeek ロゴ" className="site-logo-img" />
        <span className="site-title">LoGeek</span>
      </a>
      <div className="site-header-actions">
        <nav className="site-nav" id="site-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://x.com/nu_chs_logeek"
          target="_blank"
          rel="noopener noreferrer"
          className="site-header-x"
          aria-label="LoGeek公式X（@nu_chs_logeek）を開く"
        >
          <XLogo />
        </a>
        <button
          className="menu-toggle"
          aria-label="メニューを開閉"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
