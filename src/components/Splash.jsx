import { useEffect, useState } from "react";
import "./Splash.css";

export default function Splash() {
  const [showLogo, setShowLogo] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 500);   // 0.5秒後にロゴ表示
    const t2 = setTimeout(() => setHide(true), 2500);      // 2.5秒後に画面消す
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className={`start ${hide ? "is-hide" : ""}`}>
      <p className={`start-logo ${showLogo ? "is-show" : ""}`}>
        {/* 画像ロゴにしたいなら img に置き換え */}
        {/* <img src="/logo.png" alt="LoGeek" /> */}
        <img src="/logo.png" alt="LoGeek ロゴ" className="logo-image"/>
      </p>
    </div>
  );
}