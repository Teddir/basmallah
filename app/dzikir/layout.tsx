import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dzikir",
  description:
    "Temukan kumpulan Dzikir harian di Basmallah. Sebuah aplikasi Islami yang membantu umat Islam mengingat Allah melalui Dzikir, dengan panduan lengkap dan mudah diakses setiap hari.",
};

export default function DzikirLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
