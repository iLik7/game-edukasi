/* Data edukasi TANAH, BATUAN, dan SIKLUS AIR.
   CATATAN: isi sains perlu divalidasi guru IPA/geografi sebelum dipakai di sekolah. */
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const TANAH = {
  id: 'tanah', name: 'Profil tanah',
  layers: [
    L('serasah', 'Horizon O', 'Serasah dan humus', '#4a3420', 'Lapisan sisa makhluk hidup.', 'Lapisan paling atas berisi daun gugur, ranting, dan sisa makhluk hidup yang sedang membusuk.', 'Diuraikan oleh jamur, bakteri, dan hewan tanah menjadi humus yang kaya hara.', 'Humus membuat tanah berwarna gelap, gembur, dan mampu menahan air.'),
    L('topsoil', 'Horizon A', 'Tanah lapisan atas (topsoil)', '#5a3c24', 'Lapisan tersubur.', 'Campuran mineral halus dan humus, berwarna gelap. Di sinilah sebagian besar akar tumbuhan dan hewan tanah hidup.', 'Menyediakan air, udara, dan unsur hara bagi tanaman.', 'Pembentukan lapisan tanah subur sangat lambat; 1 cm bisa butuh ratusan tahun. Karena itu erosi tanah sangat merugikan.'),
    L('subsoil', 'Horizon B', 'Tanah lapisan bawah (subsoil)', '#9a5430', 'Lapisan penimbunan, sering kemerahan.', 'Lapisan tempat tertimbunnya lempung dan mineral yang terbawa air dari atas. Tanah tropis sering berwarna merah karena oksida besi.', 'Menyimpan air dan mineral. Akar pohon yang dalam bisa mencapai lapisan ini.', 'Warna merah pada banyak tanah di Indonesia berasal dari besi yang teroksidasi, mirip karat.'),
    L('bahaninduk', 'Horizon C', 'Bahan induk', '#b89a6a', 'Batuan yang sedang lapuk.', 'Pecahan batuan yang sedang melapuk, belum menjadi tanah sepenuhnya.', 'Menjadi bahan asal pembentukan tanah di atasnya.', 'Banyak tanah di Indonesia terbentuk dari abu dan batuan gunung api, sehingga sangat subur.'),
    L('batuandasar', 'Horizon R', 'Batuan dasar', '#7a7570', 'Batuan padat di bagian terbawah.', 'Batuan padat yang belum lapuk.', 'Menahan air sehingga air tanah mengalir menyamping di atasnya.', 'Pelapukan batuan terjadi karena panas-dingin, air, akar tumbuhan, dan reaksi kimia.'),
    L('akar', 'Akar', 'Sistem perakaran', '#c0a070', 'Pengikat tanah.', 'Akar tumbuhan menembus lapisan tanah.', 'Menyerap air dan hara, serta mengikat butiran tanah supaya tidak mudah terbawa air.', 'Lahan tanpa tumbuhan lebih mudah mengalami erosi dan longsor.'),
    L('cacing', 'Cacing tanah', 'Pengurai', '#e08a8a', 'Pembajak alami.', 'Cacing tanah hidup di lapisan atas tanah.', 'Menggali lorong yang memasukkan udara dan air, serta mencampur sisa tumbuhan ke dalam tanah.', 'Kotoran cacing (kascing) adalah pupuk organik yang subur.'),
  ],
  quiz: Q('tanah', [
    ['Lapisan tanah mana yang paling subur?', ['Horizon A (topsoil)', 'Horizon R', 'Horizon C', 'Horizon B'], 'Topsoil kaya humus dan menjadi tempat sebagian besar akar tumbuh.'],
    ['Tanah terbentuk terutama dari ...', ['Pelapukan batuan dan sisa makhluk hidup', 'Air hujan saja', 'Pasir pantai saja', 'Plastik yang terurai'], 'Batuan lapuk menyediakan mineral, sisa makhluk hidup menjadi humus.'],
    ['Mengapa tanah tropis sering berwarna merah?', ['Mengandung oksida besi', 'Karena banyak cacing', 'Karena terbakar matahari', 'Karena darah hewan'], 'Besi yang teroksidasi memberi warna merah seperti karat.'],
    ['Apa peran cacing tanah?', ['Menggemburkan dan mencampur tanah', 'Mengeringkan tanah', 'Memakan akar sampai mati', 'Membuat batuan'], 'Lorong cacing memasukkan udara dan air ke dalam tanah.'],
    ['Saat hujan, air paling sulit menembus lapisan ...', ['Batuan dasar yang padat', 'Serasah', 'Topsoil gembur', 'Akar'], 'Batuan padat menahan air, sehingga air tanah mengalir menyamping di atasnya.'],
  ]),
  specimen: { id: 'tanah', kind: 'geo', name: 'Profil Tanah', short: 'tanah', sci: 'Lapisan tanah (horizon)', family: 'Ilmu tanah', x: -12, z: -16, top: 2.0, mkOff: 0.8, promptY: 1.4, tagNear: 6,
    fact: 'Tanah adalah campuran mineral dari batuan lapuk, bahan organik, air, dan udara. Tanah tersusun berlapis-lapis yang disebut horizon.',
    hint: 'Ketuk tiap lapisan untuk membacanya. Geser Hujan untuk melihat air meresap: cepat di lapisan atas, lambat di lapisan lempung, lalu tertahan dan mengalir menyamping di atas batuan dasar.' },
};

