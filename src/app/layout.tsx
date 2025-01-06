import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";

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
  title: "Biz Directory",
  description: "Business Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <Header />
        <Hero />
        <main className="w-full lg:w-[1024px] mx-auto p-4 flex flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
