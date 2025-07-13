import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import stream from "stream";
import nodemailer from "nodemailer";

// Disable Next.js automatic body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

function parseFormData(request: Request) {
  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(async (resolve, reject) => {
    const form = formidable({ multiples: false });

    // Read raw body as buffer
    const buffer = Buffer.from(await request.arrayBuffer());

    // Create a Node.js readable stream from the buffer
    const readable = new stream.Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });

    // Add headers property to the stream so formidable can access them
    (readable as any).headers = {
      "content-type": request.headers.get("content-type") || "",
      "content-length": buffer.length.toString(),
    };

    form.parse(readable as any, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

export async function POST(request: Request) {
  try {
    const { fields, files } = await parseFormData(request);

    const type = Array.isArray(fields.type) ? fields.type[0] : fields.type;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    if (type === "company") {
      const { company, name, email, phone, position, description } = fields;

      if (!name || !email) {
        return NextResponse.json(
          { success: false, message: "Name and email are required." },
          { status: 400 }
        );
      }

      const text = `
New Hiring Request:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Position: ${position || "N/A"}
Description: ${description || "N/A"}
      `;

      await transporter.sendMail({
        from: `"Contact Form Submission" <${process.env.GMAIL_USER}>`,
        to: "nabin.211523@ncit.edu.np",
        subject: "New Hiring Request",
        text,
      });

      return NextResponse.json({ success: true, message: "Request sent successfully." });
    }

    if (type === "jobseeker") {
      const { fullName, desiredPosition, email, phone, experienceLevel, intro } = fields;

      if (!fullName || !email) {
        return NextResponse.json(
          { success: false, message: "Full name and email are required." },
          { status: 400 }
        );
      }

      const attachments = [];
      if (files.cv) {
        const file = Array.isArray(files.cv) ? files.cv[0] : files.cv;
        const buffer = fs.readFileSync(file.filepath);
        attachments.push({
          filename: file.originalFilename || "cv.pdf",
          content: buffer,
        });
      }

      const text = `
New Job Application:

Full Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Desired Position: ${desiredPosition || "N/A"}
Experience Level: ${experienceLevel || "N/A"}
Intro: ${intro || "N/A"}
      `;

      await transporter.sendMail({
        from: `"Contact Form Application" <${process.env.GMAIL_USER}>`,
        to: "nabin.211523@ncit.edu.np",
        subject: "New Job Application",
        text,
        attachments,
      });

      return NextResponse.json({ success: true, message: "Application sent successfully." });
    }

    return NextResponse.json(
      { success: false, message: "Invalid request type." },
      { status: 400 }
    );
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
