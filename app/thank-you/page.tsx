"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYou() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");

  let filePath = "";

  if (product === "7") {
    filePath = "/briefs/They_Said_This_When_I_Was_Failing.pdf";
  } else if (product === "29") {
    filePath = "/briefs/Power_Language_What_It_Actually_Meant_Extended.pdf";
  } else if (product === "99") {
    filePath = "/briefs/99.pdf"; // placeholder
  }

  return (
    <main className="container">
      <h1>Access granted.</h1>

      <p>Read slowly.<br />Don’t skim.</p>

      <p>
        You’re not looking for comfort.<br />
        You’re looking for pattern recognition.
      </p>

      {filePath && (
        <button className="btn">
          <a href={filePath} target="_blank">
            Download / View document
          </a>
        </button>
      )}
<br />
      {/* Upgrade from $7 to $29 */}
      {product === "7" && (
        <>
          <br />
          <button onClick={() => (window.location.href = "/upsell-1?product=7")}>
            Upgrade to decoding ($29)
          </button>
          <p>You will only be charged $29.</p>
        </>
      )}

      {/* Upgrade from $29 to $99 */}
      {product === "29" && (
        <>
          <br />
          <button onClick={() => (window.location.href = "/upsell-2?product=29")}>
            Upgrade to countermoves ($99)
          </button>
          <p>You will only be charged $99.</p>
        </>
      )}

      <p>
        <a href="/">Return to homepage</a>
      </p>
    </main>
  );
}
