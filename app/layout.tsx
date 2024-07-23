import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ModalProvider } from "@/provider/modal";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000";

const GOOGLE_VERIF_DOMAIN_ID = !process.env.GOOGLE_VERIF_DOMAIN_ID
  ? ""
  : process.env.GOOGLE_VERIF_DOMAIN_ID;
const GOOGLE_ANALYTICS_ID = !process.env.GOOGLE_ANALYTICS_ID
  ? ""
  : process.env.GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Basmallah",
    template: `%s - Basmallah`,
  },
  description:
    "Basmallah adalah aplikasi Islami yang menyediakan kumpulan Dzikir, Al-Quran, Hadits, dan jadwal sholat yang lengkap untuk membantu umat Islam dalam menjalankan ibadah sehari-hari.",
  keywords: [
    "jadwal sholat",
    "baca qur'an",
    "baca hadist",
    "baca dzikir",
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
      <body className={clsx(inter.className, "w-full xl:w-11/12 mx-auto")}>
        <ModalProvider>{children}</ModalProvider>
      </body>
      {GOOGLE_ANALYTICS_ID?.length > 0 && (
        <GoogleTagManager gtmId={GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
