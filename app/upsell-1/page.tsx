"use client";

import { useSearchParams } from "next/navigation";

export default function Upsell1() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "7";

  const handleUpsell = async () => {
    const res = await fetch("/api/upsell1", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  const handleSkip = () => {
    window.location.href = `/thank-you?product=${product}`;
  };

  return (
    <main className="container">
      <h1>Power Language: What It Actually Meant</h1>

      <p>
        If even one sentence felt familiar,
        you’ll want to know what it was really doing.
      </p>

      <p>Each sentence is decoded:</p>
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

      <button onClick={handleSkip}>Skip</button>
      <p>No, continue without this. You will be redirected to the document access section.</p>
    </main>
  );
}
