import React from "react";

export default function Ayat({dataAyat}: {
  dataAyat: SurahDetails
}) {
  return (
    <div className="w-full flex flex-col space-y-8">
      {dataAyat?.ayat?.length <=0 ? null : dataAyat?.ayat?.map((a, b) => {
        const textArti = a.teksIndonesia || a.idn;
        const partsArti = textArti?.split(/(\d)/); // Split the text at the number

        return (
          <div key={b} className="w-full flex flex-col space-y-4">
            <p className="text-2xl text-right text-gray-900 leading-10 tracking-wider">{a.teksArab || a.ar}</p>
            <div className="flex flex-col space-y-2 relative">
              <p className="text-xs font-normal text-gray-600">
                {a.nomorAyat || a.nomor}.&nbsp;
                {partsArti?.map((part, index) =>
                  /\d/.test(part) ? (
                    <span key={index}>
                      <span className="text-[8px] absolute -top-2 text-primary font-semibold">
                        {part}
                      </span>
                      &nbsp;
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
              {!(a.teksLatin || a.tr) ? null : (
                <div className="flex flex-col space-y-1">
                  {/* <p className="text-[8px] text-gray-700">Catatan Kaki</p> */}
                  <p className="text-[10px] text-gray-400">{(a.teksLatin || a.tr)}</p>
                </div>
              )}
              <div className="w-full min-h-3 bg-gradient-to-r from-primary/5 via-primary/70 to-primary/5 via-50% from-10% to-100%" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
