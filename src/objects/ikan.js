/* Data edukasi IKAN AIR TAWAR: mas, nila, lele, gurami, arwana.
   P = parameter bentuk untuk generator di src/fish.js.
   CATATAN: isi sains perlu divalidasi ahli perikanan / guru biologi sebelum dipakai di sekolah. */

const SP = {
  mas: {
    name: 'Ikan mas', sci: 'Cyprinus carpio', family: 'Cyprinidae',
    fact: 'Ikan mas sudah dibudidayakan di Indonesia sejak lama di kolam dan sawah (minapadi). Ikan mas tidak punya gigi di mulut, tetapi punya gigi di tenggorokan (gigi faring) untuk menggerus makanan.',
    P: { id: 'mas', H: 1.0, W: 0.6, pm: 0.55, shape: 0.75, belly: 0.95, tailMin: 0.22, blunt: 0.35, arch: 1, back: '#6e5a1c', side: '#d9a23a', belly2: '#f3e2a8', fin: '#c9883a', scale: 22, scaleShine: true, caudal: 'forked', dorsal: [[0.42, 0.72, 0.55, 0.3]], anal: [[0.3, 0.38, 0.5]], barbels: [[0.05, -0.02, 0.12, [0.1, -0.25, 0.15]], [0.25, -0.08, 0.2, [0.0, -0.3, 0.1]]], barbelCol: [0.55, 0.4, 0.2], twoChamber: true, iris: [0.85, 0.68, 0.2], eyeR: 0.17, neutral: 0.5, seed: 3 },
    world: { count: 4, school: true, depth: 0.5, scale: 0.09, speed: 0.6 },
    notes: { kulit: 'Sisik ikan mas besar dan bertumpuk seperti genteng. Ikan mas punya dua pasang sungut pendek di sekitar mulut.', rangka: 'Ikan mas punya banyak duri halus (tulang kecil di antara otot), itulah sebabnya makan ikan mas harus hati-hati.', gelembung: 'Gelembung renang ikan mas terdiri dari dua ruang dan tersambung ke saluran pencernaan, jadi ikan mas bisa mengisi atau membuang udara lewat mulut.' },
  },
  nila: {
    name: 'Ikan nila', sci: 'Oreochromis niloticus', family: 'Cichlidae',
    fact: 'Nila berasal dari Afrika, termasuk Sungai Nil, dan kini menjadi salah satu ikan budidaya paling populer di Indonesia. Induk betina mengerami telur dan menjaga anaknya di dalam mulut.',
    P: { id: 'nila', H: 1.05, W: 0.48, pm: 0.55, shape: 0.8, belly: 0.9, tailMin: 0.25, blunt: 0.32, arch: 1.2, back: '#3d4a52', side: '#8a989e', belly2: '#dde3e4', fin: '#a85a55', scale: 20, bars: 8, caudal: 'truncate', dorsal: [[0.3, 0.78, 0.6, 0.15]], anal: [[0.25, 0.4, 0.55]], iris: [0.75, 0.6, 0.25], eyeR: 0.16, neutral: 0.5, seed: 4 },
    world: { count: 4, school: true, depth: 0.55, scale: 0.08, speed: 0.65 },
    notes: { kulit: 'Tubuh nila bergaris-garis tegak samar, dan sirip ekornya bergaris. Sirip punggungnya panjang dengan bagian depan berupa duri keras.', gelembung: 'Gelembung renang nila tertutup (tidak tersambung ke saluran pencernaan). Gasnya diatur lewat pembuluh darah khusus.' },
  },
  lele: {
    name: 'Ikan lele', sci: 'Clarias sp.', family: 'Clariidae',
    fact: 'Lele hidup di dasar perairan dan aktif mencari makan di malam hari dengan mengandalkan sungutnya. Lele bisa bertahan di air yang miskin oksigen karena bisa menghirup udara langsung dari permukaan.',
    P: { id: 'lele', H: 0.6, W: 0.62, headW: 0.5, pm: 0.75, shape: 0.55, belly: 0.85, tailMin: 0.35, blunt: 0.65, arch: 0.3, back: '#2a2724', side: '#4a4540', belly2: '#cfc4b2', fin: '#3a3530', scale: 0, caudal: 'round', cauH: 0.75, dorsal: [[0.1, 0.66, 0.32, 0.05]], anal: [[0.08, 0.5, 0.3, 0.05]], pecT: 0.78, pecL: 0.7, finLow: 0.6, barbels: [[0.02, 0.02, 0.15, [0.3, 0.05, 1.3], 0.03], [0.05, -0.1, 0.1, [0.1, -0.3, 0.9]], [0.15, -0.15, 0.18, [0, -0.4, 0.8]], [0.2, -0.12, 0.08, [-0.1, -0.45, 0.5]]], labirin: 'pohon', iris: [0.3, 0.24, 0.18], eyeR: 0.1, eyeY: 0.45, eyeT: 0.89, neutral: 0.42, seed: 5 },
    world: { count: 3, school: false, depth: 0.05, bedOff: 0.22, scale: 0.1, speed: 0.45, amp: 0.25, freq: 5 },
    notes: { kulit: 'Lele tidak bersisik. Kulitnya licin karena berlendir. Lele punya empat pasang sungut peraba yang sangat peka.', rangka: 'Sirip dada lele punya duri keras (patil) yang bisa melukai tangan. Hati-hati saat memegang lele.', labirin: 'Pada lele organ ini disebut organ arborescent, berbentuk bercabang seperti pohon, terletak di atas insang.' },
    extraLayer: { id: 'labirin', name: 'Organ arborescent', sci: 'Alat napas tambahan', ui: '#e09098', short: 'Alat untuk menghirup udara.',
      what: 'Jaringan bercabang seperti pohon kecil di rongga di atas insang, kaya pembuluh darah.', fn: 'Menyerap oksigen dari udara yang dihirup lele di permukaan air, sehingga lele bertahan di air yang kekurangan oksigen.', fact: 'Karena alat ini, lele bisa hidup di kolam padat dan berlumpur, dan bisa bertahan lama di luar air selama tubuhnya tetap lembap.' },
  },
  gurami: {
    name: 'Ikan gurami', sci: 'Osphronemus goramy', family: 'Osphronemidae',
    fact: 'Gurami adalah ikan asli Indonesia dan Asia Tenggara. Gurami jantan membangun sarang dari serat tanaman untuk telur-telurnya. Pertumbuhannya lambat, jadi harganya relatif mahal.',
    P: { id: 'gurami', H: 1.35, W: 0.42, pm: 0.5, shape: 0.85, belly: 1.05, tailMin: 0.28, blunt: 0.3, arch: 1.4, mouthUp: 0.4, back: '#5d564a', side: '#b4a48c', belly2: '#e8dfcc', fin: '#7d7060', scale: 14, caudal: 'round', cauH: 1.1, dorsal: [[0.28, 0.55, 0.55, 0.2]], anal: [[0.1, 0.58, 0.6, 0.1]], thread: true, pelT: 0.6, labirin: 'labirin', iris: [0.8, 0.25, 0.15], eyeR: 0.15, neutral: 0.5, seed: 6 },
    world: { count: 3, school: true, depth: 0.6, scale: 0.11, speed: 0.45 },
    notes: { kulit: 'Tubuh gurami pipih dan tinggi. Sirip perutnya memanjang seperti benang dan dipakai sebagai alat peraba.', labirin: 'Gurami punya organ labirin, lipatan-lipatan tulang tipis berlapis selaput kaya pembuluh darah, untuk menyerap oksigen dari udara.' },
    extraLayer: { id: 'labirin', name: 'Organ labirin', sci: 'Alat napas tambahan', ui: '#e09098', short: 'Alat untuk menghirup udara.',
      what: 'Rongga di atas insang berisi lipatan berliku seperti labirin, dilapisi selaput tipis yang kaya pembuluh darah.', fn: 'Menyerap oksigen dari udara yang dihirup di permukaan air.', fact: 'Gurami dewasa perlu naik ke permukaan untuk mengambil udara. Kalau tidak bisa mencapai permukaan, gurami bisa lemas walaupun airnya cukup oksigen.' },
  },
  arwana: {
    name: 'Arwana', sci: 'Scleropages formosus', family: 'Osteoglossidae',
    fact: 'Arwana Asia hidup di sungai dan rawa Kalimantan dan Sumatra. Spesies ini dilindungi dan terdaftar di CITES Apendiks I, sehingga perdagangannya hanya boleh dari hasil penangkaran resmi. Jantan mengerami telur di dalam mulutnya.',
    P: { id: 'arwana', H: 0.72, W: 0.4, pm: 0.62, shape: 0.7, belly: 1.0, tailMin: 0.3, blunt: 0.3, arch: 0.3, mouthUp: 0.6, back: '#3e5248', side: '#d8c48a', belly2: '#f3e7c6', fin: '#b84a2e', scale: 44, scaleEdge: 'rgba(170,40,25,0.75)', scaleShine: true, metal: 0.2, caudal: 'round', dorsal: [[0.1, 0.3, 0.5, 0.1]], anal: [[0.08, 0.33, 0.55, 0.1]], pecT: 0.76, pecL: 1.3, barbels: [[0.1, -0.25, 0.06, [0.45, 0.08, 0.03], 0.03]], barbelCol: [0.6, 0.5, 0.3], iris: [0.85, 0.7, 0.3], eyeR: 0.2, eyeY: 0.4, neutral: 0.52, seed: 7 },
    world: { count: 1, school: false, depth: 0.85, scale: 0.14, speed: 0.7 },
    notes: { kulit: 'Sisik arwana sangat besar dan mengilap. Sepasang sungut di dagu membantu merasakan mangsa di permukaan air.', otak: 'Mulut arwana menghadap ke atas, cocok untuk menyambar serangga dan ikan kecil di permukaan air. Arwana bahkan bisa melompat keluar air untuk menangkap mangsa.' },
  },
};

