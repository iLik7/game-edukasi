/* Data edukasi FASE 4: GUNUNG & SALJU.
   CATATAN: isi perlu divalidasi guru biologi/geografi, ahli botani, ahli ornitologi, dan glasiolog sebelum dipakai di sekolah.
   Rujukan singkat: Keppres No. 4 Tahun 1993 (elang Jawa satwa langka); IUCN Red List (Nisaetus bartelsi, Terancam/Endangered);
   F. W. Junghuhn (pembagian zona iklim menurut ketinggian); BMKG (2023) dan Permana dkk. (PNAS 2019) soal gletser Puncak Jaya. */
import { BURUNG } from './hewan3.js';
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const ELANG = {
  id: 'elang', name: 'Elang Jawa',
  layers: [
    ...BURUNG.layers.map((l) => l.id === 'kulit' ? { ...l, ui: '#5a3a20', what: 'Elang Jawa berbulu cokelat tua di punggung, kepala cokelat kemerahan, dan dada putih kekuningan bergaris cokelat. Di kepalanya ada jambul panjang 2 sampai 4 helai bulu yang tegak.', fact: 'Elang Jawa sering disebut sebagai satwa yang mirip lambang negara, Garuda, karena jambulnya.' }
      : l.id === 'otak' ? { ...l, what: 'Mata elang sangat besar dan menghadap agak ke depan, sehingga kedua mata bisa melihat bersamaan (penglihatan binokuler).', fn: 'Penglihatan binokuler membantu memperkirakan jarak mangsa dengan tepat saat menukik.', fact: 'Mata burung pemangsa punya sel penerima cahaya yang jauh lebih rapat daripada mata manusia, sehingga bisa melihat mangsa kecil dari ketinggian.' }
      : l.id === 'ampela' ? { ...l, what: 'Makanan lewat kerongkongan dan tembolok ke lambung. Lambung elang tidak segiling ampela burung pemakan biji.', fn: 'Daging dicerna oleh asam lambung yang kuat. Bulu dan tulang yang tidak tercerna dipadatkan lalu dimuntahkan sebagai gumpalan (pelet).', fact: 'Dengan memeriksa pelet, peneliti bisa tahu apa saja yang dimakan burung pemangsa.' }
      : l.id === 'siring' ? { ...l, fact: 'Suara elang Jawa melengking tinggi, terdengar seperti "ii-iiw" dari atas hutan.' } : l),
    L('tembolok', 'Tembolok', 'Crop', '#e0b080', 'Kantong penyimpan makanan.', 'Pelebaran kerongkongan di pangkal leher, di depan dada.', 'Menyimpan daging sementara saat elang makan banyak sekaligus, lalu dialirkan sedikit demi sedikit ke lambung.', 'Tembolok yang penuh tampak menonjol di dada elang setelah makan.'),
    L('paruhcakar', 'Paruh dan cakar', 'Alat berburu', '#303030', 'Kait dan pencengkeram.', 'Paruh elang tajam dan melengkung seperti kait. Jari kakinya kuat dengan kuku (cakar) panjang dan runcing.', 'Cakar mencengkeram dan melumpuhkan mangsa. Paruh berkait merobek daging menjadi potongan kecil.', 'Elang Jawa memangsa tupai, kelelawar, burung, dan kadal di hutan pegunungan.'),
  ],
  quiz: Q('elang', [
    ['Elang Jawa termasuk satwa ...', ['Endemik Pulau Jawa dan terancam punah', 'Yang hidup di seluruh dunia', 'Peliharaan yang umum', 'Penghuni gurun'], 'Elang Jawa hanya ada di Jawa dan berstatus Terancam (Endangered).'],
    ['Apa fungsi paruh berkait elang?', ['Merobek daging mangsa', 'Memecah biji keras', 'Menyaring air', 'Menghisap nektar'], 'Cakar mencengkeram, paruh merobek.'],
    ['Gumpalan bulu dan tulang yang dimuntahkan elang disebut ...', ['Pelet', 'Ampela', 'Kloaka', 'Siring'], 'Pelet berisi sisa yang tidak tercerna.'],
    ['Mengapa elang Jawa sulit bertambah banyak?', ['Biasanya bertelur satu butir sekitar dua tahun sekali dan hutannya makin sempit', 'Karena terlalu banyak makan', 'Karena tidak bisa terbang', 'Karena hidup di laut'], 'Perburuan untuk diperdagangkan juga mengancamnya.'],
  ]),
  specimen: { id: 'elang', kind: 'animal', name: 'Elang Jawa', short: 'elang Jawa', sci: 'Nisaetus bartelsi', family: 'Accipitridae', x: -32, z: -228, top: 0.6, mkOff: 0.8, promptY: 0.7, tagNear: 6, reach: 10,
    fact: 'Elang Jawa adalah burung pemangsa endemik Pulau Jawa yang hidup di hutan pegunungan. Ia ditetapkan sebagai satwa langka nasional dan berstatus Terancam punah.',
    hint: 'Geser Kedalaman dari bulu ke organ. Cari tembolok, lambung pemakan daging, serta paruh berkait dan cakar. Bandingkan dengan kutilang dan enggang.' },
};

