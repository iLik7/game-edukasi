/* Data flora baru: anggrek bulan, kopi arabika, pisang, seroja (lotus), lamun.
   Perlu validasi guru biologi / ahli botani. Rujukan singkat: Keppres No. 4 Tahun 1993 (anggrek bulan = puspa pesona);
   Barthlott & Neinhuis 1997 (efek lotus); Puslit Kopi dan Kakao Indonesia (ketinggian kebun arabika); LIPI/BRIN Oseanografi (lamun dan duyung). */
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const ANGGREK = {
  id: 'anggrek', name: 'Anggrek bulan',
  layers: [
    L('bunga', 'Bunga', 'Flos', '#f6f6f2', 'Putih seperti bulan.', 'Bunga putih lebar terdiri dari 3 sepal dan 2 petal, tersusun berderet pada tangkai yang melengkung.', 'Menarik serangga penyerbuk. Bunganya bisa mekar berminggu-minggu.', 'Anggrek bulan ditetapkan sebagai puspa pesona Indonesia (Keppres No. 4 Tahun 1993).'),
    L('labelum', 'Labelum (bibir)', 'Petal yang berubah bentuk', '#f0b030', 'Landasan pendaratan.', 'Satu petal yang bentuknya khusus di tengah bunga, berwarna kuning kemerahan.', 'Menjadi tempat mendarat serangga dan menuntunnya ke serbuk sari.', 'Labelum adalah ciri khas semua bunga anggrek.'),
    L('daun', 'Daun', 'Folium', '#3a6a2a', 'Tebal dan berdaging.', 'Daun lebar, tebal, dan berlilin, tumbuh berselang-seling dari batang yang sangat pendek.', 'Menyimpan air. Anggrek bulan membuka mulut daunnya (stomata) pada malam hari untuk mengambil karbon dioksida, sehingga lebih hemat air (fotosintesis CAM).', 'Cara hemat air ini sama seperti pada kaktus.'),
    L('akar', 'Akar udara', 'Radix aerea', '#c8ccc4', 'Menggantung dan menempel.', 'Akar keperakan yang menempel di kulit pohon atau menggantung di udara.', 'Mencengkeram pohon inang dan menyerap air hujan serta embun. Ujung akar yang hijau juga ikut berfotosintesis.', 'Akar anggrek berubah kehijauan saat basah karena velamennya menjadi bening.'),
    L('velamen', 'Velamen', 'Lapisan sel mati berongga', '#ececE6', 'Spons penyerap air.', 'Lapisan luar akar berupa sel-sel mati yang berongga seperti spons. Geser Perbesaran untuk melihat penampang akar.', 'Menyerap air hujan dengan sangat cepat (titik biru) dan melindungi akar dari kekeringan.', 'Karena velamen, anggrek bisa hidup menempel di pohon tanpa tanah.'),
    L('korteks', 'Korteks dan inti', 'Jaringan dalam akar', '#5a9a4a', 'Hijau dan mengalirkan air.', 'Di bawah velamen ada korteks hijau yang mengandung klorofil, dan di tengahnya ada inti pembuluh.', 'Korteks ikut berfotosintesis. Inti pembuluh mengalirkan air ke daun.', 'Ini mirip susunan akar tumbuhan lain: lapisan luar, korteks, lalu pembuluh di tengah.'),
    L('inang', 'Pohon inang', 'Epifit, bukan parasit', '#5a4a38', 'Hanya menumpang.', 'Anggrek bulan menempel di batang pohon, tetapi tidak menghisap makanan dari pohon itu.', 'Menumpang di tempat tinggi memberi anggrek lebih banyak cahaya di hutan yang lebat. Tumbuhan seperti ini disebut epifit.', 'Biji anggrek sangat kecil seperti debu dan hanya bisa berkecambah dengan bantuan jamur (mikoriza).'),
  ],
  quiz: Q('anggrek', [
    ['Anggrek bulan menempel di pohon tetapi tidak menghisap makanannya. Tumbuhan seperti ini disebut ...', ['Epifit', 'Parasit', 'Saprofit', 'Karnivora'], 'Epifit hanya menumpang untuk mendapat cahaya.'],
    ['Apa fungsi velamen pada akar anggrek?', ['Menyerap air hujan dengan cepat seperti spons', 'Menghisap makanan dari pohon', 'Menangkap serangga', 'Menyimpan madu'], 'Velamen terdiri dari sel mati yang berongga.'],
    ['Anggrek bulan dijuluki ...', ['Puspa pesona', 'Puspa bangsa', 'Bunga bangkai', 'Bunga abadi'], 'Puspa bangsa adalah melati; puspa langka adalah padma raksasa.'],
    ['Mengapa biji anggrek perlu bantuan jamur untuk tumbuh?', ['Bijinya sangat kecil dan hampir tidak punya cadangan makanan', 'Karena bijinya beracun', 'Karena hidup di laut', 'Karena tidak punya kulit'], 'Jamur mikoriza memberi makanan awal bagi kecambah.'],
  ]),
  specimen: { id: 'anggrek', kind: 'geo', name: 'Anggrek bulan', short: 'anggrek bulan', sci: 'Phalaenopsis amabilis', family: 'Orchidaceae', x: -288, z: 43, top: 2.6, mkOff: 1.0, promptY: 2.2, tagNear: 6, dist: 9,
    fact: 'Anggrek bulan adalah anggrek berbunga putih yang hidup menempel di pohon hutan hujan. Ia ditetapkan sebagai puspa pesona Indonesia.',
    hint: 'Geser Perbesaran untuk melihat penampang akar dan lapisan velamen yang menyerap air hujan. Ketuk bunga, labelum, daun, dan pohon inang.' },
};