const BASE = [
  { id: 'kulit', name: 'Kulit dan sisik', sci: 'Integumen', ui: '#d8c48a', short: 'Pelindung tubuh, gurat sisi.',
    what: 'Kulit ikan dilapisi lendir dan, pada kebanyakan ikan, sisik yang bertumpuk seperti genteng. Di sepanjang sisi tubuh ada garis titik-titik yang disebut gurat sisi.',
    fn: 'Lendir dan sisik melindungi dari kuman dan luka. Gurat sisi adalah indra yang merasakan getaran dan arus air, sehingga ikan bisa merasakan gerakan di sekitarnya, bahkan di air keruh.',
    fact: 'Sisik bertambah besar seiring umur dan membentuk lingkaran pertumbuhan, mirip cincin tahun pada kayu. Peneliti bisa memperkirakan umur ikan dari lingkaran ini.' },
  { id: 'otot', name: 'Otot', sci: 'Miomer', ui: '#e9b9a6', short: 'Otot berlapis berbentuk zig-zag.',
    what: 'Otot ikan tersusun dalam segmen-segmen berbentuk zig-zag yang disebut miomer. Itulah sebabnya daging ikan matang mudah terlepas berlapis-lapis.',
    fn: 'Miomer di kedua sisi tubuh berkontraksi bergantian, membuat tubuh dan ekor meliuk sehingga ikan terdorong maju.',
    fact: 'Daging ikan kebanyakan berwarna putih karena didominasi otot untuk gerakan cepat yang singkat. Ikan yang berenang jauh terus-menerus punya lebih banyak otot merah.' },
  { id: 'rangka', name: 'Rangka', sci: 'Sistem rangka', ui: '#eae0c4', short: 'Tulang belakang, rusuk, dan jari-jari sirip.',
    what: 'Rangka ikan bertulang sejati terdiri dari tengkorak, tulang belakang yang panjang, tulang rusuk, dan jari-jari yang menegakkan sirip.',
    fn: 'Menopang tubuh, tempat melekatnya otot, dan menegakkan sirip untuk mengarahkan gerak.',
    fact: 'Sirip punya tugas masing-masing: sirip ekor mendorong, sirip punggung dan dubur menjaga tubuh tetap tegak, sirip dada dan perut untuk mengerem dan berbelok.' },
  { id: 'otak', name: 'Otak dan mata', sci: 'Sistem saraf', ui: '#e8a8b0', short: 'Pusat kendali dan indra.',
    what: 'Otak ikan kecil dibanding tubuhnya. Bagian yang mengolah penglihatan (lobus optik) relatif besar. Mata ikan berada di sisi kepala.',
    fn: 'Mengolah informasi dari mata, gurat sisi, penciuman, dan sungut, lalu mengatur gerak.',
    fact: 'Ikan tidak punya kelopak mata. Matanya selalu dibasahi air.' },
  { id: 'insang', name: 'Insang', sci: 'Sistem pernapasan', ui: '#e05060', short: 'Penyerap oksigen dari air.',
    what: 'Di bawah tutup insang (operkulum) ada empat lengkung insang di tiap sisi. Tiap lengkung punya ratusan filamen merah, dan tiap filamen punya lipatan tipis (lamela) yang kaya pembuluh darah.',
    fn: 'Air masuk lewat mulut, mengalir melewati filamen, lalu keluar lewat celah tutup insang. Oksigen dari air masuk ke darah, karbon dioksida keluar ke air.',
    fact: 'Di lamela, darah mengalir berlawanan arah dengan air (arus berlawanan). Cara ini membuat ikan bisa mengambil sebagian besar oksigen dari air. Coba matikan "Aliran berlawanan arah" untuk membandingkan.' },
  { id: 'jantung', name: 'Jantung', sci: 'Sistem peredaran darah', ui: '#e0505e', short: 'Pompa darah dua ruang.',
    what: 'Jantung ikan terletak di bawah insang dan hanya punya dua ruang utama: satu serambi dan satu bilik.',
    fn: 'Memompa darah ke insang untuk mengambil oksigen. Dari insang darah langsung mengalir ke seluruh tubuh, lalu kembali ke jantung. Darah hanya sekali melewati jantung dalam satu putaran (peredaran darah tunggal).',
    fact: 'Detak jantung ikan sangat dipengaruhi suhu air. Di air hangat jantung berdetak lebih cepat daripada di air dingin.' },
  { id: 'gelembung', name: 'Gelembung renang', sci: 'Vesica natatoria', ui: '#c8d0d8', short: 'Pelampung yang bisa diatur.',
    what: 'Kantong berisi gas di bagian atas rongga tubuh, di bawah tulang belakang.',
    fn: 'Mengatur daya apung. Dengan menambah atau mengurangi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak mengeluarkan tenaga.',
    fact: 'Coba slider Gelembung renang: kalau gasnya kurang, ikan tenggelam. Kalau terlalu banyak, ikan naik. Cari titik pas supaya ikan melayang.' },
  { id: 'hati', name: 'Hati', sci: 'Sistem pencernaan', ui: '#b0463c', short: 'Penyimpan cadangan makanan.',
    what: 'Hati berada di bagian depan rongga perut, di belakang jantung.',
    fn: 'Membuat empedu untuk mencerna lemak, menyimpan cadangan energi, dan menetralkan zat berbahaya.',
    fact: 'Minyak hati ikan, misalnya dari ikan kod, kaya vitamin A dan D.' },
  { id: 'usus', name: 'Saluran pencernaan', sci: 'Lambung dan usus', ui: '#f0b8a8', short: 'Mencerna dan menyerap makanan.',
    what: 'Makanan masuk lewat mulut, kerongkongan, lambung (pada sebagian ikan), lalu usus yang berkelok sampai ke anus di depan sirip dubur.',
    fn: 'Mencerna makanan dan menyerap nutrisi ke dalam darah.',
    fact: 'Panjang usus sesuai makanannya: ikan pemakan tumbuhan punya usus jauh lebih panjang daripada ikan pemakan daging.' },
  { id: 'ginjal', name: 'Ginjal', sci: 'Sistem ekskresi', ui: '#a04a3a', short: 'Pembuang kelebihan air.',
    what: 'Ginjal ikan berupa organ memanjang berwarna merah gelap, tepat di bawah tulang belakang.',
    fn: 'Menyaring darah dan membuang sisa metabolisme.',
    fact: 'Air tawar terus meresap masuk ke tubuh ikan air tawar, sehingga ginjalnya membuang banyak urine yang sangat encer.' },
];

