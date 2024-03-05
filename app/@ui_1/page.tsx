import Image from "next/image";
import Header from "./components/header";

export default function Page() {
  return (
    <div className="overflow-hidden flex h-screen w-screen relative">
      <div className="absolute top-0 w-full h-full -z-10 animate-fadeIn rotate-[80-deg]">
        <Image alt="ornamen-bintik" src="/images/ornamen-bintik-left.png" className="w-full h-full" fill />
      </div>
      <Header />
      <div className="flex flex-col w-full relative place-items-center h-full justify-center gap-16">
        <div className="relative items-center justify-center flex flex-col">
          <div className="absolute z-[-1]">
            <Image alt="ornamen-bunga" src="/images/hiasan-bunga.png" className="object-cover h-auto w-auto " width={125} height={125} />
          </div>
          <h2 className="scroll-m-20 text-[28px] font-normal tracking-tight transition-colors first:mt-0">
            7 Jam, 1 Menit menuju
          </h2>
          <h2 className="scroll-m-20 text-[42px] font-bold tracking-tight transition-colors first:mt-0">
            Imsak, 04:29
          </h2>
        </div>
        <div className="py-4 px-6 rounded-full bg-primary min-w-[519px]">
          <input placeholder="Tanggerang City Time" className="bg-transparent border-none focus:border-none focus:outline-none" />
        </div>
        <div className="flex flex-col gap-8 border border-primary rounded-lg px-8 py-6 min-w-[721px]">
          <div>
            <p className="text-base font-medium">Jumat, 09 Februari 2024</p>
            <p className="text-xs font-normal text-[#888888]">Pondok Aren, South Tangerang City, Banten</p>
          </div>
          <div>
            <p className="text-base font-medium">Fajr</p>
            <p className="text-base font-medium text-primary">04.37</p>
          </div>
          <div>
            <p className="text-xs font-normal text-[#888888]">Based on: Kemenag Jakarta Pusat · Change <br />
              GMT+07:00 · Times may vary</p>
          </div>
        </div>
      </div>
    </div>
  )
}
