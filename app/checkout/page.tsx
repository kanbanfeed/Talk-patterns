"use client";

export default function Checkout() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main className="container">
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

      <button onClick={handleCheckout}>Get instant access ($7)</button>
    </main>
  );
}
