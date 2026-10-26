import fs from "fs";
import path from "path";
import { connectToDatabase } from "./mongodb.js";
import Admission from "../models/Admission.js";
import Contact from "../models/Contact.js";
import Newsletter from "../models/Newsletter.js";

const DATA_DIR = path.join(process.cwd(), "data", "submissions");

function ensureDirectory() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJSONFile(filename, defaultValue = []) {
  ensureDirectory();
  const filePath = path.join(DATA_DIR, filename);
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf8");
      return defaultValue;
    }
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content || "[]");
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return defaultValue;
  }
}

function writeJSONFile(filename, data) {
  ensureDirectory();
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
}

// -------------------------------------------------------------
// ADMISSION APPLICATIONS (MongoDB + JSON Fallback)
// -------------------------------------------------------------
export async function saveAdmissionApplication(applicationData) {
  const generatedId =
    applicationData.applicationId ||
    `PRC-2026-${Math.floor(100000 + Math.random() * 900000)}`;

  // 1. Try Saving to MongoDB
  try {
    await connectToDatabase();
    const docData = {
      ...applicationData,
      applicationId: generatedId,
    };
    const newDoc = await Admission.create(docData);
    console.log(`[MongoDB] Saved Admission application: ${generatedId}`);

    // Mirror to JSON as local backup
    const applications = readJSONFile("admissions.json", []);
    applications.unshift({
      id: generatedId,
      ...applicationData,
      _id: newDoc._id.toString(),
      submittedAt: new Date().toISOString(),
    });
    writeJSONFile("admissions.json", applications);

    return {
      id: newDoc.applicationId,
      _id: newDoc._id.toString(),
      ...newDoc.toObject(),
    };
  } catch (mongoError) {
    console.warn("[MongoDB] Fallback saving to JSON for Admissions:", mongoError.message);
    const applications = readJSONFile("admissions.json", []);
    const newApplication = {
      id: generatedId,
      submittedAt: new Date().toISOString(),
      status: "Pending Review",
      ...applicationData,
    };
    applications.unshift(newApplication);
    writeJSONFile("admissions.json", applications);
    return newApplication;
  }
}

export async function getAdmissionApplications() {
  try {
    await connectToDatabase();
    const docs = await Admission.find({}).sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return docs.map((d) => ({
        ...d,
        id: d.applicationId,
        _id: d._id.toString(),
      }));
    }
  } catch (err) {
    console.warn("[MongoDB] Fallback reading Admissions from JSON:", err.message);
  }
  return readJSONFile("admissions.json", []);
}

export async function getAdmissionById(id) {
  try {
    await connectToDatabase();
    const doc = await Admission.findOne({
      $or: [
        { applicationId: { $regex: new RegExp(`^${id}$`, "i") } },
      ],
    }).lean();
    if (doc) {
      return { ...doc, id: doc.applicationId, _id: doc._id.toString() };
    }
  } catch (err) {
    console.warn("[MongoDB] Fallback finding Admission by ID in JSON:", err.message);
  }
  const applications = readJSONFile("admissions.json", []);
  return applications.find((app) => app.id.toLowerCase() === id.toLowerCase()) || null;
}

// -------------------------------------------------------------
// CONTACT INQUIRIES (MongoDB + JSON Fallback)
// -------------------------------------------------------------
export async function saveContactMessage(messageData) {
  try {
    await connectToDatabase();
    const newDoc = await Contact.create(messageData);
    console.log(`[MongoDB] Saved Contact message from: ${messageData.email}`);

    // Mirror to JSON as local backup
    const messages = readJSONFile("contacts.json", []);
    messages.unshift({
      id: newDoc._id.toString(),
      submittedAt: new Date().toISOString(),
      ...messageData,
    });
    writeJSONFile("contacts.json", messages);

    return {
      id: newDoc._id.toString(),
      ...newDoc.toObject(),
    };
  } catch (mongoError) {
    console.warn("[MongoDB] Fallback saving Contact to JSON:", mongoError.message);
    const messages = readJSONFile("contacts.json", []);
    const newMessage = {
      id: `MSG-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
      submittedAt: new Date().toISOString(),
      status: "Unread",
      ...messageData,
    };
    messages.unshift(newMessage);
    writeJSONFile("contacts.json", messages);
    return newMessage;
  }
}

export async function getContactMessages() {
  try {
    await connectToDatabase();
    const docs = await Contact.find({}).sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return docs.map((d) => ({
        ...d,
        id: d._id.toString(),
        _id: d._id.toString(),
      }));
    }
  } catch (err) {
    console.warn("[MongoDB] Fallback reading Contacts from JSON:", err.message);
  }
  return readJSONFile("contacts.json", []);
}

// -------------------------------------------------------------
// NEWSLETTER SUBSCRIBERS (MongoDB + JSON Fallback)
// -------------------------------------------------------------
export async function saveNewsletterSubscriber(email) {
  const cleanEmail = email.trim().toLowerCase();

  try {
    await connectToDatabase();
    const existing = await Newsletter.findOne({ email: cleanEmail });
    if (existing) {
      return { alreadySubscribed: true };
    }

    const newDoc = await Newsletter.create({ email: cleanEmail });
    console.log(`[MongoDB] Saved Newsletter subscriber: ${cleanEmail}`);

    // Mirror to JSON
    const subscribers = readJSONFile("newsletter.json", []);
    subscribers.unshift({
      id: newDoc._id.toString(),
      email: cleanEmail,
      subscribedAt: new Date().toISOString(),
    });
    writeJSONFile("newsletter.json", subscribers);

    return { success: true, subscriber: newDoc.toObject() };
  } catch (mongoError) {
    console.warn("[MongoDB] Fallback saving Newsletter to JSON:", mongoError.message);
    const subscribers = readJSONFile("newsletter.json", []);
    const exists = subscribers.some(
      (s) => s.email.toLowerCase() === cleanEmail
    );
    if (exists) {
      return { alreadySubscribed: true };
    }
    const newSubscriber = {
      id: `SUB-${Date.now()}`,
      email: cleanEmail,
      subscribedAt: new Date().toISOString(),
    };
    subscribers.unshift(newSubscriber);
    writeJSONFile("newsletter.json", subscribers);
    return { success: true, subscriber: newSubscriber };
  }
}

export async function getNewsletterSubscribers() {
  try {
    await connectToDatabase();
    const docs = await Newsletter.find({}).sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return docs.map((d) => ({
        ...d,
        id: d._id.toString(),
      }));
    }
  } catch (err) {
    console.warn("[MongoDB] Fallback reading Newsletter from JSON:", err.message);
  }
  return readJSONFile("newsletter.json", []);
}
