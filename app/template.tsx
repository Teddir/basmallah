'use client'
import { animatePageIn } from "@/utils/animations";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => animatePageIn(),[])
  return (
    <div className="flex w-full z-50">
      <Image
        id="aksesoris-1"
        src="/aksesoris.svg"
        alt="Vercel Logo"
        className="dark:invert fixed top-0  w-1/2 left-0 z-50"
        width={100}
        height={100}
        priority
      />
      {children}
    </div>
  );
}
