import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Admission from "@/models/Admission";
import Contact from "@/models/Contact";
import Newsletter from "@/models/Newsletter";

export async function GET() {
  try {
    await connectToDatabase();

    const [admissionsCount, contactsCount, subscribersCount, recentAdmissions] = await Promise.all([
      Admission.countDocuments(),
      Contact.countDocuments(),
      Newsletter.countDocuments(),
      Admission.find({}).sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    return NextResponse.json({
      success: true,
      database: "Connected (MongoDB)",
      stats: {
        admissions: admissionsCount,
        contacts: contactsCount,
        subscribers: subscribersCount,
        totalInquiries: admissionsCount + contactsCount,
      },
      recentAdmissions: recentAdmissions.map((d) => ({
        ...d,
        id: d.applicationId,
        _id: d._id.toString(),
      })),
    });
  } catch (error) {
    console.error("Stats API Error:", error);
    return NextResponse.json(
      {
        success: false,
        database: "Error / Disconnected",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
