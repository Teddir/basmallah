import { ScrollArea } from "@/components/ui/scroll-area";
import ListAyat from "./quran/list-ayat";
import ListSurah from "./quran/list-surah";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import AlertMarkAya from "./quran/component/alert-mark-ayat";

interface AyatQuranProps {
  params: {
    [key: string]: string | string[]; // Replace with more specific types if you know the exact structure
  };
}

export default async function AyatQuran({ params }: AyatQuranProps) {

  const id = params.surah[0] == 'ngaji' ? 1 : Number(params.surah[0])
  const res = await fetch(`https://quranenc.com/api/v1/translation/sura/indonesian_complex/${id}`);
  const data = await res.json();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border max-h-screen"
    >
      <ResizablePanel defaultSize={50}>
        <ScrollArea className="max-h-screen h-screen">
          <div className="p-32  flex flex-col gap-8">
            {<ListAyat listAyat={data?.result} />}
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={35} minSize={35}>
        <div className="flex flex-col px-8 pt-4">
          <AlertMarkAya/>
        </div>
        <ScrollArea className="max-h-screen h-screen">
          <div className="flex flex-col px-32 pt-16 pb-32">
            <h1 className="scroll-m-20 mb-16 text-4xl font-extrabold tracking-tight lg:text-5xl">
              LIST SURAT
            </h1>
            {<ListSurah id={id} />}
          </div>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
