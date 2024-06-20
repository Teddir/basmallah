import Navbar from "@/components/layout/navbar";
import Body from "./Body";
import MenuQuran from "./MenuQuran";

export default function Quran({
  searchParams,
}: {
  searchParams?: {
    list?: string;
    query?: string;
    page?: string;
  };
}) {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Body searchParams={searchParams}/>
      <MenuQuran />
    </section>
  );
}
