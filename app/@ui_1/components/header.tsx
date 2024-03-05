import Image from "next/image";
import { AlignRight } from 'lucide-react';
import SheetB from "@/components/td/sheet-b";

export default function Header() {
  return (
    <SheetB>
      <button className="group">
        <div className="absolute -right-20 -top-20 z-20 ">
          <div className="flex w-40 h-40 relative place-content-center items-center">
            <Image alt="ornamen-bunga" src="/images/hiasan-bunga.png" className="object-cover h-8 w-8 rotate transition-transform duration-500" fill />
          </div>
        </div>
        <div className="absolute right-[13px] top-[13px] z-40 flex flex-col items-end">
          <AlignRight width={24} height={24} className="text-primary" />
        </div>
      </button>
    </SheetB>
  )
}
