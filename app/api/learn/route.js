export const runtime = "nodejs";

import { emailShell, sendOwnerMail } from "@/lib/mailer";

function clean(value, maxLength = 2000) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 60);
    const experience = clean(body.experience, 80);
    const goal = String(body.goal ?? "").trim().slice(0, 2000);
    const topics = Array.isArray(body.topics) ? body.topics : [];

    if (!name || !email || !isValidEmail(email)) {
      return Response.json(
        { success: false, error: "A valid name and email are required." },
        { status: 400 }
      );
    }

    if (!topics.length) {
      return Response.json(
        { success: false, error: "Choose at least one learning track." },
        { status: 400 }
      );
    }

    const cleanTopics = topics.slice(0, 20).map((topic) => ({
      title: clean(topic?.title, 160),
      category: clean(topic?.category, 60),
      level: clean(topic?.level, 60),
      duration: clean(topic?.duration, 60),
    }));

    const trackList = cleanTopics
      .map(
        (topic) =>
          `- ${topic.title} (${topic.category} · ${topic.level} · ${topic.duration})`
      )
      .join("\n");

    const subject = `🎓 Learning request: ${cleanTopics
      .map((topic) => topic.title)
      .join(", ")
      .slice(0, 180)} — ${name}`;

    const text = [
      "NEW LEARNING REQUEST — THE GENESIS",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${phone || "not provided"}`,
      `Experience: ${experience || "not provided"}`,
      "",
      "Tracks:",
      trackList,
      "",
      "Goal:",
      goal || "not provided",
      "",
      "Sent from the /learn page.",
    ].join("\n");

    const html = emailShell({
      kicker: "THE GENESIS // LEARN",
      title: "New learning request",
      intro: `${name} wants to learn with you. Reply directly to this email to reach them.`,
      rows: [
        ["Name", name],
        ["Email", email],
        ["WhatsApp", phone || "not provided"],
        ["Experience", experience || "not provided"],
        [
          "Tracks",
          cleanTopics
            .map(
              (topic) =>
                `${topic.title} — ${topic.level} · ${topic.duration}`
            )
            .join("  •  "),
        ],
      ],
      message: goal || "No goal provided.",
    });

    await sendOwnerMail({
      subject,
      text,
      html,
      replyTo: email,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("LEARN EMAIL ERROR:", error);

    return Response.json(
      {
        success: false,
        error: error.message || "Could not send the learning request.",
      },
      { status: 500 }
    );
  }
}
