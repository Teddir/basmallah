import React from "react";

export default function Tafsir({ dataTafsir }: { dataTafsir: TafsirSurah }) {
  return (
    <div className="w-full flex flex-col space-y-8 pb-40">
      {dataTafsir?.tafsir?.length <= 0
        ? null
        : dataTafsir?.tafsir?.map((a, b) => {
            const textArti = a.teks || a.tafsir;
            const partsArti = textArti;

            return (
              <div key={b} className="w-full flex flex-col space-y-4">
                <div className="w-full bg-primary px-3 p-2 justify-between items-center flex">
                  <p className="text-xs text-left text-[#124C5D]">
                    {dataTafsir.namaLatin || dataTafsir.nama_latin}
                  </p>
                  <p className="text-xs text-left text-[#124C5D]">
                    Ayat-{a.ayat}
                  </p>
                </div>
                <div className="flex flex-col space-y-2 relative">
                  <div className="text-xs font-normal text-gray-600 whitespace-pre-line">
                    {partsArti}
                  </div>
                  {/* <div className="w-full min-h-3 bg-gradient-to-r from-primary/5 via-primary/70 to-primary/5 via-50% from-10% to-100%" /> */}
                </div>
              </div>
            );
          })}
    </div>
  );
}
