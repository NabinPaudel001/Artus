"use client";

import React, { useState } from "react";

export default function ContactSection() {
  // Company Form State
  const [companyForm, setCompanyForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    position: "",
    designation: "",
    description: "",
  });
  const [companyStatus, setCompanyStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [companyError, setCompanyError] = useState("");

  // Job Seeker Form State
  const [jobSeekerForm, setJobSeekerForm] = useState({
    fullName: "",
    desiredPosition: "",
    email: "",
    phone: "",
    experienceLevel: "",
    intro: "",
  });
  const [jobSeekerStatus, setJobSeekerStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [jobSeekerError, setJobSeekerError] = useState("");

  // CV File Upload
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Handle Company Form input changes
  const handleCompanyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCompanyForm({ ...companyForm, [e.target.name]: e.target.value });
  };

  // Handle Job Seeker Form input changes
  const handleJobSeekerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setJobSeekerForm({ ...jobSeekerForm, [e.target.name]: e.target.value });
  };

  // Handle CV file change
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  // Submit Company Form (JSON)
  const submitCompanyForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCompanyStatus("loading");
    setCompanyError("");

    try {
      const res = await fetch("/api/conscontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "company", ...companyForm }),
      });
      const data = await res.json();

      if (res.ok) {
        setCompanyForm({
          company: "",
          name: "",
          email: "",
          phone: "",
          position: "",
          designation: "",
          description: "",
        });
      } else {
        setCompanyStatus("error");
        setCompanyError(data.message || "Failed to send message");
      }
    } catch {
      setCompanyStatus("error");
      setCompanyError("Network error. Please try again.");
    }
  };

  // Submit Job Seeker Form (FormData with file)
  const submitJobSeekerForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setJobSeekerStatus("loading");
    setJobSeekerError("");

    try {
      const formData = new FormData();
      formData.append("type", "jobseeker");
      formData.append("fullName", jobSeekerForm.fullName);
      formData.append("desiredPosition", jobSeekerForm.desiredPosition);
      formData.append("email", jobSeekerForm.email);
      formData.append("phone", jobSeekerForm.phone);
      formData.append("experienceLevel", jobSeekerForm.experienceLevel);
      formData.append("intro", jobSeekerForm.intro);
      if (cvFile) {
        formData.append("cv", cvFile);
      }

      const res = await fetch("/api/conscontact", {
        method: "POST",
        body: formData, // no Content-Type header, browser sets it automatically for multipart/form-data
      });

      const data = await res.json();

      if (res.ok) {
        setJobSeekerStatus("success");
        setJobSeekerForm({
          fullName: "",
          desiredPosition: "",
          email: "",
          phone: "",
          experienceLevel: "",
          intro: "",
        });
        setCvFile(null);
        // Optionally clear file input here if needed
      } else {
        setJobSeekerStatus("error");
        setJobSeekerError(data.message || "Failed to send message");
      }
    } catch {
      setJobSeekerStatus("error");
      setJobSeekerError("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-28 text-center px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl sm:text-5xl font-bold mb-6 text-[#ef4123] tracking-tight">Get In Touch</h3>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
       Ready to find the perfect Talent for your Organization or looking for better Career
Opportunities. We are here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
         {/* For Companies */}
<div className="bg-white border rounded-2xl p-8 shadow-md">
  <h4 className="text-lg font-semibold text-red-600 mb-2 tracking-wide">
    For Companies
  </h4>
  <p className="text-gray-500 mb-6 text-sm">Request for Service and we will get back to you soon.</p>
  <form className="space-y-4" onSubmit={submitCompanyForm} noValidate>
    {/* Company Name - full width */}
    <input
      type="text"
      placeholder="Company Name"
      className="input-field w-full"
      name="company"
      value={companyForm.company}
      onChange={handleCompanyChange}
      required
    />

    {/* Full Name and Designation side by side */}
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Your Full Name"
        className="input-field w-full"
        name="name"
        value={companyForm.name}
        onChange={handleCompanyChange}
        required
      />
      <input
        type="text"
        placeholder="Designation"
        className="input-field w-full"
        name="designation"
        value={companyForm.designation || ""}
        onChange={handleCompanyChange}
      />
    </div>

    {/* Rest of inputs remain unchanged */}
    <div className="grid grid-cols-2 gap-4">
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        name="email"
        value={companyForm.email}
        onChange={handleCompanyChange}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="input-field"
        name="phone"
        value={companyForm.phone}
        onChange={handleCompanyChange}
      />
    </div>
    <input
      type="text"
      placeholder="Vacant Position e.g. Accounts Manager"
      className="input-field"
      name="position"
      value={companyForm.position}
      onChange={handleCompanyChange}
    />
<textarea
  placeholder="Briefly explain your needs"
  className="input-field h-35 "  // taller textarea + no resize handle
  name="description"
  value={companyForm.description}
  onChange={handleCompanyChange}
/>
    <SubmitButton
      text={companyStatus === "loading" ? "Sending..." : "Ask for Proposal"}
    />
    {companyStatus === "error" && (
      <p className="mt-2 text-sm text-red-500">{companyError}</p>
    )}
    {companyStatus === "success" && (
      <p className="mt-2 text-sm text-green-500">Request sent successfully!</p>
    )}
  </form>
</div>


          {/* For Job Seekers */}
          <div className="bg-[#f8faff] border rounded-2xl p-8 shadow-md">
            <h4 className="text-lg font-semibold text-red-600 mb-2 tracking-wide">
              For Job Seekers
            </h4>
            <p className="text-gray-500 mb-6 text-sm">Submit your CV and you will hear from us soon</p>
            <form className="space-y-4" onSubmit={submitJobSeekerForm} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input-field"
                  name="fullName"
                  value={jobSeekerForm.fullName}
                  onChange={handleJobSeekerChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Current Role"
                  className="input-field"
                  name="desiredPosition"
                  value={jobSeekerForm.desiredPosition}
                  onChange={handleJobSeekerChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  name="email"
                  value={jobSeekerForm.email}
                  onChange={handleJobSeekerChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-field"
                  name="phone"
                  value={jobSeekerForm.phone}
                  onChange={handleJobSeekerChange}
                />
              </div>
              <select
                aria-label="Experience Level"
                className="input-field text-gray-500"
                name="experienceLevel"
                value={jobSeekerForm.experienceLevel}
                onChange={handleJobSeekerChange}
              >
                <option value="">Total Years of Experience</option>
                <option value="0-2 years">0-2 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5+ years">5+ years</option>
                <option value="10+ years">10+ years</option>
                <option value="15+ years">15+ years</option>
              </select>
              <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
                <p className="mb-2 text-gray-500">
                  Drag & drop your CV here or click to browse
                </p>
                <label htmlFor="cv-upload" className="sr-only">
                  Upload your CV
                </label>
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx"
                  className="mx-auto"
                  onChange={handleCvChange}
                  placeholder="Upload your CV"
                  title="Upload your CV"
                />
              </div>
              <textarea
                placeholder="Briefly explain your Profile and the Career you are exploring"
                className="input-field"
                name="intro"
                value={jobSeekerForm.intro}
                onChange={handleJobSeekerChange}
              />
              <SubmitButton
                text={jobSeekerStatus === "loading" ? "Sending..." : "Submit Application"}
              />
              {jobSeekerStatus === "error" && (
                <p className="mt-2 text-sm text-red-500">{jobSeekerError}</p>
              )}
              {jobSeekerStatus === "success" && (
                <p className="mt-2 text-sm text-green-500">Application sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-field {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          outline: none;
        }

        .input-field:focus {
          border-color: #ef4123;
          ring: 0;
        }
      `}</style>
    </section>
  );
}

function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="w-full relative overflow-hidden px-4 py-2 rounded-md text-lg font-semibold text-white bg-[#ef4123] border border-[#ef4123] hover:bg-[#d53c1e] group transition-all duration-300"
    >
      <span className="relative z-10">{text}</span>
      <span
        className="pointer-events-none absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
      ></span>
    </button>
  );
}
