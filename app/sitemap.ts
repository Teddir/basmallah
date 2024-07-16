import { MetadataRoute } from "next";

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000";

interface SitemapType {
  url: string;
  lastModified: Date;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap
  const start = id * 50000;
  const end = start + 50000;
  const listMainHadist: string[] = [
    "abu-daud",
    "ahmad",
    "bukhari",
    "darimi",
    "ibnu-majah",
    "malik",
    "muslim",
    "nasai",
    "tirmidzi",
  ];
  const listDzikirM: string[] = ["pagi", "petang"];
  const listDzikirO: string[] = ["qubro", "sugro"];
  const listQuran: string[] = ["Surah", "Tafsir"];

  let urlHadist: SitemapType[] = [];
  let urlDzikirM: SitemapType[] = [];
  let urlDzikirO: SitemapType[] = [];
  let urlQuran: SitemapType[] = [];

  listMainHadist.forEach((a, b) => {
    urlHadist.push({
      url: `${BASE_URL}/hadist?query=${a}`,
      lastModified: new Date(),
    });
  });


  listDzikirO.forEach((a, b) => {
    urlDzikirM.push({
      url: `${BASE_URL}/dzikir?query=${a}`,
      lastModified: new Date(),
    });
  });

  listDzikirM.forEach((a, b) => {
    urlDzikirO.push({
      url: `${BASE_URL}/dzikir?list=${a}`,
      lastModified: new Date(),
    });
  });

  listQuran.forEach((a, b) => {
    urlQuran.push({
      url: `${BASE_URL}/quran?query=${a}`,
      lastModified: new Date(),
    });
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/sholat`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/quran`,
      lastModified: new Date(),
    },
    ...urlQuran,
    {
      url: `${BASE_URL}/hadist`,
      lastModified: new Date(),
    },
    ...urlHadist,
    {
      url: `${BASE_URL}/dzikir`,
      lastModified: new Date(),
    },
    ...urlDzikirM,
    ...urlDzikirO,
  ];
}
