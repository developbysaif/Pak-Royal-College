import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "submissions");

// Ensure submission data directory exists
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
// ADMISSION APPLICATIONS
// -------------------------------------------------------------
export async function saveAdmissionApplication(applicationData) {
  const applications = readJSONFile("admissions.json", []);
  
  const newApplication = {
    id: applicationData.applicationId || `PRC-2026-${Math.floor(100000 + Math.random() * 900000)}`,
    submittedAt: new Date().toISOString(),
    status: "Pending Review",
    ...applicationData
  };

  applications.unshift(newApplication);
  writeJSONFile("admissions.json", applications);

  return newApplication;
}

export async function getAdmissionApplications() {
  return readJSONFile("admissions.json", []);
}

export async function getAdmissionById(id) {
  const applications = readJSONFile("admissions.json", []);
  return applications.find((app) => app.id.toLowerCase() === id.toLowerCase()) || null;
}

// -------------------------------------------------------------
// CONTACT INQUIRIES
// -------------------------------------------------------------
export async function saveContactMessage(messageData) {
  const messages = readJSONFile("contacts.json", []);

  const newMessage = {
    id: `MSG-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`,
    submittedAt: new Date().toISOString(),
    status: "Unread",
    ...messageData
  };

  messages.unshift(newMessage);
  writeJSONFile("contacts.json", messages);

  return newMessage;
}

export async function getContactMessages() {
  return readJSONFile("contacts.json", []);
}

// -------------------------------------------------------------
// NEWSLETTER SUBSCRIBERS
// -------------------------------------------------------------
export async function saveNewsletterSubscriber(email) {
  const subscribers = readJSONFile("newsletter.json", []);

  const exists = subscribers.some(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );

  if (exists) {
    return { alreadySubscribed: true };
  }

  const newSubscriber = {
    id: `SUB-${Date.now()}`,
    email: email.toLowerCase(),
    subscribedAt: new Date().toISOString()
  };

  subscribers.unshift(newSubscriber);
  writeJSONFile("newsletter.json", subscribers);

  return { success: true, subscriber: newSubscriber };
}
