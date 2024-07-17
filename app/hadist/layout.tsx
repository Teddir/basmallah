import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hadith Collection",
  description:
    "Discover authentic Hadith from various collections, providing guidance and wisdom for everyday life. Explore and learn from the sayings of the Prophet Muhammad (peace be upon him) with Basmallah.",
};

export default function HadistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
