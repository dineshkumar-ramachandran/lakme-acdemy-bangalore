import { Resend } from "resend";
import { type NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, branch, course, message, to } = body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // you can change this later
      to: "imrankhan.basha@gmail.com", // fallback to client email
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
    });

    console.log("Resend response:", result);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted and email sent",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