export const EDELWEIS = {
  id: 'edelweis', name: 'Edelweis Jawa',
  layers: [
    L('braktea', 'Daun pelindung', 'Braktea', '#f2f2ea', 'Yang terlihat seperti kelopak.', 'Helai-helai putih yang mirip kelopak sebenarnya adalah daun pelindung (braktea) yang berbulu putih.', 'Menarik serangga penyerbuk dan melindungi bunga-bunga kecil di tengahnya.', 'Karena braktea kering dan awet, edelweis dijuluki "bunga abadi".'),
    L('bonggol', 'Bunga majemuk', 'Bonggol (kapitulum)', '#e8c050', 'Ratusan bunga kecil.', 'Bagian kuning di tengah adalah kumpulan banyak bunga kecil yang tersusun dalam bonggol.', 'Tiap bunga kecil bisa menghasilkan biji ringan berambut yang diterbangkan angin.', 'Edelweis sekerabat dengan bunga matahari (suku Asteraceae), yang juga punya bunga majemuk.'),
    L('daun', 'Daun', 'Folium', '#9aa898', 'Sempit dan berbulu.', 'Daun sempit memanjang yang permukaannya tertutup bulu halus berwarna abu-abu keperakan.', 'Daun yang sempit mengurangi penguapan air dan kerusakan karena angin kencang di puncak gunung.', 'Warna keperakan berasal dari bulu-bulu, bukan dari warna daunnya sendiri.'),
    L('rambut', 'Rambut daun', 'Trikoma', '#ffffff', 'Jaket wol tanaman.', 'Bulu-bulu sangat halus dan rapat di permukaan daun dan braktea. Geser Perbesaran untuk melihatnya.', 'Memantulkan sebagian sinar ultraviolet (UV) yang kuat di ketinggian, menahan lapisan udara hangat di dekat daun, dan mengurangi penguapan.', 'Di gunung tinggi udara tipis, sehingga sinar UV lebih kuat daripada di dataran rendah.'),
    L('akar', 'Akar', 'Radix', '#b09a70', 'Penahan di tanah vulkanik.', 'Akar yang menjalar di tanah berpasir bekas letusan gunung api.', 'Menyerap air dan hara. Akar edelweis bekerja sama dengan jamur (mikoriza) yang membantu menyerap hara dari tanah yang miskin.', 'Edelweis adalah tumbuhan perintis: termasuk yang pertama tumbuh di tanah vulkanik yang baru.'),
  ],
  quiz: Q('edelweis', [
    ['Bagian putih edelweis yang mirip kelopak sebenarnya adalah ...', ['Daun pelindung (braktea)', 'Mahkota bunga', 'Akar', 'Buah'], 'Bunga sebenarnya kecil-kecil di bagian kuning.'],
    ['Apa gunanya bulu halus (trikoma) pada edelweis?', ['Melindungi dari sinar UV, dingin, dan penguapan', 'Untuk menangkap serangga', 'Untuk berfotosintesis lebih cepat', 'Untuk menyimpan nektar'], 'Lingkungan puncak gunung dingin, berangin, dan sinar UV-nya kuat.'],
    ['Mengapa edelweis disebut tumbuhan perintis?', ['Termasuk yang pertama tumbuh di tanah vulkanik baru', 'Karena paling tinggi', 'Karena tumbuh di laut', 'Karena berbunga paling cepat'], 'Ia membantu membentuk tanah untuk tumbuhan lain.'],
    ['Mengapa pendaki dilarang memetik edelweis di taman nasional?', ['Pertumbuhannya lambat dan populasinya bisa rusak', 'Karena beracun', 'Karena baunya busuk', 'Karena akan layu dalam sedetik'], 'Edelweis kini juga dibudidayakan warga, misalnya di sekitar Bromo.'],
  ]),
  specimen: { id: 'edelweis', kind: 'geo', name: 'Edelweis Jawa', short: 'edelweis', sci: 'Anaphalis javanica', family: 'Asteraceae', x: 22, z: -242, top: 0.5, mkOff: 1.0, promptY: 0.6, tagNear: 5, dist: 9,
    fact: 'Edelweis Jawa tumbuh di puncak-puncak gunung di Jawa, Sumatra, Bali, dan Lombok. Ia tahan dingin, angin, dan sinar UV yang kuat. Memetiknya di kawasan taman nasional dilarang.',
    hint: 'Geser Perbesaran untuk melihat bulu-bulu halus di permukaan daun. Titik ungu menunjukkan sinar UV yang dipantulkan. Ketuk braktea, bonggol, daun, dan akar.' },
};

