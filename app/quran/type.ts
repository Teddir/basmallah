interface AudioFull {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
}

interface Surah {
  nomor: number;
  number:number;
  englishName:string;
  nama: string;
  namaLatin?: string;
  nama_latin?:string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull: AudioFull;
  
}

interface Audio {
    // Assuming audio object has key-value pairs where key is string and value is string
    [key: string]: string;
  }

  
interface AyatType {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: Audio;
    id?:number;
    surah?:number;
    nomor?:number;
    ar?:string;
    tr?:string;
    idn?:string;
  }

interface SurahDetails extends Surah {
  ayat: AyatType[];
  suratSelanjutnya:
    | {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
      }
    | false;
  suratSebelumnya:
    | {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
      }
    | false;
}

interface Tafsir {
  ayat:number,
  teks: string,
  tafsir?: string,
  id?:number,
  surah?:number,
}

interface TafsirSurah extends Surah {
  tafsir: Tafsir[]
}