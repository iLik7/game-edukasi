/* Data edukasi FASE 3: HUTAN HUJAN TROPIS.
   CATATAN: isi perlu divalidasi guru biologi / ahli botani / ahli ornitologi sebelum dipakai di sekolah.
   Rujukan singkat: Keppres No. 4 Tahun 1993 (puspa langka: padma raksasa); LIPI/BRIN soal Rafflesia dan Nepenthes;
   IUCN Red List (enggang gading Kritis); buku ekologi hutan hujan tropis (stratifikasi tajuk, cahaya di lantai hutan 1-2%). */
import { BURUNG } from './hewan3.js';
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const ENGGANG = {
  id: 'enggang', name: 'Enggang',
  layers: [
    ...BURUNG.layers.map((l) => l.id === 'kulit' ? { ...l, ui: '#222', what: 'Enggang cula berbulu hitam dengan ekor putih bergaris hitam. Paruhnya sangat besar berwarna gading, dengan cula jingga-merah yang melengkung ke atas.', fact: 'Kepakan sayap enggang terdengar keras seperti deru mesin, sehingga kedatangannya bisa didengar dari jauh.' }
      : l.id === 'ampela' ? { ...l, fact: 'Enggang banyak makan buah ara (beringin) lalu menyebarkan bijinya jauh di hutan. Karena itu enggang dijuluki "petani hutan".' } : l),
    L('cula', 'Cula', 'Casque', '#f08030', 'Mahkota di atas paruh.', 'Tonjolan besar di atas paruh. Pada kebanyakan enggang, bagian dalamnya berongga seperti sarang lebah sehingga ringan.', 'Diduga membantu memperkeras suara panggilan dan menjadi tanda pengenal sesama enggang.', 'Enggang gading punya cula padat seperti gading. Karena diburu untuk diambil culanya, enggang gading kini berstatus Kritis.'),
  ],
  quiz: Q('enggang', [
    ['Mengapa enggang dijuluki "petani hutan"?', ['Menyebarkan biji buah yang dimakannya ke tempat jauh', 'Menanam pohon dengan paruhnya', 'Memakan hama', 'Menggali tanah'], 'Biji yang keluar bersama kotoran bisa tumbuh menjadi pohon baru.'],
    ['Saat bersarang, enggang betina ...', ['Mengurung diri di lubang pohon dan diberi makan jantan lewat celah', 'Membuat sarang di tanah', 'Bertelur di air', 'Meninggalkan telurnya'], 'Lubang ditutup lumpur, kotoran, dan sisa makanan sampai tersisa celah sempit.'],
    ['Bagian dalam cula kebanyakan enggang ...', ['Berongga seperti sarang lebah', 'Berisi air', 'Padat seperti batu', 'Berisi lemak'], 'Rongga membuat cula ringan. Pengecualian: enggang gading.'],
    ['Mengapa enggang gading terancam punah?', ['Diburu untuk diambil culanya yang padat', 'Karena makan terlalu banyak', 'Karena tidak bisa terbang', 'Karena hidup di gurun'], 'Hilangnya hutan juga mengurangi pohon besar tempat bersarang.'],
  ]),
  specimen: { id: 'enggang', kind: 'animal', name: 'Enggang cula', short: 'enggang', sci: 'Buceros rhinoceros', family: 'Bucerotidae', x: -270, z: 5, top: 0.6, mkOff: 0.8, promptY: 0.7, tagNear: 6, reach: 10,
    fact: 'Enggang cula hidup di hutan hujan Sumatra, Kalimantan, dan Semenanjung Malaya. Enggang betina bersarang di lubang pohon besar yang ditutup lumpur, lalu diberi makan oleh jantan lewat celah sempit.',
    hint: 'Geser Kedalaman dari bulu ke organ. Cari cula yang ringan dan ampela pencerna buah. Bandingkan ukurannya dengan kutilang di hutan dekat titik awal.' },
};

