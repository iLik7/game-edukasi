/* Data edukasi FASE 1: PANTAI & GURUN.
   CATATAN: isi sains perlu divalidasi guru biologi/geografi, ahli kelautan, dan ahli satwa sebelum dipakai di sekolah.
   Rujukan singkat: NOAA Coral Reef Watch (pemutihan karang); WWF Indonesia (6 dari 7 jenis penyu ada di Indonesia);
   Gumuk Pasir Parangtritis (Badan Informasi Geospasial / UGM); Nobel & Lüttge soal fotosintesis CAM; Schmidt-Nielsen soal fisiologi unta. */
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const PENYU = {
  id: 'penyu', name: 'Penyu',
  layers: [
    L('kulit', 'Tempurung dan kulit', 'Karapas, plastron, sisik', '#7a6236', 'Rumah yang dibawa ke mana-mana.', 'Bagian atas tempurung disebut karapas, bagian bawah plastron. Permukaannya dilapisi sisik keras (skut). Kulit kepala dan sirip bersisik.', 'Melindungi organ dalam. Bentuknya pipih dan licin supaya mudah meluncur di air.', 'Berbeda dari kura-kura darat, penyu laut tidak bisa menarik kepala dan siripnya masuk ke dalam tempurung.'),
    L('otot', 'Otot', 'Sistem muskuler', '#c8705a', 'Otot sirip yang kuat.', 'Otot terbesar menggerakkan sirip depan.', 'Sirip depan dikepakkan naik turun seperti sayap sehingga penyu "terbang" di dalam air. Sirip belakang dipakai sebagai kemudi dan untuk menggali lubang sarang.', 'Penyu hijau bisa bermigrasi ribuan kilometer antara tempat makan dan pantai bertelur.'),
    L('rangka', 'Rangka', 'Tempurung bertulang', '#eae0c4', 'Rusuk dan tulang belakang menyatu dengan tempurung.', 'Tempurung penyu adalah bagian dari rangkanya: tulang rusuk dan tulang belakang menyatu dengan lempeng tulang karapas.', 'Membuat tubuh sangat kuat, tetapi rusuknya tidak bisa mengembang. Penyu bernapas dengan bantuan otot di sekitar paru-paru.', 'Karena tempurung menyatu dengan tulang, penyu tidak bisa keluar dari tempurungnya.'),
    L('otak', 'Otak', 'Sistem saraf', '#e8a8b0', 'Navigasi jarak jauh.', 'Otak kecil di dalam tengkorak.', 'Mengatur gerak dan navigasi.', 'Penyu betina biasanya kembali bertelur di pantai sekitar tempat ia menetas, diduga dengan membaca medan magnet bumi.'),
    L('garam', 'Kelenjar garam', 'Kelenjar air mata', '#a0c8e8', 'Penyu "menangis".', 'Sepasang kelenjar besar di dekat mata.', 'Membuang kelebihan garam dari air laut yang ikut terminum. Cairan garam keluar seperti air mata.', 'Penyu yang sedang bertelur di pantai sering terlihat seperti menangis, padahal sedang membuang garam.'),
    L('jantung', 'Jantung', 'Sistem peredaran darah', '#c83040', 'Bisa sangat lambat.', 'Jantung reptil dengan tiga ruang.', 'Memompa darah. Saat menyelam lama, detaknya melambat untuk menghemat oksigen.', 'Penyu yang tidur di dasar laut dapat menahan napas berjam-jam.'),
    L('paru', 'Paru-paru', 'Sistem pernapasan', '#e07a88', 'Paru-paru besar di bawah tempurung.', 'Sepasang paru-paru besar menempel di bawah karapas.', 'Penyu bernapas dengan paru-paru, jadi harus naik ke permukaan untuk mengambil udara.', 'Penyu bisa tenggelam jika terjerat jaring ikan dan tidak bisa naik ke permukaan.'),
    L('hati', 'Hati', 'Kelenjar pencernaan', '#7a2018', 'Gudang energi.', 'Hati besar di bawah paru-paru.', 'Menghasilkan empedu, menyimpan energi, dan menetralkan racun.', 'Cadangan energi penting saat migrasi jauh.'),
    L('lambung', 'Kerongkongan dan lambung', 'Sistem pencernaan', '#e0a090', 'Kerongkongan berduri.', 'Kerongkongan penyu dilapisi tonjolan runcing yang mengarah ke dalam.', 'Tonjolan itu menahan makanan supaya tidak ikut keluar saat penyu memuntahkan air laut yang tertelan.', 'Penyu sering mengira kantong plastik sebagai ubur-ubur atau makanan. Plastik bisa menyumbat saluran cernanya.'),
    L('usus', 'Usus', 'Sistem pencernaan', '#f0b8a8', 'Usus panjang pencerna lamun.', 'Usus yang panjang dan berkelok.', 'Penyu hijau dewasa makan lamun dan rumput laut. Usus panjang dan bakteri di dalamnya membantu mencerna tumbuhan.', 'Penyu hijau dinamai dari warna lemaknya yang kehijauan karena makanannya, bukan dari warna tempurungnya.'),
    L('kemih', 'Kandung kemih', 'Sistem ekskresi', '#e8e0a0', 'Penampung urine.', 'Kantong di bagian belakang tubuh.', 'Menampung urine sebelum dibuang lewat kloaka.', 'Telur, urine, dan kotoran semuanya keluar lewat satu lubang, yaitu kloaka.'),
    L('sarang', 'Sarang dan telur', 'Reproduksi', '#f0ead8', 'Suhu pasir menentukan jenis kelamin.', 'Penyu betina menggali lubang di pasir pantai lalu bertelur sekitar 100 butir sekali bertelur.', 'Telur dihangatkan oleh pasir, tidak dierami. Tukik menetas setelah sekitar dua bulan dan langsung berjalan ke laut.', 'Pasir yang lebih hangat menghasilkan lebih banyak tukik betina, pasir lebih dingin lebih banyak jantan. Pemanasan global bisa membuat hampir semua tukik betina.'),
  ],
  quiz: Q('penyu', [
    ['Mengapa penyu sering terlihat "menangis" saat di pantai?', ['Membuang kelebihan garam lewat kelenjar dekat mata', 'Karena kesakitan saat bertelur', 'Matanya kemasukan pasir', 'Karena sedih meninggalkan telur'], 'Kelenjar garam di dekat mata membuang garam dari air laut yang tertelan.'],
    ['Apa yang menentukan jenis kelamin tukik penyu?', ['Suhu pasir tempat telur dikubur', 'Ukuran induk', 'Warna tempurung', 'Jumlah telur'], 'Pasir lebih hangat menghasilkan lebih banyak betina.'],
    ['Penyu bernapas dengan ...', ['Paru-paru', 'Insang', 'Kulit saja', 'Kelenjar garam'], 'Karena itu penyu harus naik ke permukaan dan bisa mati jika terjerat jaring.'],
    ['Mengapa kantong plastik berbahaya bagi penyu?', ['Sering dikira ubur-ubur lalu dimakan', 'Membuat air laut asin', 'Menghalangi sinar bulan', 'Menyebabkan tempurung retak'], 'Plastik bisa menyumbat saluran pencernaan penyu.'],
    ['Apa perbedaan penyu laut dengan kura-kura darat?', ['Penyu tidak bisa menarik kepala ke dalam tempurung', 'Penyu tidak punya tempurung', 'Penyu bernapas dengan insang', 'Penyu tidak bertelur'], 'Kaki penyu berubah menjadi sirip dan kepalanya tidak bisa ditarik masuk.'],
    ['Makanan utama penyu hijau dewasa adalah ...', ['Lamun dan rumput laut', 'Ikan besar', 'Kepiting darat', 'Buah kelapa'], 'Penyu hijau dewasa adalah herbivor.'],
  ]),
  specimen: { id: 'penyu', kind: 'animal', name: 'Penyu hijau', short: 'penyu', sci: 'Chelonia mydas', family: 'Cheloniidae', x: -30, z: 180, top: 0.4, mkOff: 0.8, promptY: 0.5, tagNear: 5,
    fact: 'Penyu hijau adalah reptil laut yang naik ke pantai hanya untuk bertelur. Indonesia menjadi rumah bagi 6 dari 7 jenis penyu di dunia, dan semuanya dilindungi undang-undang.',
    hint: 'Geser Kedalaman dari tempurung ke otot, rangka, lalu organ. Perhatikan bahwa tempurung menyatu dengan tulang. Cari kelenjar garam di dekat mata dan sarang telur di pasir.' },
};

