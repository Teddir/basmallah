# Basmallah

![alt text](https://basmallah.vercel.app/favicon.ico)

**Basmallah** adalah aplikasi yang berisi kumpulan Dzikir, Al-Quran, Hadist, dan Jadwal sholat untuk membantu umat Muslim dalam menjalankan ibadah sehari-hari.

## Fitur

- **Dzikir**: Kumpulan dzikir harian yang dapat dibaca setiap saat.
- **Al-Quran**: Akses mudah ke seluruh ayat Al-Quran dengan terjemahan.
- **Hadist**: Kumpulan hadist shahih dari berbagai sumber terpercaya.
- **Jadwal Sholat**: Informasi waktu sholat harian berdasarkan lokasi pengguna.

![alt text](https://basmallah.vercel.app/images/ss/ss-dzikir.png)
![alt text](https://basmallah.vercel.app/images/ss/ss-surah.png)
![alt text](https://basmallah.vercel.app/images/ss/ss-hadist-search.png)
![alt text](https://basmallah.vercel.app/images/ss/ss-hadist.png)
![alt text](https://basmallah.vercel.app/images/ss/ss-jadwal-sholat.png)

## Sumber Data

- **Hadist**: [Hadith API](https://github.com/gadingnst/hadith-api)
- **Jadwal Sholat**: [Aladhan.com](https://aladhan.com)
- **Dzikir**: [Muslim API](https://github.com/Otang45/muslim-api)
- **Al-Quran**: [Al-Quran API](https://alquran.cloud/api) dan [EQuran API](https://equran.id/api)

## Hadist yang Tersedia

- Abu Daud
- Ahmad
- Bukhari
- Darimi
- Ibnu Majah
- Malik
- Muslim
- Nasai
- Tirmidzi

## Dzikir yang Tersedia

- Al-Ma'tsurat Pagi Kubro
- Al-Ma'tsurat Pagi Sugro
- Al-Ma'tsurat Petang Kubro
- Al-Ma'tsurat Petang Sugro

## Instalasi

1. Clone repositori ini:
    ```bash
    git clone https://github.com/Teddir/basmallah.git
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd basmallah
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Penggunaan

1. Jalankan aplikasi:
    ```bash
    npm start
    ```
2. Akses aplikasi melalui browser di alamat `http://localhost:3000`.

## Kontribusi

Kami menyambut kontribusi dari siapa pun. Silakan buat *pull request* untuk menambahkan fitur baru atau memperbaiki bug.

### Persyaratan Kontribusi

Agar kontribusi Anda sesuai dengan standar proyek ini, mohon ikuti langkah-langkah berikut:

1. **Fork repositori ini** ke akun GitHub Anda.
2. **Clone repositori fork** ke mesin lokal Anda:
    ```bash
    git clone https://github.com/Teddir/basmallah.git
    ```
3. Buat *branch* baru untuk fitur atau perbaikan bug Anda:
    ```bash
    git checkout -b nama-branch-anda
    ```
4. Lakukan perubahan yang diperlukan dan commit perubahan tersebut sesuai dengan konvensi commit berikut:
    - `feat`: Penambahan fitur baru.
    - `fix`: Perbaikan bug.
    - `docs`: Perubahan atau penambahan dokumentasi.
    - `style`: Perbaikan format kode (white-space, formatting, missing semi-colons, dll).
    - `refactor`: Perubahan kode yang tidak memperbaiki bug atau menambah fitur.
    - `test`: Penambahan atau perbaikan tes.
    - `chore`: Pembaruan tugas build, manajemen package, dll.
    ```bash
    git commit -m "feat: deskripsi singkat tentang perubahan Anda"
    ```
5. Push *branch* ke repositori fork Anda:
    ```bash
    git push origin nama-branch-anda
    ```
6. Buka *pull request* di repositori asli dan jelaskan perubahan yang Anda buat.

### Panduan Penulisan Kode

- Pastikan kode Anda bersih dan mudah dibaca.
- Ikuti konvensi penamaan yang sudah ada.
- Sertakan komentar yang jelas dan informatif jika diperlukan.
- Tambahkan atau perbarui tes unit untuk fitur atau perbaikan bug yang Anda buat.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Semoga aplikasi ini bermanfaat untuk kita semua. Jika ada saran atau masukan, jangan ragu untuk menghubungi kami.

---

Terima kasih.