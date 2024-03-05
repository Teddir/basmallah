import Image from "next/image";
import Link from "next/link";

export function Contoh() {
  return (
    <div className="flex flex-col max-h-screen w-full overflow-hidden h-screen">
      {/* header */}
      <>
        <div className="absolute top-0 w-full h-1/2 z-10 animate-slideBottom">
          <Image alt="ornamen-atas" src="/images/ornamen.png" className="w-full h-full" fill />
        </div>
        <div className="absolute top-0 w-full h-full -z-10 animate-fadeIn">
          <Image alt="ornamen-bintik" src="/images/ornamen-bintik.png" className="w-full h-full" fill />
        </div>
      </>
      {/* body */}
      <div className="flex w-full h-full place-content-center items-center z-40 ">
        <div className="max-w-[500px] max-h-[500px] w-full h-full z-10 relative">
          <Image alt="ornamen-bunga" src="/images/hiasan-bunga.png" className="object-cover animate-slideTop" fill />
          <div className="flex flex-col absolute w-full h-full z-10 items-center place-content-center animate-fadeInDelay">
            <Link href={'/quran'} passHref>
              <p className="text-center text-[40px] font-semibold text-primary">Baca Qur’an</p>
            </Link>
            <Link href={'/dzikir'} passHref>
              <p className="text-center text-[40px] font-semibold text-primary">Baca Dzikir</p>
            </Link>
            <Link href={'/hadist'} passHref>
              <p className="text-center text-[40px] font-semibold text-primary">Baca Hadist</p>
            </Link>
            <Link href={'/sholat'} passHref>
              <p className="text-center text-[40px] font-semibold text-secondary">Jadwal Sholat</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}