import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Silent Countermoves" },
          unit_amount: 9900,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/thank-you",
    cancel_url: "http://localhost:3000/thank-you",
  });

  return NextResponse.json({ url: session.url });
}