export const KOPI = {
  id: 'kopi', name: 'Kopi arabika',
  layers: [
    L('batang', 'Batang dan cabang', 'Caulis', '#6a523a', 'Cabang mendatar berpasangan.', 'Batang tegak dengan cabang-cabang yang tumbuh mendatar berpasangan.', 'Buah kopi tumbuh di cabang mendatar ini. Petani memangkas batang supaya tidak terlalu tinggi dan mudah dipanen.', 'Di kebun, pohon kopi dijaga setinggi orang dewasa.'),
    L('daun', 'Daun', 'Folium', '#1a4a1e', 'Hijau tua mengilap.', 'Daun berhadapan, hijau tua, mengilap, dengan tepi bergelombang.', 'Tempat fotosintesis. Kopi arabika suka cahaya teduh, jadi sering ditanam di bawah pohon pelindung.', 'Pohon pelindung juga menjaga tanah lereng dari erosi.'),
    L('bunga', 'Bunga', 'Flos', '#f6f4ea', 'Putih dan harum.', 'Bunga putih kecil bergerombol di ketiak daun, harum seperti melati. Geser Waktu dari awal.', 'Kopi arabika bisa menyerbuk sendiri, jadi satu pohon bisa berbuah tanpa pohon lain.', 'Bunga kopi hanya mekar sekitar dua sampai tiga hari.'),
    L('buah', 'Buah ceri', 'Drupa', '#c0201a', 'Hijau lalu merah.', 'Buah bulat yang berubah dari hijau menjadi merah saat matang. Geser Waktu sampai akhir.', 'Petani memetik buah yang merah saja supaya rasa kopinya bagus.', 'Dari bunga sampai buah matang butuh waktu sekitar tujuh sampai sembilan bulan.'),
    L('eksokarp', 'Kulit buah', 'Eksokarp', '#c0201a', 'Lapisan terluar.', 'Kulit tipis berwarna merah pada buah ceri yang dibelah.', 'Melindungi isi buah. Setelah dikupas, kulit kopi bisa dijadikan kompos atau teh kulit kopi (cascara).', 'Buah kopi termasuk buah batu (drupa), seperti mangga.'),
    L('mesokarp', 'Daging buah', 'Mesokarp', '#f0d898', 'Manis dan berlendir.', 'Daging buah tipis yang manis dan berlendir di bawah kulit.', 'Pada proses "basah", lendir ini difermentasi lalu dicuci sebelum biji dijemur.', 'Rasa manis daging buah ikut memengaruhi rasa kopi pada proses madu (honey).'),
    L('perkamen', 'Kulit tanduk', 'Endokarp (perkamen)', '#ece6d0', 'Pembungkus biji yang keras.', 'Kulit keras tipis berwarna krem yang membungkus tiap biji.', 'Melindungi biji. Kulit ini dibuang saat penggilingan.', 'Di bawahnya masih ada selaput tipis keperakan (kulit ari).'),
    L('biji', 'Biji', 'Endosperma', '#8aa070', 'Yang kita sangrai.', 'Biasanya ada dua biji berhadapan dengan sisi datar dan alur di tengah.', 'Biji menyimpan cadangan makanan untuk kecambah. Biji hijau ini yang disangrai menjadi kopi.', 'Kafein di biji kopi melindungi tanaman dari serangga.'),
  ],
  quiz: Q('kopi', [
    ['Kopi arabika di Indonesia biasanya ditanam di ...', ['Dataran tinggi sekitar 1.000 m ke atas', 'Pantai berpasir', 'Gurun', 'Rawa bakau'], 'Arabika cocok di zona sedang sampai sejuk.'],
    ['Bagian buah kopi yang disangrai adalah ...', ['Biji', 'Kulit buah', 'Daging buah', 'Daun'], 'Biji hijau disangrai sampai cokelat.'],
    ['Mengapa petani memetik buah kopi yang merah saja?', ['Buah merah sudah matang sehingga rasanya bagus', 'Buah merah lebih ringan', 'Buah hijau beracun', 'Supaya pohonnya mati'], 'Buah yang belum matang membuat rasa kopi kurang baik.'],
    ['Apa fungsi pohon pelindung di kebun kopi?', ['Memberi keteduhan dan menahan erosi', 'Menghasilkan biji kopi', 'Menarik hujan es', 'Mengusir burung'], 'Arabika tumbuh baik di bawah cahaya teduh.'],
  ]),
  specimen: { id: 'kopi', kind: 'geo', name: 'Kebun kopi arabika', short: 'kopi', sci: 'Coffea arabica', family: 'Rubiaceae', x: 36, z: -198, top: 1.8, mkOff: 1.0, promptY: 1.4, tagNear: 6, dist: 11,
    fact: 'Kopi arabika ditanam di dataran tinggi Indonesia seperti Gayo, Toraja, Kintamani, dan lereng-lereng gunung di Jawa. Yang kita minum adalah bijinya yang disangrai.',
    hint: 'Geser Waktu dari bunga, buah hijau, sampai buah merah. Ketuk lapisan buah yang dibelah: kulit, daging, kulit tanduk, dan biji.' },
};

