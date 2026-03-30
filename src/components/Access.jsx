export default function Access() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=日本大学文理学部";

  return (
    <section id="access">
      <h2>アクセス</h2>

      <p>
        日本大学文理学部 8号館 2階 学科計算機室を中心に活動しています。
      </p>
      
      <img
        src="/LocalMap.png"
        alt={"学科計算機室への案内図：日本大学文理学部 8号館 2階"}
        class="map-image"
      />

      <p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Googleマップで開く
        </a>
      </p>

      <p className="access-note">
        ※ 開催場所が変更されることがあるため、見学に来られる方は事前にお問い合わせください！
      </p>
    </section>
  );
}
