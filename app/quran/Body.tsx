import React from "react";
import List from "./List";
import Ayat from "./Ayat";
import { getQuran } from "../lib/data";
import Tafsir from "./Tafsir";

export default async function Body({
  searchParams,
}: {
  searchParams?: {
    list?: string;
    query?: string;
    page?: string;
  };
}) {
  const list = searchParams?.list || "1";
  const query = searchParams?.query || "surah";

  const dataSurah: Surah[] = (await getQuran({ type: "list-surah" })) || [];
  const dataAyat =
    (await getQuran({ type: query, surah: Number(list) })) || {};

  return (
    <main className="min-h-screen mt-28 flex flex-row w-10/12 gap-20 mx-auto relative">
      {query?.toLocaleLowerCase() === "tafsir" ? (
        <Tafsir dataTafsir={dataAyat} />
      ) : (
        <Ayat dataAyat={dataAyat} />
      )}
      <List dataSurah={dataSurah || []} />
    </main>
  );
}
