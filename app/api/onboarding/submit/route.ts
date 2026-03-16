import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload?.email || !payload?.companyName || !payload?.lookupKey) {
      return NextResponse.json(
        { error: "Missing required onboarding fields." },
        { status: 400 }
      );
    }

    if (process.env.N8N_ONBOARDING_WEBHOOK_URL) {
      await fetch(process.env.N8N_ONBOARDING_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Onboarding submission failed." },
      { status: 500 }
    );
  }
}
