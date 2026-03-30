export default function Contact() {
  return (
    <section id="contact">
      <h2>お問い合わせ</h2>

      <p>
        入会についてのご相談やご質問などは、
        <a
          href="https://x.com/nu_chs_logeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式XのDM
        </a>
        または
        <a
          href="https://forms.gle/q9nyfppSv98wTyor5"
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせフォーム
        </a>
        よりお気軽にご連絡ください。
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        <iframe
          src="https://forms.gle/q9nyfppSv98wTyor5"
          title="LoGeek contact form"
          style={{
            width: "100%",
            maxWidth: "640px",
            height: "60vh",
            border: "none",
          }}
        >
          読み込んでいます…
        </iframe>
      </div>

      <p>
        ※ブラウザの設定によってはフォームが表示されない場合があります。
        その場合はCookieの設定をご確認いただくか、
        <a
          href="https://forms.gle/q9nyfppSv98wTyor5"
          target="_blank"
          rel="noopener noreferrer"
        >
          こちらから
        </a>
        ご回答ください。
      </p>
    </section>
  );
}