export const UNTA = {
  id: 'unta', name: 'Unta',
  layers: [
    L('kulit', 'Kulit dan bulu', 'Integumen', '#c8a36e', 'Pelindung dari terik dan dingin.', 'Bulu cokelat pasir yang cukup tebal di punggung, bulu mata dua lapis panjang, dan lubang hidung yang bisa ditutup.', 'Bulu tebal di punggung menahan panas matahari masuk ke tubuh. Bulu mata dan hidung yang bisa ditutup menghalau pasir saat badai.', 'Unta punya kelopak mata ketiga yang tipis untuk menyapu pasir dari mata.'),
    L('otot', 'Otot', 'Sistem muskuler', '#c8705a', 'Kaki panjang untuk berjalan jauh.', 'Otot kaki yang panjang dan kuat.', 'Unta berjalan dengan menggerakkan kedua kaki di sisi yang sama bersamaan, langkah yang hemat tenaga.', 'Telapak kaki unta lebar dan empuk sehingga tidak mudah terbenam di pasir.'),
    L('rangka', 'Rangka', 'Sistem rangka', '#eae0c4', 'Punuk tidak bertulang.', 'Rangka dengan leher dan kaki panjang. Punuk tidak memiliki tulang sama sekali.', 'Kaki panjang menjauhkan tubuh dari pasir yang sangat panas.', 'Leher panjang membuat unta bisa makan daun semak berduri yang tinggi.'),
    L('otak', 'Otak', 'Sistem saraf', '#e8a8b0', 'Pengatur suhu tubuh.', 'Otak di dalam tengkorak.', 'Termasuk mengatur suhu tubuh dan rasa haus.', 'Unta bisa membiarkan suhu tubuhnya naik beberapa derajat di siang hari agar tidak banyak berkeringat.'),
    L('punuk', 'Punuk', 'Jaringan lemak', '#f0e0a0', 'Gudang lemak, bukan air.', 'Gundukan besar di punggung yang sebagian besar berisi lemak.', 'Lemak disimpan di satu tempat sebagai cadangan energi saat makanan langka. Karena lemak tidak menyebar ke seluruh tubuh, panas tubuh lebih mudah dibuang.', 'Banyak orang mengira punuk berisi air. Saat unta kelaparan, punuknya mengempis dan miring.'),
    L('jantung', 'Jantung', 'Sistem peredaran darah', '#c83040', 'Pompa yang tangguh.', 'Jantung empat ruang.', 'Memompa darah ke tubuh yang besar.', 'Sel darah merah unta berbentuk lonjong (oval), berbeda dari mamalia lain. Sel ini tahan membengkak saat unta minum banyak air sekaligus.'),
    L('paru', 'Paru-paru dan hidung', 'Sistem pernapasan', '#e07a88', 'Napas yang hemat air.', 'Sepasang paru-paru. Rongga hidung unta berlekuk-lekuk.', 'Rongga hidung yang berlekuk menangkap kembali uap air dari napas yang keluar, sehingga air tubuh tidak banyak hilang.', 'Strategi hemat air ini membuat unta tahan berhari-hari tanpa minum.'),
    L('lambung', 'Lambung', 'Lambung tiga ruang', '#e0a090', 'Pencerna tumbuhan kering.', 'Lambung unta terdiri dari tiga ruang, berbeda dari sapi yang punya empat.', 'Unta memamah biak: makanan dikunyah ulang lalu difermentasi oleh mikroba di lambung untuk mencerna tumbuhan berserat dan berduri.', 'Unta bisa makan tumbuhan gurun yang asin dan berduri yang tidak dimakan hewan lain.'),
    L('hati', 'Hati', 'Kelenjar pencernaan', '#7a2018', 'Pengolah zat.', 'Hati besar di depan lambung.', 'Mengolah zat makanan dan menyimpan energi.', 'Hati juga membantu mengolah lemak dari punuk menjadi energi.'),
    L('usus', 'Usus', 'Sistem pencernaan', '#f0b8a8', 'Penyerap air.', 'Usus panjang.', 'Selain menyerap sari makanan, usus besar menyerap kembali air sehingga kotoran unta sangat kering.', 'Kotoran unta yang kering bisa langsung dipakai sebagai bahan bakar.'),
    L('ginjal', 'Ginjal', 'Sistem ekskresi', '#7a2a20', 'Penghemat air.', 'Sepasang ginjal.', 'Ginjal unta mampu membuat urine yang sangat pekat sehingga sedikit air yang terbuang.', 'Saat sangat haus, unta bisa minum lebih dari 100 liter air dalam waktu singkat.'),
  ],
  quiz: Q('unta', [
    ['Punuk unta sebagian besar berisi ...', ['Lemak', 'Air', 'Tulang', 'Udara'], 'Lemak di punuk adalah cadangan energi, bukan tangki air.'],
    ['Bagaimana unta menghemat air?', ['Urine pekat, kotoran kering, dan uap napas ditangkap kembali di hidung', 'Tidak pernah bernapas', 'Menyimpan air di punuk', 'Tidak makan sama sekali'], 'Banyak penyesuaian kecil yang bersama-sama menghemat air.'],
    ['Mengapa telapak kaki unta lebar?', ['Supaya tidak mudah terbenam di pasir', 'Untuk berenang', 'Untuk memanjat pohon', 'Untuk menggali air'], 'Telapak lebar menyebarkan berat badan di pasir yang lembut.'],
    ['Apa fungsi bulu mata panjang dan hidung yang bisa ditutup?', ['Melindungi dari pasir saat badai', 'Menarik pasangan', 'Mengatur suhu', 'Mencium air dari jauh'], 'Badai pasir sering terjadi di gurun.'],
    ['Berapa ruang lambung unta?', ['Tiga', 'Satu', 'Dua', 'Empat'], 'Sapi dan kambing punya empat ruang, unta tiga.'],
    ['Apa keistimewaan sel darah merah unta?', ['Berbentuk lonjong dan tahan membengkak', 'Berwarna biru', 'Tidak punya hemoglobin', 'Sangat besar seperti telur'], 'Sel darah lonjong tetap mengalir lancar saat unta kekurangan air, dan tidak pecah saat unta minum banyak sekaligus.'],
  ]),
  specimen: { id: 'unta', kind: 'animal', name: 'Unta', short: 'unta', sci: 'Camelus dromedarius', family: 'Camelidae', x: 235, z: 215, top: 1.6, mkOff: 0.8, promptY: 1.0, tagNear: 8, reach: 12,
    fact: 'Unta berpunuk satu hidup di gurun panas Afrika Utara dan Timur Tengah. Tubuhnya penuh penyesuaian untuk menghemat air dan menahan panas. Unta tidak hidup liar di Indonesia; di pulau ini ia mewakili hewan gurun.',
    hint: 'Geser Kedalaman ke dalam tubuh, lalu cari punuk, ginjal, dan lambung tiga ruang. Geser Aktivitas untuk melihat perubahan napas dan detak jantung.' },
};

