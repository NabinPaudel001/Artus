import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      company = "",
      service = "",
      budget = "",
      message = "",
    } = body;

    // Trim whitespace and validate required fields
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedService = service.trim();
    const trimmedBudget = budget.trim();


    if (!trimmedName || !trimmedEmail || !trimmedService || !trimmedBudget) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});


    // Format email body
    const mailText = `
      📩 New SYSTEM Contact Form Submission

      Name: ${trimmedName}
      Email: ${trimmedEmail}
      Company: ${company.trim() || "N/A"}
      Service: ${trimmedService}
      Budget: ${trimmedBudget}
      Message: ${message.trim() || "N/A"}
    `;

    await transporter.sendMail({
      from: `"SYSTEM Contact" <paudelnabin41@gmail.com>`,
      to: "nabin.211523@ncit.edu.np", // or any destination email
      subject: "New Contact Form Submission - SYSTEM",
      text: mailText,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Email send failed:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
