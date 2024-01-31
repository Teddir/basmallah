import { cn } from '@/lib/utils';
import { promises as fs } from 'fs';
import Link from 'next/link';

interface Surah {
  name: string,
  nAyah: number,
  revelationOrder: number,
  type: string,
  start: number,
  end: number,
  translation: string,
}

export default async function ListSurah({ id = 0 }) {
  const file = await fs.readFile(process.cwd() + '/app/surah.json', 'utf8');
  const fileTranslate = await fs.readFile(process.cwd() + '/app/id-kemenag.json', 'utf8');
  const data = JSON.parse(file);
  const dataTranslate = JSON.parse(fileTranslate);

  const listSurah: Surah[] = Object.entries(data ?? {})?.map(([_, item]) => item as Surah);
  listSurah.forEach((val, idx) => {
    val.name = Object.values(dataTranslate as Surah)?.[idx].name
    val.translation = Object.values(dataTranslate as Surah)?.[idx].translation
  })

  return listSurah?.map((val, idx) => {
    let active = id == idx + 1;
    
    return (
      <div key={idx}>
        <Link href={`${idx + 1}`}
          className={cn(
            "leading-7 [&:not(:first-child)]:mt-6",
            active ? 'text-primary' : 'text-primary/50',
          )}
        >
          {idx + 1} - {val?.name}
        </Link>
      </div>
    )
  })
}