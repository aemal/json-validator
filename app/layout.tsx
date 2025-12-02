import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSON Validator - Fast & Simple JSON Validation Tool",
  description: "Validate JSON data instantly with our fast, simple, and reliable JSON validator. Features syntax highlighting, error detection, and clear validation messages.",
  keywords: "JSON validator, JSON parser, JSON syntax checker, validate JSON online, JSON tool",
  authors: [{ name: "JSON Validator Tool" }],
  openGraph: {
    title: "JSON Validator - Fast & Simple JSON Validation Tool",
    description: "Validate JSON data instantly with our fast, simple, and reliable JSON validator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Validator - Fast & Simple JSON Validation Tool",
    description: "Validate JSON data instantly with our fast, simple, and reliable JSON validator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