const QUIZ_BASE = [
  ['Organ apa yang dipakai ikan untuk mengambil oksigen dari air?', ['Insang', 'Paru-paru', 'Gelembung renang', 'Hati'], 'Insang menyerap oksigen terlarut dari air yang mengalir melewati filamennya.'],
  ['Apa fungsi gelembung renang?', ['Mengatur daya apung', 'Mencerna makanan', 'Memompa darah', 'Menyaring urine'], 'Dengan mengatur isi gas, ikan bisa melayang di kedalaman tertentu tanpa banyak tenaga.'],
  ['Berapa ruang utama jantung ikan?', ['Dua', 'Tiga', 'Empat', 'Satu'], 'Satu serambi dan satu bilik. Darah mengalir dalam peredaran tunggal.'],
  ['Gurat sisi pada ikan berfungsi untuk ...', ['Merasakan getaran dan arus air', 'Bernapas', 'Menyimpan lemak', 'Menarik pasangan dengan warna'], 'Gurat sisi adalah indra yang membuat ikan peka terhadap gerakan di sekitarnya.'],
  ['Mengapa arus berlawanan arah di insang menguntungkan?', ['Oksigen lebih banyak terserap ke darah', 'Air lebih cepat keluar', 'Insang lebih ringan', 'Ikan tidak perlu membuka mulut'], 'Karena darah selalu bertemu air yang lebih kaya oksigen, perpindahan oksigen terjadi di sepanjang lamela.'],
];
const QUIZ_SP = {
  mas: ['Ikan mas tidak punya gigi di mulut. Di mana gigi pengunyahnya?', ['Di tenggorokan (gigi faring)', 'Di lidah', 'Di sirip', 'Tidak punya sama sekali'], 'Gigi faring di tenggorokan menggerus makanan sebelum masuk ke saluran pencernaan.'],
  nila: ['Apa yang dilakukan induk betina nila dengan telurnya?', ['Mengerami di dalam mulut', 'Menempelkan di daun', 'Mengubur di pasir lalu pergi', 'Menitipkan pada ikan lain'], 'Nila termasuk pengeram mulut. Anak-anaknya juga berlindung di mulut induk saat ada bahaya.'],
  lele: ['Mengapa lele bisa hidup di air yang miskin oksigen?', ['Punya organ arborescent untuk menghirup udara', 'Tidak butuh oksigen', 'Insangnya sangat besar', 'Menyimpan oksigen di sisik'], 'Organ bercabang di atas insang menyerap oksigen dari udara yang dihirup di permukaan.'],
  gurami: ['Sirip perut gurami yang panjang seperti benang berfungsi sebagai ...', ['Alat peraba', 'Alat bernapas', 'Penyimpan telur', 'Pelampung'], 'Gurami memakai sirip perutnya untuk meraba sekitar, terutama di air yang keruh.'],
  arwana: ['Mengapa arwana Asia tidak boleh ditangkap dan diperdagangkan sembarangan?', ['Karena dilindungi dan terdaftar di CITES Apendiks I', 'Karena beracun', 'Karena hanya hidup di laut', 'Karena tidak bisa dimakan'], 'Arwana Asia terancam punah di alam. Perdagangan hanya boleh dari penangkaran resmi.'],
};

