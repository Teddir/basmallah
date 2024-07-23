import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadith Collection",
  description:
    "Temukan Hadits shahih dari berbagai koleksi, memberikan bimbingan dan hikmah dalam kehidupan sehari-hari. Jelajahi dan pelajari dari sabda Nabi Muhammad (saw) dengan Basmallah.",
};

export default function HadistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
