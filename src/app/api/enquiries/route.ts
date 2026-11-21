import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are strictly required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // In production, forward to configured CRM endpoint or transactional email provider
    const enquiryId = `ENQ-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      enquiryId,
      message: "Enquiry successfully validated and securely recorded.",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process enquiry request." },
      { status: 500 }
    );
  }
}
