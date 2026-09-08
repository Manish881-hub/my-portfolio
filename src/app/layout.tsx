import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl, siteDescription } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#071026",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manish Bhaktisagar | LLM Engineer",
    template: "%s | Manish Bhaktisagar",
  },
  description: siteDescription,
  keywords: [
    "Manish Bhaktisagar",
    "LLM Engineer",
    "Generative AI Engineer",
    "Python Developer",
    "RAG",
    "OpenAI API",
    "FastAPI",
    "React",
    "Next.js",
    "AWS",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Manish Bhakti Sagar" }],
  creator: "Manish Bhakti Sagar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Manish Bhaktisagar | Portfolio",
    title: "Manish Bhaktisagar | LLM Engineer",
    description: siteDescription,
    images: [
      {
        url: "/profile.jpeg",
        width: 512,
        height: 512,
        alt: "Manish Bhakti Sagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Bhaktisagar | LLM Engineer",
    description: siteDescription,
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manish Bhakti Sagar",
  jobTitle: "Full Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  email: "mailto:bhaktisagar.manish@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://github.com/Manish881-hub",
    "https://www.linkedin.com/in/manish-bhaktisagar/",
    "https://x.com/manishbhakti",
  ],
  knowsAbout: ["React", "Next.js", "Node.js", "FastAPI", "AWS", "Docker", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the theme class before hydration to avoid a flash.
            Mirrors ThemeToggle logic: stored choice wins, else OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
