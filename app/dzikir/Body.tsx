import React from "react";
import List from "./List";
import { getAlmatsurat } from "../lib/data";
import PagiPetang from "./PagiPetang";

export default async function Body({
  searchParams,
}: {
  searchParams?: {
    list?: string;
    query?: string;
    page?: string;
  };
}) {
  const list = searchParams?.list || "pagi";
  const query = searchParams?.query || "sugro";

  const dataDzikirAlmasurat: Dzikr[] =
    (await getAlmatsurat({ time: list, type: query })) || [];

  return (
    <main className="min-h-screen my-28 flex flex-row sm:w-10/12 w-[86%] gap-20 mx-auto relative">
      <PagiPetang dataDzikir={dataDzikirAlmasurat} />
      <List />
    </main>
  );
}
