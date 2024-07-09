"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function List({ dataSurah = [] }: { dataSurah: Surah[] }) {
  const searchParams = useSearchParams();
  const isShow = searchParams.get("show")?.toString() == 'true'
  const pathname = usePathname();
  const { replace } = useRouter();

  const nameList = useMemo(
    () => searchParams.get("query")?.toString() || "Surah",
    [searchParams]
  );

  const handleChange = (menu: number) => {
    try {
      const params = new URLSearchParams(searchParams);
      if (menu) {
        params.set("list", menu.toLocaleString());
        isShow && params.set("show", 'false');
      } else {
        params.delete("list");
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      error instanceof Error && console.log(error?.message);
    }
  };

  return (
    <>
      <div className="w-[40%] items-end hidden sm:flex flex-col gap-10 sticky top-10 self-start">
        <div className="flex flex-col gap-10">
          <p className="text-3xl font-semibold uppercase text-gray-700">
            List {nameList}
          </p>
          <div>
            {dataSurah.map((a, b) => {
              let actived = Number(searchParams.get("list")) == (a.nomor || a.number);
              actived =
                !Number(searchParams.get("list")) && b == 0 ? true : actived;

              return (
                <div
                  key={b}
                  onClick={() => handleChange(a.nomor || a.number)}
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <p
                    className={clsx(
                      "text-sm font-normal  leading-5 uppercase tracking-widest",
                      {
                        "text-gray-700": actived,
                        "text-gray-300": !actived,
                      }
                    )}
                  >
                    - {a.namaLatin || a.englishName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={clsx("fixed inset-y-0 bg-white flex-col gap-10 w-full z-40", isShow ? 'flex sm:hidden' : 'hidden')}>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-xl font-semibold uppercase text-gray-700">
            List {nameList}
          </p>
          <div className="max-h-screen overflow-y-auto pb-[12rem]">
            {dataSurah.map((a, b) => {
              let actived = Number(searchParams.get("list")) == (a.nomor || a.number);
              actived =
                !Number(searchParams.get("list")) && b == 0 ? true : actived;

              return (
                <div
                  key={b}
                  onClick={() => handleChange((a?.nomor || a.number))}
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <p
                    className={clsx(
                      "text-sm font-normal  leading-5 uppercase tracking-widest select-none",
                      {
                        "text-gray-700": actived,
                        "text-gray-300": !actived,
                      }
                    )}
                  >
                    - {a.namaLatin || a.englishName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