export const RAFFLESIA = {
  id: 'rafflesia', name: 'Padma raksasa',
  layers: [
    L('perigon', 'Perigon', 'Kelopak bunga tebal', '#a02a1a', 'Lima "kelopak" merah berbintil.', 'Lima helai tebal berwarna merah bata dengan bintil-bintil putih. Ini bagian bunga yang paling terlihat.', 'Warna dan bintilnya mirip daging membusuk, sehingga menarik lalat bangkai.', 'Rafflesia arnoldii adalah bunga tunggal terbesar di dunia, garis tengahnya bisa sekitar satu meter.'),
    L('diafragma', 'Tabung dan diafragma', 'Bagian tengah bunga', '#c04030', 'Corong masuk.', 'Tabung di tengah bunga dengan bibir melingkar (diafragma) yang menyisakan lubang di atasnya.', 'Lalat masuk lewat lubang diafragma menuju bagian dalam tempat benang sari atau putik berada.', 'Bentuk corong ini juga membantu menyebarkan bau busuk.'),
    L('cakram', 'Cakram berduri', 'Discus dengan processus', '#701a10', 'Mahkota berduri di dalam.', 'Cakram di dasar tabung dengan tonjolan-tonjolan runcing di atasnya.', 'Diduga membantu menghangatkan dan menyebarkan bau, serta mengarahkan lalat.', 'Bunga rafflesia biasanya berkelamin tunggal: ada bunga jantan dan bunga betina.'),
    L('benangsari', 'Benang sari', 'Di bawah tepi cakram', '#f0d890', 'Tempat serbuk sari.', 'Pada bunga jantan, benang sari tersembunyi di bawah tepi cakram. Di sini terlihat lewat potongan.', 'Serbuk sari yang lengket menempel di punggung lalat, lalu terbawa ke bunga betina.', 'Karena bunga jantan dan betina jarang mekar berdekatan pada waktu yang sama, penyerbukan rafflesia sulit terjadi.'),
    L('inang', 'Liana inang', 'Tetrastigma', '#6a5438', 'Rumah sekaligus makanan.', 'Tumbuhan merambat (liana) dari marga Tetrastigma, kerabat anggur.', 'Rafflesia adalah parasit: hidup seperti benang-benang di dalam jaringan inangnya dan mengambil air serta makanan dari sana.', 'Rafflesia tidak punya daun, batang, maupun akar sendiri, dan tidak berfotosintesis.'),
    L('kuncup', 'Kuncup', 'Knop', '#704030', 'Kubis cokelat yang tumbuh lambat.', 'Bulatan cokelat seperti kubis yang muncul dari batang inang.', 'Kuncup membesar perlahan selama berbulan-bulan sebelum mekar.', 'Setelah mekar, bunga hanya bertahan sekitar seminggu lalu membusuk menjadi hitam.'),
    L('lalat', 'Lalat bangkai', 'Penyerbuk', '#2a4a30', 'Kurir yang tertipu.', 'Lalat yang biasanya bertelur di bangkai.', 'Tertarik oleh bau busuk, lalat masuk ke bunga dan membawa serbuk sari tanpa mendapat imbalan makanan.', 'Rafflesia berbeda dengan bunga bangkai (Amorphophallus titanum), yang merupakan bunga majemuk tertinggi dan bukan parasit.'),
  ],
  quiz: Q('rafflesia', [
    ['Mengapa rafflesia disebut tumbuhan parasit?', ['Mengambil air dan makanan dari liana inangnya', 'Memakan serangga', 'Tumbuh di batu', 'Berfotosintesis sangat cepat'], 'Rafflesia tidak punya daun, batang, atau akar sendiri.'],
    ['Hewan penyerbuk rafflesia adalah ...', ['Lalat bangkai', 'Lebah madu', 'Kupu-kupu', 'Burung kolibri'], 'Bau busuknya menarik lalat bangkai.'],
    ['Apa beda rafflesia dengan bunga bangkai (Amorphophallus titanum)?', ['Rafflesia bunga tunggal terbesar dan parasit; bunga bangkai bunga majemuk tertinggi dan bukan parasit', 'Keduanya sama persis', 'Bunga bangkai tidak berbau', 'Rafflesia tumbuh di gurun'], 'Keduanya sama-sama berbau busuk sehingga sering tertukar.'],
    ['Rafflesia arnoldii ditetapkan sebagai ...', ['Puspa langka Indonesia', 'Puspa bangsa', 'Puspa pesona', 'Bunga kota Jakarta'], 'Puspa bangsa adalah melati, puspa pesona anggrek bulan.'],
    ['Berapa lama bunga rafflesia mekar?', ['Sekitar seminggu', 'Satu tahun', 'Satu jam', 'Selamanya'], 'Kuncupnya tumbuh berbulan-bulan, tetapi mekarnya hanya sebentar.'],
  ]),
  specimen: { id: 'rafflesia', kind: 'geo', name: 'Padma Raksasa', short: 'rafflesia', sci: 'Rafflesia arnoldii', family: 'Rafflesiaceae', x: -262, z: 34, top: 0.5, mkOff: 1.0, promptY: 0.6, tagNear: 5, dist: 9,
    fact: 'Padma raksasa adalah bunga tunggal terbesar di dunia dan puspa langka Indonesia. Ia hidup sebagai parasit di dalam liana dan berbau seperti bangkai.',
    hint: 'Geser slider Waktu: kuncup tumbuh berbulan-bulan, mekar sekitar seminggu sambil menarik lalat bangkai, lalu membusuk. Ketuk bagian-bagiannya.' },
};

