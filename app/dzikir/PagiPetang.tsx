import React from "react";

export default function PagiPetang({ dataDzikir }: { dataDzikir: Dzikr[] }) {
  return (
    <div className="w-full flex flex-col space-y-8">
      {dataDzikir.map((a, b) => {
        const [text_1, text_2] = a.dzikr_name.split(" - ");

        return (
          <div key={b} className="w-full flex flex-col space-y-4">
            <div className="w-full bg-primary px-3 p-2 justify-between items-center flex sticky top-0">
              <p className="text-xs text-left text-[#124C5D]">{text_1}</p>
              <p className="text-xs text-left text-[#124C5D]">
                {!text_2 ? "" : `${text_2} repetisi`}
              </p>
            </div>
            {a.dzikr_list.map((aa, bb) => {
              const showDivider = bb + 1 < a.dzikr_list.length;
              return (
                <div key={bb} className="flex flex-col space-y-4">
                  <p className="text-2xl text-right text-gray-900 leading-10 tracking-wider">
                    {aa.text}
                  </p>
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs font-normal text-gray-600 whitespace-pre-line">
                      {aa.trans}
                    </div>
                  </div>
                  {showDivider && (
                    <div className="w-full min-h-3 bg-gradient-to-r from-primary/5 via-primary/70 to-primary/5 via-50% from-10% to-100%" />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