export const CEMARA = {
  id: 'cemara', name: 'Cemara gunung',
  layers: [
    L('ranting', 'Ranting hijau', 'Cabang fotosintesis', '#3a6a30', 'Yang mirip jarum bukan daun.', 'Helai hijau yang menjuntai seperti jarum sebenarnya ranting kecil beruas-ruas. Geser Perbesaran untuk melihat ruasnya.', 'Ranting hijau inilah yang berfotosintesis, menggantikan tugas daun.', 'Cemara gunung bukan tumbuhan berdaun jarum seperti pinus. Ia tumbuhan berbunga (Angiospermae).'),
    L('sisik', 'Daun sisik', 'Daun yang sangat kecil', '#7a6040', 'Daun sesungguhnya.', 'Daun aslinya sangat kecil seperti sisik yang melingkar di setiap buku (sambungan) ranting.', 'Daun yang sangat kecil mengurangi penguapan air, cocok di tempat berangin dan kering.', 'Jumlah sisik di setiap buku dipakai untuk membedakan jenis-jenis cemara.'),
    L('batang', 'Batang', 'Caulis', '#5a4535', 'Tegak dan kuat.', 'Batang lurus berkayu keras dengan kulit kasar.', 'Menopang tajuk dan menyalurkan air serta hasil fotosintesis.', 'Kayu cemara gunung keras dan dipakai warga sebagai kayu bakar dan bahan bangunan.'),
    L('buah', 'Buah', 'Buah semu (runjung semu)', '#705030', 'Mirip runjung pinus.', 'Bulatan kecil berkayu yang mirip runjung (konus) pinus.', 'Berisi banyak biji bersayap yang lepas dan diterbangkan angin.', 'Walau mirip runjung pinus, ini kumpulan buah dari bunga-bunga kecil.'),
    L('akar', 'Akar', 'Radix', '#a08a60', 'Menjalar di tanah miskin hara.', 'Akar yang menjalar di tanah vulkanik berbatu.', 'Menyerap air dan mencengkeram lereng yang curam sehingga mengurangi longsor.', 'Cemara gunung sering dipakai untuk menghijaukan kembali lereng gunung yang gundul.'),
    L('bintil', 'Bintil akar', 'Berisi bakteri Frankia', '#d08050', 'Pabrik pupuk alami.', 'Benjolan pada akar yang berisi bakteri Frankia.', 'Bakteri Frankia mengikat nitrogen dari udara di dalam tanah (titik biru) dan mengubahnya menjadi bentuk yang bisa dipakai tumbuhan.', 'Karena "punya pupuk sendiri", cemara gunung bisa tumbuh di tanah bekas letusan atau kebakaran yang miskin hara.'),
  ],
  quiz: Q('cemara', [
    ['Helai hijau seperti jarum pada cemara gunung sebenarnya adalah ...', ['Ranting kecil yang berfotosintesis', 'Daun jarum seperti pinus', 'Akar udara', 'Bunga'], 'Daun aslinya berupa sisik kecil di setiap buku.'],
    ['Bintil akar cemara gunung berisi ...', ['Bakteri Frankia pengikat nitrogen', 'Air cadangan', 'Telur serangga', 'Getah'], 'Mirip bintil akar kacang-kacangan yang berisi Rhizobium.'],
    ['Mengapa cemara gunung cocok untuk menghijaukan lereng gundul?', ['Tahan tanah miskin hara dan akarnya mencengkeram lereng', 'Karena berbuah manis', 'Karena tumbuh di air', 'Karena tidak butuh cahaya'], 'Bintil akar membantunya mendapat nitrogen.'],
    ['Cemara gunung termasuk kelompok ...', ['Tumbuhan berbunga (Angiospermae)', 'Tumbuhan berdaun jarum (Gymnospermae) seperti pinus', 'Paku-pakuan', 'Lumut'], 'Kemiripannya dengan pinus hanya tampilan luar.'],
  ]),
  specimen: { id: 'cemara', kind: 'geo', name: 'Cemara Gunung', short: 'cemara gunung', sci: 'Casuarina junghuhniana', family: 'Casuarinaceae', x: -15, z: -215, top: 2.0, mkOff: 1.0, promptY: 1.4, tagNear: 6, dist: 15,
    fact: 'Cemara gunung tumbuh di lereng gunung-gunung di Jawa Timur, Bali, dan Nusa Tenggara. Helai hijaunya yang mirip jarum sebenarnya ranting kecil, dan akarnya punya bintil berisi bakteri pengikat nitrogen.',
    hint: 'Geser Perbesaran: mula-mula ke ruas ranting dan daun sisiknya, lalu turun ke bintil akar di potongan tanah. Ketuk tiap bagian.' },
};