export const KARANG = {
  id: 'karang', name: 'Terumbu karang',
  layers: [
    L('polip', 'Polip karang', 'Cnidaria (Anthozoa)', '#f08060', 'Hewan kecil pembangun terumbu.', 'Karang adalah hewan. Satu koloni terdiri dari ribuan polip kecil yang bentuknya seperti tabung bermulut di atas. Di sini satu polip diperbesar.', 'Polip menangkap plankton dengan tentakel lalu mencernanya di rongga tubuh. Mulut juga menjadi tempat membuang sisa makanan.', 'Karang berkerabat dengan ubur-ubur dan anemon laut.'),
    L('tentakel', 'Tentakel', 'Dengan sel penyengat (nematosit)', '#f8a080', 'Lengan penyengat.', 'Lengan-lengan di sekeliling mulut yang dipenuhi sel penyengat kecil.', 'Sel penyengat melumpuhkan plankton yang lewat, lalu tentakel membawanya ke mulut. Banyak karang menjulurkan tentakel pada malam hari.', 'Sengatan karang umumnya terlalu lemah untuk dirasakan manusia, tetapi beberapa jenis bisa membuat kulit gatal.'),
    L('zoox', 'Zooxanthellae', 'Alga mikroskopis bersimbiosis', '#a07020', 'Teman serumah yang memberi makan.', 'Alga bersel satu berwarna cokelat keemasan yang hidup di dalam jaringan polip. Di sini digambarkan sebagai bintik-bintik.', 'Alga berfotosintesis dan memberi sebagian besar gula yang dibutuhkan karang. Karang memberi tempat tinggal dan zat sisa yang dipakai alga. Ini contoh simbiosis mutualisme.', 'Warna cerah karang banyak berasal dari alga ini. Karena butuh cahaya, terumbu karang tumbuh di laut dangkal yang jernih.'),
    L('kerangka', 'Kerangka kapur', 'Kalsium karbonat', '#f0ece0', 'Batu yang dibangun hewan.', 'Rumah keras berbentuk cangkir yang dibuat setiap polip dari kapur (kalsium karbonat).', 'Kerangka ribuan polip yang bertumpuk selama ratusan sampai ribuan tahun membentuk terumbu.', 'Terumbu karang bertumbuh sangat lambat, banyak jenis hanya beberapa milimeter sampai beberapa sentimeter per tahun.'),
    L('terumbu', 'Koloni karang', 'Ekosistem terumbu', '#e06a8a', 'Hutan hujan di bawah laut.', 'Kumpulan koloni karang dengan berbagai bentuk: bercabang, seperti otak, meja, dan kipas.', 'Menjadi rumah, tempat makan, dan tempat berlindung bagi sangat banyak jenis ikan dan hewan laut. Terumbu juga meredam ombak sebelum sampai ke pantai.', 'Indonesia berada di Segitiga Terumbu Karang (Coral Triangle), wilayah dengan keanekaragaman karang tertinggi di dunia.'),
    L('ikan', 'Ikan karang', 'Penghuni terumbu', '#40a0e0', 'Warga terumbu.', 'Ikan-ikan berwarna cerah yang hidup di sekitar terumbu.', 'Ikan pemakan alga menjaga karang tidak tertutup alga. Ikan lain menjadi makanan bagi hewan yang lebih besar.', 'Saat karang memutih dan mati, banyak ikan kehilangan rumah dan ikut menghilang.'),
  ],
  quiz: Q('karang', [
    ['Karang termasuk ...', ['Hewan', 'Tumbuhan', 'Batu biasa', 'Jamur'], 'Karang adalah hewan (Cnidaria) yang hidup bersimbiosis dengan alga.'],
    ['Hubungan karang dengan zooxanthellae adalah contoh ...', ['Simbiosis mutualisme', 'Parasitisme', 'Kompetisi', 'Predasi'], 'Keduanya sama-sama untung: alga dapat tempat tinggal, karang dapat makanan.'],
    ['Apa yang terjadi saat pemutihan karang (coral bleaching)?', ['Karang mengeluarkan alganya karena stres, misalnya suhu laut terlalu panas', 'Karang dicat putih oleh nelayan', 'Karang tumbuh lebih cepat', 'Karang berubah menjadi tumbuhan'], 'Tanpa alga, karang kehilangan sumber makanan utama dan bisa mati bila stres berlangsung lama.'],
    ['Mengapa terumbu karang hanya tumbuh di laut dangkal yang jernih?', ['Alga di dalamnya butuh cahaya matahari untuk fotosintesis', 'Karena air dalam terlalu asin', 'Karena ikan hanya ada di laut dangkal', 'Karena karang tidak bisa berenang'], 'Cahaya matahari berkurang cepat di laut dalam atau keruh.'],
    ['Kerangka karang terbuat dari ...', ['Kalsium karbonat (kapur)', 'Kitin', 'Kayu', 'Pasir silika'], 'Kerangka kapur menumpuk membentuk terumbu.'],
    ['Indonesia berada di wilayah ...', ['Segitiga Terumbu Karang (Coral Triangle)', 'Great Barrier Reef', 'Laut Mati', 'Kutub Utara'], 'Wilayah ini paling kaya jenis karang di dunia.'],
  ]),
  specimen: { id: 'karang', kind: 'geo', name: 'Terumbu Karang', short: 'terumbu karang', sci: 'Karang keras (Scleractinia)', family: 'Ekosistem laut', x: -36, z: 236, top: 0.5, mkOff: 1.2, promptY: 0.8, tagNear: 4, dist: 13, needSwim: true,
    fact: 'Terumbu karang dibangun oleh hewan kecil bernama polip yang hidup bersama alga. Terumbu adalah salah satu ekosistem paling kaya di bumi.',
    hint: 'Geser Suhu laut. Di atas sekitar 30 °C selama berminggu-minggu, karang stres, mengeluarkan alganya, lalu memutih. Ketuk bagian-bagian polip untuk belajar.' },
};

