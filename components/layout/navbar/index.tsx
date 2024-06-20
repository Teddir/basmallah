"use client";

import { useModal } from "@/context/modal";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  weight: ["400", "700"], // Pilih berat yang ingin Anda gunakan
  subsets: ["latin"], // Pilih subset yang Anda butuhkan
  display: "swap",
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
        className="absolute -right-[40px] -top-[40px] group/navbar cursor-pointer"
        onClick={handleShowModal}
      >
        <div className="relative w-full h-full items-center justify-center flex">
          <Image
            src="/bunga.svg"
            alt="Vercel Logo"
            className="dark:invert group-hover/navbar:rotate-90 transition-all duration-300 text-purple-400"
            width={150}
            height={100}
            priority
          />
          <div
            className={clsx(
              poppins.className,
              "absolute pr-4 pt-2 font-medium tracking-[1.5px] uppercase text-primary"
            )}
          >
            {text?.split("")?.map((a, b) => a)}
          </div>
        </div>
      </div>
    </nav>
  );
}
