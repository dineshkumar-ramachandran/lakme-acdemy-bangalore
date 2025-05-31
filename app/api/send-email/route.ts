import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, branch, course, message } = await req.json();

  // 1. Configure transporter with your SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // or your GoDaddy SMTP
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 2. Prepare the email
  const mailOptions = {
    from: `"Lakme Academy" <${process.env.SMTP_USER}>`,
    to: "imrankhan.basha@gmail.com", // your email to receive enquiries
    subject: "New Enquiry from Lakme Academy",
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Branch:</strong> ${branch}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong> ${message || "No message provided"}</p>
    `,
  };

  // 3. Send the email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
