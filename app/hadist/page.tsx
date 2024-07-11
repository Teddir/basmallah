import Navbar from "@/components/layout/navbar";
import Body from "./Body";
import { getHadist } from "../lib/data";

export default async function Hadist({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  let datasHadist = await getHadist({ id: query });
  console.log(datasHadist.length);
  
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      <Navbar/>
      <Body/>
    </section>
  );
}
