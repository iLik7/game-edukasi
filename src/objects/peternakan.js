/* Data edukasi FASE 2: PETERNAKAN & SAWAH.
   CATATAN: isi perlu divalidasi guru biologi, penyuluh pertanian, dan dokter hewan sebelum dipakai di sekolah.
   Rujukan singkat: IRRI Rice Knowledge Bank (tahap tumbuh padi, aerenkim); FAO soal kerbau; siklus hidup lebah pekerja Apis (sekitar 21 hari); panduan pengomposan Kementan/FAO (fase termofilik). */
import { ruminantData } from './ruminansia.js';
import { AYAM } from './hewan2.js';
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const PADI = {
  id: 'padi', name: 'Padi',
  layers: [
    L('akar', 'Akar serabut', 'Sistem perakaran', '#e8dcb0', 'Mencengkeram lumpur.', 'Padi berakar serabut: banyak akar kecil yang tumbuh dari pangkal batang, bukan satu akar tunggang.', 'Menyerap air dan unsur hara dari lumpur sawah serta menahan rumpun agar tidak roboh.', 'Padi termasuk tumbuhan monokotil, sama seperti jagung, tebu, kelapa, dan bambu.'),
    L('batang', 'Batang beruas', 'Aerenkim', '#a0c060', 'Batang berongga dengan saluran udara.', 'Batang padi beruas-ruas dan berongga. Satu rumpun terdiri dari beberapa batang (anakan) yang tumbuh dari pangkal yang sama.', 'Di dalam batang dan akar ada jaringan berongga (aerenkim) yang mengalirkan oksigen dari daun ke akar. Titik putih menunjukkan udara yang turun ke akar.', 'Berkat aerenkim, padi bisa hidup di lumpur tergenang yang miskin oksigen, tempat kebanyakan tanaman lain akan busuk akarnya.'),
    L('daun', 'Daun', 'Daun pita', '#5a9a30', 'Pabrik gula.', 'Daun panjang seperti pita dengan tulang daun sejajar.', 'Tempat fotosintesis. Gula yang dibuat daun nantinya disimpan sebagai pati di dalam bulir.', 'Daun bendera, yaitu daun paling atas, adalah penyumbang terbesar gula untuk mengisi bulir.'),
    L('malai', 'Malai dan bulir', 'Bunga majemuk', '#c0a040', 'Calon beras.', 'Kumpulan bunga kecil yang tersusun bercabang di ujung batang. Tiap bunga yang dibuahi menjadi satu bulir gabah.', 'Bunga padi menyerbuk sendiri: serbuk sari biasanya jatuh ke kepala putik bunga yang sama. Setelah itu bulir terisi pati sampai matang dan menguning.', 'Malai yang bulirnya sudah berisi akan merunduk karena berat. Dari sini muncul peribahasa "ilmu padi: makin berisi makin merunduk".'),
    L('gabah', 'Gabah dibelah', 'Sekam, bekatul, beras', '#e8d8a0', 'Dari gabah menjadi nasi.', 'Gabah terdiri dari sekam (kulit luar keras), lapisan kulit ari berwarna cokelat (bekatul), lembaga (calon tunas), dan endosperma putih yang kita makan sebagai beras.', 'Penggilingan membuang sekam. Beras putih juga dibuang lapisan bekatulnya, sedangkan beras pecah kulit (beras cokelat) masih menyimpan bekatul.', 'Bekatul kaya serat dan vitamin B. Karena itu beras cokelat lebih bergizi daripada beras putih yang digosok bersih.'),
    L('lumpur', 'Lumpur sawah', 'Tanah tergenang', '#4a3a28', 'Rumah padi sawah.', 'Tanah yang diolah menjadi lumpur dan digenangi air dangkal.', 'Genangan membantu menekan gulma dan menjaga suhu. Air dikeringkan menjelang panen supaya bulir matang serentak.', 'Sistem irigasi subak di Bali, yang membagi air sawah secara adil lewat kesepakatan bersama, diakui UNESCO sebagai Warisan Budaya Dunia.'),
  ],
  quiz: Q('padi', [
    ['Bagaimana akar padi tetap mendapat oksigen di lumpur tergenang?', ['Lewat aerenkim, saluran udara dari daun ke akar', 'Akar padi tidak butuh oksigen', 'Dari air hujan', 'Dari cacing tanah'], 'Aerenkim adalah jaringan berongga yang mengalirkan udara ke bawah.'],
    ['Padi termasuk tumbuhan ...', ['Monokotil', 'Dikotil', 'Paku-pakuan', 'Lumut'], 'Ciri monokotil: akar serabut, daun bertulang sejajar.'],
    ['Bagian gabah yang kita makan sebagai beras adalah ...', ['Endosperma', 'Sekam', 'Akar', 'Daun bendera'], 'Endosperma berisi cadangan pati.'],
    ['Mengapa beras cokelat lebih bergizi daripada beras putih?', ['Masih menyimpan lapisan bekatul yang kaya serat dan vitamin', 'Karena lebih keras', 'Karena dicat cokelat', 'Karena lebih banyak air'], 'Beras putih kehilangan bekatulnya saat digosok.'],
    ['Peribahasa "ilmu padi" berasal dari pengamatan bahwa ...', ['Malai yang berisi makin merunduk', 'Padi tumbuh di air', 'Padi berwarna kuning', 'Padi dipanen dua kali'], 'Bulir yang terisi membuat malai berat dan merunduk.'],
    ['Sistem pengairan sawah tradisional Bali yang diakui UNESCO adalah ...', ['Subak', 'Terasering', 'Hidroponik', 'Bendungan'], 'Subak mengatur pembagian air secara adil dan berkelanjutan.'],
  ]),
  specimen: { id: 'padi', kind: 'geo', name: 'Sawah Padi', short: 'sawah', sci: 'Oryza sativa', family: 'Poaceae (rumput-rumputan)', x: 232.6, z: -69, top: 0.8, mkOff: 1.0, promptY: 0.8, tagNear: 6, dist: 11,
    fact: 'Padi adalah makanan pokok sebagian besar orang Indonesia. Padi sawah tumbuh di lumpur tergenang berkat saluran udara di batang dan akarnya.',
    hint: 'Geser Umur tanaman dari bibit sampai panen: rumpun membesar, malai keluar, bulir terisi dan menguning, lalu sawah dikeringkan. Titik putih adalah udara yang dialirkan ke akar. Ketuk bagian-bagiannya.' },
};