export const IKLIM = {
  id: 'iklim', name: 'Zona iklim gunung',
  layers: [
    L('panas', 'Zona panas', '0-700 m', '#a8d060', 'Sekitar 26,3-22 °C.', 'Dataran rendah sampai ketinggian sekitar 700 meter.', 'Cocok untuk padi, kelapa, tebu, jagung, dan kakao.', 'Pembagian ini dibuat oleh Franz Wilhelm Junghuhn, peneliti yang menjelajahi gunung-gunung di Jawa pada abad ke-19.'),
    L('sedang', 'Zona sedang', '700-1500 m', '#5fa84a', 'Sekitar 22-17,1 °C.', 'Lereng bawah gunung.', 'Cocok untuk kopi, teh (di bagian atas), cokelat, dan sayuran tertentu.', 'Banyak kebun kopi di Indonesia ada di zona ini.'),
    L('sejuk', 'Zona sejuk', '1500-2500 m', '#2e6a48', 'Sekitar 17,1-11,1 °C.', 'Lereng tengah gunung.', 'Cocok untuk teh, kina, sayuran seperti kubis dan kentang, serta hutan pegunungan.', 'Dataran tinggi Dieng dan Puncak Bogor termasuk tempat sejuk penghasil sayur dan teh.'),
    L('dingin', 'Zona dingin', 'Di atas 2500 m', '#8c7e66', 'Sekitar 11,1-6,2 °C dan lebih dingin lagi ke atas.', 'Lereng atas dan puncak gunung.', 'Pohon makin pendek lalu berganti semak, rumput, lumut, dan edelweis. Hampir tidak ada tanaman pertanian.', 'Batas tumbuhnya pohon di puncak gunung disebut batas pohon (tree line).'),
    L('salju', 'Salju abadi', 'Puncak Jaya ~4.884 m', '#eef3f8', 'Di bawah 0 °C pada sebagian waktu.', 'Satu-satunya tempat di Indonesia yang masih punya es (gletser), di Pegunungan Jayawijaya, Papua.', 'Suhunya cukup dingin sehingga salju bisa bertahan dan memadat menjadi es.', 'Gletser di Puncak Jaya kini menyusut cepat. Lihat objek Gletser di puncak gunung.'),
    L('awan', 'Awan di lereng', 'Awan orografis', '#ffffff', 'Udara naik, mendingin, mengembun.', 'Awan yang terbentuk ketika angin membawa udara lembap naik menyusuri lereng gunung.', 'Udara yang naik mengembang dan mendingin. Uap air mengembun menjadi awan, lalu sering turun sebagai hujan di lereng yang menghadap angin.', 'Sisi gunung di balik arah angin biasanya lebih kering. Daerah ini disebut bayangan hujan.'),
  ],
  quiz: Q('iklim', [
    ['Menurut pembagian Junghuhn, suhu turun sekitar ... setiap naik 100 meter.', ['0,6 °C', '6 °C', '0,06 °C', '10 °C'], 'Dari 0 m ke 1000 m, suhu turun sekitar 6 °C.'],
    ['Jika suhu di pantai 26 °C, berapa kira-kira suhu di ketinggian 2000 m?', ['Sekitar 14 °C', 'Sekitar 26 °C', 'Sekitar 2 °C', 'Sekitar 38 °C'], '26 - (2000/100 x 0,6) = 26 - 12 = 14 °C.'],
    ['Tanaman teh paling cocok ditanam di zona ...', ['Sedang sampai sejuk', 'Panas di tepi pantai', 'Salju abadi', 'Laut'], 'Teh butuh udara sejuk dan hujan cukup.'],
    ['Mengapa awan sering terbentuk di lereng gunung?', ['Udara lembap naik, mendingin, lalu uap airnya mengembun', 'Karena gunung mengeluarkan asap', 'Karena udara turun dan memanas', 'Karena ada laut di puncak'], 'Ini disebut hujan orografis.'],
  ]),
  specimen: { id: 'iklim', kind: 'geo', name: 'Papan Zona Iklim', short: 'zona iklim', sci: 'Suhu dan ketinggian', family: 'Geografi', x: 8, z: -198, top: 1.6, mkOff: 1.0, promptY: 1.2, tagNear: 6, dist: 22,
    fact: 'Makin tinggi tempat, makin dingin udaranya, rata-rata turun sekitar 0,6 °C setiap naik 100 meter. Karena itu jenis tanaman di gunung berganti-ganti menurut ketinggian.',
    hint: 'Geser Ketinggian untuk membawa pendaki dari pantai ke puncak. Perhatikan angka suhu dan termometernya. Ketuk tiap zona.' },
};

