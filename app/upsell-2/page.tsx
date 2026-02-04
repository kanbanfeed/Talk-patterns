"use client";

import { useSearchParams } from "next/navigation";

export default function Upsell2() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "29";

  const handleUpsell = async () => {
    const res = await fetch("/api/upsell2", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  const handleSkip = () => {
    window.location.href = `/thank-you?product=${product}`;
  };

  return (
    <main className="container">
      <h1>Silent Countermoves</h1>

      <p>
        This is for people who can’t afford
        to say the wrong thing again.
      </p>

      <p>For each category, you get:</p>
      <ul>
        <li>what NOT to say</li>
        <li>one neutral response</li>
        <li>one exit sentence</li>
        <li>one long-term positioning move</li>
      </ul>

      <p>
        No confrontation.<br />
        No escalation.<br />
        No drama.
      </p>

      <ul>
        <li>Keep dignity under pressure</li>
        <li>Exit conversations without damage</li>
        <li>Maintain control without raising your voice</li>
      </ul>

      <button onClick={handleUpsell}>Add countermoves ($99)</button>

      <br /><br />

      <button onClick={handleSkip}>Skip</button>
      <p>No, continue without this. You will be redirected to the document access section.</p>
    </main>
  );
}
