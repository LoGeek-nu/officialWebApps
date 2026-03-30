import { useEffect, useRef } from "react";
import "./index.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const h = rect.height;


      const progress = Math.min(Math.max(-rect.top / h, 0), 1);

 
      el.style.setProperty("--p", progress.toString());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <img src="/top.jpg" alt="メインイメージ" className="hero-image" />
      <div className="hero-text">
        <h1 className="hero-title">LoGeek</h1>
        <p>情報技術を、ともに深める</p>
      </div>
    </div>
  );
}