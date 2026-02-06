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
  title: "Davi Siqueira Tostes | Full Stack Developer",
  description:
    "Portfolio of Davi Siqueira Tostes — Full Stack Developer specializing in C#/.NET Core, Golang, React, and cloud infrastructure.",
  keywords: [
    "full stack developer",
    "backend developer",
    "csharp",
    "golang",
    "react",
    "azure",
    "portfolio",
  ],
  authors: [{ name: "Davi Siqueira Tostes" }],
  openGraph: {
    title: "Davi Siqueira Tostes | Full Stack Developer",
    description:
      "Building robust back-end systems and modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
