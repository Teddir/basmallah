interface Ayat {
  id: string,
  sura: string,
  aya: string,
  arabic_text: string,
  translation: string,
  footnotes: string
}

export default function ListAyat({ listAyat = [] }) {
  const list: Ayat[] = listAyat

  return list?.map((val, idx) => {
    return (
      <div key={idx}>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-right leading-[3.2rem]">
          {val?.arabic_text}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {val?.translation.replace(/\d+/g, '')} {`<${val?.id}>`}
        </p>
      </div>
    )
  })
}