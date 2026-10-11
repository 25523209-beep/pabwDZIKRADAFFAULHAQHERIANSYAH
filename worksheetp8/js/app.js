const profil = {
    nama: "Dzikra Daffa Ulhaq Heriansyah",
    peran: "Backend Developer",
    keahlian: ["Musik", "Basket", "Gaming"],
};

function buatPerkenalan({ nama, peran }) {
    return `Halo, nama saya ${nama} dan saya berperan sebagai ${peran}.`;
}

const formatKeahlian = (daftar) => daftar.join(", ");

const daftarBuku = [
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
        sudahDibaca: true,
    },
    {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        tahun: 1980,
        sudahDibaca: false,
    },
    {
        judul: "Filosofi Teras",
        penulis: "Henry Manampiring",
        tahun: 2018,
        sudahDibaca: false,
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

const sudah = daftarBuku.filter((buku) => buku.sudahDibaca === true);
console.table(sudah);

const hasil = daftarBuku.find((buku) => buku.judul === "Bumi Manusia");
console.log(hasil);

const semuaJudul = daftarBuku.map((buku) => buku.judul);
console.log(semuaJudul);
console.log(semuaJudul.length === daftarBuku.length);

const urut = [...daftarBuku].sort((a, b) => a.tahun - b.tahun);
console.table(urut);
console.table(daftarBuku);