export const GUMUK = {
  id: 'gumuk', name: 'Gumuk pasir',
  layers: [
    L('landai', 'Sisi landai', 'Sisi hadap angin', '#d9b77a', 'Jalan pasir naik.', 'Sisi gumuk yang landai dan menghadap ke arah datangnya angin.', 'Angin mendorong butir pasir naik perlahan di sisi ini sampai ke puncak.', 'Kemiringan sisi landai biasanya kecil, sekitar 5 sampai 15 derajat.'),
    L('puncak', 'Puncak', 'Crest', '#f8d888', 'Batas dua sisi.', 'Garis tertinggi gumuk tempat sisi landai bertemu sisi curam.', 'Di sini pasir yang terbawa angin mulai jatuh ke sisi sebaliknya.', 'Bentuk gumuk berubah-ubah mengikuti arah dan kekuatan angin.'),
    L('curam', 'Sisi curam', 'Lereng longsor (slip face)', '#e0a060', 'Lereng longsoran pasir.', 'Sisi gumuk yang membelakangi angin dan jauh lebih curam.', 'Pasir yang menumpuk di puncak longsor ke bawah. Lereng ini berhenti pada kemiringan sekitar 30 sampai 34 derajat yang disebut sudut istirahat (angle of repose).', 'Karena pasir terus berpindah dari sisi landai ke sisi curam, seluruh gumuk perlahan bergeser searah angin.'),
    L('butir', 'Butir pasir', 'Saltasi', '#f0d090', 'Pasir yang melompat.', 'Butiran pasir seukuran sekitar 0,1 sampai 1 mm.', 'Angin yang cukup kencang mengangkat butir pasir lalu menjatuhkannya lagi sehingga butir melompat-lompat rendah. Gerak melompat ini disebut saltasi.', 'Angin yang terlalu pelan tidak cukup kuat untuk mengangkat pasir, jadi gumuk diam.'),
    L('lapisan', 'Lapisan dalam', 'Perlapisan silang', '#c9a466', 'Jejak longsoran lama.', 'Garis-garis miring di dalam gumuk yang terlihat jika gumuk dipotong.', 'Setiap garis adalah bekas permukaan sisi curam yang lama tertimbun longsoran baru.', 'Ahli geologi bisa menebak arah angin purba dari kemiringan lapisan di batu pasir.'),
    L('pionir', 'Tumbuhan pionir', 'Rumput angin (Spinifex littoreus)', '#8aa050', 'Penahan pasir.', 'Rumput berduri yang tumbuh menjalar di pasir pantai.', 'Akarnya mengikat pasir dan batangnya menahan butir yang terbawa angin, sehingga gumuk lebih stabil.', 'Buahnya berbentuk bola berduri yang bergulir terbawa angin di sepanjang pantai untuk menyebarkan biji.'),
  ],
  quiz: Q('gumuk', [
    ['Gerak butir pasir yang melompat-lompat karena angin disebut ...', ['Saltasi', 'Erosi air', 'Sedimentasi laut', 'Vulkanisme'], 'Saltasi adalah cara utama pasir berpindah oleh angin.'],
    ['Sisi gumuk yang curam berada ...', ['Di sisi yang membelakangi angin', 'Di sisi yang menghadap angin', 'Di bawah tanah', 'Di dalam air'], 'Pasir longsor di sisi yang membelakangi angin.'],
    ['Mengapa gumuk pasir bisa berpindah tempat?', ['Pasir terus dipindahkan angin dari sisi landai ke sisi curam', 'Karena gempa bumi', 'Karena ditarik bulan', 'Karena diangkut hewan'], 'Seluruh gumuk perlahan bergeser searah angin.'],
    ['Apa peran rumput angin (Spinifex) di gumuk pantai?', ['Mengikat dan menahan pasir', 'Membuat pasir lebih kering', 'Menarik air laut', 'Mempercepat angin'], 'Tumbuhan pionir membantu menstabilkan gumuk.'],
    ['Gumuk pasir yang terkenal di Indonesia ada di ...', ['Parangtritis, Yogyakarta', 'Danau Toba', 'Puncak Jaya', 'Kepulauan Seribu'], 'Pasirnya berasal dari material gunung api yang dibawa sungai ke pantai, lalu ditiup angin.'],
  ]),
  specimen: { id: 'gumuk', kind: 'geo', name: 'Gumuk Pasir', short: 'gumuk pasir', sci: 'Gumuk sabit (barkhan)', family: 'Bentang alam angin', x: 95, z: 185, top: 1.2, mkOff: 1.2, promptY: 1.0, tagNear: 6, dist: 17,
    fact: 'Gumuk pasir terbentuk dari pasir yang ditiup angin. Di Indonesia, gumuk pasir yang terkenal ada di pantai Parangtritis, Yogyakarta.',
    hint: 'Geser Kecepatan angin. Angin pelan belum mampu mengangkat pasir; angin kencang membuat butir melompat (saltasi) dan gumuk bergeser. Ketuk bagian-bagiannya.' },
};

