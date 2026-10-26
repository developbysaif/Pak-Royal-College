"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  MessageSquare,
  Mail,
  Database,
  Search,
  RefreshCw,
  CheckCircle2,
  Clock,
  User,
  Phone,
  FileText,
  Filter,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Eye,
  X
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("admissions");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ admissions: 0, contacts: 0, subscribers: 0 });
  const [admissions, setAdmissions] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, admRes, contRes, newsRes] = await Promise.all([
        fetch("/api/stats").then((r) => r.json()).catch(() => ({ stats: {} })),
        fetch("/api/admissions").then((r) => r.json()).catch(() => ({ applications: [] })),
        fetch("/api/contact").then((r) => r.json()).catch(() => ({ messages: [] })),
        fetch("/api/newsletter").then((r) => r.json()).catch(() => ({ subscribers: [] })),
      ]);

      if (statsRes.success) {
        setStats(statsRes.stats || { admissions: 0, contacts: 0, subscribers: 0 });
      }
      setAdmissions(admRes.applications || []);
      setContacts(contRes.messages || []);
      setSubscribers(newsRes.subscribers || []);
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateAdmissionStatus = async (applicationId, newStatus) => {
    setActionLoading(true);
    try {
      const res = await fetch("/api/admissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setAdmissions((prev) =>
          prev.map((app) =>
            (app.applicationId === applicationId || app.id === applicationId)
              ? { ...app, status: newStatus }
              : app
          )
        );
        if (selectedAdmission && (selectedAdmission.applicationId === applicationId || selectedAdmission.id === applicationId)) {
          setSelectedAdmission((prev) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setActionLoading(false);
    }
  };

  const updateContactStatus = async (id, newStatus) => {
    setActionLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setContacts((prev) =>
          prev.map((c) => (c._id === id || c.id === id ? { ...c, status: newStatus } : c))
        );
        if (selectedContact && (selectedContact._id === id || selectedContact.id === id)) {
          setSelectedContact((prev) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error("Contact update failed:", err);
    } finally {
      setActionLoading(false);
    }
  };

  // Filter Admissions
  const filteredAdmissions = admissions.filter((app) => {
    const matchesSearch =
      (app.fullName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.cnic || "").includes(searchTerm) ||
      (app.applicationId || app.id || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.phone || "").includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" ? true : (app.status || "Pending Review").toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Filter Contacts
  const filteredContacts = contacts.filter((c) => {
    return (
      (c.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.subject || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.phone || "").includes(searchTerm)
    );
  });

  // Filter Subscribers
  const filteredSubscribers = subscribers.filter((s) => {
    return (s.email || "").toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-prc-dark text-white border-b border-white/10 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-prc-primary/40 border border-white/20 flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">Pak Royal College — Admin Portal</h1>
              <p className="text-xs text-blue-200">MongoDB Submissions & Admissions Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>MongoDB Connected</span>
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-xl border border-white/10 transition font-medium cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              className="text-xs text-slate-300 hover:text-white underline underline-offset-4 flex items-center gap-1"
            >
              <span>View Website</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admission Forms</p>
              <p className="text-3xl font-black text-prc-navy mt-1">{admissions.length}</p>
              <p className="text-xs text-emerald-600 mt-1 font-medium">Stored in MongoDB</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-prc-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Inquiries</p>
              <p className="text-3xl font-black text-prc-navy mt-1">{contacts.length}</p>
              <p className="text-xs text-blue-600 mt-1 font-medium">Messages received</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Newsletter Subscribers</p>
              <p className="text-3xl font-black text-prc-navy mt-1">{subscribers.length}</p>
              <p className="text-xs text-purple-600 mt-1 font-medium">Active emails</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Database Status</p>
              <p className="text-lg font-bold text-slate-800 mt-1">pak_royal_college</p>
              <p className="text-xs text-emerald-600 mt-1 font-medium">MongoDB 127.0.0.1:27017</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation & Search */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => { setActiveTab("admissions"); setSearchTerm(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "admissions"
                  ? "bg-prc-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admissions ({admissions.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab("contacts"); setSearchTerm(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "contacts"
                  ? "bg-prc-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Inquiries ({contacts.length})</span>
            </button>

            <button
              onClick={() => { setActiveTab("subscribers"); setSearchTerm(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "subscribers"
                  ? "bg-prc-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Newsletter ({subscribers.length})</span>
            </button>
          </div>

          {/* Search Input & Status Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {activeTab === "admissions" && (
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-prc-primary/20"
              >
                <option value="all">All Statuses</option>
                <option value="Pending Review">Pending Review</option>
                <option value="Under Review">Under Review</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            )}

            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, CNIC, email..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-prc-primary/20"
              />
            </div>
          </div>
        </div>

        {/* TAB 1: ADMISSIONS */}
        {activeTab === "admissions" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-prc-primary" />
                <span>Admission Applications</span>
              </h2>
              <span className="text-xs text-slate-400 font-medium">
                Showing {filteredAdmissions.length} of {admissions.length}
              </span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 text-sm">Loading applications from MongoDB...</div>
            ) : filteredAdmissions.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <p className="text-base font-semibold text-slate-600">No applications found</p>
                <p className="text-xs text-slate-400">Applications submitted from the /apply form will appear here in real-time.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Tracking ID</th>
                      <th className="px-4 py-3">Applicant Name</th>
                      <th className="px-4 py-3">CNIC & Phone</th>
                      <th className="px-4 py-3">Selected Program</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Submitted</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAdmissions.map((app) => (
                      <tr key={app.id || app.applicationId || app._id} className="hover:bg-slate-50/70 transition">
                        <td className="px-4 py-3.5 font-mono font-bold text-prc-primary whitespace-nowrap">
                          {app.applicationId || app.id}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="font-bold text-slate-800">{app.fullName}</div>
                          <div className="text-slate-400 text-[11px]">S/D of {app.fatherName}</div>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <div className="font-medium text-slate-700">{app.cnic}</div>
                          <div className="text-slate-400 text-[11px]">{app.phone}</div>
                        </td>
                        <td className="px-4 py-3.5 max-w-xs truncate">
                          <span className="font-semibold text-slate-800 uppercase text-[11px] bg-slate-100 px-2 py-0.5 rounded">
                            {app.selectedProgram}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              app.status === "Accepted"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : app.status === "Rejected"
                                ? "bg-rose-100 text-rose-800 border border-rose-300"
                                : app.status === "Under Review"
                                ? "bg-blue-100 text-blue-800 border border-blue-300"
                                : "bg-amber-100 text-amber-800 border border-amber-300"
                            }`}
                          >
                            {app.status || "Pending Review"}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">
                          {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : app.submittedAt ? new Date(app.submittedAt).toLocaleDateString() : "Just now"}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            onClick={() => setSelectedAdmission(app)}
                            className="bg-prc-navy hover:bg-prc-dark text-white px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CONTACT INQUIRIES */}
        {activeTab === "contacts" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                <span>Contact Messages & Inquiries</span>
              </h2>
              <span className="text-xs text-slate-400 font-medium">
                Showing {filteredContacts.length} of {contacts.length}
              </span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 text-sm">Loading messages from MongoDB...</div>
            ) : filteredContacts.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <p className="text-base font-semibold text-slate-600">No contact messages yet</p>
                <p className="text-xs text-slate-400">Messages sent via the Contact page form will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Sender Name</th>
                      <th className="px-4 py-3">Email & Phone</th>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Message Preview</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredContacts.map((c) => (
                      <tr key={c._id || c.id} className="hover:bg-slate-50/70 transition">
                        <td className="px-4 py-3.5 font-bold text-slate-800 whitespace-nowrap">
                          {c.name}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <div className="font-medium text-slate-700">{c.email}</div>
                          <div className="text-slate-400 text-[11px]">{c.phone || "No phone"}</div>
                        </td>
                        <td className="px-4 py-3.5 font-semibold text-prc-navy whitespace-nowrap">
                          {c.subject || "Admissions Inquiry"}
                        </td>
                        <td className="px-4 py-3.5 max-w-sm truncate text-slate-600">
                          {c.message}
                        </td>
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              c.status === "Responded"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : c.status === "Read"
                                ? "bg-blue-100 text-blue-800 border border-blue-300"
                                : "bg-amber-100 text-amber-800 border border-amber-300"
                            }`}
                          >
                            {c.status || "Unread"}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">
                          {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : c.submittedAt ? new Date(c.submittedAt).toLocaleDateString() : "Just now"}
                        </td>
                        <td className="px-4 py-3.5 text-right">
                          <button
                            onClick={() => setSelectedContact(c)}
                            className="bg-prc-navy hover:bg-prc-dark text-white px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: NEWSLETTER SUBSCRIBERS */}
        {activeTab === "subscribers" && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-600" />
                <span>Newsletter Subscribers</span>
              </h2>
              <span className="text-xs text-slate-400 font-medium">
                Total Subscribers: {filteredSubscribers.length}
              </span>
            </div>

            {loading ? (
              <div className="p-12 text-center text-slate-400 text-sm">Loading subscribers from MongoDB...</div>
            ) : filteredSubscribers.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <p className="text-base font-semibold text-slate-600">No subscribers yet</p>
                <p className="text-xs text-slate-400">Emails submitted through footer subscription will be stored here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Subscriber Email</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredSubscribers.map((s, idx) => (
                      <tr key={s._id || s.id || idx} className="hover:bg-slate-50/70 transition">
                        <td className="px-4 py-3 font-mono text-slate-400">{idx + 1}</td>
                        <td className="px-4 py-3 font-bold text-slate-800">{s.email}</td>
                        <td className="px-4 py-3">
                          <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[11px]">
                            {s.status || "Active"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500">
                          {s.createdAt ? new Date(s.createdAt).toLocaleDateString() : s.subscribedAt ? new Date(s.subscribedAt).toLocaleDateString() : "Active"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ADMISSION DETAIL MODAL */}
      {selectedAdmission && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-prc-primary uppercase tracking-wider">
                  {selectedAdmission.applicationId || selectedAdmission.id}
                </span>
                <h3 className="text-xl font-extrabold text-slate-800">{selectedAdmission.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedAdmission(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Father / Guardian</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.fatherName}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">CNIC / B-Form</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.cnic}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Phone Number</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.phone}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Email Address</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.email}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Selected Program</span>
                <p className="font-bold text-prc-navy text-sm uppercase">{selectedAdmission.selectedProgram}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Shift & Category</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.studyShift || "Morning"} (Scholarship: {selectedAdmission.scholarshipCategory || "None"})</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Marks Obtained</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.obtainedMarks || "N/A"} / {selectedAdmission.totalMarks || "1100"}</p>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Previous Institution</span>
                <p className="font-bold text-slate-800 text-sm">{selectedAdmission.institution || "BISE Lahore"}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
              <span className="text-slate-400 font-semibold uppercase text-[10px]">Residential Address</span>
              <p className="font-medium text-slate-700 mt-0.5">{selectedAdmission.address || "N/A"}, {selectedAdmission.city || "Lahore"}</p>
            </div>

            {/* Change Status */}
            <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600">Update Status:</span>
                {["Pending Review", "Under Review", "Accepted", "Rejected"].map((st) => (
                  <button
                    key={st}
                    disabled={actionLoading}
                    onClick={() => updateAdmissionStatus(selectedAdmission.applicationId || selectedAdmission.id, st)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-semibold cursor-pointer border transition ${
                      selectedAdmission.status === st
                        ? "bg-prc-navy text-white border-prc-navy"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedAdmission(null)}
                className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT DETAIL MODAL */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Contact Inquiry
                </span>
                <h3 className="text-xl font-extrabold text-slate-800">{selectedContact.name}</h3>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400">Email:</span>
                <span className="font-bold text-slate-800">{selectedContact.email}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400">Phone:</span>
                <span className="font-bold text-slate-800">{selectedContact.phone || "Not provided"}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400">Subject:</span>
                <span className="font-bold text-prc-navy">{selectedContact.subject}</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">Message</span>
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {["Unread", "Read", "Responded"].map((st) => (
                  <button
                    key={st}
                    disabled={actionLoading}
                    onClick={() => updateContactStatus(selectedContact._id || selectedContact.id, st)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-semibold cursor-pointer border transition ${
                      selectedContact.status === st
                        ? "bg-prc-navy text-white border-prc-navy"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSelectedContact(null)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
