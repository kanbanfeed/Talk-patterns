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
          product_data: { name: "They Said This When I Was Failing" },
          unit_amount: 700,
        },
        quantity: 1,
      },
    ],
    success_url: "https://talk-patterns.vercel.app/upsell-1",
    cancel_url: "https://talk-patterns.vercel.app/checkout",
  });

  return NextResponse.json({ url: session.url });
}
