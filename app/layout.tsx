import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components";

const inter = localFont({
  src: "../public/fonts/inter-regular.ttf",
  variable: "--font-inter",
  weight: "400",
});

const sora = localFont({
  src: "../public/fonts/sora-regular.ttf",
  variable: "--font-sora",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ATTICSPACE Architects & Interior Designers | Construction Review",
  description: "Architecture, interiors and construction intelligence from Atticspace Architects & Interior Designers.",
  icons: { icon: "/logo.jpeg", shortcut: "/logo.jpeg", apple: "/logo.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header/>{children}<Footer/></body>
    </html>
  );
}
