# Efek Lirik Ketik & Animasi Love (Typewriter Effect)

Proyek sederhana ini dibuat menggunakan murni HTML, CSS, dan Vanilla JavaScript. Proyek ini menampilkan lirik lagu per bait dengan efek seolah-olah sedang diketik (Typewriter Effect).

## 🌟 Fitur
- Efek ketikan teks per huruf secara dinamis.
- Pembersihan layar (*clear screen*) otomatis antar bait.
- Kursor berkedip menyerupai terminal teks.
- Animasi kelap-kelip acak pada akhir lirik.

## 🚀 Cara Menjalankan
1. *Download* atau *clone* repository ini ke komputer kamu.
2. Pastikan file `index.html`, `style.css`, dan `script.js` berada di dalam satu folder yang sama.
3. Klik ganda pada file `index.html` untuk membukanya di web browser (Google Chrome, Firefox, Safari, dll).

## 🛠️ Panduan Kustomisasi

Kamu bisa menyesuaikan animasi dan teks sesuai keinginan dengan mengubah beberapa nilai variabel di dalam file `script.js`.

### 1. Mengubah Lirik
Cari variabel `potonganLirik` di baris paling atas `script.js`. Kamu bisa mengganti teksnya dan menambahkan bait baru. Pisahkan teks dengan `\n` jika ingin teksnya turun ke baris baru (*enter*).

```javascript
const potonganLirik = [
    "Baris pertama\nBaris kedua", // \n untuk enter
    "Bait selanjutnya di sini"
];
