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
          product_data: { name: "Power Language: What It Actually Meant" },
          unit_amount: 2900,
        },
        quantity: 1,
      },
    ],
    success_url: "http://localhost:3000/upsell-2",
    cancel_url: "http://localhost:3000/thank-you",
  });

  return NextResponse.json({ url: session.url });
}