export const KANTONG = {
  id: 'kantong', name: 'Kantong semar',
  layers: [
    L('kantong', 'Kantong', 'Daun yang berubah bentuk', '#8aa040', 'Perangkap serangga.', 'Kantong ini sebenarnya ujung daun yang berubah bentuk menjadi wadah.', 'Menjebak serangga yang tertarik oleh warna dan nektar di bibir kantong.', 'Kantong semar banyak ditemukan di Kalimantan dan Sumatra. Indonesia punya puluhan jenis kantong semar.'),
    L('sulur', 'Sulur dan daun', 'Tendril', '#6a8a30', 'Penghubung dan pemanjat.', 'Daun biasa yang ujungnya memanjang menjadi sulur, lalu sulur itu berakhir menjadi kantong.', 'Daun berfotosintesis. Sulur bisa melilit ranting sehingga tanaman bisa memanjat.', 'Kantong bawah biasanya duduk di tanah, kantong atas menggantung dan bentuknya sering berbeda.'),
    L('tutup', 'Tutup', 'Operkulum', '#a0a040', 'Payung kantong.', 'Lembaran di atas mulut kantong.', 'Melindungi kantong dari air hujan yang bisa mengencerkan cairan pencerna. Bagian bawahnya juga menghasilkan nektar.', 'Tutup tidak menutup kantong untuk menangkap mangsa, ia selalu terbuka.'),
    L('peristom', 'Bibir kantong', 'Peristom', '#b02020', 'Seluncuran licin.', 'Bibir bergerigi berwarna mencolok di mulut kantong.', 'Menghasilkan nektar. Saat basah, permukaannya sangat licin sehingga serangga tergelincir masuk.', 'Licinnya peristom basah bekerja seperti "aquaplaning" pada ban mobil di jalan basah.'),
    L('lilin', 'Zona lilin', 'Dinding atas bagian dalam', '#c0cc90', 'Dinding tak bisa dipanjat.', 'Dinding dalam bagian atas kantong yang dilapisi serpihan lilin.', 'Kaki serangga tidak bisa mencengkeram serpihan lilin, sehingga mangsa sulit memanjat keluar.', 'Lilin menempel di kaki serangga dan membuatnya makin licin.'),
    L('kelenjar', 'Zona kelenjar', 'Dinding bawah bagian dalam', '#a05050', 'Penghasil enzim dan penyerap.', 'Dinding dalam bagian bawah yang penuh kelenjar kecil (titik merah).', 'Menghasilkan enzim pencerna dan menyerap unsur hara hasil uraian mangsa. Titik hijau menunjukkan hara yang diserap.', 'Kantong semar tetap berfotosintesis. Serangga bukan sumber energi utamanya, melainkan sumber nitrogen dan fosfor.'),
    L('cairan', 'Cairan pencerna', 'Mengandung enzim', '#e0d070', 'Kolam pencernaan.', 'Cairan di dasar kantong.', 'Melemaskan dan menguraikan tubuh serangga sampai tersisa kerangka luarnya.', 'Kantong semar hidup di tanah yang miskin hara, sehingga "makan" serangga membantunya mendapat nitrogen.'),
  ],
  quiz: Q('kantong', [
    ['Kantong pada kantong semar sebenarnya adalah ...', ['Daun yang berubah bentuk', 'Bunga', 'Buah', 'Akar'], 'Ujung daun memanjang menjadi sulur lalu menjadi kantong.'],
    ['Mengapa kantong semar memangsa serangga?', ['Mendapat nitrogen dan fosfor karena tanahnya miskin hara', 'Karena tidak bisa fotosintesis', 'Untuk mendapat air', 'Untuk bertelur'], 'Ia tetap berfotosintesis untuk energi.'],
    ['Bagian yang membuat serangga tergelincir masuk adalah ...', ['Bibir kantong (peristom) yang licin', 'Tutup kantong', 'Sulur', 'Akar'], 'Peristom sangat licin saat basah.'],
    ['Apa fungsi tutup kantong?', ['Melindungi dari air hujan dan menghasilkan nektar', 'Menutup kantong untuk menjebak mangsa', 'Mencerna serangga', 'Menyerap air'], 'Tutup tidak bergerak menutup.'],
  ]),
  specimen: { id: 'kantong', kind: 'geo', name: 'Kantong Semar', short: 'kantong semar', sci: 'Nepenthes', family: 'Nepenthaceae', x: -238, z: 40, top: 0.6, mkOff: 1.0, promptY: 0.6, tagNear: 5, dist: 9,
    fact: 'Kantong semar adalah tumbuhan pemakan serangga. Kantongnya adalah daun yang berubah bentuk menjadi perangkap.',
    hint: 'Geser slider Waktu: semut tergelincir dari bibir yang licin, jatuh ke cairan, dicerna, lalu haranya diserap (titik hijau). Ketuk bagian-bagian kantong.' },
};

