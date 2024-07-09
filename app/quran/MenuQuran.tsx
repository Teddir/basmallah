"use client";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

let listMenu: string[] = ["Surah", "Tafsir"];
let listMenuMini: string[] = ["Surah", "-", "Tafsir"];

export default function MenuQuran() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeMenu = (menu: string) => {
    try {
      const params = new URLSearchParams(searchParams);
      if (menu) {
        menu == '-' ? params.set("show", "true") : params.set("query", menu);
      } else {
        menu == '-' ? params.delete("show") : params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      error instanceof Error && console.log(error?.message);
    }
  };

  return (
    <>
      <div className="hidden sm:flex fixed right-0 inset-y-1/2">
        <div className="flex flex-col items-center gap-8">
          {listMenu?.map((a, b) => {
            let activeMenu = searchParams.get("query")?.toString() == a;
            activeMenu =
              !searchParams.get("query")?.toString() && b == 0
                ? true
                : activeMenu;

            return (
              <p
                key={b}
                onClick={() => handleChangeMenu(a)}
                className={clsx(
                  "-rotate-90 text-base cursor-pointer capitalize",
                  {
                    "text-primary": activeMenu,
                    "text-primary/50": !activeMenu,
                  }
                )}
              >
                {a}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex sm:hidden fixed left-1/2 -translate-x-1/2 bottom-10">
        <div className="flex items-center gap-8 bg-white px-6 py-4 rounded-full shadow-md shadow-primary/25 ">
          {listMenuMini?.map((a, b) => {
            let activeMenu = searchParams.get("query")?.toString() == a;
            activeMenu =
              !searchParams.get("query")?.toString() && b == 0
                ? true
                : activeMenu;

            return (
              <p
                key={b}
                onClick={() => handleChangeMenu(a)}
                className={clsx("text-base cursor-pointer capitalize", {
                  "text-primary": activeMenu,
                  "text-primary/50": !activeMenu,
                })}
              >
                {a == '-' ? <>&#9783;</> : a}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
