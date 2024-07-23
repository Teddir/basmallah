import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Schedule",
  description:
    "Akses jadwal sholat akurat di Basmallah. Dapatkan informasi terkini tentang waktu sholat yang tepat dan panduan bagi umat Islam untuk menunaikan sholat harian mereka.",
};

export default function SholatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
