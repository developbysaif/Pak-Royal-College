import { NextResponse } from "next/server";
import { saveNewsletterSubscriber, getNewsletterSubscribers } from "@/lib/storage";

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
        message: "Thank you for subscribing! Your email has been saved to the Pak Royal College database."
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error while subscribing." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscribers = await getNewsletterSubscribers();
    return NextResponse.json({
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    console.error("Newsletter GET API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve subscribers." },
      { status: 500 }
    );
  }
}
