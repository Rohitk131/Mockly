import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mockly - Generate Device Mockups Quickly",
  description: "Create beautiful mockups for devices like iPhone X/XS/Max, iPad, MacBook, Lumina, and more in seconds with Mockly. Perfect for designers and developers.",
  keywords: [
    "mockups",
    "device mockups",
    "iPhone mockup generator",
    "iPad mockups",
    "MacBook mockups",
    "Lumina UI mockups",
    "Mockly",
    "design tools",
    "UI mockups",
    "web development tools",
  ],
  authors: [{ name: "Rohit Kumar" }],
  openGraph: {
    title: "Mockly - The Ultimate Device Mockup Generator",
    description: "Effortlessly create professional device mockups for iPhone, iPad, MacBook, Lumina, and more with Mockly.",
    url: "https://mocklyapp.vercel.app/",
    type: "website",
    images: [
      {
        url: "./og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Mockly - Generate Device Mockups Quickly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mockly - Generate Device Mockups Quickly",
    description: "Instantly create device mockups for iPhone, iPad, MacBook, Lumina, and more. Perfect for designers and developers.",
    images: ["./og-image.jpeg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://mockly.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