export const FISH_IDS = Object.keys(SP);
export function fishData(id, k) {
  const S = SP[id];
  const layers = BASE.map((L) => S.notes[L.id] ? Object.assign({}, L, { fact: L.fact + ' ' + S.notes[L.id] }) : L);
  if (S.extraLayer) layers.splice(5, 0, Object.assign({}, S.extraLayer, S.notes.labirin ? { fact: S.extraLayer.fact + ' ' + S.notes.labirin } : {}));
  const qs = QUIZ_BASE.concat([QUIZ_SP[id]]).map((q, i) => ({ id: id + 'q' + i, sp: id, q: q[0], o: q[1], a: 0, e: q[2] }));
  return {
    id, name: S.name, layers, quiz: qs, P: S.P, world: S.world,
    specimen: { id, kind: 'fish', name: S.name, short: S.name.toLowerCase(), sci: S.sci, family: S.family, x: -34, z: 26, top: 0, mkOff: 0, promptY: -0.5, reach: 4, tagNear: 0, needSwim: true,
      fact: S.fact, hint: 'Geser Kedalaman untuk mengupas lapisan. Geser Gelembung renang sampai ikan melayang diam. Nyalakan atau matikan aliran berlawanan arah untuk melihat cara insang bekerja (titik biru air, titik merah darah).' },
  };
}
