import React, { useEffect, useState } from "react";
import clsx from "clsx";

const today = new Date().toLocaleDateString("en-US", {
  day: "numeric",
});

const getCurrentTimeInMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

const ListSholat = ({
  datas = [],
  activeIndex,
  handleClickNext,
  handleClickPrev,
}: {
  datas: DataSholat[];
  activeIndex: number;
  handleClickNext: () => void;
  handleClickPrev: () => void;
}) => {
  const currentTimeInMinutes = getCurrentTimeInMinutes();

  return (
    <>
      <div className="flex justify-center items-center z-20 bg-white">
        <div
          className={clsx("flex", {
            "ml-[130vw] sm:ml-[100vw]": activeIndex === 0,
            "mr-[130vw] sm:mr-[100vw]": activeIndex === datas.length - 1,
          })}
        >
          {datas.map((data, index) => {
            const position = getPositionClass(
              index,
              activeIndex,
              datas?.length
            );
            // Find the index of the active prayer time
            let activeTimeIndex = -1;
            if (position === "center") {
              if (today > data?.date?.split(" ")[0]) activeTimeIndex = 5;
              else if (today < data?.date?.split(" ")[0]) activeTimeIndex = -1;
              else
                for (let i = 0; i < data.time_pray.length; i++) {
                  const [hours, minutes] = data.time_pray[i].value
                    .split(":")
                    .map(Number);
                  const prayerTimeInMinutes = hours * 60 + minutes;
                  if (prayerTimeInMinutes <= currentTimeInMinutes) {
                    activeTimeIndex = i;
                  } else {
                    break; // Stop when we find the first prayer time after the current time
                  }
                }
            }

            return (
              <div
                key={index}
                className={`card ${position} min-w-[424px] xl:min-w-[824px] select-none cursor-pointer hover:opacity-[1]`}
                onClick={() =>
                  position == "left"
                    ? handleClickPrev()
                    : position == "right"
                    ? handleClickNext()
                    : null
                }
              >
                <div className="border border-primary listBorder rounded-lg p-4 sm:p-6 hover:shadow-md hover:shadow-primary/40 space-y-6">
                  <div>
                    <p className="font-medium text-lg">{data?.date}</p>
                    <p className="text-gray-400 text-sm font-light">
                      {data?.address}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    {data?.time_pray?.map((aa, bb) => {
                      return (
                        <div key={bb} className="flex flex-col text-start">
                          <p className="font-medium text-sm">{aa?.id}</p>
                          <p
                            className={clsx("text-sm", {
                              "text-primary": bb == activeTimeIndex,
                              "text-gray-400 font-light":
                                bb !== activeTimeIndex,
                            })}
                          >
                            {aa?.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="font-light text-gray-300 text-xs">
                    {data?.base_on}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const getPositionClass = (
  index: number,
  activeIndex: number,
  length: number
) => {
  if (index === activeIndex) {
    return "center";
  } else if (index === (activeIndex - 1 + length) % length) {
    return "left";
  } else if (index === (activeIndex + 1) % length) {
    return "right";
  }
  return "hidden";
};

export default ListSholat;