export const PISANG = {
  id: 'pisang', name: 'Pisang',
  layers: [
    L('batang', 'Batang semu', 'Pseudostem', '#7a9a4a', 'Bukan batang sungguhan.', 'Yang terlihat seperti batang sebenarnya gulungan pelepah daun yang saling membungkus.', 'Menopang daun dan tandan buah. Karena tidak berkayu, pisang termasuk tumbuhan terna (herba) raksasa, bukan pohon.', 'Batang semu pisang banyak mengandung air.'),
    L('pelepah', 'Pelepah daun', 'Vagina folii', '#e0e8c0', 'Cincin-cincin di penampang.', 'Geser Potong batang: penampangnya berupa lingkaran-lingkaran pelepah yang berlapis seperti bawang.', 'Daun baru tumbuh dari tengah dan mendorong keluar lewat bagian dalam gulungan pelepah.', 'Serat pelepah pisang bisa dijadikan tali dan kerajinan.'),
    L('daun', 'Daun', 'Folium', '#3a7a2a', 'Lebar dan mudah sobek.', 'Daun sangat lebar dengan tulang daun tengah yang kuat dan tulang daun sejajar menyamping.', 'Daun mudah sobek mengikuti tulang daun saat tertiup angin, sehingga tidak patah.', 'Daun pisang dipakai sebagai pembungkus makanan tradisional.'),
    L('buah', 'Tandan buah', 'Infructescentia', '#8aaa30', 'Sisir dan tandan.', 'Buah tersusun dalam sisir, dan beberapa sisir membentuk satu tandan.', 'Pisang yang biasa kita makan berkembang tanpa pembuahan sehingga hampir tidak berbiji (partenokarpi).', 'Pisang liar punya banyak biji keras di dalam buahnya.'),
    L('jantung', 'Jantung pisang', 'Bunga jantan', '#7a2040', 'Ujung tandan.', 'Kuncup ungu di ujung tandan berisi bunga-bunga jantan yang dibungkus daun pelindung.', 'Bunga-bunga di bagian atas tandan menjadi buah; jantung di ujung berisi bunga jantan.', 'Jantung pisang bisa dimasak menjadi sayur.'),
    L('bonggol', 'Bonggol', 'Batang sejati (kormus)', '#d0c8a0', 'Batang asli di dalam tanah.', 'Batang pisang yang sebenarnya pendek dan tebal, tersembunyi di dalam tanah, dengan akar serabut di sekelilingnya.', 'Menyimpan cadangan makanan dan menumbuhkan daun serta anakan.', 'Setelah berbuah sekali, batang semu itu mati dan digantikan anakan.'),
    L('anakan', 'Anakan', 'Tunas', '#5a8a3a', 'Bibit baru.', 'Tunas yang tumbuh dari bonggol di samping induknya.', 'Petani menanam pisang dari anakan, bukan dari biji. Ini perbanyakan vegetatif.', 'Karena berasal dari induk yang sama, anakan punya sifat yang sama dengan induknya.'),
    L('tanah', 'Tanah', 'Media tanam', '#5a4430', 'Gembur dan lembap.', 'Pisang suka tanah gembur, subur, dan cukup air.', 'Akar serabut menyerap air dan hara dari lapisan atas tanah.', 'Pisang adalah salah satu buah yang paling banyak ditanam di Indonesia.'),
  ],
  quiz: Q('pisang', [
    ['Batang pisang yang terlihat di atas tanah sebenarnya adalah ...', ['Gulungan pelepah daun (batang semu)', 'Batang berkayu', 'Akar udara', 'Tangkai bunga'], 'Batang sejatinya berupa bonggol di dalam tanah.'],
    ['Pisang biasanya diperbanyak dengan ...', ['Anakan (tunas) dari bonggol', 'Biji', 'Spora', 'Stek daun'], 'Pisang budidaya hampir tidak berbiji.'],
    ['Mengapa pisang yang kita makan hampir tidak berbiji?', ['Buahnya berkembang tanpa pembuahan (partenokarpi)', 'Bijinya dibuang petani', 'Dimakan serangga', 'Karena kurang air'], 'Pisang liar berbiji banyak.'],
    ['Pisang termasuk tumbuhan ...', ['Terna raksasa, bukan pohon', 'Pohon berkayu keras', 'Lumut', 'Paku'], 'Batangnya tidak berkayu.'],
  ]),
  specimen: { id: 'pisang', kind: 'geo', name: 'Pohon pisang', short: 'pisang', sci: 'Musa paradisiaca', family: 'Musaceae', x: 231, z: 13, top: 2.4, mkOff: 1.0, promptY: 1.8, tagNear: 6, dist: 10,
    fact: 'Pisang sebenarnya bukan pohon, melainkan terna raksasa. Batangnya yang terlihat adalah gulungan pelepah daun, sedangkan batang aslinya berupa bonggol di dalam tanah.',
    hint: 'Geser Potong batang untuk melihat penampang batang semu yang berupa lingkaran pelepah. Ketuk bonggol dan anakan di dalam tanah.' },
};

