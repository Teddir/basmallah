"use client";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

let listMenu: string[] = ["Sugro", "Kubro"];

export default function MenuQuran() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeMenu = (menu: string) => {
    try {
      const params = new URLSearchParams(searchParams);
      if (menu) {
        params.set("query", menu);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      error instanceof Error && console.log(error?.message);
    }
  };

  return (
    <div className="fixed right-0 inset-y-1/2">
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
  );
}
