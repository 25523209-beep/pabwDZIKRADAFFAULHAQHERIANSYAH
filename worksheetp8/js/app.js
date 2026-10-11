const profil = {
    nama: "Dzikra Daffa Ulhaq Heriansyah",
    peran: "Backend Developer",
    keahlian: ["Musik", "Basket", "Gaming"],
};

const jumlahBuku = 3;

const kalimat = `Nama saya ${profil.nama}, saya bekerja sebagai ${profil.peran}, dan memiliki ${profil.keahlian.length} minat.`;
console.log(kalimat);
console.log(`Jumlah buku saya: ${jumlahBuku}`);

function buatPerkenalan({ nama, peran}) {
    return 'Halo Nama saya Daffa dan Saya Berperan sebagai Backend Developer'
}

const formatKeahlian = (daftar) => daftar.join(", ")

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));