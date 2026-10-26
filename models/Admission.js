import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    applicationId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    // Personal Details
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    fatherName: {
      type: String,
      required: [true, "Father name is required"],
      trim: true,
    },
    dob: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },
    cnic: {
      type: String,
      required: [true, "CNIC or B-Form number is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      lowercase: true,
      trim: true,
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    city: {
      type: String,
      default: "Lahore",
      trim: true,
    },

    // Academic History
    lastDegree: {
      type: String,
      default: "Intermediate",
    },
    institution: {
      type: String,
      default: "",
      trim: true,
    },
    board: {
      type: String,
      default: "BISE Lahore",
    },
    passingYear: {
      type: String,
      default: "2026",
    },
    totalMarks: {
      type: String,
      default: "1100",
    },
    obtainedMarks: {
      type: String,
      default: "",
    },
    percentage: {
      type: String,
      default: "",
    },

    // Program Choice
    programType: {
      type: String,
      default: "bs",
    },
    selectedProgram: {
      type: String,
      required: [true, "Target academic program is required"],
    },
    studyShift: {
      type: String,
      enum: ["Morning", "Evening"],
      default: "Morning",
    },
    scholarshipCategory: {
      type: String,
      default: "None",
    },

    // Upload Checklist
    documentsStatus: {
      photoUploaded: { type: Boolean, default: true },
      cnicUploaded: { type: Boolean, default: true },
      transcriptUploaded: { type: Boolean, default: true },
    },

    // Declaration & Workflow
    termsAgreed: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["Pending Review", "Under Review", "Interview Scheduled", "Accepted", "Rejected"],
      default: "Pending Review",
    },
    adminNotes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);
