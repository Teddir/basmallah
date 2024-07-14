import Navbar from "@/components/layout/navbar";
import Body from "./Body";
import { getHadist } from "../lib/data";
import { Suspense } from "react";

export default async function Hadist({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    search?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const search = searchParams?.search || "";

  let dataHadist: HadistItem[] = await getHadist({ id: query, search });

  return (
    <section className="w-full min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Suspense fallback={<p>Loading hadist...</p>}>
        <Body dataHadist={dataHadist || []} />
      </Suspense>
    </section>
  );
}
