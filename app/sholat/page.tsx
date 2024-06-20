import Navbar from "@/components/layout/navbar";
import "./sholat.css";
import Image from "next/image";
import Body from "./Body";
import { getSholat } from "../lib/data";

export default async function Sholat({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  let datasSholat: DataSholat[] = await getSholat({ city: query });

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden relative">
      <Image
        id="s-bintik"
        src="/bintik-left.svg"
        alt="bintik Logo"
        className="dark:invert absolute top-0 w-full z-[1]"
        width={100}
        height={100}
        priority
      />
      <Navbar />
      <Body datas={datasSholat || []} />
    </section>
  );
}
