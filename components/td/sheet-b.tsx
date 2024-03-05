import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

interface TableProps {
  link?: string,
  title: string
}

const ListTableAction = ({ link = '/', title = '' }: TableProps) => {
  return (
    <Link href={link}>
      <div className="cursor-pointer px-6 hover:bg-secondary duration-500 bg-opacity-0 hover:bg-opacity-100 transition-all">
        <h2 className="scroll-m-20 px-1.5 py-6 text-3xl font-semibold tracking-tight transition-colors uppercase first:mt-0 text-white">{title}</h2>
      </div>
    </Link>
  )
}

export default function SheetB({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  let dataList: TableProps[] = [{ link: "/qur-an", title: "Baca Qur’an" }, { link: "/dzikir", title: "Baca Dzikir" }, { link: "/hadist", title: "Baca Hadist" }, { link: "/jadwal-sholat", title: "Jadwal Sholat" }]

  // hide jadwal sholat
  dataList.pop()

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-primary">
        {dataList?.map((a, b) => {
          return (
            <div key={b} >
              <div className="h-[3px] bg-secondary-foreground/35 w-full" />
              <ListTableAction link={a?.link} title={a?.title} />
              {dataList?.length == b + 1 && <div className="h-[3px] bg-secondary-foreground/35 w-full" />}
            </div>
          )
        })}
      </SheetContent>
    </Sheet>
  )
}