import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ModalProvider } from "@/provider/modal";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Basmallah",
    template: `%s - Basmallah`,
  },
  description:
    "Basmallah is an Islamic application that provides a comprehensive collection of Dzikir, Al-Quran, Hadith, and accurate prayer schedules to assist Muslims in their daily worship.",
  keywords: [
    "Hadith",
    "Islamic teachings",
    "Prophet Muhammad sayings",
    "Basmallah",
    "daily Hadith",
    "Hadith collections",
    "Muslim faith",
    "Dzikir",
    "Al-Quran",
    "prayer schedules",
    "Islamic app",
    "Muslim worship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "w-full xl:w-11/12 mx-auto")}>
        <ModalProvider>{children}</ModalProvider>
      </body>
      {!process.env.GOOGLE_ANALYTICS_ID ? null : (
        <GoogleTagManager gtmId={process.env.GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
