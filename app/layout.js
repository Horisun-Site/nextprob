import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import SiteBackground from '@/component/SiteBackground';
import { siteConfig } from '@/lib/site';
import "./globals.css";

export const metadata = {
  title: {
    default: `${siteConfig.name} | Full-Stack Developer, Designer & Mentor`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "The Genesis",
    "full-stack developer",
    "web developer portfolio",
    "Next.js developer",
    "React developer",
    "coding mentorship",
    "learn web development",
    "graphic designer",
    "SEO specialist",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Full-Stack Developer, Designer & Mentor`,
    description: siteConfig.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full-Stack Developer, Designer & Mentor`,
    description: siteConfig.description,
  },
};

export const viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body>
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
