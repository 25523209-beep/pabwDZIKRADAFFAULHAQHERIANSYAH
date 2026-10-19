import { fetchBooks } from "./api.js";
import { aturDaftarBuku } from "./dom.js";

const profil = {
    nama: "Dzikra Daffa Ulhaq Heriansyah",
    peran: "Backend Developer",
    keahlian: ["Musik", "Basket", "Gaming"],
};

function buatPerkenalan({ nama, peran }) {
    return `Halo, nama saya ${nama} dan saya berperan sebagai ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(", ");

export const daftarBuku = [
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
        statusBaca: "sudah",
    },
    {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        tahun: 1980,
        statusBaca: "sedang",
    },
    {
        judul: "Filosofi Teras",
        penulis: "Henry Manampiring",
        tahun: 2018,
        statusBaca: "belum",
    },
];

const jumlahBuku = daftarBuku.length;
const kalimat = `Nama saya ${profil.nama}, saya bekerja sebagai ${profil.peran}, dan memiliki ${profil.keahlian.length} minat.`;
console.log(kalimat);
console.log(`Jumlah buku saya: ${jumlahBuku}`);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarBuku);

const sudah = daftarBuku.filter((buku) => buku.statusBaca === "sudah");
console.table(sudah);

const hasil = daftarBuku.find((buku) => buku.judul === "Bumi Manusia");
console.log(hasil);

const semuaJudul = daftarBuku.map((buku) => buku.judul);
console.log(semuaJudul);
console.log(semuaJudul.length === daftarBuku.length);

const urut = [...daftarBuku].sort((a, b) => a.tahun - b.tahun);
console.table(urut);

const statusApi = document.querySelector("#status-api");
if (!statusApi) {
    throw new Error("Elemen status API tidak ditemukan.");
}

async function muatBuku() {
    try {
        const buku = await fetchBooks();
        aturDaftarBuku(buku);
        statusApi.hidden = true;
    } catch (error) {
        statusApi.setAttribute("role", "alert");
        statusApi.textContent = error instanceof Error
            ? error.message
            : "Terjadi kesalahan yang tidak diketahui saat memuat buku.";
    }
}

muatBuku();
