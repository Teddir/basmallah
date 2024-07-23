import { unstable_noStore as noStore } from "next/cache";

const BASE_URL = process.env.BASE_URL
  ? process.env.BASE_URL
  : "http://localhost:3000";

interface ObjGeo {
  longitude: number;
  latitude: number;
}
export async function getSholat({
  city,
  geo,
}: {
  city?: string;
  geo?: ObjGeo;
}): Promise<DataSholat[]> {
  try {
    noStore();
    let date = new Date();
    let years = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let province = !city ? "Jakarta" : city;
    province =
      province.charAt(0).toUpperCase() + province.slice(1).toLowerCase();

    const uri =
      !geo?.latitude || !geo?.longitude
        ? `https://api.aladhan.com/v1/calendarByCity/${years}/${mounth}?city=${province}&country=Indonesia&method=20`
        : `https://api.aladhan.com/v1/hijriCalendar/${years}/${mounth}?latitude=${geo.latitude}&longitude=${geo.longitude}&method=20`;

    const res = await fetch(uri, {
      method: "GET",
      cache: "default",
    });
    const datas = await res.json();

    const prayerTimeMapping: { [key: string]: string } = {
      Fajr: "Subuh",
      Sunrise: "Terbit",
      Dhuhr: "Zuhur",
      Asr: "Asar",
      Maghrib: "Magrib",
      Isha: "Isya",
    };

    const mappedData: DataSholat[] = datas.data?.map(
      (a: PrayerTimesResponse) => {
        return {
          date: a.date.readable,
          address: a.meta.timezone,
          base_on: a.meta.method.name,
          time_pray: Object.entries(a.timings).reduce(
            (acc: TimePray[], [key, value]) => {
              if (prayerTimeMapping[key]) {
                acc.push({
                  id: prayerTimeMapping[key],
                  value: value?.split(" ")[0],
                });
              }
              return acc;
            },
            []
          ),
        };
      }
    );

    return mappedData;
  } catch (error) {
    error instanceof Error && console.log(error?.message);
    return [];
  }
}

export async function getQuran({
  surah,
  type = "surat",
}: {
  surah?: number;
  type: string; //"surat" | "tafsir" | "surah" | 'juz';
}) {
  try {
    noStore();
    let isDetailSurat = !surah || surah?.toLocaleString()?.length <= 0;
    let uri = `https://equran.id/api`;
    uri = surah == 2 ? uri : `${uri}/v2`;
    uri = `${uri}/${
      type.toLocaleLowerCase() == "surah" ? "surat" : type?.toLocaleLowerCase()
    }`;
    uri = isDetailSurat ? uri : `${uri}/${surah}`;
    uri = type == "list-surah" ? "http://api.alquran.cloud/v1/surah" : uri;

    const res = await fetch(uri, {
      method: "GET",
      cache: "default",
    });
    const response = await res.json();
    const datas = surah == 2 ? response : response.data;
    return datas;
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }
}

export async function getAlmatsurat({
  time = "pagi",
  type = "kubro",
}: {
  time: string | "pagi" | "petang";
  type: string | "kubro" | "sugro";
}) {
  try {
    let res = require(`./json/almatsurat/${time.toLocaleLowerCase()}/almatsurat-${type.toLocaleLowerCase()}.json`);

    return res || [];
  } catch (error) {
    error instanceof Error && console.log(error.message);
  }
}

async function readJsonFiles({ listMainHadist }: { listMainHadist: string[] }) {
  try {
    const fileReadPromises = listMainHadist.map((a) => {
      const isVal = require(`./json/hadist/${a}.json`);
      return isVal;
    });
    const jsonData = fileReadPromises.map((datas, b) => {
      const isDatas = datas.map((element: { imam: string }) => {
        element.imam = listMainHadist[b];
        return element;
      });
      return isDatas;
    });
    const combinedData = jsonData.reduce((acc, data) => acc.concat(data), []);

    return combinedData;
  } catch (error) {
    console.error("Error reading files:", error);
  }
}

export async function getHadist({
  id,
  search,
}: {
  id: string;
  search: string;
}) {
  try {
    if (!id) throw new Error("id not found");

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
    if (listMainHadist.indexOf(id) == -1) {
      const datas: HadistItem[] = await readJsonFiles({
        listMainHadist,
      });
      return datas.filter((a) => a.id.includes(search) || a.imam.includes(id));
    } else {
      const isVal: HadistItem[] = require(`./json/hadist/${id}.json`);
      return isVal
        .map((a, b) => {
          a.imam = id;
          return a;
        })
        .filter((a) => a.id.includes(search));
    }
  } catch (error) {
    error instanceof Error && console.log(error?.message);
    return [];
  }
}
