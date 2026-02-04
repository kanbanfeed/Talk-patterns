import { Suspense } from "react";
import CheckoutClient from "./checkout-client";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
