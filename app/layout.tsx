import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ModalProvider } from "@/provider/modal";
import { GoogleTagManager } from "@next/third-parties/google";
import GoogleAdsense from "@/components/GoogleAdsense";

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
const GOOGLE_ADSENSE = !process.env.GOOGLE_ADSENSE
  ? ""
  : process.env.GOOGLE_ADSENSE;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Basmallah",
    template: `%s - Basmallah`,
  },
  description:
    "Basmallahは、イスラム教徒が日々の礼拝をサポートするためのアプリケーションであり、ディクル、アル・コーラン、ハディース、礼拝スケジュールなどの豊富なコンテンツを提供します。",
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
    "礼拝スケジュール",
    "コーランを読む",
    "ハディースを読む",
    "ディクルを読む",
    "ハディース",
    "イスラム教の教え",
    "預言者ムハンマドの言葉",
    "バスマラ",
    "日々のハディース",
    "ハディース集",
    "ムスリムの信仰",
    "ディクル",
    "アル・コーラン",
    "礼拝のスケジュール",
    "イスラムアプリ",
    "ムスリムの礼拝",
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
      <GoogleAdsense pId={GOOGLE_ADSENSE} />
    </html>
  );
}
