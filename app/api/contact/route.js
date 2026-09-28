import { NextResponse } from "next/server";
import { saveContactMessage, getContactMessages } from "@/lib/storage";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required."
        },
        { status: 400 }
      );
    }

    const savedRecord = await saveContactMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: body.phone ? body.phone.trim() : "",
      subject: body.subject || "General Admissions Inquiry",
      message: message.trim()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our admissions team will contact you shortly.",
        inquiryId: savedRecord.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error while saving contact message."
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await getContactMessages();
    return NextResponse.json({
      success: true,
      count: messages.length,
      messages
    });
  } catch (error) {
    console.error("Contact GET API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve messages." },
      { status: 500 }
    );
  }
}
