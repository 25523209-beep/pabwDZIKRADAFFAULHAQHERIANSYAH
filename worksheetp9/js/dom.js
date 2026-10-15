import { daftarBuku } from "./app.js";

const daftar = document.querySelector("#daftar-buku");
const pesanKosong = document.querySelector("#kosong");
const filterRow = document.querySelector("#filter");
const formBuku = document.querySelector("#form-buku");

if (!daftar || !pesanKosong || !filterRow || !formBuku) {
    throw new Error("Elemen daftar buku, filter, pesan kosong, atau form tidak ditemukan.");
}

const labelStatus = {
    sudah: "Sudah dibaca",
    sedang: "Sedang dibaca",
    belum: "Belum dibaca",
};

let statusFilter = "semua";

function buildCard(buku) {
    const kartu = document.createElement("li");
    kartu.className = "card";

    const judul = document.createElement("h3");
    judul.textContent = buku.judul;
    kartu.append(judul);

    const penulis = document.createElement("p");
    penulis.textContent = `Penulis: ${buku.penulis}`;
    kartu.append(penulis);

    const tahun = document.createElement("p");
    tahun.textContent = `Tahun terbit: ${buku.tahun}`;
    kartu.append(tahun);

    const status = document.createElement("p");
    status.textContent = `Status baca: ${labelStatus[buku.statusBaca]}`;
    kartu.append(status);

    return kartu;
}

function render(list) {
    daftar.replaceChildren();

    if (list.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;
    list.forEach((buku) => {
        daftar.append(buildCard(buku));
    });
}

function tampilkanBuku() {
    const bukuDitampilkan = daftarBuku.filter((buku) =>
        statusFilter === "semua" || buku.statusBaca === statusFilter
    );
    render(bukuDitampilkan);
}

filterRow.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const tombol = event.target.closest("button");
    if (!tombol || !filterRow.contains(tombol)) {
        return;
    }

    const kategori = tombol.dataset.category;
    if (!kategori) {
        return;
    }

    statusFilter = kategori;
    filterRow.querySelectorAll("button").forEach((tombolLain) => {
        const aktif = tombolLain === tombol;
        tombolLain.classList.toggle("active", aktif);
        tombolLain.setAttribute("aria-pressed", String(aktif));
    });

    tampilkanBuku();
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
