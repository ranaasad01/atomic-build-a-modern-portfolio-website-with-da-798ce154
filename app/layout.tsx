import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Full-Stack Engineer",
    template: "%s | Alex Morgan",
  },
  description:
    "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, accessible, and beautiful web experiences.",
  keywords: [
    "full-stack engineer",
    "React developer",
    "Next.js",
    "TypeScript",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, accessible, and beautiful web experiences.",
    siteName: "Alex Morgan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan — Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in React, Next.js, and Node.js.",
    creator: "@alexmorgan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [GeistSans.variable, GeistMono.variable].join(" ");
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
