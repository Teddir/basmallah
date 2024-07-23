import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al-Quran",
  description:
    "Jelajahi Al-Quran lengkap di Basmallah. Akses kitab suci Islam dengan terjemahan, tafsir, dan navigasi yang mudah bagi umat Islam yang mencari bimbingan dan ilmu.",
};

export default function QuranLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
