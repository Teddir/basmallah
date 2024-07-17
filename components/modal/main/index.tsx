"use client";

import { useModal } from "@/context/modal";
import Image from "next/image";
import React, { useEffect } from "react";
import { animateModalOpen, animateModalClose } from "@/utils/animations";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Modal: React.FC = () => {
  const pathname = usePathname();
  const { isVisible, hideModal, modalContent } = useModal();

  useEffect(() => {
    if (isVisible) {
      animateModalOpen();
    }
  }, [isVisible]);

  const handleClose = () => {
    animateModalClose(() => {
      hideModal();
    });
  };
  
  if (!isVisible) return null;

  return (
    <div
      className="modal fixed inset-0 bg-white flex items-center justify-center z-50"
      onClick={() => pathname == "/" ? null :handleClose}
    >
      <Image
        id="bintik"
        src="/bintik-right.svg"
        alt="bintik Logo"
        className="dark:invert fixed top-0 right-0 w-full"
        width={100}
        height={100}
        priority
      />
      <Image
        id="aksesoris"
        src="/aksesoris.svg"
        alt="aksesoris Logo"
        className="dark:invert fixed -top-[5%] md:-top-[20%] sm:-top-[9%] -left-[8%] sm:-left-[10%] w-[220px] sm:w-2/4 md:w-2/6"
        width={100}
        height={100}
        priority
      />
      <Image
        id="aksesoris-rotated"
        src="/aksesoris.svg"
        alt="aksesoris Logo"
        className="dark:invert fixed -top-[5%] md:-top-[20%] sm:-top-[9%] -right-[8%] sm:-right-[10%] w-[220px] sm:w-2/4 md:w-2/6 rotate-90"
        width={100}
        height={100}
        priority
      />
      <Image
        id="bunga"
        src="/bunga.svg"
        alt="bunga Logo"
        className="dark:invert fixed w-2/3 sm:w-2/4 md:w-2/6 z-10"
        width={100}
        height={100}
        priority
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          poppins.className,
          "z-10 flex flex-col text-center p-12 sm:gap-3",
          "font-semibold text-2xl sm:text-3xl md:text-5xl tracking-wider",
        )}
      >
        {[
          { url: "sholat", title: "Jadwal Sholat" },
          { url: "quran", title: "Baca Qur’an" },
          { url: "hadist", title: "Baca Hadist" },
          { url: "dzikir", title: "Baca Dzikir" },
        ]?.map((a, b) => {
          return (
            <AnimateText key={b} url={a?.url} handleClose={handleClose} actived={pathname == `/${a?.url}`}>
              {a?.title}
            </AnimateText>
          );
        })}
      </div>
    </div>
  );
};

const AnimateText = ({
  handleClose,
  url,
  actived,
  children,
}: {
  handleClose: () => void;
  url: string;
  actived?: boolean | false;
  children: React.ReactNode;
}) => {
  return (
    <Link href={url} onClick={handleClose}>
      <p className={clsx("animated-text cursor-pointer",{
        'text-[#1D1C1C]': actived,
        'text-[#A8D7B5]': !actived
      })}>{children}</p>
    </Link>
  );
};
export default Modal;
