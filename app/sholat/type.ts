interface TimePray {
  id: string;
  value: string;
}

interface DataSholat {
  date: string;
  address: string;
  base_on: string;
  time_pray: TimePray[];
}

interface Weekday {
  en: string;
  ar?: string;
}

interface Month {
  number: number;
  en: string;
  ar?: string;
}

interface Designation {
  abbreviated: string;
  expanded: string;
}

interface Gregorian {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
}

interface Hijri {
  date: string;
  format: string;
  day: string;
  weekday: Weekday;
  month: Month;
  year: string;
  designation: Designation;
  holidays: string[];
}

interface DateInfo {
  readable: string;
  timestamp: string;
  gregorian: Gregorian;
  hijri: Hijri;
}

interface Method {
  id: number;
  name: string;
  params: Record<string, unknown>;
  location: Record<string, unknown>;
}

interface Offset {
  Imsak: number;
  Fajr: number;
  Sunrise: number;
  Dhuhr: number;
  Asr: number;
  Maghrib: number;
  Sunset: number;
  Isha: number;
  Midnight: number;
}

interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: Method;
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Offset;
}

interface PrayerTimesResponse {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Sunset: string;
    Maghrib: string;
    Isha: string;
    Imsak: string;
    Midnight: string;
    Firstthird: string;
    Lastthird: string;
  };
  date: DateInfo;
  meta: Meta;
}
