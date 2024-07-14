"use client";

import clsx from "clsx";
import React, { useState } from "react";

export default function BodySearch({
  handleSearch,
  listMainHadist,
  searchValue,
  queryValue,
  dataHadist,
}: {
  handleSearch: (a: string, b?: string) => void;
  listMainHadist: string[];
  searchValue: string;
  queryValue: string;
  dataHadist: HadistItem[];
}) {
  const [sliceCount, setSliceCount] = useState({ start: 0, end: 10 });

  return (
    <div className="mx-auto py-6 flex flex-col">
      <section className="flex px-6 flex-col gap-4 justify-start items-start">
        <input
          type="text"
          className="peer block py-3 px-6 rounded-full bg-[#C6E5CF] w-[80%] sm:max-w-xl text-base focus:ring-[#5E7765] z-20 placeholder-gray-900 shadow-lg shadow-primary/25"
          defaultValue={searchValue}
          placeholder="Cari Hadist"
          onChange={(e) => handleSearch(e.target.value, "search")}
        />
        <div className="flex items-center ">
          {["semua", ...listMainHadist]?.map((a, b) => {
            let isActive =
              a.toLocaleLowerCase() == queryValue?.toLocaleLowerCase();

            if (b == 0) {
              isActive =
                listMainHadist.indexOf(queryValue?.toLocaleLowerCase()) ==
                  -1 || queryValue?.toLocaleLowerCase() == "semua";
            }

            return (
              <div
                key={b}
                onClick={() => handleSearch(a)}
                className={clsx(
                  "p-2 px-4 text-base text-center text-[#124C5D] transition-all duration-100 delay-75 border-b-4 cursor-pointer",
                  {
                    "text-[#124C5D] border-b-primary": isActive,
                    "text-gray-400 border-b-white": !isActive,
                  }
                )}
              >
                <p className="text-[13px] capitalize line-clamp-1 select-none">
                  {b == 0 ? a : `${a.replaceAll("-", " ")}`}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-full h-[0.1px] bg-gray-200 mb-6" />
      <section className="flex flex-col px-6 gap-4">
        <p className="text-[0.7em] font-light text-gray-400">
          Sekitar {dataHadist.length || 0} Hadist
        </p>
        <div className="flex flex-col gap-8">
          {dataHadist.slice(0, sliceCount.end).map((a, b) => {
            return (
              <div key={b} className="flex flex-col gap-2 w-[80%]">
                <div className="flex flex-col">
                  <p className="text-2xl font-medium text-[#124C5D] line-clamp-1 cursor-pointer hover:underline hover:underline-offset-2 select-none">
                    Hadist-{a.number}
                  </p>
                  <div className="text-[0.7em] text-gray-400 font-light flex flex-row items-center gap-2 capitalize">
                    <p>{a.imam.replaceAll("-", " ")}</p>
                    {/* <p>|</p>
                  <p>Hadist</p> */}
                  </div>
                </div>
                <p className="text-[0.9em] text-gray-500 line-clamp-2">
                  {a.id}
                </p>
              </div>
            );
          })}
        </div>
        <div className="py-8">
          <button
            onClick={() =>
              setSliceCount((old) => ({
                start: old.start,
                end: old.end + 10,
              }))
            }
            className={clsx(
              "px-4 py-2 text-base ring-1 ring-primary rounded-sm text-primary hover:bg-primary hover:text-[#124C5D] hover:ring-[#124C5D] shadow",
              {
                "hidden": dataHadist.length <= sliceCount.end,
                "": dataHadist.length > sliceCount.end,
              }
            )}
          >
            Lihat Lainnya
          </button>
        </div>
      </section>
    </div>
  );
}
