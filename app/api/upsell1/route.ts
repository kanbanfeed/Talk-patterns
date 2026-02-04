import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

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
    success_url: `${baseUrl}/upsell-2?product=29`,
    cancel_url: `${baseUrl}/thank-you?product=7`,
  });

  return NextResponse.json({ url: session.url });
}