export const KERBAU = (() => {
  const D = ruminantData('sapi');
  D.id = 'kerbau'; D.name = 'Kerbau';
  D.layers = D.layers.map((l) => l.id === 'kulit' ? { ...l, ui: '#4a4644', what: 'Kerbau lumpur berkulit abu-abu gelap dengan rambut yang jarang. Tanduknya besar dan melengkung ke belakang.', fn: 'Kulit gelap dan tebal melindungi tubuh. Karena kelenjar keringat kerbau sedikit, kerbau mendinginkan badan dengan berkubang di lumpur atau air.', fact: 'Lumpur yang menempel di kulit juga melindungi kerbau dari sengatan matahari dan gigitan serangga.' }
    : l.id === 'otot' ? { ...l, fact: 'Kerbau dulu menjadi tenaga utama membajak sawah di Indonesia karena kuat dan tahan bekerja di lumpur.' } : l);
  D.quiz = Q('kerbau', [
    ['Mengapa kerbau suka berkubang di lumpur?', ['Kelenjar keringatnya sedikit, jadi berkubang untuk mendinginkan badan', 'Untuk mencari makanan', 'Untuk bertelur', 'Karena takut matahari terbenam'], 'Lumpur juga melindungi dari matahari dan serangga.'],
    ['Kerbau termasuk hewan memamah biak (ruminansia) dengan lambung ...', ['Empat ruang', 'Satu ruang', 'Dua ruang', 'Tiga ruang'], 'Sama seperti sapi dan kambing: rumen, retikulum, omasum, dan abomasum.'],
    ['Peran tradisional kerbau di sawah adalah ...', ['Membajak dan mengolah lumpur', 'Menyerbuki padi', 'Memakan hama wereng', 'Mengairi sawah'], 'Kini banyak digantikan traktor, tetapi masih dipakai di beberapa daerah.'],
    ['Apa yang membedakan kerbau dari sapi?', ['Kulit gelap berambut jarang, tanduk besar melengkung, suka berkubang', 'Kerbau tidak punya tanduk', 'Kerbau bertelur', 'Kerbau tidak memamah biak'], 'Keduanya sama-sama ruminansia dari suku Bovidae.'],
  ]);
  D.specimen = { id: 'kerbau', kind: 'animal', name: 'Kerbau', short: 'kerbau', sci: 'Bubalus bubalis', family: 'Bovidae', x: 240, z: -25, top: 1.7, mkOff: 0.9, promptY: 1.1, tagNear: 7,
    fact: 'Kerbau lumpur sudah lama menjadi teman petani Indonesia untuk membajak sawah. Seperti sapi, kerbau memamah biak dengan lambung empat ruang.',
    hint: 'Geser Kedalaman untuk mengupas lapisan. Titik oranye adalah perjalanan makanan, titik hijau adalah makanan yang naik lagi untuk dikunyah ulang. Bandingkan dengan sapi perah di padang rumput.' };
  return D;
})();

