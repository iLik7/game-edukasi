# Hutan Ilmu

Game edukasi 3D di browser. Jelajahi hutan dari sudut pandang orang pertama, dekati pohon bertanda, lalu bedah batangnya sampai kulit luar, floem, kambium, xilem, kayu teras, dan empulur. Ada jurnal, XP, misi, dan kuis.

Pola interaksi: klik, zoom, info, mini-interaksi, kuis ringan. Pola yang sama nanti dipakai ulang untuk objek lain dan simulasi kerja.

| Sebelum (low-poly) | Sesudah (branch `realistic`) |
|---|---|
| ![sebelum](docs/sebelum-hutan.jpg) | ![sesudah](docs/sesudah-hutan-tinggi.jpg) |
| ![sebelum bedah](docs/sebelum-bedah.jpg) | ![sesudah bedah](docs/sesudah-bedah-tinggi.jpg) |

Tampilan "Hemat" dan senja: `docs/sesudah-hutan-hemat.jpg`, `docs/sesudah-senja.jpg`. Tampilan HP: `docs/sesudah-hp.jpg`.

## Jalankan

Modul ES butuh server (tidak bisa dibuka lewat `file://`). `dist/` sudah ikut di repo, jadi tidak perlu build untuk sekadar menjalankan:

```bash
python3 -m http.server 8000
```

Buka http://localhost:8000. Untuk mengubah kode:

```bash
npm install
npm run build      # menghasilkan dist/game.js + dist/assets/
npm run dev        # build ulang otomatis saat file berubah
```

Tambahkan `?debug` di URL untuk membuka `window.__hi` (hook uji) dan `&q=hemat` / `&q=tinggi` untuk memaksa kualitas.

Kontrol: WASD atau panah untuk jalan, Shift untuk lari, Spasi untuk lompat (di HP: tombol panah kanan bawah), seret layar untuk melihat sekitar, E atau klik pohon untuk membedah, J untuk jurnal, Esc untuk kembali. Di HP ada joystick kiri bawah.

## Kualitas grafik

Tombol **Grafik** di kanan atas, tersimpan di `localStorage`.

- **Tinggi**: bayangan 2048, GTAO (ambient occlusion), bloom, rumput lebih rapat, pohon lebih banyak dan jauh. Default di desktop.
- **Hemat**: bayangan 1024, tanpa AO dan bloom, pixel ratio maksimal 1,25, pohon dan rumput dikurangi. Default di layar sentuh.
- Kalau di Tinggi rata-rata di bawah sekitar 30 fps selama 4 detik pertama, game turun sendiri ke Hemat.

## Teknik

- Langit prosedural (gradien, awan fbm, matahari HDR, bintang) yang digerakkan siklus siang-malam 240 detik. Kubah yang sama dirender ke PMREM untuk cahaya sekitar (IBL), dan warna cakrawalanya dipakai untuk kabut.
- Tone mapping ACES lewat satu pipeline EffectComposer (MSAA HDR, GTAO, bloom, output), sama untuk kedua kualitas.
- Medan bertekstur PBR (rumput + tanah + pasir, jalan setapak ke tiap pohon bertanda), air berbasis kedalaman (warna dangkal ke dalam, buih tepi, tiga lapis riak, kilau matahari).
- Lima spesies pohon bisa dibedah, masing-masing dengan bentuk, tekstur penampang, fakta, dan kuis sendiri: jati, mahoni, beringin, pinus merkusii, trembesi. Kuis hanya memuat spesies yang sudah dibedah. Isi sains perlu divalidasi guru biologi atau ahli kehutanan.
- Pohon dihasilkan prosedural dengan [ez-tree](https://github.com/dgreenheck/ez-tree), disebar per chunk 40 m dengan InstancedMesh dan dua level detail (dekat dan jauh). Pohon bertanda dibuat dari preset besar.
- Rumput dirender di GPU (InstancedBufferGeometry): posisinya membungkus di sekitar pemain, tinggi tanah dihitung ulang di shader, bergoyang oleh angin.
- Bedah batang: sektor cincin hasil ExtrudeGeometry. Penampang ujung memakai tekstur kanvas prosedural (cincin tahun, jari-jari empulur, batas lapisan), sisi potongan memakai tekstur serat, kulit luar memakai tekstur kulit kayu PBR.

## Struktur

```
index.html            halaman utama + HUD
css/style.css         tampilan dan HUD
src/main.js           state, UI, input, loop
src/sky.js            langit, cahaya, kabut, IBL
src/terrain.js        medan, jalan setapak, air
src/vegetation.js     pohon, semak, rumput, batu, bunga
src/dissect.js        scene bedah batang + tekstur prosedural
src/fx.js             post-processing
src/objects/pohon.js  data objek "pohon": lapisan, spesimen, kuis
dist/                 hasil build (di-commit supaya bisa langsung di-host)
assets/models/        batu dan bunga (GLB), assets/draco/ decoder Draco
```

## Menambah objek edukasi

Satu objek adalah satu file di `src/objects/`, berisi nama, lapisan beserta teks infonya, spesimen di dunia, dan kuis. Salin `pohon.js` sebagai contoh. Saat ini `main.js` baru membaca objek `pohon`; membuat engine memilih objek secara dinamis adalah langkah berikutnya.

## Hosting

Karena hasil build berupa file statis, cukup:

- **GitHub Pages**: Settings, Pages, pilih branch dan folder `/ (root)`. Repo harus publik kalau akun GitHub gratis.
- **Vercel atau Netlify**: hubungkan repo. Tanpa build command (atau `npm run build`), folder output `/`.

## Catatan

- Progres (XP, jurnal) tersimpan di `localStorage` browser masing-masing pemain.
- Jenis pohon di hutan memakai preset ez-tree (ek, ash, aspen, pinus) sebagai pendekatan visual, bukan spesies tropis yang akurat. Jati, mahoni, dan beringin di dunia juga tampil dari preset terdekat. Konten sains di panel bedah tetap spesifik per lapisan.
- Warna kambium dibuat hijau supaya mudah dikenali di game; pada kayu asli lapisan ini sangat tipis dan hampir tak berwarna.
- Konten sains belum divalidasi guru biologi. Lakukan validasi sebelum dipakai di sekolah.

## Kredit dan lisensi

- [three.js](https://threejs.org) (MIT).
- [ez-tree](https://github.com/dgreenheck/ez-tree) oleh Daniel Greenheck (MIT, lihat `assets/EZ-TREE.LICENSE`): generator pohon, tekstur kulit kayu dan daun, tekstur rumput dan tanah, model batu dan bunga. Tekstur kulit kayu berasal dari Poly Haven (oak, willow) dan TextureCan (birch, pine); lihat sumber asli di README ez-tree sebelum dipakai secara komersial.
- Draco decoder dari three.js (Apache-2.0).
