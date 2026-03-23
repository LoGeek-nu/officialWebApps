import { useEffect, useRef, useState } from "react";

/* ===== Twitterタイムライン（表示できない環境があるのでフォールバック付き） ===== */
export default function Social() {
  const ref = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const SCRIPT_ID = "twitter-wjs";

    const loadWidget = async () => {
      try {
        if (!document.getElementById(SCRIPT_ID)) {
          const s = document.createElement("script");
          s.id = SCRIPT_ID;
          s.src = "https://platform.twitter.com/widgets.js";
          s.async = true;
          document.body.appendChild(s);

          await new Promise((resolve, reject) => {
            s.onload = resolve;
            s.onerror = reject;
          });
        }

        if (ref.current) ref.current.innerHTML = "";

        if (window.twttr && window.twttr.widgets) {
          await window.twttr.widgets.createTimeline(
            { sourceType: "profile", screenName: "nu_chs_logeek" },
            ref.current,
            { height: 800 },
          );
          setFailed(false);
        } else {
          setFailed(true);
        }
      } catch (e) {
        console.error("Twitter embed failed:", e);
        setFailed(true);
      }
    };

    loadWidget();
  }, []);

  return (
    <section id="social">
      <h2>最新情報</h2>
      <div ref={ref} />
      {failed && (
        <div style={{ marginTop: 12 }}>
          <a
            href="https://twitter.com/nu_chs_logeek"
            target="_blank"
            rel="noopener noreferrer"
          >
            最新ツイートを見る（Xへ移動）
          </a>
        </div>
      )}
    </section>
  );
}
