export default function Access() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=日本大学文理学部";

  return (
    <section id="access">
      <h2>アクセス</h2>

      <p>
        主に日本大学文理学部 8号館 2階 学科計算機室で活動しています。
      </p>

      <p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Googleマップで開く
        </a>
      </p>

      <p className="access-note">
        ※開催場所が変更になる場合があります。参加前に最新のお知らせをご確認ください。
      </p>
    </section>
  );
}
