import { NextResponse } from "next/server";
import { saveNewsletterSubscriber } from "@/lib/storage";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const result = await saveNewsletterSubscriber(email);

    if (result.alreadySubscribed) {
      return NextResponse.json(
        { success: true, message: "You are already subscribed to Pak Royal College announcements." },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to Pak Royal College admissions and campus updates."
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error while subscribing." },
      { status: 500 }
    );
  }
}
