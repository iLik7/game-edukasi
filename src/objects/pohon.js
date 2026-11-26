/* Objek edukasi: POHON.
   Satu objek = satu modul data: lapisan, spesimen di dunia, dan kuis.
   Objek baru (daun, sel, simulasi kerja) cukup dibuat seperti file ini
   lalu didaftarkan di src/main.js. */

/* ---------------- content ---------------- */
const LAYERS=[
 {id:'kulit',name:'Kulit luar',sci:'Periderm',col:0x5b3d2a,ui:'#c8946a',ro:2.5,ri:2.28,
  what:'Lapisan terluar yang sebagian besar sudah mati. Dindingnya mengandung suberin sehingga kedap air.',
  fn:'Melindungi jaringan hidup di dalamnya dari hama, penyakit, panas, api ringan, dan hilangnya air.',
  fact:'Corak dan ketebalan kulit kayu berbeda pada tiap spesies, jadi sering dipakai untuk mengenali jenis pohon.',
  short:'Pelindung terluar, kedap air.'},
 {id:'floem',name:'Floem',sci:'Floem sekunder (kulit dalam)',col:0xcdb87a,ui:'#e6d493',ro:2.28,ri:2.0,
  what:'Jaringan hidup tepat di bawah kulit luar. Penyusun utamanya adalah buluh tapis yang dibantu sel pendamping.',
  fn:'Mengangkut hasil fotosintesis, terutama sukrosa, dari daun ke akar, buah, dan bagian lain yang sedang tumbuh atau menyimpan cadangan.',
  fact:'Gula mengalir dari sumber (daun dewasa) ke tempat pakai atau simpan (akar, tunas, buah), jadi arahnya bisa ke bawah maupun ke atas.',
  short:'Jalur gula dari daun.'},
 {id:'kambium',name:'Kambium',sci:'Kambium vaskular',col:0x8fd16a,ui:'#a6e57a',ro:2.0,ri:1.86,
  what:'Lapisan sangat tipis berisi sel yang terus membelah.',
  fn:'Membentuk xilem baru ke arah dalam dan floem baru ke arah luar, sehingga batang bertambah besar (pertumbuhan sekunder).',
  fact:'Kambium membuat batang menebal, bukan memanjang. Pertambahan tinggi terjadi di ujung tunas.',
  short:'Penghasil jaringan baru.'},
 {id:'xilem',name:'Xilem aktif',sci:'Kayu gubal (sapwood)',col:0xe4c28b,ui:'#f2d3a0',ro:1.86,ri:1.2,
  what:'Bagian kayu yang masih berfungsi. Pembuluh dan trakeidnya adalah sel mati berdinding lignin yang tersusun menjadi pipa panjang.',
  fn:'Mengangkut air dan mineral dari akar ke daun, sekaligus menopang batang. Jari-jari empulur menyalurkan zat ke arah samping.',
  fact:'Air naik tanpa pompa. Penguapan di daun (transpirasi) menarik kolom air yang saling menempel di dalam pipa xilem. Pohon bisa mengangkat air puluhan meter, dan pada pohon tertinggi lebih dari 100 meter.',
  short:'Jalur air dan mineral ke daun.'},
 {id:'teras',name:'Kayu teras',sci:'Heartwood',col:0xa8693b,ui:'#e0925a',ro:1.2,ri:0.3,
  what:'Xilem tua di bagian dalam yang sudah berhenti mengangkut air. Biasanya lebih gelap karena terisi resin, tanin, dan senyawa lain.',
  fn:'Menopang pohon dan lebih tahan terhadap pembusukan serta serangan serangga.',
  fact:'Pada beberapa spesies, kayu teras yang awet membuat kayunya bernilai tinggi. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.',
  short:'Penopang, tahan lapuk.'},
 {id:'empulur',name:'Empulur',sci:'Pith',col:0xf2e6c9,ui:'#f6ecd2',ro:0.3,ri:0,
  what:'Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.',
  fn:'Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.',
  fact:'Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.',
  short:'Pusat batang yang lunak.'}
];
/* Tiap spesimen: data sains (fact, notes per lapisan), posisi di dunia, dan parameter kayu
   untuk tekstur penampang (wood). Gaya render pohon di dunia ada di src/vegetation.js.
   CATATAN: isi sains perlu divalidasi guru biologi / ahli kehutanan sebelum dipakai di sekolah. */