export const SEROJA = {
  id: 'seroja', name: 'Seroja (lotus)',
  layers: [
    L('daun', 'Daun', 'Folium', '#3a7a30', 'Tidak pernah basah.', 'Daun bundar lebar yang mengapung atau terangkat di atas air.', 'Air yang jatuh ke daun langsung membulat dan menggelinding sambil membawa debu, sehingga daun selalu bersih.', 'Sifat ini disebut efek lotus.'),
    L('papila', 'Bintil berlilin', 'Papila + kristal lilin', '#6aaa5a', 'Rahasia efek lotus.', 'Permukaan daun penuh bintil sangat kecil yang dilapisi kristal lilin. Geser Perbesaran.', 'Tetes air hanya menyentuh ujung-ujung bintil, sehingga tidak bisa menempel dan langsung menggelinding.', 'Efek lotus menginspirasi cat dan kaca yang bisa membersihkan diri sendiri (biomimikri).'),
    L('tetes', 'Tetes air dan debu', 'Swa-bersih', '#a0c8f0', 'Pembersih alami.', 'Tetes air bulat menggelinding di permukaan daun.', 'Debu menempel ke tetes air yang lewat lalu ikut terbawa jatuh.', 'Karena itu seroja tetap bersih walau tumbuh di air berlumpur.'),
    L('bunga', 'Bunga', 'Flos', '#f0a0b8', 'Merah muda dan harum.', 'Bunga besar merah muda yang muncul di atas tangkai tinggi.', 'Menarik serangga penyerbuk. Bunga seroja bisa menghangatkan dirinya sendiri.', 'Seroja sering dipakai sebagai lambang kesucian karena bunganya bersih walau tumbuh dari lumpur.'),
    L('polong', 'Polong biji', 'Reseptakel', '#d8c860', 'Seperti pancuran.', 'Bagian tengah bunga yang menjadi wadah biji berlubang-lubang.', 'Setiap lubang berisi satu biji yang bisa bertahan sangat lama.', 'Ada biji seroja berumur ratusan tahun yang masih bisa berkecambah.'),
    L('tangkai', 'Tangkai berongga', 'Aerenkim', '#4a7a30', 'Pipa udara.', 'Tangkai daun dan bunga berisi rongga-rongga udara.', 'Rongga ini mengalirkan oksigen dari daun ke rimpang di lumpur yang miskin oksigen (titik putih).', 'Kalau tangkai dipotong melintang, terlihat lubang-lubang seperti sedotan.'),
    L('rimpang', 'Rimpang', 'Rhizoma', '#e0d0b0', 'Batang di dalam lumpur.', 'Batang menjalar di dalam lumpur, beruas-ruas, berongga di dalamnya.', 'Menyimpan cadangan makanan dan menumbuhkan daun baru.', 'Rimpang seroja dimakan sebagai sayur di banyak negara Asia.'),
    L('lumpur', 'Lumpur dasar', 'Sedimen', '#4a3a2a', 'Tempat berakar.', 'Lapisan lumpur di dasar danau atau kolam.', 'Tempat rimpang dan akar mendapat hara.', 'Seroja tumbuh di air tenang yang dangkal.'),
  ],
  quiz: Q('seroja', [
    ['Mengapa daun seroja selalu bersih?', ['Tetes air menggelinding sambil membawa debu (efek lotus)', 'Karena dicuci ikan', 'Karena daunnya licin berminyak', 'Karena daunnya selalu tenggelam'], 'Bintil berlilin membuat air tidak bisa menempel.'],
    ['Teknologi yang meniru efek lotus contohnya ...', ['Cat atau kaca yang membersihkan diri sendiri', 'Roda mobil', 'Kabel listrik', 'Kompor gas'], 'Meniru alam untuk teknologi disebut biomimikri.'],
    ['Apa fungsi rongga udara di tangkai seroja?', ['Mengalirkan oksigen ke rimpang di lumpur', 'Menyimpan madu', 'Mengapungkan bunga saja', 'Menangkap serangga'], 'Lumpur di dasar miskin oksigen.'],
    ['Bagian seroja yang tumbuh menjalar di dalam lumpur disebut ...', ['Rimpang', 'Umbi lapis', 'Akar tunggang', 'Sulur'], 'Rimpang adalah batang yang tumbuh mendatar.'],
  ]),
  specimen: { id: 'seroja', kind: 'geo', name: 'Seroja (lotus)', short: 'seroja', sci: 'Nelumbo nucifera', family: 'Nelumbonaceae', x: -27, z: 31, top: 0.9, mkOff: 0.8, promptY: 0.8, tagNear: 5, dist: 10,
    fact: 'Seroja atau lotus tumbuh di danau dan kolam yang tenang. Daunnya tidak pernah basah karena permukaannya penuh bintil berlilin. Sifat ini disebut efek lotus.',
    hint: 'Geser Perbesaran ke permukaan daun dan perhatikan tetes air yang menggelinding membawa debu. Ketuk tangkai dan rimpang di lumpur.' },
};

