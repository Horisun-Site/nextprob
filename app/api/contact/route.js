export const runtime = "nodejs";
import nodemailer from "nodemailer";


export async function POST(request) {
  console.log("🚀 API route hit");

  const { name, email, message } = await request.json();

  console.log("📩 Request received:", { name, email });

  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_PASS exists:", !!process.env.GMAIL_PASS);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: `New Message From ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    console.log("📤 About to send email...");

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent:", info);

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("❌ Email error:", error);

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// export async function POST(request) {
//   const { name, email, message } = await request.json();

//   console.log("GMAIL_USER:", process.env.GMAIL_USER);
//   console.log("GMAIL_PASS exists:", !!process.env.GMAIL_PASS);

//   // Gmail transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER, // your Gmail
//       pass: process.env.GMAIL_PASS, // your App Password
//     },
//   });

//   const mailOptions = {
//     from: process.env.GMAIL_USER, // Must be your authenticated email
//     replyTo: email, // This is the person who sent the message
//     to: process.env.GMAIL_USER,
//     subject: `New Message From ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//   };

//   try {
//     // Wrap the send in a Promise for Serverless environments
//     await new Promise((resolve, reject) => {
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Nodemailer error:", err);
//           reject(err);
//         } else {
//           resolve(info);
//         }
//       });
//     });

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
