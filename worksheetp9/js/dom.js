import { daftarBuku } from "./app.js";

const daftar = document.querySelector("#daftar-buku");
const pesanKosong = document.querySelector("#kosong");
const tombolFilter = document.querySelectorAll("#filter button");
const formBuku = document.querySelector("#form-buku");

if (!daftar || !pesanKosong || tombolFilter.length === 0 || !formBuku) {
    throw new Error("Elemen daftar buku, filter, pesan kosong, atau form tidak ditemukan.");
}

const labelStatus = {
    sudah: "Sudah dibaca",
    sedang: "Sedang dibaca",
    belum: "Belum dibaca",
};

let statusFilter = "semua";

function tampilkanBuku() {
    daftar.replaceChildren();

    const bukuDitampilkan = daftarBuku.filter((buku) =>
        statusFilter === "semua" || buku.statusBaca === statusFilter
    );

    bukuDitampilkan.forEach((buku) => {
        const baris = document.createElement("tr");
        const judul = document.createElement("th");
        judul.scope = "row";
        judul.textContent = buku.judul;
        baris.append(judul);

        [buku.penulis, buku.tahun, labelStatus[buku.statusBaca]].forEach((nilai) => {
            const sel = document.createElement("td");
            sel.textContent = String(nilai);
            baris.append(sel);
        });

        daftar.append(baris);
    });

    pesanKosong.hidden = bukuDitampilkan.length > 0;
}

tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", () => {
        statusFilter = tombol.dataset.status;

        tombolFilter.forEach((tombolLain) => {
            const aktif = tombolLain === tombol;
            tombolLain.classList.toggle("active", aktif);
            tombolLain.setAttribute("aria-pressed", String(aktif));
        });

        tampilkanBuku();
    });
});

formBuku.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataForm = new FormData(formBuku);
    daftarBuku.push({
        judul: dataForm.get("judul-buku").trim(),
        penulis: dataForm.get("penulis-buku").trim(),
        tahun: Number(dataForm.get("tahun-buku")),
        statusBaca: dataForm.get("status-baca"),
    });

    formBuku.reset();
    tampilkanBuku();
});

tampilkanBuku();