export const LAMUN = {
  id: 'lamun', name: 'Padang lamun',
  layers: [
    L('daun', 'Daun', 'Folium', '#3a7a30', 'Pita panjang di bawah air.', 'Daun berbentuk pita yang panjang dan lentur, bergoyang mengikuti arus.', 'Berfotosintesis di bawah air dan menghasilkan oksigen (gelembung).', 'Lamun adalah tumbuhan berbunga yang hidup di laut. Ia berbeda dengan rumput laut, yang sebenarnya alga.'),
    L('bunga', 'Bunga', 'Flos', '#f0f0e0', 'Berbunga di bawah air.', 'Bunga kecil yang muncul di antara daun.', 'Serbuk sari dibawa air ke bunga lain, bukan oleh serangga. Pada jenis ini, penyerbukan terjadi di permukaan air saat surut.', 'Lamun berbuah dan berbiji seperti tumbuhan darat.'),
    L('rimpang', 'Rimpang', 'Rhizoma', '#8a7050', 'Batang menjalar di pasir.', 'Batang yang tumbuh mendatar di dalam pasir dan menumbuhkan daun baru.', 'Menyebarkan lamun ke sekitarnya membentuk padang yang luas.', 'Padang lamun menyimpan banyak karbon di dalam pasir. Karbon ini disebut karbon biru.'),
    L('akar', 'Akar', 'Radix', '#d0c8a8', 'Penahan pasir.', 'Akar serabut yang mencengkeram pasir di dasar laut.', 'Menahan pasir agar tidak terbawa arus dan menyerap hara.', 'Padang lamun membuat air di sekitarnya lebih jernih karena endapan tertahan.'),
    L('duyung', 'Duyung', 'Dugong dugon', '#8a8480', 'Pemakan lamun.', 'Mamalia laut besar yang memakan lamun. Geser Duyung datang.', 'Duyung merumput di padang lamun seperti sapi di padang rumput. Tanpa lamun, duyung tidak punya makanan.', 'Duyung termasuk satwa dilindungi di Indonesia.'),
    L('pasir', 'Pasir dasar laut', 'Sedimen', '#d8c8a0', 'Rumah bagi banyak hewan.', 'Pasir di laut dangkal yang terlindung.', 'Padang lamun menjadi tempat bertelur dan berlindung anak ikan, udang, dan kerang.', 'Lamun, terumbu karang, dan hutan bakau saling terhubung dan saling menjaga.'),
  ],
  quiz: Q('lamun', [
    ['Lamun berbeda dengan rumput laut karena lamun ...', ['Tumbuhan berbunga yang punya akar, batang, dan daun', 'Sejenis alga', 'Sejenis karang', 'Sejenis ikan'], 'Rumput laut adalah alga yang tidak punya akar sejati.'],
    ['Hewan laut yang makanan utamanya lamun adalah ...', ['Duyung', 'Hiu', 'Ikan badut', 'Kepiting bakau'], 'Duyung merumput di padang lamun.'],
    ['Karbon yang disimpan padang lamun dan bakau disebut ...', ['Karbon biru', 'Karbon hitam', 'Karbon merah', 'Karbon hijau'], 'Ekosistem pesisir menyimpan banyak karbon.'],
    ['Mengapa padang lamun penting bagi ikan?', ['Tempat bertelur dan berlindung anak ikan', 'Tempat ikan bertelur di darat', 'Tempat ikan berjemur', 'Tidak penting sama sekali'], 'Padang lamun adalah "taman kanak-kanak" bagi banyak ikan.'],
  ]),
  specimen: { id: 'lamun', kind: 'geo', name: 'Padang lamun', short: 'lamun', sci: 'Enhalus acoroides', family: 'Hydrocharitaceae', x: -22, z: 226, top: 0.3, mkOff: 0.6, promptY: 0.6, tagNear: 6, dist: 12, needSwim: true,
    fact: 'Lamun adalah tumbuhan berbunga yang hidup di laut dangkal. Padang lamun menjadi makanan duyung, tempat anak ikan berlindung, dan penyimpan karbon.',
    hint: 'Geser Duyung datang untuk melihat duyung merumput. Titik putih adalah gelembung oksigen dari fotosintesis lamun.' },
};

