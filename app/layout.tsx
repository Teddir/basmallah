import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ModalProvider } from "@/provider/modal";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const GOOGLE_VERIF_DOMAIN_ID = !process.env.GOOGLE_VERIF_DOMAIN_ID
  ? ""
  : process.env.GOOGLE_VERIF_DOMAIN_ID;
const GOOGLE_ANALYTICS_ID = !process.env.GOOGLE_ANALYTICS_ID
  ? ""
  : process.env.GOOGLE_ANALYTICS_ID;

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
  verification: {
    google: GOOGLE_VERIF_DOMAIN_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className={clsx(inter.className, "w-full xl:w-11/12 mx-auto")}>
        <ModalProvider>{children}</ModalProvider>
      </body>
      <GoogleTagManager gtmId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