export const BEBEK = (() => {
  const keep = ['kulit', 'otot', 'rangka', 'otak', 'jantung', 'paru', 'kantong', 'ampela', 'hati', 'usus', 'ginjal', 'oviduk'];
  const layers = AYAM.layers.filter((l) => keep.includes(l.id)).map((l) => l.id === 'kulit' ? { ...l, ui: '#9a7a5a', what: 'Bulu bebek rapat dan berlapis minyak. Di bawahnya ada bulu halus (bulu kapas) yang menahan panas.', fn: 'Bulu yang berminyak membuat air tidak meresap sehingga bebek tetap kering dan bisa mengapung.', fact: 'Air "menggelinding" dari punggung bebek seperti di daun talas karena lapisan minyak di bulunya.' } : l);
  layers.splice(8, 0, L('kerongkongan', 'Kerongkongan', 'Tanpa tembolok sejati', '#e0a090', 'Kerongkongan yang melar.', 'Berbeda dari ayam, bebek tidak punya tembolok yang jelas. Kerongkongannya bisa melebar untuk menampung makanan.', 'Bebek menyaring makanan dari air dan lumpur dengan paruhnya yang pipih, lalu menelannya.', 'Paruh bebek punya lamela, gerigi halus di tepinya, yang bekerja seperti saringan.'));
  layers.push(L('minyak', 'Kelenjar minyak', 'Kelenjar uropigial', '#f0d080', 'Pabrik minyak pelapis bulu.', 'Kelenjar di pangkal ekor yang menghasilkan minyak.', 'Bebek mengambil minyak dengan paruhnya lalu meratakannya ke seluruh bulu (merapikan bulu).', 'Kelenjar minyak burung air umumnya lebih besar daripada burung darat.'));
  return { id: 'bebek', name: 'Bebek', layers,
    quiz: Q('bebek', [
      ['Mengapa bulu bebek tidak basah saat berenang?', ['Dilapisi minyak dari kelenjar di pangkal ekor', 'Karena bulunya dari plastik', 'Karena bebek tidak menyelam', 'Karena airnya hangat'], 'Minyak membuat air tidak meresap ke bulu.'],
      ['Kaki bebek berselaput berguna untuk ...', ['Mendayung di air', 'Memanjat pohon', 'Mencengkeram mangsa', 'Menggali tanah'], 'Selaput memperluas permukaan kaki seperti dayung.'],
      ['Paruh bebek yang pipih dengan gerigi halus berfungsi untuk ...', ['Menyaring makanan dari air dan lumpur', 'Memecah biji keras', 'Mematuk kayu', 'Menghisap nektar'], 'Gerigi halus (lamela) bekerja seperti saringan.'],
      ['Mengapa petani melepas bebek di sawah setelah panen?', ['Bebek memakan sisa bulir, siput, dan serangga', 'Untuk membajak sawah', 'Untuk menanam padi', 'Untuk mengusir hujan'], 'Kotoran bebek juga menambah pupuk.'],
    ]),
    specimen: { id: 'bebek', kind: 'animal', name: 'Bebek', short: 'bebek', sci: 'Anas platyrhynchos domesticus', family: 'Anatidae', x: 265, z: -95, top: 0.2, mkOff: 0.6, promptY: 0.3, tagNear: 4,
      fact: 'Bebek atau itik adalah unggas air. Di banyak daerah, bebek digembalakan di sawah setelah panen untuk memakan sisa bulir dan hama.',
      hint: 'Geser Kedalaman dari bulu ke organ. Cari kelenjar minyak di pangkal ekor dan kerongkongan yang melar. Bandingkan dengan ayam kampung di kandang ayam peternakan.' } };
})();

