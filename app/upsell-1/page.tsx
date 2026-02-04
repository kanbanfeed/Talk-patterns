import { Suspense } from "react";
import Upsell1Client from "./upsell1-client";

export default function Upsell1Page() {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Upsell1Client />
    </Suspense>
  );
}
