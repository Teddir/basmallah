import clsx from "clsx";
import { Noto_Naskh_Arabic } from "next/font/google";

const naskh = Noto_Naskh_Arabic({ subsets: ["latin"] });

export default function Detail({
  hadist,
  handleSearch,
  searchValue,
  hadistTerkait,
}: {
  handleSearch: (a: string, b?: string) => void;
  hadist: HadistItem;
  searchValue: string;
  hadistTerkait: HadistItem[];
}) {
  return (
    <>
      <section className="flex flex-col sm:px-6 px-3 gap-8">
        <div className="flex items-center gap-4">
          <button onClick={() => handleSearch("", "id")}>
            <p className="text-2xl">&#8592;</p>
          </button>
          <p className="text-2xl font-semibold capitalize">
            Hadist-{hadist.number} | {hadist.imam.replaceAll("-", " ")}
          </p>
        </div>
        <p
          className={clsx(
            naskh.className,
            "text-2xl tracking-wider leading-loose text-right text-gray-800"
          )}
        >
          {hadist.arab}
        </p>
        <p className="text-base leading-loose text-gray-700">{hadist.id}</p>
      </section>
      {!searchValue || hadistTerkait.length <= 0 ? null : (
        <section className="flex flex-col sm:px-6 px-3 gap-4 mt-16">
          <p>
            Pencarian Terkait{" "}
            <span className="font-semibold">{searchValue}</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:w-[80%] xl:w-[50%]">
            {hadistTerkait.map((a, b) => {
              return (
                <button key={b} onClick={() =>  handleSearch(`${a.number}-${a.imam}`, "id")} className="p-2 rounded-md border text-start">
                  <p className="text-base font-light text-primary">
                    <span className="font-semibold">hadist-{a.number}</span> -{" "}
                    {a.imam.replaceAll("-", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