export const LEBAH = {
  id: 'lebah', name: 'Lebah madu',
  layers: [
    L('sisiran', 'Sisiran sarang', 'Sel heksagonal dari lilin', '#f0d070', 'Bangunan segi enam.', 'Sarang tersusun dari ribuan sel berbentuk segi enam yang dibuat lebah pekerja dari lilin yang keluar dari kelenjar di perutnya.', 'Sel dipakai untuk menyimpan madu dan serbuk sari, serta tempat telur dan anak lebah tumbuh.', 'Bentuk segi enam bisa menutup bidang tanpa celah dengan bahan dinding paling sedikit, sehingga hemat lilin.'),
    L('madu', 'Sel madu', 'Cadangan makanan', '#e0900a', 'Gudang energi.', 'Sel di bagian tepi berisi madu. Sel yang madunya sudah matang ditutup lilin.', 'Lebah mengubah nektar menjadi madu dengan menambahkan enzim lalu menguapkan airnya dengan kipasan sayap.', 'Madu yang matang sangat sedikit airnya sehingga awet dan sulit ditumbuhi kuman.'),
    L('roti', 'Roti lebah', 'Serbuk sari yang disimpan', '#e08a20', 'Makanan protein.', 'Sel berisi serbuk sari yang dipadatkan, terletak di antara sel madu dan sel anakan.', 'Sumber protein untuk memberi makan larva.', 'Lebah pekerja membawa serbuk sari pulang dalam "keranjang" di kaki belakangnya.'),
    L('anak', 'Sel anakan', 'Telur, larva, pupa', '#f8f4e8', 'Kamar bayi lebah.', 'Sel di bagian tengah sarang tempat telur, larva, dan pupa berkembang.', 'Lebah pekerja berkembang dari telur (sekitar 3 hari), larva (sekitar 6 hari, diberi makan terus), lalu pupa di dalam sel yang ditutup, sampai menjadi lebah dewasa setelah sekitar 3 minggu. Geser slider Hari ke- untuk melihatnya.', 'Perubahan dari telur, larva, pupa, sampai dewasa disebut metamorfosis sempurna, sama seperti kupu-kupu.'),
    L('ratu', 'Ratu', 'Satu-satunya betina subur', '#a0601a', 'Ibu seluruh koloni.', 'Lebah dengan perut paling panjang. Dalam satu koloni biasanya hanya ada satu ratu.', 'Bertugas bertelur, bisa ribuan butir sehari pada musim ramai.', 'Larva yang diberi makan royal jelly terus-menerus akan tumbuh menjadi ratu, bukan pekerja.'),
    L('pekerja', 'Lebah pekerja', 'Betina mandul', '#c09030', 'Penghuni terbanyak.', 'Lebah betina yang tidak bertelur. Jumlahnya puluhan ribu.', 'Tugasnya berganti sesuai umur: membersihkan sel, merawat larva, membangun sarang, menjaga pintu, lalu mencari nektar dan serbuk sari.', 'Pekerja yang menemukan bunga memberi tahu temannya lewat "tarian goyang" yang menunjukkan arah dan jarak sumber makanan.'),
    L('jantan', 'Lebah jantan', 'Drone', '#6a4a20', 'Tugasnya kawin.', 'Lebah bertubuh besar dengan mata besar dan tidak punya sengat.', 'Satu-satunya tugas lebah jantan adalah kawin dengan ratu dari koloni lain.', 'Lebah jantan menetas dari telur yang tidak dibuahi.'),
  ],
  quiz: Q('lebah', [
    ['Mengapa sel sarang lebah berbentuk segi enam?', ['Hemat lilin dan menutup bidang tanpa celah', 'Supaya mudah dilihat', 'Karena lebah punya enam kaki', 'Supaya madu cepat basi'], 'Segi enam adalah bentuk yang efisien untuk sarang.'],
    ['Urutan perkembangan lebah pekerja adalah ...', ['Telur - larva - pupa - dewasa', 'Telur - pupa - larva - dewasa', 'Larva - telur - dewasa', 'Telur langsung dewasa'], 'Ini metamorfosis sempurna.'],
    ['Apa yang membuat seekor larva tumbuh menjadi ratu?', ['Diberi makan royal jelly terus-menerus', 'Lahir paling awal', 'Ukuran sel yang kecil', 'Makan madu lebih banyak'], 'Makanan menentukan apakah larva betina menjadi ratu atau pekerja.'],
    ['Bagaimana lebah pekerja memberi tahu lokasi bunga?', ['Dengan tarian goyang', 'Dengan suara keras', 'Dengan mengubah warna', 'Dengan meninggalkan peta'], 'Arah tarian menunjukkan arah bunga terhadap matahari.'],
    ['Dari apa madu dibuat?', ['Nektar bunga', 'Serbuk sari', 'Lilin', 'Air hujan'], 'Lebah menguapkan air dari nektar dan menambahkan enzim.'],
  ]),
  specimen: { id: 'lebah', kind: 'geo', name: 'Sarang Lebah', short: 'sarang lebah', sci: 'Lebah madu (Apis)', family: 'Apidae', x: 300, z: -75, top: 1.0, mkOff: 1.0, promptY: 0.9, tagNear: 5, dist: 10,
    fact: 'Lebah madu hidup berkoloni dengan pembagian tugas: satu ratu, ribuan pekerja, dan beberapa jantan. Di Indonesia, peternak lebah banyak memelihara lebah lokal Apis cerana dan lebah impor Apis mellifera.',
    hint: 'Geser slider Hari ke- untuk mengikuti perkembangan lebah pekerja dari telur, larva, sampai pupa. Ketuk ratu, pekerja, jantan, dan jenis-jenis sel.' },
};