export const BATUAN = {
  id: 'batuan', name: 'Siklus batuan',
  layers: [
    L('beku', 'Batuan beku', 'Andesit', '#8a8884', 'Terbentuk dari magma yang membeku.', 'Batuan beku terbentuk saat magma atau lava mendingin dan mengeras. Andesit berwarna abu-abu dengan bintik kristal mineral.', 'Andesit banyak dipakai untuk bangunan, jalan, dan batu ulekan.', 'Candi Borobudur dibangun dari batu andesit yang berasal dari gunung api di sekitarnya.'),
    L('sedimen', 'Batuan sedimen', 'Batu pasir', '#d4b282', 'Terbentuk dari endapan yang memadat.', 'Batuan sedimen terbentuk dari butiran hasil pelapukan dan erosi yang diendapkan berlapis-lapis, lalu memadat dan tersemen.', 'Lapisan-lapisannya menyimpan catatan sejarah Bumi.', 'Fosil paling sering ditemukan di batuan sedimen. Batu gamping (kapur) juga batuan sedimen, banyak terdapat di daerah karst seperti Gunungkidul.'),
    L('metamorf', 'Batuan metamorf', 'Marmer', '#ecebe4', 'Batuan yang berubah karena panas dan tekanan.', 'Batuan metamorf terbentuk saat batuan lain terkena panas dan tekanan tinggi di dalam bumi tanpa meleleh. Marmer berasal dari batu gamping.', 'Marmer dipakai untuk lantai, meja, dan patung karena indah dan bisa dipoles.', 'Tulungagung di Jawa Timur terkenal sebagai daerah penghasil marmer.'),
    L('magma', 'Magma', 'Batuan cair', '#ff7a2a', 'Batuan yang meleleh di dalam bumi.', 'Magma adalah batuan cair yang sangat panas di bawah permukaan bumi. Saat keluar dari gunung api, namanya menjadi lava.', 'Magma yang mendingin membentuk batuan beku baru, dan siklus berulang.', 'Indonesia berada di Cincin Api Pasifik, jadi memiliki sangat banyak gunung api aktif.'),
  ],
  quiz: Q('batuan', [
    ['Batuan beku terbentuk dari ...', ['Magma atau lava yang membeku', 'Endapan pasir', 'Tumpukan daun', 'Es yang mencair'], 'Contohnya andesit, basal, dan granit.'],
    ['Di jenis batuan mana fosil paling sering ditemukan?', ['Batuan sedimen', 'Batuan beku', 'Magma', 'Batuan metamorf'], 'Sisa makhluk hidup terkubur di endapan yang lalu memadat menjadi batuan.'],
    ['Marmer terbentuk dari batu gamping yang terkena ...', ['Panas dan tekanan tinggi', 'Air hujan', 'Angin', 'Sinar bulan'], 'Proses ini disebut metamorfosis batuan.'],
    ['Apa sebutan magma yang keluar ke permukaan bumi?', ['Lava', 'Lahar', 'Abu', 'Sedimen'], 'Lahar adalah aliran lumpur campuran material vulkanik dan air.'],
    ['Candi Borobudur dibangun dari batuan jenis ...', ['Andesit (batuan beku)', 'Marmer', 'Batu pasir', 'Batu bara'], 'Andesit berasal dari gunung api di sekitar Magelang.'],
  ]),
  specimen: { id: 'batuan', kind: 'geo', name: 'Singkapan Batuan', short: 'batuan', sci: 'Batuan beku, sedimen, metamorf', family: 'Geologi', x: 20, z: -2, top: 1.4, mkOff: 0.8, promptY: 1.0, tagNear: 6,
    fact: 'Batuan terus berubah dari satu jenis ke jenis lain dalam siklus batuan, walaupun prosesnya butuh ribuan sampai jutaan tahun.',
    hint: 'Ketuk tiap batuan dan kolam magma. Titik-titik bergerak menunjukkan proses: pelapukan dan pengendapan, panas dan tekanan, meleleh, lalu membeku. Geser Kecepatan untuk mempercepat siklus.' },
};