export const KAKTUS = {
  id: 'kaktus', name: 'Kaktus',
  layers: [
    L('duri', 'Duri', 'Daun yang berubah bentuk', '#efe8d0', 'Daun yang tidak lagi lebar.', 'Kaktus tidak punya daun lebar. Durinya adalah daun yang berubah bentuk menjadi runcing.', 'Daun runcing mengurangi penguapan, melindungi dari hewan pemakan, dan memberi sedikit naungan pada batang.', 'Duri juga bisa mengumpulkan embun yang lalu menetes ke tanah di dekat akar.'),
    L('areola', 'Areola', 'Bantalan duri', '#dcd6c0', 'Ciri khas kaktus.', 'Bintil kecil berbulu tempat duri, bunga, dan cabang tumbuh.', 'Areola hanya dimiliki suku kaktus (Cactaceae), jadi menjadi tanda pengenal kaktus sejati.', 'Tumbuhan gurun lain yang mirip kaktus, misalnya beberapa jenis Euphorbia, tidak punya areola.'),
    L('kutikula', 'Kulit berlilin', 'Kutikula', '#4a8a3a', 'Jas hujan terbalik.', 'Lapisan luar batang yang tebal dan berlilin, dengan usuk-usuk yang memanjang.', 'Lilin menahan air agar tidak menguap. Usuk-usuk membuat batang bisa mengembang saat menyimpan banyak air dan mengerut saat kering, seperti akordeon.', 'Usuk juga menimbulkan bayangan kecil yang mendinginkan permukaan batang.'),
    L('klorenkim', 'Jaringan hijau', 'Klorenkim', '#3a9a30', 'Pengganti daun.', 'Lapisan hijau tipis di bawah kulit batang.', 'Karena tidak berdaun lebar, batang kaktus yang melakukan fotosintesis.', 'Stomata kaktus terbuka pada malam hari dan menutup pada siang hari. Cara fotosintesis ini disebut CAM.'),
    L('parenkim', 'Jaringan penyimpan air', 'Parenkim air', '#dde6b8', 'Tangki air.', 'Jaringan pucat berlendir yang mengisi sebagian besar batang.', 'Menyimpan air dalam jumlah besar untuk dipakai selama musim kering yang panjang.', 'Kaktus besar seperti saguaro bisa menyimpan ratusan liter air setelah hujan.'),
    L('pembuluh', 'Berkas pembuluh', 'Xilem dan floem', '#8ab050', 'Jalur air dan gula.', 'Cincin berkas pembuluh di dalam batang.', 'Mengangkut air dari akar dan gula hasil fotosintesis ke seluruh tumbuhan.', 'Akar kaktus menyebar dangkal dan lebar supaya cepat menyerap air hujan yang jarang turun.'),
  ],
  quiz: Q('kaktus', [
    ['Duri kaktus sebenarnya adalah ...', ['Daun yang berubah bentuk', 'Akar', 'Bunga', 'Rambut'], 'Daun berubah menjadi duri untuk mengurangi penguapan.'],
    ['Kapan stomata kaktus terbuka?', ['Pada malam hari', 'Pada siang hari', 'Tidak pernah', 'Hanya saat hujan'], 'Malam lebih dingin sehingga lebih sedikit air yang hilang. CO2 disimpan lalu dipakai siang hari (CAM).'],
    ['Apa fungsi usuk-usuk pada batang kaktus?', ['Membuat batang bisa mengembang dan mengerut saat menyimpan air', 'Menarik serangga', 'Menghasilkan duri', 'Mempercepat penguapan'], 'Usuk bekerja seperti akordeon.'],
    ['Bagian kaktus yang melakukan fotosintesis adalah ...', ['Batang hijau', 'Duri', 'Akar', 'Areola'], 'Kaktus tidak berdaun lebar, jadi batangnya yang hijau berfotosintesis.'],
    ['Ciri khas yang hanya dimiliki suku kaktus adalah ...', ['Areola', 'Duri', 'Batang hijau', 'Bunga'], 'Duri dan batang hijau juga dimiliki tumbuhan gurun lain.'],
  ]),
  specimen: { id: 'kaktus', kind: 'geo', name: 'Kaktus', short: 'kaktus', sci: 'Kaktus kolom (Cactaceae)', family: 'Tumbuhan gurun', x: 205, z: 245, top: 2.5, mkOff: 1.2, promptY: 1.4, tagNear: 6, dist: 13,
    fact: 'Kaktus menyimpan air di batangnya, menutup stomata di siang hari, dan mengubah daunnya menjadi duri. Kaktus asli Benua Amerika.',
    hint: 'Geser Siang / malam untuk melihat stomata terbuka di malam hari (CO2 masuk, titik biru). Geser Air tersimpan untuk melihat batang mengembang dan mengerut.' },
};