export const LIDAHBUAYA = {
  id: 'lidahbuaya', name: 'Lidah buaya',
  layers: [
    L('daun', 'Daun tebal', 'Daun sukulen', '#6a9a62', 'Gudang air.', 'Daun tebal berdaging berbentuk tombak yang tersusun melingkar (roset).', 'Menyimpan banyak air sehingga tanaman tahan kering berbulan-bulan.', 'Tumbuhan yang menyimpan air di daun atau batangnya disebut sukulen, seperti kaktus.'),
    L('duri', 'Duri tepi daun', 'Gerigi', '#d8ccA0', 'Pelindung.', 'Duri-duri kecil di sepanjang tepi daun.', 'Melindungi daun yang berair dari hewan pemakan tumbuhan.', 'Duri lidah buaya lunak, tidak setajam duri kaktus.'),
    L('kulit', 'Kulit daun', 'Epidermis + kutikula', '#4a7a42', 'Lapisan lilin tebal.', 'Kulit hijau berlapis lilin (kutikula) yang tebal. Geser untuk melihat penampang daun.', 'Lapisan lilin menahan penguapan air.', 'Di kulit inilah klorofil berada dan fotosintesis terjadi.'),
    L('getah', 'Getah kuning', 'Lateks (aloin)', '#e8c030', 'Pahit dan mengiritasi.', 'Lapisan tipis getah kuning tepat di bawah kulit.', 'Rasanya pahit untuk mengusir hewan pemakan daun.', 'Getah kuning ini bisa membuat perut mulas dan kulit gatal, jadi gel lidah buaya harus dicuci bersih sebelum diolah.'),
    L('gel', 'Gel bening', 'Parenkim penyimpan air', '#e0f0d8', 'Jeli penyimpan air.', 'Bagian tengah daun berupa gel bening yang licin.', 'Sel-selnya menyimpan air dan zat lendir yang mengikat air dengan kuat.', 'Gel lidah buaya banyak dipakai untuk produk perawatan kulit dan diolah menjadi minuman.'),
    L('stomata', 'Stomata', 'Mulut daun', '#2a4a22', 'Buka saat malam.', 'Lubang-lubang sangat kecil di permukaan daun. Geser sampai akhir untuk melihat malam hari.', 'Lidah buaya membuka stomata pada malam hari saat udara sejuk untuk mengambil karbon dioksida (titik putih), lalu menutupnya siang hari supaya air tidak menguap (fotosintesis CAM).', 'Cara hemat air ini juga dipakai kaktus, nanas, dan anggrek bulan.'),
    L('akar', 'Akar', 'Radix', '#c8b090', 'Akar serabut dangkal.', 'Akar serabut yang menyebar dangkal.', 'Cepat menyerap air hujan yang jarang turun sebelum meresap terlalu dalam.', 'Lidah buaya mudah diperbanyak dari anakan di sekitar induknya.'),
    L('tanah', 'Tanah berpasir', 'Media tanam', '#c0a070', 'Kering dan gembur.', 'Tanah berpasir yang cepat kering.', 'Lidah buaya mudah busuk kalau tanahnya terlalu basah.', 'Lidah buaya dibudidayakan di Pontianak, Kalimantan Barat, dan terkenal karena daunnya besar.'),
  ],
  quiz: Q('lidahbuaya', [
    ['Lidah buaya termasuk tumbuhan sukulen, artinya ...', ['Menyimpan air di daun yang tebal', 'Hidup di air', 'Tidak butuh cahaya', 'Memakan serangga'], 'Kaktus juga termasuk sukulen.'],
    ['Kapan lidah buaya membuka stomatanya?', ['Malam hari', 'Siang terik', 'Tidak pernah', 'Saat hujan saja'], 'Membuka saat malam mengurangi penguapan air (fotosintesis CAM).'],
    ['Mengapa gel lidah buaya harus dicuci sebelum diolah?', ['Getah kuning di bawah kulit bisa membuat mulas dan gatal', 'Supaya warnanya merah', 'Supaya lebih asam', 'Supaya durinya tumbuh'], 'Getah kuning mengandung aloin yang pahit.'],
    ['Bagian lidah buaya yang menyimpan air adalah ...', ['Gel bening di tengah daun', 'Duri', 'Akar saja', 'Bunga'], 'Gel tersusun dari sel penyimpan air.'],
  ]),
  specimen: { id: 'lidahbuaya', kind: 'geo', name: 'Lidah buaya', short: 'lidah buaya', sci: 'Aloe vera', family: 'Asphodelaceae', x: 170, z: 222, top: 0.8, mkOff: 0.8, promptY: 0.8, tagNear: 5, dist: 11,
    fact: 'Lidah buaya adalah tumbuhan sukulen yang menyimpan air di daunnya yang tebal. Ia membuka stomata pada malam hari supaya hemat air.',
    hint: 'Geser untuk memotong daun dan melihat lapisan kulit, getah kuning, dan gel. Geser sampai akhir untuk melihat stomata terbuka di malam hari.' },
};

