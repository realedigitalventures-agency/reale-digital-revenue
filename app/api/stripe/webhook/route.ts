import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(request: Request) {
  const body = await request.text();
  const headerStore = await headers();
  const signature = headerStore.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Webhook signature verification failed";
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (process.env.N8N_WEBHOOK_URL) {
          await fetch(process.env.N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              eventType: event.type,
              sessionId: session.id,
              customerEmail:
                session.customer_details?.email || session.customer_email || "",
              customerId: session.customer || "",
              amountTotal: session.amount_total || 0,
              currency: session.currency || "usd",
              lookupKey: session.metadata?.lookup_key || "",
              subscriptionId: session.subscription || "",
            }),
          });
        }
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;

        if (process.env.N8N_WEBHOOK_URL) {
          await fetch(process.env.N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              eventType: event.type,
              invoiceId: invoice.id,
              customerId: invoice.customer || "",
              subscriptionId: invoice.parent?.subscription_details?.subscription || "",
              amountPaid: invoice.amount_paid,
              currency: invoice.currency,
            }),
          });
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        if (process.env.N8N_WEBHOOK_URL) {
          await fetch(process.env.N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              eventType: event.type,
              subscriptionId: subscription.id,
              customerId: subscription.customer || "",
              status: subscription.status,
            }),
          });
        }
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Webhook handler failed";
    return new NextResponse(`Webhook Handler Error: ${message}`, { status: 500 });
  }
}
