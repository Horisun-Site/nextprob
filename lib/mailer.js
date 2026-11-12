import nodemailer from "nodemailer";

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function getMailConfig() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_PASS?.trim();

  if (!user || !pass) {
    throw new Error(
      "Email is not configured. Add GMAIL_USER and GMAIL_PASS to your .env file."
    );
  }

  return { user, pass };
}

export async function sendOwnerMail({ subject, text, html, replyTo }) {
  const { user, pass } = getMailConfig();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  return transporter.sendMail({
    from: `"The Genesis Website" <${user}>`,
    to: user,
    replyTo,
    subject,
    text,
    html,
  });
}

export function emailShell({ kicker = "THE GENESIS", title, intro, rows = [], message }) {
  const rowMarkup = rows
    .filter((row) => row?.[1])
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #1e293b;color:#7dd3fc;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;vertical-align:top;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #1e293b;color:#e2e8f0;font-size:15px;line-height:1.6;">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");

  const messageMarkup = message
    ? `<div style="margin-top:24px;padding:18px;border:1px solid #1e293b;border-radius:12px;background:#020617;">
         <p style="margin:0 0 8px;color:#4ade80;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;letter-spacing:.12em;">// MESSAGE</p>
         <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
           message
         )}</p>
       </div>`
    : "";

  return `
  <div style="margin:0;padding:32px 12px;background:#020617;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;border:1px solid #164e63;border-radius:18px;overflow:hidden;background:#0b1120;">
      <div style="padding:22px 24px;background:linear-gradient(135deg,#083344,#0b1120 60%,#1e1b4b);border-bottom:1px solid #164e63;">
        <p style="margin:0 0 6px;color:#67e8f9;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;letter-spacing:.2em;">${escapeHtml(
          kicker
        )}</p>
        <h1 style="margin:0;color:#f8fafc;font-size:26px;line-height:1.25;">${escapeHtml(title)}</h1>
        <p style="margin:10px 0 0;color:#94a3b8;font-size:14px;">${escapeHtml(intro)}</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;border:1px solid #1e293b;border-radius:12px;overflow:hidden;">${rowMarkup}</table>
        ${messageMarkup}
        <p style="margin:24px 0 0;color:#64748b;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;">
          $ echo "sent from the genesis website"
        </p>
      </div>
    </div>
  </div>`;
}
