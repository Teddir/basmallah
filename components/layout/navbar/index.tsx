"use client";

import { useModal } from "@/context/modal";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

let text = "Menu";

export default function Navbar() {
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal("");
  };

  return (
    <nav className="px-4 flex relative z-20">
      <div
        className="absolute right-0 -top-20 left-0 sm:left-auto sm:-translate-x-1/2 group/navbar cursor-pointer"
        onClick={handleShowModal}
      >
        <div className="relative w-full h-full items-center justify-center flex">
          <Image
            src="/bunga.svg"
            alt="bunga"
            className="group-hover/navbar:rotate-90 transition-all duration-300 text-purple-400"
            width={150}
            height={100}
            priority
          />
          <div
            className={clsx(
              poppins.className,
              "absolute pt-14 font-medium tracking-[1.5px] uppercase text-primary"
            )}
          >
            {text?.split("")?.map((a, b) => a)}
          </div>
        </div>
      </div>
    </nav>
  );
}