export const LUMUT = {
  id: 'lumut', name: 'Lumut',
  layers: [
    L('gametofit', 'Gametofit', 'Tumbuhan lumut (n)', '#4a8a2a', 'Bagian hijau yang terlihat.', 'Hamparan tangkai kecil berdaun tipis. Inilah tubuh utama lumut yang kita lihat sehari-hari.', 'Berfotosintesis dan menghasilkan sel kelamin (sperma dan sel telur).', 'Lumut tidak punya pembuluh pengangkut, jadi tubuhnya selalu kecil dan pendek.'),
    L('sporofit', 'Sporofit', 'Tangkai spora (2n)', '#a87a3a', 'Tumbuh di atas gametofit.', 'Tangkai tipis cokelat yang tumbuh dari gametofit setelah pembuahan.', 'Bertugas membuat dan menyebarkan spora. Sporofit menumpang makan pada gametofit.', 'Bergantinya generasi gametofit dan sporofit disebut pergiliran keturunan (metagenesis).'),
    L('kapsul', 'Kapsul spora', 'Sporangium', '#8a5a2a', 'Pabrik spora.', 'Kotak kecil di ujung sporofit yang berisi ribuan spora.', 'Saat kering dan matang, kapsul membuka lalu spora diterbangkan angin (titik kuning). Geser sampai akhir.', 'Spora yang jatuh di tempat lembap tumbuh menjadi lumut baru.'),
    L('rizoid', 'Rizoid', 'Akar semu', '#8a6a4a', 'Bukan akar sejati.', 'Benang-benang halus di pangkal lumut yang menempel ke batu atau tanah.', 'Menahan lumut tetap menempel. Air dan hara justru diserap lewat seluruh permukaan tubuh.', 'Karena itu lumut cepat kering di udara panas dan segar lagi saat basah.'),
    L('air', 'Air', 'Kebutuhan utama', '#a0c8f0', 'Sperma berenang.', 'Tetes air hujan dan embun yang tertahan di hamparan lumut.', 'Sperma lumut harus berenang di lapisan air untuk mencapai sel telur. Tanpa air, lumut tidak bisa berkembang biak secara kawin.', 'Hamparan lumut di gunung menahan air hujan seperti spons dan melepasnya perlahan ke sungai.'),
    L('batu', 'Batu', 'Tempat tumbuh', '#6a6966', 'Tumbuhan perintis.', 'Permukaan batu atau kulit pohon tempat lumut menempel.', 'Lumut termasuk tumbuhan perintis: ikut melapukkan batu dan membentuk lapisan tanah tipis untuk tumbuhan lain.', 'Lumut dan lumut kerak (liken) sering menjadi kehidupan pertama di batu yang baru.'),
  ],
  quiz: Q('lumut', [
    ['Bagian lumut yang hijau dan paling banyak kita lihat adalah ...', ['Gametofit', 'Sporofit', 'Kapsul', 'Rizoid'], 'Pada lumut, gametofit adalah tubuh utama.'],
    ['Mengapa lumut membutuhkan air untuk berkembang biak?', ['Sperma harus berenang ke sel telur', 'Supaya spora tenggelam', 'Untuk menyiram batu', 'Supaya kapsul berwarna cokelat'], 'Pembuahan lumut bergantung pada lapisan air.'],
    ['Pergantian generasi gametofit dan sporofit disebut ...', ['Metagenesis', 'Fotosintesis', 'Respirasi', 'Transpirasi'], 'Disebut juga pergiliran keturunan.'],
    ['Rizoid pada lumut berfungsi untuk ...', ['Menempel ke batu atau tanah', 'Mengangkut air ke daun seperti pembuluh', 'Membuat spora', 'Menghasilkan bunga'], 'Rizoid adalah akar semu, bukan akar sejati.'],
  ]),
  specimen: { id: 'lumut', kind: 'geo', name: 'Batu berlumut', short: 'lumut', sci: 'Bryophyta', family: 'Lumut', x: -30, z: -240, top: 0.9, mkOff: 0.8, promptY: 0.8, tagNear: 5, dist: 7,
    fact: 'Lumut adalah tumbuhan kecil tanpa pembuluh yang hidup di tempat lembap seperti batu dan kulit pohon di gunung. Lumut berkembang biak dengan spora.',
    hint: 'Geser Perbesaran & spora: dekati hamparan lumut lalu lihat spora terbang dari kapsul (titik kuning). Ketuk gametofit, sporofit, dan rizoid.' },
};