export const GLETSER = {
  id: 'gletser', name: 'Gletser Puncak Jaya',
  layers: [
    L('salju', 'Salju segar', 'Lapisan paling atas', '#ffffff', 'Butiran es yang ringan.', 'Salju yang baru turun, ringan dan banyak berisi udara.', 'Lama-lama tertimbun salju baru dan tertekan.', 'Puncak Jaya (Carstensz) di Papua tingginya sekitar 4.884 meter, puncak tertinggi di Indonesia.'),
    L('firn', 'Firn', 'Salju yang memadat', '#dde6ee', 'Peralihan salju ke es.', 'Salju yang sudah bertahan lebih dari satu musim dan butirannya menyatu.', 'Tertekan beban di atasnya, firn makin padat dan udaranya terperas keluar.', 'Gelembung udara yang terperangkap di es bisa menyimpan "contoh udara" zaman dulu.'),
    L('es', 'Es gletser', 'Es biru', '#8ac4f0', 'Es padat yang bisa mengalir.', 'Es yang sangat padat, tampak kebiruan karena menyerap cahaya merah.', 'Karena beratnya sendiri, gletser mengalir perlahan menuruni lereng seperti sungai es.', 'Pada 2010 tebal es Puncak Jaya sekitar 32 m. Akhir 2022 tinggal sekitar 6 m (BMKG).'),
    L('celah', 'Celah', 'Crevasse', '#2a4a6a', 'Retakan dalam di es.', 'Retakan dalam yang terbentuk saat es mengalir di permukaan yang tidak rata.', 'Menunjukkan bahwa es benar-benar bergerak dan meregang.', 'Celah gletser bisa tertutup salju tipis sehingga berbahaya bagi pendaki.'),
    L('moraine', 'Moraine', 'Timbunan batu gletser', '#807060', 'Jejak gletser.', 'Timbunan batu dan pasir yang dibawa dan didorong oleh gletser.', 'Saat gletser mundur, moraine tertinggal dan menandai sampai mana es dulu berada.', 'Dari moraine, ilmuwan tahu gletser Puncak Jaya dulu jauh lebih luas.'),
    L('lelehan', 'Air lelehan', 'Meltwater', '#5aa0e0', 'Es yang mencair.', 'Air dari es yang mencair di ujung dan permukaan gletser.', 'Mengalir menjadi sungai kecil. Makin hangat suhu, makin banyak es yang mencair.', 'Penyusutan sangat cepat saat El Niño 2015-2016, sekitar 5 m per tahun.'),
    L('batuan', 'Batuan dasar', 'Batu kapur', '#6a6660', 'Alas gletser.', 'Batuan keras di bawah dan di sekitar gletser.', 'Gletser yang mengalir mengikis dan menghaluskan batuan di bawahnya.', 'Puncak Jaya tersusun dari batu kapur yang dulu terbentuk di dasar laut lalu terangkat.'),
  ],
  quiz: Q('gletser', [
    ['Urutan pembentukan es gletser adalah ...', ['Salju, firn, es gletser', 'Es, salju, firn', 'Firn, air, salju', 'Air, uap, salju'], 'Salju memadat menjadi firn, lalu menjadi es.'],
    ['Satu-satunya gletser di Indonesia ada di ...', ['Puncak Jaya, Papua', 'Gunung Semeru', 'Gunung Rinjani', 'Dataran Tinggi Dieng'], 'Puncak Jaya tingginya sekitar 4.884 m.'],
    ['Mengapa gletser Puncak Jaya menyusut?', ['Pemanasan global dan El Niño membuat es lebih cepat mencair', 'Karena ditambang', 'Karena hujan salju terlalu banyak', 'Karena gempa'], 'Para peneliti memperkirakan esnya bisa hilang dalam beberapa tahun.'],
    ['Timbunan batu yang ditinggalkan gletser disebut ...', ['Moraine', 'Firn', 'Celah', 'Delta'], 'Moraine menandai batas gletser di masa lalu.'],
  ]),
  specimen: { id: 'gletser', kind: 'geo', name: 'Gletser', short: 'gletser', sci: 'Salju abadi', family: 'Geografi', x: 0, z: -345, top: 1.6, mkOff: 1.2, promptY: 1.2, tagNear: 7, dist: 17,
    fact: 'Gletser adalah es tebal dari salju yang memadat bertahun-tahun dan mengalir perlahan. Di Indonesia, gletser hanya tersisa di Puncak Jaya, Papua, dan terus menyusut.',
    hint: 'Geser Tahun dari 1850 ke 2030 dan lihat gletser menyusut. Ketuk salju, firn, es, celah, moraine, dan air lelehan.' },
};
