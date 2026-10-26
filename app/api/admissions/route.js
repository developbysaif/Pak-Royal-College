import { NextResponse } from "next/server";
import {
  saveAdmissionApplication,
  getAdmissionApplications,
  getAdmissionById
} from "@/lib/storage";
import { connectToDatabase } from "@/lib/mongodb";
import Admission from "@/models/Admission";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    const { fullName, fatherName, cnic, phone, email, selectedProgram } = body;

    if (!fullName || !fatherName || !cnic || !phone || !email || !selectedProgram) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields. Full name, father name, CNIC, phone, email, and program are mandatory."
        },
        { status: 400 }
      );
    }

    // Generate unique application tracking ID
    const generatedId = `PRC-2026-${Math.floor(100000 + Math.random() * 900000)}`;

    const applicationRecord = await saveAdmissionApplication({
      applicationId: generatedId,
      fullName: fullName.trim(),
      fatherName: fatherName.trim(),
      dob: body.dob || "",
      gender: body.gender || "Male",
      cnic: cnic.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      address: body.address ? body.address.trim() : "",
      city: body.city || "Lahore",
      lastDegree: body.lastDegree || "Intermediate",
      institution: body.institution ? body.institution.trim() : "",
      board: body.board || "BISE Lahore",
      passingYear: body.passingYear || "2026",
      totalMarks: body.totalMarks || "1100",
      obtainedMarks: body.obtainedMarks || "",
      percentage: body.percentage || "",
      programType: body.programType || "bs",
      selectedProgram: selectedProgram,
      studyShift: body.studyShift || "Morning",
      scholarshipCategory: body.scholarshipCategory || "None",
      documentsStatus: {
        photoUploaded: body.photoUploaded ?? true,
        cnicUploaded: body.cnicUploaded ?? true,
        transcriptUploaded: body.academicTranscriptUploaded ?? true
      },
      termsAgreed: body.termsAgreed ?? true
    });

    return NextResponse.json(
      {
        success: true,
        message: "Admission application submitted successfully to MongoDB database.",
        applicationId: applicationRecord.applicationId || applicationRecord.id,
        data: applicationRecord
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admissions API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal server error while processing admission application."
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const application = await getAdmissionById(id);
      if (!application) {
        return NextResponse.json(
          { success: false, error: "Application record not found." },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, application });
    }

    const applications = await getAdmissionApplications();
    return NextResponse.json({
      success: true,
      count: applications.length,
      applications
    });
  } catch (error) {
    console.error("Admissions GET API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve admissions data." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { applicationId, status, adminNotes } = body;

    if (!applicationId) {
      return NextResponse.json(
        { success: false, error: "Application ID is required" },
        { status: 400 }
      );
    }

    const updated = await Admission.findOneAndUpdate(
      { applicationId },
      { ...(status && { status }), ...(adminNotes !== undefined && { adminNotes }) },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application status updated successfully",
      application: updated
    });
  } catch (error) {
    console.error("Admissions PATCH Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update application" },
      { status: 500 }
    );
  }
}
