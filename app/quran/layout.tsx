import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-Quran",
  description:
    "Explore the complete Al-Quran in Basmallah. Access the holy book of Islam with translations, tafsir, and easy navigation for Muslims seeking guidance and knowledge.",
};

export default function QuranLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
