"use client";

import { useSearchParams } from "next/navigation";

export default function Checkout() {
  const searchParams = useSearchParams();
  const upgrade = searchParams.get("upgrade");

  const handleCheckout7 = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  const handleCheckout29 = async () => {
    const res = await fetch("/api/upsell1", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  const isUpgradeTo29 = upgrade === "29";

  return (
    <main className="container">
      {isUpgradeTo29 ? (
        <>
          <h1>Power Language: What It Actually Meant</h1>

          <p>
            This is an upgrade from the original document.
          </p>

          <p>
            You will only be charged $29.
          </p>

          <button onClick={handleCheckout29}>
            Upgrade to decoding ($29)
          </button>
        </>
      ) : (
        <>
          <h1>They Said This When I Was Failing</h1>

          <p>
            This is a raw list of exact sentences people use
            when they’ve already decided you’re weak.
          </p>

          <p>
            There is no advice here.<br />
            No framing.<br />
            No commentary.
          </p>

          <p>Just the words — exactly as they appear.</p>

          <h2>What’s inside</h2>
          <ul>
            <li>50 anonymized sentences</li>
            <li>Categorized by situation</li>
            <li>Delivered as a private document</li>
          </ul>

          <button onClick={handleCheckout7}>
            Get instant access ($7)
          </button>
        </>
      )}
    </main>
  );
}
