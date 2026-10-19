# Worksheet PABW Pertemuan 10

## Implementasi

- `js/api.js` menyimpan satu alamat API publik Open Library dan mengekspor
  `fetchBooks()`.
- `fetchBooks()` memeriksa `response.ok` sebelum membaca body, memeriksa
  `Content-Type`, membaca JSON dengan `response.json()`, dan mengubah bentuk
  respons menjadi data buku untuk halaman.
- `js/app.js` memanggil API di dalam fungsi async dan menangani kegagalan untuk
  ditampilkan pada halaman. `js/dom.js` hanya mengurus kartu, filter, dan form.
- Halaman menyediakan state loading, success, failure, dan empty. Data dari
  API ditampilkan dengan `textContent`; status baca awal buku API adalah
  "Belum dibaca".

## Menjalankan

Jalankan server lokal dari folder `worksheetp10/` agar modul JavaScript dapat
diimpor:

```sh
python -m http.server 8000
```

Buka `http://localhost:8000/profil.html`. Koneksi internet diperlukan untuk
mengambil katalog dari Open Library; API tidak memerlukan access key.

## Peta respons JSON

Contoh objek buku Open Library di dalam `data.docs`:

| Kunci | Bentuk nilai | Penggunaan |
|---|---|---|
| `numFound` | number | `data.numFound` |
| `docs` | array objek | `data.docs.map(...)` |
| `title` | string | `buku.title` |
| `author_name` | array string (opsional) | `buku.author_name` |
| `first_publish_year` | number (opsional) | `buku.first_publish_year` |

`response.json()` mengubah body respons menjadi nilai JavaScript. Untuk arah
sebaliknya, `JSON.stringify(value)` mengubah nilai JavaScript menjadi teks JSON
yang dapat dikirim atau disimpan; halaman ini memakai GET sehingga tidak perlu
mengirim payload JSON.

## State dan kasus yang diperiksa

| State/kasus | Hasil yang diharapkan |
|---|---|
| Loading | Pesan "Memuat daftar buku..." muncul sebelum respons selesai. |
| Success | Kartu buku dari `data.docs` muncul. |
| Failure | Pesan kesalahan API atau jaringan muncul pada halaman. |
| Empty | Pesan "Tidak ada buku pada kategori ini." tampil untuk daftar kosong atau filter tanpa hasil. |
| HTTP 404/500 | Ditolak melalui pemeriksaan `response.ok`, sebelum body dibaca. |
| Body bukan JSON | Kesalahan format ditangani dan pesannya ditampilkan pada halaman. |
| `await` di luar fungsi async | Tidak digunakan; `await` berada di dalam `muatBuku()` dan `fetchBooks()`. |

Untuk menguji empty state dari Console di halaman yang sudah dibuka, jalankan:

```js
import("./js/dom.js").then(({ aturDaftarBuku }) => aturDaftarBuku([]));
```

## Catatan Worksheet F

- Fungsi yang akan diimpor pada worksheet berikutnya: `fetchBooks` dari
  `./api.js`.
- Pertanyaan exit ticket:
  1. `fetch` tidak menolak Promise untuk status 404 karena respons HTTP tetap
     diterima; `response.ok` harus diperiksa sendiri.
  2. `await` hanya digunakan di dalam fungsi `async` (atau top-level module);
     pada worksheet ini `await` berada dalam fungsi async.
  3. State empty kerap terlewat; halaman menampilkan pesan khusus saat array
     kosong.
- Satu baris untuk diingat: `if (!response.ok) throw new Error(...)` di
  `js/api.js`, agar status HTTP gagal tidak dianggap sebagai data sukses.
- Tangkapan layar empat state belum disertakan. Simpan bukti nyata dari browser
  (success, failure, empty, dan loading) bersama submission setelah pengujian
  manual; jangan menandai bukti sebagai tersedia sebelum disimpan.
- Penilaian diri dan catatan untuk dosen bersifat pribadi. Isi bagian tersebut
  berdasarkan pengujian dan pengalaman sendiri.

## Pengungkapan penggunaan AI

 AI membantu
menambahkan pemanggilan API, pemetaan respons Open Library, penanganan state dan
error