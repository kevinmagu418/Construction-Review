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
  title: "Atticspace Architects & Interior Designers",
  description: "Architecture and interior design shaped around people, purpose and place.",
  icons: { icon: "/atticspace-logo.svg" },
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
