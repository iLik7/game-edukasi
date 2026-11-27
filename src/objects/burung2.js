/* Data tiga burung Indonesia tambahan. Lapisan organ memakai dasar data kutilang (BURUNG), lalu diganti yang khas.
   Perlu validasi ornitolog. Rujukan singkat: IUCN Red List (status), Permen LHK P.106/2018 (satwa dilindungi), Birdlife/Burung Indonesia. */
import { BURUNG } from './hewan3.js';
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));
const base = (over) => BURUNG.layers.map((l) => (over[l.id] ? { ...l, ...over[l.id] } : l));

export const CENDRAWASIH = {
  id: 'cendrawasih', name: 'Cendrawasih kecil',
  layers: [
    ...base({ kulit: { ui: '#7a3a18', short: 'Bulu hias paling indah.', what: 'Jantan berkepala kuning, tenggorokan hijau zamrud mengilap, badan cokelat marun, dan punya juntaian bulu hias panjang kuning-putih dari sisi badan serta dua kawat ekor panjang.', fn: 'Bulu hias dipamerkan untuk menarik betina. Betina berwarna cokelat polos supaya tersamar saat mengerami.', fact: 'Karena bulunya, cendrawasih dijuluki "burung dari surga" (bird of paradise).' },
      siring: { fact: 'Saat menari, jantan cendrawasih kecil bersuara keras dan berulang untuk memanggil betina.' } }),
    L('hias', 'Bulu hias dan tarian', 'Seleksi seksual', '#f2d060', 'Pertunjukan untuk betina.', 'Beberapa jantan berkumpul di satu pohon (lek) lalu menari: menunduk, mengepakkan sayap, dan mengembangkan bulu hias.', 'Betina memilih jantan dengan tarian dan bulu terbaik. Sifat ini diwariskan, sehingga bulu jantan makin indah dari generasi ke generasi.', 'Proses ini disebut seleksi seksual, salah satu cara kerja evolusi.'),
  ],
  quiz: Q('cendrawasih', [
    ['Cendrawasih hidup secara alami di ...', ['Papua dan pulau-pulau di sekitarnya', 'Pulau Jawa', 'Gurun Sahara', 'Kutub Utara'], 'Banyak jenis cendrawasih hanya ada di wilayah Papua.'],
    ['Mengapa cendrawasih jantan punya bulu hias yang mencolok?', ['Untuk menarik betina', 'Untuk menghangatkan telur', 'Untuk menyelam', 'Untuk menangkap ikan'], 'Betina memilih jantan dengan pertunjukan terbaik.'],
    ['Tempat beberapa jantan berkumpul dan menari disebut ...', ['Lek', 'Sarang', 'Koloni', 'Kloaka'], 'Lek biasanya di dahan pohon tertentu yang dipakai berulang.'],
    ['Mengapa betina cendrawasih berwarna cokelat polos?', ['Supaya tersamar dari pemangsa saat mengerami', 'Karena sakit', 'Karena masih muda', 'Supaya cepat terbang'], 'Warna samaran melindungi betina dan sarangnya.'],
  ]),
  specimen: { id: 'cendrawasih', kind: 'animal', name: 'Cendrawasih kecil', short: 'cendrawasih', sci: 'Paradisaea minor', family: 'Paradisaeidae', x: -275, z: 2, top: 0.3, mkOff: 0.5, promptY: 0.45, tagNear: 5, reach: 7,
    fact: 'Cendrawasih kecil adalah burung dari hutan hujan Papua. Jantannya punya bulu hias kuning panjang yang dipamerkan dalam tarian. Cendrawasih termasuk satwa dilindungi di Indonesia.',
    hint: 'Geser Kedalaman dari bulu hias ke organ. Bandingkan bulu jantan cendrawasih dengan kutilang yang polos.' },
};

