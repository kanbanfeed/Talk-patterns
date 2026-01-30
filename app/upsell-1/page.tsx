"use client";

export default function Upsell1() {
  const handleUpsell = async () => {
    const res = await fetch("/api/upsell1", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <main className="container">
      <h1>Power Language: What It Actually Meant</h1>

      <p>
        If even one sentence felt familiar,
        you’ll want to know what it was really doing.
      </p>

      <p>
        Each sentence is decoded:
      </p>

      <ul>
        <li>the hidden intent</li>
        <li>why it hits so hard</li>
        <li>what emotional lever it pulls</li>
      </ul>

      <p>This is not about blame.<br />It’s about literacy.</p>

      <ul>
        <li>Decode dominance disguised as concern</li>
        <li>Understand why apologies sometimes make things worse</li>
        <li>See patterns before they repeat</li>
      </ul>

      <button onClick={handleUpsell}>Add decoding ($29)</button>
      <br /><br />
      <a href="/upsell-2">Skip — I only want the sentences</a>
    </main>
  );
}
