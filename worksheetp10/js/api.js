const URL = "https://openlibrary.org/search.json?q=subject%3Afiction&limit=12";

export async function fetchBooks() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Server merespons dengan status ${response.status}.`);
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
            throw new TypeError("Respons API bukan berformat JSON.");
        }

        const data = await response.json();
        if (!data || !Array.isArray(data.docs)) {
            throw new TypeError("Format data API tidak berisi daftar buku.");
        }

        return data.docs.map((buku) => {
            if (typeof buku.title !== "string" || buku.title.trim() === "") {
                throw new TypeError("Data buku dari API tidak memiliki judul.");
            }

            return {
                judul: buku.title,
                penulis: Array.isArray(buku.author_name) && buku.author_name.length > 0
                    ? buku.author_name.join(", ")
                    : "Tidak diketahui",
                tahun: Number.isInteger(buku.first_publish_year) && buku.first_publish_year > 0
                    ? buku.first_publish_year
                    : "Tidak diketahui",
                statusBaca: "belum",
            };
        });
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error("Respons API bukan JSON yang valid.", { cause: error });
        }
        if (error instanceof Error) {
            throw new Error(`Gagal memuat daftar buku: ${error.message}`, { cause: error });
        }
        throw new Error("Gagal memuat daftar buku karena kesalahan yang tidak diketahui.", {
            cause: error,
        });
    }
}