export const CEKAKAK = {
  id: 'cekakak', name: 'Cekakak Jawa',
  layers: [
    ...base({ kulit: { ui: '#1f5aa8', short: 'Biru menyala, kepala cokelat.', what: 'Kepala cokelat tua, punggung dan sayap biru terang dengan bercak putih di sayap, perut biru keunguan gelap, paruh dan kaki merah.', fn: 'Warna biru pada bulu bukan dari pigmen biru, tetapi dari susunan mikro bulu yang memantulkan cahaya biru.', fact: 'Warna seperti ini disebut warna struktural, sama seperti warna biru sayap kupu-kupu tertentu.' },
      ampela: { what: 'Makanan ditelan utuh lalu digiling di ampela.', fn: 'Cekakak memakan serangga besar, kadal, katak, dan ikan kecil. Sisa yang keras dimuntahkan sebagai pelet.', fact: 'Cekakak Jawa sering berburu di sawah dan padang terbuka, tidak hanya di sungai.' } }),
    L('paruh', 'Paruh tombak', 'Rostrum', '#d02a1a', 'Panjang, lurus, dan kuat.', 'Paruh merah besar berbentuk tombak, hampir sepanjang kepalanya.', 'Dipakai untuk menyambar mangsa dari tempat bertengger, lalu memukulkannya ke dahan sebelum ditelan.', 'Bentuk paruh cekakak dan raja udang menginspirasi desain hidung kereta cepat Shinkansen supaya tidak berdentum saat keluar terowongan.'),
  ],
  quiz: Q('cekakak', [
    ['Cekakak Jawa secara alami hidup di ...', ['Pulau Jawa dan Bali', 'Papua', 'Australia', 'Kalimantan saja'], 'Burung ini endemik Jawa dan Bali.'],
    ['Warna biru pada bulu cekakak berasal dari ...', ['Susunan mikro bulu yang memantulkan cahaya biru', 'Pigmen biru di darah', 'Makanan berwarna biru', 'Air laut'], 'Ini disebut warna struktural.'],
    ['Apa yang dilakukan cekakak setelah menangkap mangsa?', ['Memukulkannya ke dahan lalu menelan utuh', 'Mengunyahnya dengan gigi', 'Menyimpannya di kantong pipi', 'Melepaskannya lagi'], 'Burung tidak bergigi; makanan digiling di ampela.'],
    ['Bentuk paruh burung jenis ini menginspirasi desain ...', ['Hidung kereta cepat', 'Baling-baling kapal', 'Roda sepeda', 'Atap rumah'], 'Contoh biomimikri: meniru alam untuk teknologi.'],
  ]),
  specimen: { id: 'cekakak', kind: 'animal', name: 'Cekakak Jawa', short: 'cekakak', sci: 'Halcyon cyanoventris', family: 'Alcedinidae', x: -14, z: 25, top: 0.25, mkOff: 0.45, promptY: 0.4, tagNear: 4, reach: 6,
    fact: 'Cekakak Jawa adalah burung endemik Jawa dan Bali berparuh merah besar. Ia berburu serangga, kadal, katak, dan ikan kecil di sawah, kebun, dan tepi sungai.',
    hint: 'Ketuk lapisan paruh tombak. Bandingkan bentuk paruh cekakak dengan paruh kutilang dan elang.' },
};

export const JALAK = {
  id: 'jalakbali', name: 'Jalak Bali',
  layers: [
    ...base({ kulit: { ui: '#f0f0ea', short: 'Putih bersih, ujung hitam.', what: 'Bulu hampir seluruhnya putih, ujung sayap dan ujung ekor hitam, kulit tanpa bulu berwarna biru terang di sekitar mata, dan jambul panjang di kepala.', fn: 'Jambul ditegakkan saat berkomunikasi atau merasa terganggu.', fact: 'Jalak Bali adalah maskot (fauna identitas) Provinsi Bali.' },
      siring: { fact: 'Jalak Bali pandai berkicau. Karena itu ia banyak diburu untuk diperdagangkan, sehingga hampir punah di alam.' } }),
    L('konservasi', 'Konservasi', 'Kritis (Critically Endangered)', '#3a7ad0', 'Diselamatkan lewat penangkaran.', 'Cincin biru di kaki adalah penanda burung hasil penangkaran. Di alam, jalak Bali hanya tersisa di sekitar Taman Nasional Bali Barat dan jumlahnya sangat sedikit.', 'Burung hasil penangkaran dilepasliarkan kembali ke habitat aslinya, dan warga sekitar dilibatkan menjaga burung ini.', 'Jalak Bali berstatus Kritis menurut IUCN dan termasuk satwa dilindungi di Indonesia.'),
  ],
  quiz: Q('jalakbali', [
    ['Jalak Bali secara alami hanya ditemukan di ...', ['Bali bagian barat', 'Seluruh Asia', 'Papua', 'Sumatra'], 'Habitat aslinya di sekitar Taman Nasional Bali Barat.'],
    ['Ciri khas wajah jalak Bali adalah ...', ['Kulit biru terang di sekitar mata', 'Paruh merah besar', 'Cula di atas paruh', 'Bulu hias kuning panjang'], 'Kulit di sekitar mata itu tidak berbulu.'],
    ['Penyebab utama jalak Bali hampir punah adalah ...', ['Diburu untuk diperdagangkan', 'Terlalu banyak makan', 'Tidak bisa terbang', 'Hidup di laut'], 'Kicauannya yang indah membuatnya diincar.'],
    ['Cara menyelamatkan jalak Bali yang sudah dilakukan adalah ...', ['Penangkaran lalu dilepasliarkan', 'Memindahkannya ke kutub', 'Memeliharanya di rumah', 'Membiarkannya saja'], 'Dibantu pengawasan bersama warga.'],
  ]),
  specimen: { id: 'jalakbali', kind: 'animal', name: 'Jalak Bali', short: 'jalak Bali', sci: 'Leucopsar rothschildi', family: 'Sturnidae', x: 11, z: -11, top: 0.3, mkOff: 0.45, promptY: 0.4, tagNear: 4, reach: 6,
    fact: 'Jalak Bali adalah burung putih berkulit biru di sekitar mata, endemik Bali. Statusnya Kritis, dan populasinya dipulihkan lewat penangkaran dan pelepasliaran.',
    hint: 'Geser Kedalaman dan ketuk lapisan Konservasi. Bandingkan bulu putih jalak dengan bulu hias cendrawasih.' },
};
