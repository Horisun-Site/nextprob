export const learningCategories = [
  "All",
  "Frontend",
  "Backend",
  "Full-Stack",
  "Design",
  "Growth",
  "Engineering",
];

/**
 * Edit this list anytime to add, remove or reword a learning track.
 * `icon` must be one of the icon keys in component/LearnHub.js.
 */
export const learningTopics = [
  {
    id: "web-foundations",
    title: "HTML, CSS & JavaScript Foundations",
    category: "Frontend",
    level: "Beginner",
    duration: "6 weeks",
    icon: "Code2",
    blurb:
      "Start from zero and learn how the web really works — semantic HTML, modern CSS layouts and the JavaScript fundamentals every developer needs.",
    outcome: "Build and deploy your first responsive website.",
  },
  {
    id: "react-nextjs",
    title: "React & Next.js Engineering",
    category: "Frontend",
    level: "Intermediate",
    duration: "6 weeks",
    icon: "Atom",
    blurb:
      "Components, hooks, routing, server components and deployment. Learn the exact stack used to build this portfolio.",
    outcome: "Ship a production-ready React/Next.js app.",
  },
  {
    id: "tailwind-ui",
    title: "Tailwind CSS & UI Engineering",
    category: "Frontend",
    level: "Beginner",
    duration: "3 weeks",
    icon: "Layers",
    blurb:
      "Design systems, responsive layouts, animation and reusable components with Tailwind CSS — without fighting CSS.",
    outcome: "Build a polished, reusable UI kit.",
  },
  {
    id: "python-fastapi",
    title: "Python & FastAPI Backends",
    category: "Backend",
    level: "Intermediate",
    duration: "6 weeks",
    icon: "Server",
    blurb:
      "APIs, authentication, validation and clean architecture with Python and FastAPI. Connect a real frontend to a real backend.",
    outcome: "Deploy a documented REST API.",
  },
  {
    id: "databases",
    title: "MongoDB & Astra DB",
    category: "Backend",
    level: "Intermediate",
    duration: "4 weeks",
    icon: "Database",
    blurb:
      "Model data properly, write efficient queries and connect your applications to MongoDB and DataStax Astra DB.",
    outcome: "Design and ship a database-backed app.",
  },
  {
    id: "fullstack-mentorship",
    title: "Full-Stack Project Mentorship",
    category: "Full-Stack",
    level: "All levels",
    duration: "Flexible",
    icon: "Rocket",
    blurb:
      "Bring your idea or stuck project. We plan it, build it and debug it together with weekly reviews and direct feedback.",
    outcome: "Finish a real project for your portfolio.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Brand Identity",
    category: "Design",
    level: "Beginner",
    duration: "3 weeks",
    icon: "PenTool",
    blurb:
      "Logos, colour systems, typography and brand assets that look intentional — the creative side behind great products.",
    outcome: "Create a complete mini brand identity.",
  },
  {
    id: "seo-growth",
    title: "SEO & Google Business Profile",
    category: "Growth",
    level: "Beginner",
    duration: "2 weeks",
    icon: "Search",
    blurb:
      "Get found on Google. Learn keyword research, on-page SEO, technical basics and how to optimise a Google Business Profile.",
    outcome: "Run an SEO audit and growth plan.",
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Automation",
    category: "Growth",
    level: "Beginner",
    duration: "2 weeks",
    icon: "Mail",
    blurb:
      "Build lists, write high-converting campaigns and automate follow-ups that turn attention into real customers.",
    outcome: "Launch a complete email campaign.",
  },
  {
    id: "react-native",
    title: "Mobile Apps with React Native",
    category: "Frontend",
    level: "Intermediate",
    duration: "5 weeks",
    icon: "Smartphone",
    blurb:
      "Take your React skills mobile. Build cross-platform apps, handle navigation and prepare a build for release.",
    outcome: "Build a working mobile app.",
  },
  {
    id: "wordpress",
    title: "WordPress & No-Code Websites",
    category: "Frontend",
    level: "Beginner",
    duration: "2 weeks",
    icon: "Globe",
    blurb:
      "Launch professional business websites fast with WordPress — hosting, themes, plugins, security and basic SEO.",
    outcome: "Deliver a client-ready WordPress site.",
  },
  {
    id: "computer-engineering",
    title: "Computer Engineering Basics",
    category: "Engineering",
    level: "Beginner",
    duration: "4 weeks",
    icon: "Cpu",
    blurb:
      "Understand the machine under the code — hardware, electronics, troubleshooting and how software meets the physical world.",
    outcome: "Diagnose and explain real hardware systems.",
  },
];

export function getTopicsByIds(ids = []) {
  return learningTopics.filter((topic) => ids.includes(topic.id));
}
