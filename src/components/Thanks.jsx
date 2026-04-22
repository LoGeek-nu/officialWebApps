export default function Thanks({ onBack }) {
  return (
    <section id="contact">
      <h2>お問い合わせ</h2>
      <div style={{ textAlign: "center", margin: "60px auto" }}>
        <p>お問い合わせありがとうございます。</p>
        <p>内容を確認の上、担当者よりご連絡いたします。</p>
        <button className="c-form__submit-back" onClick={onBack}>
          フォームに戻る
        </button>
      </div>
    </section>
  );
}