export const TAJUK = {
  id: 'tajuk', name: 'Lapisan hutan hujan',
  layers: [
    L('mencuat', 'Pohon mencuat', 'Lapisan emergen (~40-60 m)', '#5a8a3a', 'Raksasa di atas atap hutan.', 'Pohon-pohon tertinggi yang tajuknya menyembul di atas kanopi, misalnya meranti dan keruing (suku Dipterocarpaceae).', 'Mendapat cahaya matahari penuh, tetapi juga angin kencang dan panas. Banyak pohon raksasa ini punya akar papan yang lebar untuk menopang batang.', 'Elang dan enggang sering bertengger di pohon mencuat.'),
    L('kanopi', 'Kanopi', 'Atap hutan (~25-35 m)', '#3a6a2a', 'Atap hijau yang rapat.', 'Tajuk pohon-pohon yang saling bersambung seperti atap.', 'Menangkap sebagian besar cahaya matahari. Di sinilah paling banyak buah, bunga, dan hewan hidup.', 'Banyak hewan kanopi seperti orangutan dan owa jarang turun ke tanah.'),
    L('bawah', 'Bawah tajuk', 'Understory', '#4a7a40', 'Hidup di keteduhan.', 'Pohon muda, palem, dan semak yang tumbuh di bawah kanopi.', 'Daunnya lebar dan tipis untuk menangkap cahaya yang tersisa. Banyak yang menunggu ada pohon tumbang untuk tumbuh cepat ke atas.', 'Udara di bawah tajuk lembap, tenang, dan lebih sejuk dibanding di atas kanopi.'),
    L('lantai', 'Lantai hutan', 'Forest floor', '#6a5a30', 'Gelap, lembap, dan sibuk mengurai.', 'Permukaan tanah dengan serasah daun, paku-pakuan, dan jamur.', 'Hanya sekitar 1-2 persen cahaya matahari yang sampai ke sini. Pengurai bekerja cepat sehingga lapisan humusnya tipis.', 'Hara hutan hujan lebih banyak tersimpan di tumbuhannya daripada di tanah. Karena itu tanah bekas hutan yang ditebang cepat kehilangan kesuburan.'),
    L('liana', 'Liana', 'Tumbuhan merambat berkayu', '#5a4a30', 'Pemanjat menuju cahaya.', 'Tumbuhan merambat berkayu yang berakar di tanah tetapi daunnya di kanopi.', 'Menumpang batang pohon untuk mencapai cahaya tanpa harus membuat batang besar sendiri.', 'Beberapa liana menjadi inang bagi rafflesia.'),
    L('epifit', 'Epifit', 'Anggrek dan paku yang menumpang', '#d080c0', 'Penumpang di dahan.', 'Tumbuhan yang hidup menempel di batang atau dahan pohon lain, misalnya anggrek dan paku sarang burung.', 'Mendapat cahaya lebih banyak di atas, dan mengambil air dari udara lembap serta hujan. Epifit tidak mengambil makanan dari pohon yang ditumpanginya.', 'Indonesia punya ribuan jenis anggrek. Anggrek bulan adalah puspa pesona Indonesia.'),
  ],
  quiz: Q('tajuk', [
    ['Berapa kira-kira cahaya matahari yang sampai ke lantai hutan hujan?', ['Sekitar 1-2 persen', 'Sekitar 50 persen', 'Seluruhnya', 'Tidak ada sama sekali'], 'Kanopi yang rapat menangkap hampir semua cahaya.'],
    ['Epifit seperti anggrek mendapat air dari ...', ['Udara lembap dan hujan', 'Akar pohon yang ditumpangi', 'Batang pohon yang dilukai', 'Tanah di bawahnya'], 'Epifit bukan parasit.'],
    ['Mengapa banyak pohon raksasa hutan hujan punya akar papan?', ['Menopang batang tinggi di tanah yang dangkal', 'Untuk menyimpan air', 'Untuk menangkap serangga', 'Untuk berfotosintesis'], 'Akar papan bekerja seperti penyangga.'],
    ['Lapisan hutan tempat paling banyak buah dan hewan adalah ...', ['Kanopi', 'Lantai hutan', 'Di bawah tanah', 'Pohon mencuat'], 'Kanopi menerima banyak cahaya dan menghasilkan banyak makanan.'],
    ['Mengapa tanah bekas hutan hujan yang ditebang cepat tidak subur?', ['Hara lebih banyak tersimpan di tumbuhan, bukan di tanah', 'Karena terlalu banyak cahaya', 'Karena terlalu dingin', 'Karena tanahnya berpasir pantai'], 'Hujan juga cepat mencuci hara dari tanah terbuka.'],
  ]),
  specimen: { id: 'tajuk', kind: 'geo', name: 'Pohon Raksasa', short: 'lapisan hutan', sci: 'Stratifikasi hutan hujan', family: 'Ekosistem hutan hujan', x: -244, z: 12, top: 2.0, mkOff: 1.0, promptY: 1.4, tagNear: 7, dist: 34,
    fact: 'Hutan hujan tropis tersusun berlapis seperti gedung bertingkat: pohon mencuat, kanopi, bawah tajuk, dan lantai hutan. Tiap lapisan punya cahaya, suhu, dan penghuni yang berbeda.',
    hint: 'Geser Ketinggian pengamat untuk naik dari lantai hutan ke atas pohon mencuat. Perhatikan perubahan cahaya. Ketuk tiap lapisan, liana, dan epifit.' },
};