export const KOMPOS = {
  id: 'kompos', name: 'Kompos',
  layers: [
    L('hijau', 'Bahan hijau', 'Kaya nitrogen', '#5a8a30', 'Makanan cepat untuk mikroba.', 'Sisa sayuran, rumput segar, kulit buah, dan kotoran ternak.', 'Kaya nitrogen yang dibutuhkan mikroba untuk tumbuh dan berkembang biak.', 'Bahan hijau saja akan basah dan berbau. Perlu dicampur bahan cokelat.'),
    L('coklat', 'Bahan cokelat', 'Kaya karbon', '#8a6a3a', 'Sumber energi dan penyedia rongga udara.', 'Daun kering, jerami, serbuk gergaji, dan kertas tanpa tinta.', 'Kaya karbon sebagai sumber energi mikroba, dan membuat tumpukan berongga sehingga udara bisa masuk.', 'Perbandingan bahan cokelat dan hijau yang seimbang membuat kompos cepat matang dan tidak berbau.'),
    L('mikroba', 'Mikroba pengurai', 'Bakteri dan jamur', '#7ad060', 'Pekerja tak terlihat.', 'Bakteri dan jamur yang terlalu kecil untuk dilihat mata.', 'Menguraikan bahan organik. Saat bekerja keras mereka melepaskan panas, sehingga bagian dalam tumpukan bisa mencapai sekitar 55 sampai 65 °C.', 'Panas setinggi itu ikut membunuh banyak biji gulma dan kuman penyakit.'),
    L('cacing', 'Cacing tanah', 'Pengurai besar', '#c06a60', 'Penggembur.', 'Cacing tanah dan hewan kecil lain datang setelah tumpukan mendingin.', 'Mencacah sisa bahan dan mencampurnya dengan tanah. Kotoran cacing (kascing) sangat subur.', 'Cacing tanah tidak bisa bertahan di bagian tumpukan yang sedang panas.'),
    L('matang', 'Kompos matang', 'Humus', '#3a2a1a', 'Pupuk alami.', 'Bahan berwarna cokelat gelap, gembur, dan berbau seperti tanah.', 'Menyuburkan tanah, membuat tanah lebih gembur, dan membantu tanah menyimpan air.', 'Membuat kompos juga mengurangi sampah organik yang dibuang ke tempat pembuangan.'),
  ],
  quiz: Q('kompos', [
    ['Mengapa bagian dalam tumpukan kompos bisa menjadi panas?', ['Mikroba melepaskan panas saat menguraikan bahan', 'Terkena sinar matahari langsung', 'Ada api di dalamnya', 'Karena dicampur air panas'], 'Ini disebut fase termofilik.'],
    ['Daun kering dan jerami termasuk bahan ...', ['Cokelat (kaya karbon)', 'Hijau (kaya nitrogen)', 'Anorganik', 'Beracun'], 'Bahan cokelat juga membuat tumpukan berongga.'],
    ['Mengapa tumpukan kompos sebaiknya dibalik sesekali?', ['Agar udara (oksigen) masuk untuk mikroba', 'Agar lebih berat', 'Agar cacing pergi', 'Agar cepat dingin'], 'Mikroba pengurai yang bekerja cepat membutuhkan oksigen.'],
    ['Ciri kompos yang sudah matang adalah ...', ['Cokelat gelap, gembur, berbau seperti tanah', 'Masih panas dan berbau busuk', 'Berwarna hijau segar', 'Keras seperti batu'], 'Kompos matang siap dipakai sebagai pupuk.'],
  ]),
  specimen: { id: 'kompos', kind: 'geo', name: 'Tumpukan Kompos', short: 'kompos', sci: 'Pengomposan aerob', family: 'Daur ulang bahan organik', x: 292, z: 12, top: 1.0, mkOff: 1.0, promptY: 0.9, tagNear: 5, dist: 12,
    fact: 'Kompos dibuat dari sisa tumbuhan dan kotoran ternak yang diuraikan mikroba. Hasilnya pupuk alami untuk sawah dan kebun.',
    hint: 'Geser Minggu ke- untuk melihat tumpukan memanas (mikroba bekerja), mendingin, didatangi cacing, lalu menjadi kompos matang. Ketuk bagian-bagiannya.' },
};
