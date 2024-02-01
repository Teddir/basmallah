'use client';

import localFont from 'next/font/local'
import { cn } from "@/lib/utils";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useEffect, useMemo } from 'react';
const myFont = localFont({
  src: '../../../fonts/arab/NotoNaskhArabic-Regular.ttf',
  display: 'swap',
})
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast"

interface Ayat {
  id: string,
  sura: string,
  aya: string,
  arabic_text: string,
  translation: string,
  footnotes: string,
  name: string,
  name_translation: string,
}

interface BA {
  key: number,
  val: Ayat
}

export default function ButtonAyat({ key, val }: BA) {
  const { toast } = useToast()
  const { data: markAya, refetch } = useQuery({
    queryKey: ["mark_aya"],
    queryFn: () => {
      if (validId) return;
      const oldMarkAya = JSON.parse(
        localStorage.getItem('mark_aya') ?? '{}'
      )
      if (!oldMarkAya) return {}
      return oldMarkAya
    },
  });

  const validId = useMemo(() => markAya?.aya == val?.aya && markAya?.sura == val?.sura, [markAya, val])

  async function handleMarkAya() {
    try {
      if (validId) return;
      localStorage.setItem('mark_aya', JSON.stringify(val))
      refetch()
      return toast({
        description: "The aya you marked has been saved successfully.",
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const element = document.getElementById(markAya?.aya);
    if (!element) return;
    element.scrollIntoView()
  }, [markAya])

  return (
    <Dialog key={key}>
      <DialogTrigger asChild>
        <button id={val?.aya}>
          <h2 className={cn(
            "mt-10 scroll-m-20 text-3xl tracking-tight transition-colors first:mt-0 text-right leading-[3rem]",
            myFont.className,
          )}>
            {val?.arabic_text}
          </h2>
          <div className='relative w-full'>
            <div className='w-full justify-end flex'>
              <div className={cn(
                validId ? 'bg-primary' : 'bg-border',
                'w-0.5 h-2 right-0 top-0')} />
            </div>
            <div className={cn(
              validId ? 'bg-primary' : 'bg-border',
              'w-full h-0.5')} />
            <div className={cn(
              validId ? 'bg-primary' : 'bg-border',
              'w-0.5 h-2 left-0')} />
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-left">
            {val?.translation.replace(/\d+/g, '')} {`<${val?.aya}>`}
          </p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mark aya : {val?.name} ({val?.aya})</DialogTitle>
          <DialogDescription>
            Deadline for reading in : <br />
            - <br />
            {val?.arabic_text}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() => handleMarkAya()}>
              Mark
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}