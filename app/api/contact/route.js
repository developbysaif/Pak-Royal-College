import { NextResponse } from "next/server";
import { saveContactMessage, getContactMessages } from "@/lib/storage";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/models/Contact";

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
      subject: body.subject ? body.subject.trim() : "General Admissions Inquiry",
      message: message.trim()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received and saved to MongoDB. Our admissions team will contact you shortly.",
        inquiryId: savedRecord.id || savedRecord._id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error while saving contact message."
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

export async function PATCH(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "Inquiry ID and status are required." },
        { status: 400 }
      );
    }

    const updated = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Contact inquiry status updated successfully",
      contact: updated
    });
  } catch (error) {
    console.error("Contact PATCH Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update contact inquiry." },
      { status: 500 }
    );
  }
}
