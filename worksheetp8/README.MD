# PABW — Worksheet Pertemuan 8

**Nama:** Dzikra Daffa Ulhaq Heriansyah
**NIM:** 25523209
**Mata kuliah:** Pengembangan Aplikasi Berbasis Web (SIF302)
**Topik:** JavaScript Modern ES6+, Struktur Data, dan Array Methods

## Ringkasan

Halaman profil "Rak Buku Saya" dari Pertemuan 6 dihubungkan dengan JavaScript.
Isi halaman (identitas, daftar minat, daftar buku) dipindahkan dari teks di HTML
menjadi data di `js/app.js`, lalu diolah dengan fungsi dan array methods.

## Struktur folder

```
worksheet-p8/
├── profil.html        # halaman dari Pertemuan 6 (+ satu baris <script>)
├── (berkas CSS)       # berkas CSS dari Pertemuan 6, tidak diubah
└── js/
    └── app.js         # seluruh data dan fungsi Pertemuan 8
```

## Cara menjalankan

Halaman memakai `<script type="module">`, jadi tidak boleh dibuka dengan klik dua kali.

1. Pasang ekstensi **Live Server** di VS Code.
2. Buka folder `worksheet-p8/`, klik kanan `profil.html`, pilih **Open with Live Server**.
3. Alamat yang terbuka: `http://127.0.0.1:5500/profil.html`.
4. Buka DevTools (F12) → tab Console untuk melihat hasilnya.

Alternatif: `python3 -m http.server 8000` dari dalam folder `worksheet-p8/`.

## Isi pekerjaan

| Lembar | Isi | Berkas |
| --- | --- | --- |
| A | `app.js` dihubungkan ke `profil.html` lewat `<script type="module" src="js/app.js"></script>` sebelum `</body>` | `profil.html`, `js/app.js` |
| B | Data profil sebagai `const`, template literal untuk menyusun kalimat | `js/app.js` |
| C | Dua fungsi murni: pembuat kalimat perkenalan dan pemformat daftar minat | `js/app.js` |
| D | Array of object `daftarBuku`; `filter`, `find`, `map`, dan `sort` pada salinan | `js/app.js` |
| E | Tiga kasus galat dibaca dari Console, dicatat sebab dan perbaikannya | Tabel E.5 pada worksheet |
| F | Tiket keluar, penilaian mandiri, dan README ini | Worksheet, `README.md` |

## Galat yang dipelajari (Lembar E)

| Kasus | Sebab | Perbaikan |
| --- | --- | --- |
| `undefined` pada nilai yang seharusnya ada | Label salah ketik | Mencocokkan nama label dengan objek di `app.js` ||

## Deklarasi penggunaan AI

**Dibantu AI :**
- Kerangka kode contoh dan petunjuk langkah pengerjaan..