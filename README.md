# Hutan Ilmu

Game edukasi 3D di browser. Jelajahi hutan, dekati pohon bertanda, lalu bedah batangnya sampai kulit luar, floem, kambium, xilem, kayu teras, dan empulur. Ada jurnal, XP, misi, dan kuis.

Pola interaksi: klik, zoom, info, mini-interaksi, kuis ringan. Pola yang sama nanti dipakai ulang untuk objek lain dan simulasi kerja.

## Jalankan

Tanpa build. Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
```

Lalu buka http://localhost:8000.

Kontrol: WASD atau tombol panah untuk jalan, Shift untuk lari, seret layar untuk memutar kamera, E untuk membedah pohon terdekat, J untuk jurnal, Esc untuk kembali. Di HP ada joystick di kiri bawah.

## Struktur

```
index.html            halaman utama
css/style.css         tampilan dan HUD
js/game.js            engine: dunia, karakter, bedah batang, UI, input
js/objects/pohon.js   data objek "pohon": lapisan, spesimen, kuis
js/vendor/            three.js r128 (lisensi MIT, lihat three.LICENSE)
assets/               tempat model 3D, tekstur, dan suara nanti
```

## Menambah objek edukasi

Satu objek adalah satu file di `js/objects/`, berisi nama, lapisan beserta teks infonya, spesimen di dunia, dan kuis. Salin `pohon.js` sebagai contoh, lalu daftarkan di `index.html` sebelum `js/game.js`. Saat ini `game.js` baru membaca objek `pohon`. Membuat engine memilih objek secara dinamis adalah langkah berikutnya.

## Hosting

Karena hanya file statis, cukup:

- **GitHub Pages**: Settings, Pages, pilih branch `main` dan folder `/ (root)`. Repo harus publik kalau akun GitHub gratis.
- **Vercel atau Netlify**: hubungkan repo, tanpa build command, folder output `/`.

## Catatan

- Progres (XP, jurnal) tersimpan di `localStorage` browser masing-masing pemain.
- Pohon dan karakter dibuat dari kode (low-poly prosedural). Model 3D CC0 (Quaternius, KayKit) bisa diganti ke folder `assets/`.
- Konten sains belum divalidasi guru biologi. Lakukan validasi sebelum dipakai di sekolah.
