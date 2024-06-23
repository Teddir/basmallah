import Navbar from "@/components/layout/navbar";
import MenuDzikir from "./MenuDzikir";
import Body from "./Body";

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
    <section className="w-full min-h-screen bg-white">
      <Navbar />
      <Body searchParams={searchParams}/>
      <MenuDzikir />
    </section>
  );
}
