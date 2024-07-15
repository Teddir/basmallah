"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import BodySearch from "./BodySearch";

const listMainHadist: string[] = [
  "abu-daud",
  "ahmad",
  "bukhari",
  "darimi",
  "ibnu-majah",
  "malik",
  "muslim",
  "nasai",
  "tirmidzi",
];

export default function Body({ dataHadist }: { dataHadist: HadistItem[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSearch = useDebouncedCallback((term, type = "query") => {
    console.log(`Searching... ${term}`);
    try {
      setLoading(true);
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.delete('id');
        params.set(type, term);
      } else {
        params.delete(type);
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      error instanceof Error && console.log(error?.message);
    } finally {
      setLoading(false);
    }
  }, 300);

  return !searchParams.get("query")?.toString() ? (
    <div className="h-screen w-screen overflow-hidden relative">
      <section className="h-1/2 w-screen bg-primary overflow-hidden relative">
        <div className="flex w-full h-full">
          <Image
            id="aksesoris-1"
            src="/aksesoris-large.svg"
            alt="Vercel Logo"
            // fill
            width={520}
            height={520}
            className="-translate-y-36 bg-cover"
            priority
          />
          <Image
            id="aksesoris-1"
            src="/aksesoris-large.svg"
            alt="Vercel Logo"
            // fill
            width={520}
            height={520}
            className="-rotate-180 translate-y-36 bg-cover"
            priority
          />
        </div>
      </section>

      <section className="h-1/2 w-screen">
        <div className="p-24 flex flex-wrap justify-center items-center gap-3">
          {listMainHadist?.map((a, b) => {
            let isActive =
              a.toLocaleLowerCase() ==
              searchParams.get("query")?.toString().toLocaleLowerCase();

            return (
              <div
                key={b}
                onClick={() => handleSearch(a)}
                className={clsx(
                  "px-4 py-2 ring-1 ring-primary/50 hover:ring-primary rounded-full text-base text-center text-[#124C5D] hover:bg-primary transition-all duration-100 delay-75  cursor-pointer",
                  {
                    "bg-primary": isActive,
                    "bg-primary/10": !isActive,
                  }
                )}
              >
                <p className="capitalize select-none">
                  Hadist {a.replaceAll("-", " ")}
                </p>
              </div>
            );
          })}
        </div>
        ´
      </section>

      <section className="search fixed w-full top-[47%]">
        <div className="justify-center items-center flex">
          <input
            type="text"
            className="peer block py-4 px-5 rounded-full bg-[#C6E5CF] w-[40%] sm:max-w-xl text-base focus:ring-[#5E7765] z-20 placeholder-gray-900"
            defaultValue={searchParams.get("query")?.toString()}
            placeholder="Cari Hadist"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </section>
    </div>
  ) : (
    <BodySearch
      handleSearch={handleSearch}
      queryValue={searchParams.get("query")?.toString() || ""}
      searchValue={searchParams.get("search")?.toString() || ""}
      idValue={searchParams.get("id")?.toString() || ""}
      listMainHadist={listMainHadist}
      dataHadist={dataHadist}
    />
  );
}