const HEROES=[
 {id:'jati',name:'Pohon Jati',short:'jati',sci:'Tectona grandis',family:'Lamiaceae',x:8,z:-8,
  fact:'Jati meranggas (menggugurkan daun) di musim kemarau dan bertunas lagi saat musim hujan. Kayunya terkenal awet dan banyak dipakai untuk mebel dan konstruksi.',
  notes:{
   kulit:'Kulit jati cokelat keabu-abuan, tipis, dan mengelupas memanjang berserat.',
   xilem:'Jati termasuk kayu berpori cincin: pembuluh besar yang terbentuk di awal musim tumbuh membuat cincin tahunnya jelas.',
   teras:'Teras jati berwarna cokelat keemasan dan mengandung minyak serta senyawa seperti tektokuinon yang membuatnya tahan rayap dan jamur.'},
  wood:{bark:'oak',barkTint:0xd8c8b0,rings:14,contrast:0.34,pores:'ring',rays:0.07,
        cortex:[0.80,0.70,0.46],sapE:[0.93,0.82,0.58],sapL:[0.76,0.58,0.34],heartE:[0.72,0.48,0.22],heartL:[0.46,0.27,0.11],pith:[0.90,0.82,0.66]}},
 {id:'mahoni',name:'Pohon Mahoni',short:'mahoni',sci:'Swietenia mahagoni',family:'Meliaceae',x:-10,z:-4,
  fact:'Mahoni berasal dari Amerika tropis dan didatangkan ke Indonesia pada masa kolonial. Banyak ditanam sebagai pohon peneduh di tepi jalan. Buahnya berupa kapsul berkayu yang pecah menjadi lima bagian dan melepas biji bersayap.',
  notes:{
   kulit:'Kulit mahoni cokelat tua keabu-abuan, bersisik dengan alur dangkal.',
   xilem:'Pori kayu mahoni tersebar merata (berpori baur), tidak mengelompok membentuk cincin seperti pada jati.',
   teras:'Teras mahoni cokelat kemerahan dan makin gelap seiring umur. Seratnya halus, jadi kayunya dihargai untuk mebel.'},
  wood:{bark:'oak',barkTint:0x9a8070,rings:11,contrast:0.2,pores:'diffuse',rays:0.06,
        cortex:[0.78,0.64,0.44],sapE:[0.90,0.72,0.52],sapL:[0.78,0.56,0.38],heartE:[0.66,0.34,0.20],heartL:[0.44,0.19,0.10],pith:[0.88,0.76,0.62]}},
 {id:'beringin',name:'Pohon Beringin',short:'beringin',sci:'Ficus benjamina',family:'Moraceae',x:13,z:9,
  fact:'Beringin bisa memulai hidup menumpang di pohon lain. Akar gantungnya turun ke tanah, menebal, lalu menjadi batang tambahan. Beringin termasuk marga Ficus, yang getahnya putih seperti susu (lateks).',
  notes:{
   kulit:'Kulit beringin halus dan berwarna abu-abu terang.',
   floem:'Getah putih beringin (lateks) berasal dari sel khusus penghasil lateks yang tersebar di jaringan kulit dan daun.',
   xilem:'Kayu beringin relatif lunak dan ringan, jarang dipakai sebagai kayu konstruksi.'},
  wood:{bark:'birch',barkTint:0xb4aa9c,rings:8,contrast:0.1,pores:'diffuse',rays:0.05,
        cortex:[0.86,0.82,0.62],sapE:[0.94,0.89,0.74],sapL:[0.88,0.80,0.62],heartE:[0.84,0.74,0.54],heartL:[0.74,0.62,0.42],pith:[0.94,0.90,0.78]}},
 {id:'pinus',name:'Pinus Merkusii',short:'pinus',sci:'Pinus merkusii',family:'Pinaceae',x:-18,z:-24,
  fact:'Pinus merkusii adalah satu-satunya jenis pinus alami yang tumbuh sampai ke selatan garis khatulistiwa, yaitu di Sumatra. Di Jawa banyak ditanam, dan getahnya disadap untuk diolah menjadi gondorukem dan terpentin.',
  notes:{
   kulit:'Kulit pinus merkusii tebal, beralur dalam, dan cokelat kemerahan.',
   floem:'Getah pinus keluar dari saluran resin saat batang dilukai. Getah itu diolah menjadi gondorukem dan terpentin.',
   xilem:'Kayu pinus tersusun hampir seluruhnya dari trakeid, tanpa pembuluh berpori besar seperti pada jati. Saluran resin tersebar di dalamnya.',
   teras:'Teras pinus lebih gelap dan banyak mengandung resin.'},
  wood:{bark:'pine',barkTint:0xe0c0a8,rings:19,contrast:0.46,pores:'resin',rays:0.04,
        cortex:[0.82,0.66,0.42],sapE:[0.96,0.86,0.62],sapL:[0.82,0.60,0.34],heartE:[0.86,0.62,0.34],heartL:[0.62,0.36,0.16],pith:[0.92,0.82,0.62]}},
 {id:'trembesi',name:'Pohon Trembesi',short:'trembesi',sci:'Samanea saman',family:'Fabaceae',x:26,z:-10,
  fact:'Trembesi berasal dari Amerika tropis. Tajuknya lebar seperti payung dan bisa lebih lebar daripada tingginya. Daun majemuknya melipat saat malam atau mendung.',
  notes:{
   kulit:'Kulit trembesi cokelat tua keabu-abuan, kasar, dan beralur.',
   xilem:'Kayu trembesi bercorak serat indah dan sering dipakai untuk meja dan ukiran.',
   teras:'Teras trembesi berwarna cokelat tua dengan corak garis yang lebih gelap.'},
  wood:{bark:'oak',barkTint:0x8a7868,rings:9,contrast:0.16,pores:'diffuse',rays:0.05,
        cortex:[0.80,0.70,0.48],sapE:[0.88,0.78,0.58],sapL:[0.76,0.62,0.42],heartE:[0.52,0.34,0.20],heartL:[0.30,0.18,0.10],pith:[0.88,0.80,0.66]}}
];
const QUIZ=[
 {id:'q1',q:'Jaringan mana yang mengangkut air dan mineral dari akar ke daun?',o:['Xilem','Floem','Kambium','Empulur'],a:0,
  e:'Xilem tersusun dari sel mati berdinding lignin yang membentuk pipa. Air bergerak naik karena tarikan penguapan di daun.'},
 {id:'q2',q:'Apa yang terutama diangkut oleh floem?',o:['Air dan mineral dari tanah','Gula hasil fotosintesis dari daun ke bagian lain','Gas oksigen ke akar','Klorofil ke daun muda'],a:1,
  e:'Floem membawa sukrosa dari tempat dibuatnya (daun dewasa) ke tempat dipakai atau disimpan, misalnya akar, tunas, dan buah.'},
 {id:'q3',q:'Lapisan mana yang membelah dan membentuk xilem baru ke arah dalam serta floem baru ke arah luar?',o:['Kulit luar','Kayu teras','Kambium','Empulur'],a:2,
  e:'Kambium vaskular membuat batang menebal. Xilem baru menumpuk di sisi dalamnya, floem baru di sisi luarnya.'},
 {id:'q4',q:'Di daerah yang punya musim jelas, mengapa penampang batang menunjukkan cincin tahun?',o:['Floem menumpuk satu lapis setiap tahun','Sel xilem yang dibentuk di awal dan akhir musim tumbuh berbeda ukuran dan tebal dindingnya','Kulit luar mengelupas setiap tahun','Kambium berhenti bekerja setelah setahun'],a:1,
  e:'Pada awal musim tumbuh sel xilem besar dan berdinding tipis, di akhir musim kecil dan berdinding tebal. Perbedaan itu tampak sebagai cincin.'},
 {id:'q5',q:'Kulit pohon dikelupas melingkar sampai ke kayu (girdling). Apa dampaknya dalam jangka panjang?',o:['Gula tidak bisa turun ke akar sehingga pohon perlahan mati','Air langsung berhenti naik dan semua daun gugur dalam sehari','Pohon tumbuh makin tinggi','Tidak ada dampak apa pun'],a:0,
  e:'Floem ikut terkelupas, jadi gula dari daun tidak sampai ke akar. Xilem masih mengangkut air untuk sementara, tetapi akar yang kelaparan akhirnya membuat pohon mati.'}
,
 {id:'s-jati1',sp:'jati',q:'Mengapa kayu teras jati awet dan tahan rayap?',o:['Mengandung minyak dan senyawa pelindung seperti tektokuinon','Terisi penuh oleh air','Tidak punya xilem sama sekali','Kulitnya sangat tebal'],a:0,
  e:'Senyawa dan minyak di kayu teras jati membuatnya tahan jamur dan rayap, itu sebabnya jati awet.'},
 {id:'s-jati2',sp:'jati',q:'Apa arti jati "meranggas"?',o:['Menggugurkan daun saat musim kering','Tumbuh tanpa akar','Mengeluarkan getah putih','Berbuah sepanjang tahun'],a:0,
  e:'Jati menggugurkan daunnya di musim kemarau untuk mengurangi penguapan, lalu bertunas lagi saat hujan datang.'},
 {id:'s-mahoni1',sp:'mahoni',q:'Dari mana asal mahoni yang banyak ditanam di Indonesia?',o:['Amerika tropis','Eropa utara','Gurun Australia','Afrika bagian selatan'],a:0,
  e:'Mahoni didatangkan dari Amerika tropis pada masa kolonial dan kini banyak ditanam sebagai pohon peneduh.'},
 {id:'s-mahoni2',sp:'mahoni',q:'Bagian mahoni mana yang pecah menjadi lima bagian dan melepas biji bersayap?',o:['Buahnya (kapsul berkayu)','Kulit kayunya','Akarnya','Empulurnya'],a:0,
  e:'Buah mahoni berupa kapsul berkayu. Saat matang ia terbelah dan biji bersayapnya terbawa angin.'},
 {id:'s-bering1',sp:'beringin',q:'Cairan putih seperti susu yang keluar dari luka beringin disebut apa?',o:['Lateks','Klorofil','Sukrosa','Lignin'],a:0,
  e:'Lateks dihasilkan sel khusus pada tumbuhan marga Ficus. Fungsinya antara lain menutup luka dan menolak pemangsa.'},
 {id:'s-bering2',sp:'beringin',q:'Akar gantung beringin yang sampai ke tanah lama-kelamaan akan...',o:['Menebal dan menjadi batang tambahan','Mati seketika','Berubah menjadi daun','Berhenti tumbuh selamanya'],a:0,
  e:'Akar gantung yang menjangkau tanah ikut menyerap air dan menebal, sehingga tampak seperti batang tambahan.'},
 {id:'s-pinus1',sp:'pinus',q:'Kayu pinus tersusun hampir seluruhnya dari sel panjang yang mengangkut air sekaligus menopang. Apa namanya?',o:['Trakeid','Stomata','Kambium','Lateks'],a:0,
  e:'Konifer seperti pinus tidak punya pembuluh berpori besar. Trakeid menjalankan tugas mengangkut air dan menopang batang.'},
 {id:'s-pinus2',sp:'pinus',q:'Getah pinus yang disadap diolah menjadi apa?',o:['Gondorukem dan terpentin','Minyak kayu putih','Karet alam','Serat kapas'],a:0,
  e:'Resin pinus disuling menjadi gondorukem (padat) dan terpentin (cair), yang dipakai pada cat, perekat, dan industri lain.'},
 {id:'s-tremb1',sp:'trembesi',q:'Bentuk tajuk trembesi paling mirip apa?',o:['Payung yang lebar','Kerucut sempit','Tiang lurus','Bola kecil'],a:0,
  e:'Cabang trembesi menyebar ke samping sehingga tajuknya lebar seperti payung dan teduh.'},
 {id:'s-tremb2',sp:'trembesi',q:'Banyak anggota keluarga kacang-kacangan (Fabaceae), termasuk trembesi, punya bintil akar. Apa fungsinya?',o:['Bersimbiosis dengan bakteri pengikat nitrogen','Menyerap garam laut','Menghasilkan listrik','Menyimpan air untuk setahun'],a:0,
  e:'Bakteri di bintil akar mengubah nitrogen udara menjadi bentuk yang bisa dipakai tumbuhan, sehingga tanah ikut subur.'}
];

export default {id:'pohon',name:'Pohon',layers:LAYERS,specimens:HEROES,quiz:QUIZ};
