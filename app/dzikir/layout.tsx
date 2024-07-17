import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dzikir",
  description:
    "Discover a collection of daily Dzikir in Basmallah. An Islamic app that helps Muslims remember Allah through Dzikir, with complete and easily accessible guides every day.",
};

export default function DzikirLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
