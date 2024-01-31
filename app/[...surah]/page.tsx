import { ScrollArea } from "@/components/ui/scroll-area";
import ListAyat from "./quran/list-ayat";
import ListSurah from "./quran/list-surah";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

interface AyatQuranProps {
  params: {
    [key: string]: string | string[]; // Replace with more specific types if you know the exact structure
  };
}

export default async function AyatQuran({params}:AyatQuranProps) {
  
  const id = params.surah[0] == 'ngaji' ? 1 : Number(params.surah[0])
  const res = await fetch(`https://quranenc.com/api/v1/translation/sura/indonesian_complex/${id}`);
  const data = await res.json();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <ScrollArea className="max-h-screen h-screen">
          <div className="p-32  flex flex-col gap-8">
            {<ListAyat listAyat={data?.result}/>}
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={20}>
        <ScrollArea className="max-h-screen h-screen">
          <div className="p-32">
            {<ListSurah id={id}/>}
          </div>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
