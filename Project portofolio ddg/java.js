document.addEventListener("DOMContentLoaded", function () { // Tunggu sampai DOM selesai dimuat
    const form = document.querySelector(".form-contact "); // Ambil elemen formulir berdasarkan kelasnya

    form.addEventListener("submit", function (event) { // Tambahkan event listener untuk submit
        event.preventDefault(); // Mencegah halaman refresh otomatis bawaan saat formulir dikirim
        const formAction = form.action; // Ambil URL tujuan pengiriman formulir (dari atribut action)
        const formData = new FormData(form); // Ambil semua data dari input formulir

        // Kirim formulir ke server menggunakan Fetch API
        fetch(formAction, {
            method: "POST", // Metode pengiriman formulir (POST)
            body: formData, // Data formulir yang dikirim
            headers: {
                Accept: "application/json", // Memberitahu server untuk mengembalikan respons JSON
            },
        })
            .then((response) => {
                if (response.ok) { // Jika respons dari server berhasil
                    alert("Pesan berhasil dikirim!"); // Tampilkan notifikasi berhasil
                    location.reload(); // Refresh halaman setelah pesan terkirim
                } else {
                    alert("Gagal mengirim pesan. Coba lagi nanti."); // Tampilkan pesan jika gagal
                }
            })
            .catch((error) => {
                console.error("Kesalahan:", error); // Log kesalahan ke konsol untuk debugging
                alert("Terjadi kesalahan. Coba lagi nanti."); // Tampilkan pesan kesalahan kepada pengguna
            });
    });
});

// document.addEventListener("DOMContentLoaded", ... )
// Menunggu halaman selesai dimuat sebelum menjalankan JavaScript. Ini memastikan elemen HTML sudah tersedia.

// const form = document.querySelector(".contact-form");
// Mengambil elemen <form> dengan kelas contact-form untuk diproses.

// form.addEventListener("submit", function (event) { ... });
// Menambahkan listener untuk menangani event submit dari formulir.

// event.preventDefault();
// Mencegah perilaku default browser, seperti reload otomatis.

// const formAction = form.action;
// Mendapatkan URL dari atribut action formulir (https://formspree.io/f/xpwzlnaa).

// const formData = new FormData(form);
// Mengambil semua data dari input, textarea, atau elemen lain dalam formulir.

// fetch(formAction, { ... })
// Mengirim data ke URL yang diambil dari atribut action.

// method: "POST": Menentukan metode HTTP POST untuk pengiriman.
// body: formData: Data formulir yang dikirim ke server.
// headers: { Accept: "application/json" }: Meminta respons berupa JSON dari server.
// response.ok
// Mengecek apakah respons server menunjukkan keberhasilan (status HTTP 200–299).

// alert("Pesan berhasil dikirim!")
// Menampilkan notifikasi bahwa pesan berhasil dikirim.

// location.reload();
// Me-refresh halaman setelah server berhasil menerima pesan.

// .catch((error) => { ... })
// Menangkap kesalahan saat mencoba mengirimkan formulir, misalnya koneksi internet terputus.