export const AIR = {
  id: 'siklusair', name: 'Siklus air',
  layers: [
    L('evaporasi', 'Evaporasi', 'Penguapan', '#9ad0f0', 'Air menguap karena panas matahari.', 'Panas matahari membuat air di laut, danau, dan sungai berubah menjadi uap air yang naik ke udara.', 'Menjadi penggerak utama siklus air.', 'Sebagian besar uap air di udara berasal dari penguapan air laut.'),
    L('transpirasi', 'Transpirasi', 'Penguapan dari tumbuhan', '#7ac06a', 'Uap air dari daun.', 'Tumbuhan melepaskan uap air lewat stomata di daun.', 'Hutan ikut menambah uap air di udara dan mendinginkan lingkungan.', 'Coba kurangi Hutan: penguapan dari tumbuhan berkurang dan awan lebih sedikit.'),
    L('kondensasi', 'Kondensasi', 'Pengembunan', '#e8eef8', 'Uap air menjadi awan.', 'Uap air naik, mendingin di ketinggian, lalu mengembun menjadi titik-titik air kecil yang membentuk awan.', 'Mengumpulkan air di atmosfer sebelum turun sebagai hujan.', 'Awan terlihat putih karena titik-titik airnya memantulkan cahaya matahari.'),
    L('presipitasi', 'Presipitasi', 'Hujan', '#7aa8e0', 'Air turun ke bumi.', 'Saat titik air di awan bergabung dan cukup berat, air jatuh sebagai hujan.', 'Mengembalikan air tawar ke daratan.', 'Di daerah pegunungan, udara yang naik lereng lebih cepat dingin sehingga hujan lebih sering turun.'),
    L('limpasan', 'Limpasan dan sungai', 'Aliran permukaan', '#4a8ac8', 'Air mengalir di permukaan menuju sungai.', 'Air hujan yang tidak meresap mengalir di permukaan tanah, berkumpul di sungai, lalu menuju danau atau laut.', 'Sungai mengangkut air, juga lumpur dan pasir hasil erosi.', 'Kurangi Hutan: limpasan membesar dan air sungai menjadi keruh karena membawa tanah. Inilah penyebab banjir dan erosi.'),
    L('infiltrasi', 'Infiltrasi dan air tanah', 'Peresapan', '#3a70c0', 'Air meresap ke dalam tanah.', 'Sebagian air hujan meresap ke dalam tanah dan tersimpan sebagai air tanah (garis biru di sisi balok).', 'Air tanah mengisi sumur dan mata air, serta perlahan mengalir ke sungai dan danau.', 'Akar pohon dan serasah hutan membuat tanah gembur, sehingga lebih banyak air meresap. Karena itu hutan disebut penyimpan air.'),
  ],
  quiz: Q('siklusair', [
    ['Apa penggerak utama siklus air?', ['Panas matahari', 'Angin malam', 'Gaya magnet', 'Bulan'], 'Panas matahari menguapkan air.'],
    ['Perubahan uap air menjadi awan disebut ...', ['Kondensasi', 'Evaporasi', 'Infiltrasi', 'Transpirasi'], 'Uap air mendingin dan mengembun di ketinggian.'],
    ['Penguapan air dari daun tumbuhan disebut ...', ['Transpirasi', 'Presipitasi', 'Kondensasi', 'Limpasan'], 'Air keluar lewat stomata.'],
    ['Apa akibat penggundulan hutan di daerah aliran sungai?', ['Limpasan besar, banjir, dan erosi', 'Air tanah bertambah', 'Sungai menjadi lebih jernih', 'Hujan berhenti total'], 'Tanpa pohon, air hujan langsung mengalir di permukaan dan membawa tanah.'],
    ['Meresapnya air hujan ke dalam tanah disebut ...', ['Infiltrasi', 'Evaporasi', 'Kondensasi', 'Sublimasi'], 'Air yang meresap menjadi air tanah.'],
  ]),
  specimen: { id: 'siklusair', kind: 'geo', name: 'Papan Siklus Air', short: 'siklus air', sci: 'Hidrologi: dari danau, awan, hujan, sampai sungai', family: 'Geografi', x: -18.5, z: 29.5, top: 1.9, mkOff: 0.7, promptY: 1.4, tagNear: 6,
    fact: 'Air di bumi terus berputar: menguap, menjadi awan, turun sebagai hujan, mengalir di sungai atau meresap ke tanah, lalu kembali ke danau dan laut.',
    hint: 'Diorama berisi gunung, hutan, sungai, dan danau. Geser Matahari untuk mengatur penguapan dan hujan. Geser Hutan untuk melihat bedanya: hutan lebat membuat air meresap, hutan gundul membuat banjir dan sungai keruh.' },
};
