/* Objek edukasi: POHON.
   Satu objek = satu modul data: lapisan, spesimen di dunia, dan kuis.
   Objek baru (daun, sel, simulasi kerja) cukup dibuat seperti file ini
   lalu didaftarkan di index.html. */
(function(){
'use strict';
window.HI=window.HI||{};
window.HI.objects=window.HI.objects||{};

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
  fact:'Kayu jati bernilai tinggi karena kayu terasnya awet. Pohon yang terasnya berlubang pun bisa tetap hidup selama kayu gubal dan kambiumnya sehat.',
  short:'Penopang, tahan lapuk.'},
 {id:'empulur',name:'Empulur',sci:'Pith',col:0xf2e6c9,ui:'#f6ecd2',ro:0.3,ri:0,
  what:'Jaringan lunak di pusat batang, sisa dari tahap awal ketika batang masih muda.',
  fn:'Pada batang muda menyimpan cadangan makanan. Pada pohon tua ukurannya kecil dan sering tidak lagi aktif.',
  fact:'Cincin tahun tersusun mengelilingi empulur. Makin ke tengah, makin tua umurnya.',
  short:'Pusat batang yang lunak.'}
];
const HEROES=[
 {id:'jati',name:'Pohon Jati',sci:'Tectona grandis',x:8,z:-8,bark:0x8a6a4c,leaf:0x4d9a3e,k:1,top:8.6,
  canopy:[[0,6.2,0,2.6],[1.7,5.5,0.8,1.9],[-1.6,5.6,-0.8,1.9]],
  fact:'Kayu jati terkenal awet dan banyak dipakai untuk mebel dan konstruksi.'},
 {id:'mahoni',name:'Pohon Mahoni',sci:'Swietenia mahagoni',x:-10,z:-4,bark:0x6e4e3a,leaf:0x2f7f45,k:1.05,top:9.2,
  canopy:[[0,6.5,0,2.8],[1.8,5.6,-0.6,2.0],[-1.6,5.8,1.0,2.0],[0,7.8,0,1.6]],
  fact:'Mahoni banyak ditanam sebagai pohon peneduh di tepi jalan di Indonesia.'},
 {id:'beringin',name:'Pohon Beringin',sci:'Ficus benjamina',x:13,z:9,bark:0x9b8b78,leaf:0x58a64a,k:1.2,top:9.4,
  canopy:[[0,5.6,0,3.2],[2.4,5.0,1,2.2],[-2.3,5.2,-0.8,2.4],[0.5,7.0,0.5,2.0]],
  fact:'Beringin termasuk marga Ficus, yang getahnya berwarna putih seperti susu (lateks).'}
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
];

window.HI.objects.pohon={id:'pohon',name:'Pohon',layers:LAYERS,specimens:HEROES,quiz:QUIZ};
})();
