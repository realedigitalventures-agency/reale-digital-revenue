import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const lookupKey = body.lookup_key;
    const customerEmail = body.customer_email || null;

    if (!lookupKey) {
      return NextResponse.json({ error: "Missing lookup_key." }, { status: 400 });
    }

    const prices = await stripe.prices.list({
      lookup_keys: [lookupKey],
      expand: ["data.product"],
      limit: 1,
      active: true,
    });

    if (!prices.data.length) {
      return NextResponse.json({ error: "Price not found." }, { status: 404 });
    }

    const price = prices.data[0];
    const mode = price.type === "recurring" ? "subscription" : "payment";
    const stripeProduct = price.product as Stripe.Product;

    const session = await stripe.checkout.sessions.create({
      mode,
      ui_mode: "embedded",
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      customer_email: customerEmail || undefined,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        lookup_key: lookupKey,
        product_name: stripeProduct.name,
        offer_code: stripeProduct.metadata?.offer_code || "",
      },
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Checkout session failed." },
      { status: 500 }
    );
  }
}
