"use client";

import React, { useEffect, useRef, useState } from "react";
import ListSholat from "./List";
import { animatedPartical } from "@/utils/animations";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const today = new Date().toLocaleDateString("en-US", {
  day: "numeric",
});

export const calculateTimeDifference = (targetTime: string, isNextDay: boolean) => {
  const [hours, minutes] = targetTime.split(":").map(Number);
  const targetDate = new Date();
  targetDate.setHours(hours, minutes, 0, 0);

  const now = new Date();

  // If the target time is on the next day, add 24 hours to the target time
  if (isNextDay) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  const diff = targetDate.getTime() - now.getTime();

  const hoursDiff = Math.floor(diff / (1000 * 60 * 60));
  const minutesDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secondsDiff = Math.floor((diff % (1000 * 60)) / 1000);

  if (hoursDiff <= 0) {
    if (minutesDiff <= 0) {
      return `${secondsDiff} Detik`;
    } else {
      return `${minutesDiff} Menit, ${secondsDiff} Detik`;
    }
  } else {
    return `${hoursDiff} Jam, ${minutesDiff} Menit, ${secondsDiff} Detik`;
  }
};


export const findNextPrayerTime = (datas: DataSholat[], activeIndex: number) => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  // Check for the next prayer time today
  const activeData = datas[activeIndex];
  let nextPrayer = activeData.time_pray.find((prayer) => {
    const [hours, minutes] = prayer.value.split(":").map(Number);
    const prayerTime = hours * 60 + minutes;
    return prayerTime > currentTime;
  });

  let isNextDay = false;

  // If no next prayer time is found today, check the next day
  if (!nextPrayer && activeIndex < datas.length - 1) {
    const nextDayData = datas[activeIndex + 1];
    nextPrayer = nextDayData.time_pray[0]; // Get the first prayer of the next day
    isNextDay = true;
  }

  return { nextPrayer, isNextDay };
};

export default function Body({ datas = [] }: { datas: DataSholat[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2);
  const [nextPrayerTime, setNextPrayerTime] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      return animatedPartical(event);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const activeCardIndex = datas.findIndex(
      (data) => data.date?.split(" ")[0] === today
    );
    setActiveIndex(activeCardIndex !== -1 ? activeCardIndex : 2);
  }, [datas]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (datas.length > 0 && activeIndex >= 0) {
      const { nextPrayer, isNextDay } = findNextPrayerTime(datas, activeIndex);

      if (nextPrayer) {
        setNextPrayerTime(`${nextPrayer.id}, ${nextPrayer.value}`);

         // Function to calculate and update remaining time
         const updateTimeRemaining = () => {
          const remainingTime = calculateTimeDifference(nextPrayer.value, isNextDay);
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

  const handleClickNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const handleClickPrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    try {
      setLoading(true);
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    } catch (error) {
      error instanceof Error && console.log(error?.message);
    } finally {
      setLoading(false);
    }
  }, 300);

  return (
    <div className="flex flex-col gap-10 sm:gap-[68px] justify-center items-center min-h-screen">
      <div className="flex flex-col text-center space-y-2 z-20">
        <p className="text-xl sm:text-3xl font-normal">{timeRemaining} menuju</p>
        <p className="text-xl sm:text-4xl font-semibold">{nextPrayerTime}</p>
      </div>
      <input
        type="text"
        className="peer block py-4 px-5 rounded-full bg-primary w-[70%] sm:max-w-xl text-xs sm:text-base focus:ring-[#5E7765] z-20 placeholder-gray-900"
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Search by Province (Jakarta)"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {loading ? (
        <p>loading...</p>
      ) : (
        <ListSholat
          datas={datas}
          activeIndex={activeIndex}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev}
        />
      )}
    </div>
  );
}
