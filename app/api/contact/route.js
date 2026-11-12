export const runtime = "nodejs";

import { emailShell, sendOwnerMail } from "@/lib/mailer";

function clean(value, maxLength = 4000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120).replace(/[\r\n]+/g, " ");
    const email = clean(body.email, 200);
    const message = clean(body.message, 4000);

    if (!name || !email || !isValidEmail(email) || !message) {
      return Response.json(
        { success: false, error: "A valid name, email and message are required." },
        { status: 400 }
      );
    }

    const subject = `💬 New message from ${name}`;

    const text = [
      "NEW CONTACT MESSAGE — THE GENESIS",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      "Sent from the contact page.",
    ].join("\n");

    const html = emailShell({
      kicker: "THE GENESIS // CONTACT",
      title: "New contact message",
      intro: `${name} sent you a message from your portfolio.`,
      rows: [
        ["Name", name],
        ["Email", email],
      ],
      message,
    });

    await sendOwnerMail({
      subject,
      text,
      html,
      replyTo: email,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message || "Could not send the message.",
      },
      { status: 500 }
    );
  }
}
