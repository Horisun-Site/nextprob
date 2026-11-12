/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE GENESIS — site configuration
 * ─────────────────────────────────────────────────────────────────────────────
 *  WhatsApp:
 *    Replace whatsappNumber with your full international number.
 *    Example: "2348012345678"  (country code + number, no +, no spaces)
 *
 *  Logo:
 *    Put your logo file inside /public and point `logo` at it.
 *    Example: /logo.png  or  /genesis-logo.svg
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  name: "The Genesis",
  role: "Full-Stack Developer · Designer · Mentor",
  description:
    "The Genesis is a full-stack developer, computer engineer and digital creator building high-performance websites, brands and learning experiences.",
  logo: "/logo.png",

  // 👉 CHANGE THIS to your WhatsApp number (international format, digits only)
  // Until you replace the Xs, WhatsApp handoff stays disabled.
  whatsappNumber: "2349165297719",

  location: "Nigeria · Available worldwide",
  availability: "Open for projects & mentorship",

  socials: {
    github: "https://github.com/Horisun-Site",
    linkedin: "https://www.linkedin.com/in/oladunjoye-iyanu-0b0740294/",
    instagram: "https://www.instagram.com/horisun4/",
    twitter: "https://x.com/Horisun0",
    facebook: "https://web.facebook.com/scott.emmanuel.230253/followers",
  },
};

export function getWhatsAppNumber() {
  return String(siteConfig.whatsappNumber || "").replace(/\D/g, "");
}

export function isWhatsAppConfigured() {
  return getWhatsAppNumber().length >= 8;
}

export function getWhatsAppLink(message = "") {
  const number = getWhatsAppNumber();
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}
