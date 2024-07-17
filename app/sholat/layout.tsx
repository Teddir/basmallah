import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Schedule",
  description:
    "Access accurate prayer schedules on Basmallah. Stay updated with precise prayer timings and guidance for Muslims to fulfill their daily prayers.",
};

export default function SholatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
