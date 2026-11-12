# The Genesis — Portfolio & Learning Hub

A code-interface portfolio for **The Genesis** — full-stack developer, designer and mentor.

Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, Nodemailer and Lucide icons.

---

## Quick setup

### 1. Brand name

The name is stored in one place:

```js
// lib/site.js
export const siteConfig = {
  name: "The Genesis",
  ...
};
```

It is used in the navbar, footer, page metadata and the learning flow.

### 2. Add your logo

A temporary `G` logo is included so the navbar does not look empty. Replace it
with your own file:

1. Overwrite the placeholder at:

   ```
   public/logo.png
   ```

   A square PNG works best (512 × 512 or larger). Transparent or dark
   backgrounds both work well.

2. The navbar already renders it **immediately after the name**:

   ```
   ~/The Genesis [your logo]
   ```

3. If you use a different filename or an SVG, update:

   ```js
   // lib/site.js
   logo: "/logo.png",        // ← change this path
   ```

4. If the image ever fails to load, the navbar shows a small `</>` code mark
   as a fallback.

5. Optional: replace `app/favicon.ico` with your logo, or add `app/icon.png`.

6. The old `public/timperfect.png` logo is no longer referenced anywhere and
   can be deleted.

### 3. Set your WhatsApp number

Open `lib/site.js` and replace the placeholder:

```js
whatsappNumber: "234XXXXXXXXXX",
```

Use the full international format with **digits only** — no `+`, no spaces.

Example: `2348012345678`.

Until this is set, the WhatsApp handoff stays disabled and the Learn form will
show a small setup notice. Email sending still works.

### 4. Connect email

Create or edit `.env` in the project root:

```env
GMAIL_USER=your-address@gmail.com
GMAIL_PASS=your-16-character-google-app-password
```

`GMAIL_PASS` must be a **Google App Password**, not your normal Gmail password.

Both contact messages and Learn requests are sent to `GMAIL_USER` through
[Nodemailer](https://nodemailer.com/).

### 5. Run the project

```bash
npm run dev
```

Build check:

```bash
npm run build
```

---

## Learn with me flow

The `/learn` page lets visitors:

1. Filter and select one or more learning tracks.
2. Add their name, email, WhatsApp number, experience level and goal.
3. Press **Send to WhatsApp + Email**.

What happens:

- The request is **emailed to you immediately** via `app/api/learn/route.js`.
- WhatsApp opens in a new tab with the full request pre-filled.
  The visitor presses send in WhatsApp — browsers cannot send WhatsApp messages
  silently without the WhatsApp Business API.
- The form gracefully handles blocked popups by giving a fallback WhatsApp link.

### Edit the learning tracks

All tracks live in:

```
lib/learning.js
```

Each track has:

```js
{
  id: "react-nextjs",
  title: "React & Next.js Engineering",
  category: "Frontend",
  level: "Intermediate",
  duration: "6 weeks",
  icon: "Atom",
  blurb: "...",
  outcome: "...",
}
```

Available icon keys: `Atom`, `Code2`, `Cpu`, `Database`, `Globe`, `Layers`,
`Mail`, `PenTool`, `Rocket`, `Search`, `Server`, `Smartphone`.

---

## What changed in the code-interface redesign

- Dark IDE-inspired theme across every page.
- Falling code-rain canvas (`component/CodeRain.js`) behind the whole site.
- Scanlines, code grid, terminal window chrome, blinking cursors, marquee tech ticker.
- Existing Framer Motion animations were preserved and extended.
- New-brand navbar with logo slot, active-route indicators and mobile terminal menu.
- New `/learn` page, `LearnHub` component and `/api/learn` email route.
- Contact form upgraded with a code-editor look and HTML email template.
- Metadata updated for The Genesis.

---

## Main files

| File | Purpose |
| --- | --- |
| `lib/site.js` | Brand name, logo path, WhatsApp number, social links |
| `lib/learning.js` | Learning track catalogue |
| `lib/mailer.js` | Nodemailer transport + shared email template |
| `component/Navbar.js` | Brand, logo slot, navigation |
| `component/CodeRain.js` | Falling code animation |
| `component/LearnHub.js` | Learning selection + WhatsApp/email flow |
| `app/api/learn/route.js` | Emails learning requests |
| `app/api/contact/route.js` | Emails contact messages |
| `app/globals.css` | Code-interface theme, animations and utilities |
