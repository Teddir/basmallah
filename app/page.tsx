"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { calculateTimeDifference, findNextPrayerTime } from "./sholat/Body";
import { getSholat } from "./lib/data";
import { useModal } from "@/context/modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const today = new Date().toLocaleDateString("en-US", {
  day: "numeric",
});

interface ObjGeo {
  longitude: number;
  latitude: number;
}

export default function Home() {
  const router = useRouter();
  const { showModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<DataSholat[]>([]);
  const [activeIndex, setActiveIndex] = useState(2);
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    function handleDatas(datasSholat: DataSholat[], isNew: boolean) {
      const activeCardIndex = datasSholat.findIndex(
        (data) => data.date?.split(" ")[0] === today
      );

      setDatas(datasSholat);
      setActiveIndex(activeCardIndex !== -1 ? activeCardIndex : 2);
      isNew &&
        localStorage.setItem("waktu_sholat", JSON.stringify(datasSholat));
    }

    async function getData(geo?: ObjGeo, use?: boolean) {
      let datasSholat: DataSholat[] = await getSholat(
        use
          ? {
              geo,
            }
          : { city: "jakarta" }
      );
      handleDatas(datasSholat, true);
    }

    try {
      setLoading(true);
      const oldDataSholat = localStorage.getItem("waktu_sholat");
      const isOldDataSholat: DataSholat[] = !oldDataSholat
        ? []
        : JSON.parse(oldDataSholat || "");

      if (isOldDataSholat.length > 0)
        return handleDatas(isOldDataSholat, false);

      if (navigator.geolocation) {
        const successCallback = (position: GeolocationPosition) => {
          getData(position.coords, true);
        };

        const errorCallback = (error: any) => {
          getData({ latitude: 0, longitude: 0 }, false);
          console.log(error);
        };

        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } else {
        alert("Sorry Not available geolocation!");
      }
    } catch (error) {
      error instanceof Error && console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (datas.length > 0 && activeIndex >= 0) {
      const { nextPrayer, isNextDay } = findNextPrayerTime(datas, activeIndex);

      if (nextPrayer) {
        setNextPrayerTime(`${nextPrayer.id}, ${nextPrayer.value}`);

        // Function to calculate and update remaining time
        const updateTimeRemaining = () => {
          const remainingTime = calculateTimeDifference(
            nextPrayer.value,
            isNextDay
          );
          setTimeRemaining(remainingTime);
        };

        // Set the initial remaining time
        updateTimeRemaining();

        // Update the remaining time every second
        interval = setInterval(updateTimeRemaining, 1000); // Every 1 second
      }
    }

    // Clean up the interval when the component is unmounted or when datas or activeIndex changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [datas, activeIndex]);

  return (
    <section className="min-h-screen h-full relative max-w-[1440px] w-full mx-auto">
      {/* jadwal sholat */}
      <div className="fixed sm:absolute w-full z-10 my-auto justify-center items-center flex flex-col translate-y-1/2">
        {/* navbar */}
        <nav className="flex w-full justify-center">
          <button onClick={() => showModal("")}>
            <Image
              src={"/images/favicon.png"}
              width={24}
              height={24}
              alt="logo"
            />
          </button>
        </nav>
        {!timeRemaining ? null : (
          <div className="flex flex-col text-center space-y-2 z-20 mt-16 bg-white-50/50 p-4 rounded-xl backdrop-blur-sm w-fit">
            <p className="text-xl sm:text-3xl font-normal font-mono">
              {timeRemaining} menuju
            </p>
            <p className="text-xl sm:text-4xl font-semibold font-mono">
              {nextPrayerTime}
            </p>
          </div>
        )}
      </div>

      {/* list menu */}
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
        <div className="ted h-screen max-h-screen p-2  bg-primary/25 relative flex w-full overflow-hidden">
          <div className="h-full translate-y-[79.5%] group-hover:-translate-y-full transition-all delay-72 duration-1000  w-full flex">
            <Link
              href={"/quran"}
              className="h-full max-h-[20dvh]  bg-primary p-3 justify-between w-full flex flex-col rounded-xl"
            >
              <p className="uppercase font-mono">Baca Qur&apos;an</p>
              <p>Baca Qur&apos;an</p>
            </Link>
          </div>
        </div>
        <div className="ted1 h-screen max-h-screen p-2  bg-white/25 relative flex w-full overflow-hidden">
          <div className="h-full translate-y-[79.5%] group-hover:-translate-y-full transition-all delay-72 duration-1000  w-full flex">
            <Link
              href={"/dzikir"}
              className="h-full max-h-[20dvh]  bg-gray-400 p-3 justify-between w-full flex flex-col rounded-xl"
            >
              <p className="uppercase font-mono">Baca Dzikir</p>
              <p>Baca Dzikir</p>
            </Link>
          </div>
        </div>
        <div className="ted2 h-screen max-h-screen p-2  bg-yellow-400/25 relative flex w-full overflow-hidden">
          <div className="h-full translate-y-[79.5%] group-hover:-translate-y-full transition-all delay-72 duration-1000  w-full flex">
            <Link
              href={'/hadist'}
              className="h-full max-h-[20dvh]  bg-yellow-400 p-3 justify-between w-full flex flex-col rounded-xl"
            >
              <p className="uppercase font-mono">Baca Hadist</p>
              <p>Baca Hadist</p>
            </Link>
          </div>
        </div>
        <div className="ted3 h-screen max-h-screen p-2  bg-purple-400/25 relative flex w-full overflow-hidden">
          <div className="h-full translate-y-[79.5%] group-hover:-translate-y-full transition-all delay-72 duration-1000  w-full flex">
            <Link
              href={'/sholat'}
              className="h-full max-h-[20dvh]  bg-purple-400 p-3 justify-between w-full flex flex-col rounded-xl"
            >
              <p className="uppercase font-mono">Jadwal Sholat</p>
              <p>Jadwal Sholat</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
