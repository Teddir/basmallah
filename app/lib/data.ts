import { unstable_noStore as noStore } from "next/cache";

export async function getSholat({
  city,
}: {
  city?: string;
}): Promise<DataSholat[]> {
  try {
    noStore();
    let date = new Date();
    let years = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let province = !city ? "Jakarta" : city;
    province =
      province.charAt(0).toUpperCase() + province.slice(1).toLowerCase();

    const uri = `https://api.aladhan.com/v1/calendarByCity/${years}/${mounth}?city=${province}&country=Indonesia&method=20`;

    const res = await fetch(uri, {
      method: "GET",
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
