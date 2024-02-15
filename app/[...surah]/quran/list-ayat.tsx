import ButtonAyat from './component/button-ayat';
import { promises as fs } from 'fs';
interface Ayat {
  id: string,
  sura: string,
  aya: string,
  arabic_text: string,
  translation: string,
  footnotes: string
  name: string,
  name_translation: string,
}

interface Surah {
  name: string,
  nAyah: number,
  revelationOrder: number,
  type: string,
  start: number,
  end: number,
  translation: string,
}

export default async function ListAyat({ listAyat = [] }) {
  const file = await fs.readFile(process.cwd() + '/app/json/id-kemenag.json', 'utf8');
  const data = JSON.parse(file);
  const listAya: Ayat[] = listAyat
  const listSurah: Surah[] = Object.entries(data ?? {})?.map(([_, item]) => item as Surah);
  listAya.forEach((val, idx) => {
    val.name = Object.values(listSurah)?.[idx]?.name
    val.name_translation = Object.values(listSurah)?.[idx]?.translation
  })

  return listAya?.map((val, idx) => <ButtonAyat key={idx} val={val} />)
}