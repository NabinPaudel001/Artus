"use client"; // mark as client component since it uses React hooks

import React, { useState } from "react";
import ImageFallback from "@/helpers/ImageFallback";
import { RegularPage } from "@/types";

type ContactFormSectionProps = {
  contact_form: RegularPage["frontmatter"]["contact_form"];
};

const ContactFormSection = ({ }: ContactFormSectionProps) => {
  // Your form state and handlers here (same as before)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Application",
    budget: "under100k",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/syscontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "Application",
          budget: "under100k",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="section">
      <div className="container relative">
        <div className="row gy-5 items-start" data-aos="fade-left-sm">
          {/* Left Column: Title and Contact Info */}
        <div className="lg:col-5">
  <h2 className="has-gradient mb-8">Get in touch with any<br />general query.</h2>

  <div className="flex flex-col gap-6 md:gap-8">
    {/* First contact item: Give us a call */}
    <div className="flex gap-4 items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-b from-white/10 to-slate-800/25">
        {/* Replace with actual icon URL or component */}
        <ImageFallback
          className="h-5 w-5"
          src="/images/icons/svg/phone.svg"
          alt="icon related to Give us a call"
          width={28}
          height={28}
        />
      </div>
      <div>
        <h3 className="tracking-none mb-2 text-lg/none">Give us a call</h3>
        <p className="text-lg/none opacity-70">+977 01-5409310/01-5454425</p>
      </div>
    </div>

    {/* Second contact item: Email */}
    <div className="flex gap-4 items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-b from-white/10 to-slate-800/25">
        {/* Replace with actual icon URL or component */}
        <ImageFallback
          className="h-5 w-5"
          src="/images/icons/svg/email.svg"
          alt="icon related to Email"
          width={28}
          height={28}
        />
      </div>
      <div>
        <h3 className="tracking-none mb-2 text-lg/none">Email</h3>
        <a className="text-lg/none opacity-70" href="mailto:info@artus.com.np">info@artus.com.np</a>
      </div>
    </div>
  </div>
</div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-7 lg:ps-16" data-aos-delay="200">
            <div className="rounded-2xl border border-white/5 bg-dark p-5 md:p-16">
              <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input w-full"
                    required
                    type="text"
                    placeholder="YOUR NAME*"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input w-full"
                    required
                    type="email"
                    placeholder="YOUR EMAIL*"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    Your Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="form-input w-full"
                    type="text"
                    placeholder="COMPANY NAME"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="form-label">
                    Choose a service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="form-input w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Application" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10">APPLICATION DESIGN</option>
                    <option value="web" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10 uppercase">Web Development</option>
                    <option value="mobile" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10 uppercase">Mobile App Development</option>
                    <option value="uiux" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10 uppercase">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="form-label">
                    What is your estimate budget?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-input w-full"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="under100k" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10">Under 100k</option>
                    <option value="under500k" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10">Under 500K</option>
                    <option value="500kplus" className="w-full bg-dark text-white dark:bg-dark dark:text-white border border-white/10">500K+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Describe Your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input w-full"
                    rows={4}
                    placeholder="WRITE HERE"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full border-border text-white"
                    disabled={status === "loading"}
                  >
                    <span className="value">
                      <span data-content="Send Message">
                        {status === "loading" ? "Sending..." : "Send Message"}
                      </span>
                    </span>
                  </button>
                </div>

                {status === "error" && (
                  <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
                )}
                {status === "success" && (
                  <p className="mt-2 text-sm text-green-500">
                    Message sent successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-14 right-[15%] -z-10 h-[358px] w-[816px] rotate-[-19deg] rounded-full from-secondary/40 from-40% via-secondary via-60% to-primary opacity-20 blur-[100px] bg-gradient-to-tr lg:opacity-40"
        />
      </div>
    </section>
  );
};

export default ContactFormSection;
