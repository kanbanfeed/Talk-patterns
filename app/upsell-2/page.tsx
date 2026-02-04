import { Suspense } from "react";
import Upsell2Client from "./upsell2-client";

export default function Upsell2Page() {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Upsell2Client />
    </Suspense>
  );
}
