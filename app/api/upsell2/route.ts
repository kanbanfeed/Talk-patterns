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
          product_data: { name: "Silent Countermoves" },
          unit_amount: 9900,
        },
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/thank-you?product=99`,
    cancel_url: `${baseUrl}/thank-you?product=29`,
  });

  return NextResponse.json({ url: session.url });
}
