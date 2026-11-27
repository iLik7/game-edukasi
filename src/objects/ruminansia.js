/* Data edukasi SAPI dan KAMBING (ruminansia).
   CATATAN: isi sains perlu divalidasi dokter hewan / ahli peternakan sebelum dipakai di sekolah.
   Angka fisiologi adalah kisaran umum (rujukan: Merck Veterinary Manual), bukan patokan diagnosis. */

const common = (sp) => {
  const S = sp === 'sapi';
  return [
    {id:'kulit',name:'Kulit dan rambut',sci:'Integumen',ui:S?'#e8e2d6':'#e0cfae',short:'Pelindung tubuh dan pengatur suhu.',
     what:S?'Sapi perah Friesian Holstein (FH) berambut pendek belang hitam-putih. Pola belang tiap sapi berbeda, jadi bisa dipakai untuk mengenali sapi satu per satu.'
           :'Kambing Peranakan Etawa (PE) adalah hasil persilangan kambing Etawa (Jamnapari) dari India dengan kambing kacang lokal. Cirinya telinga panjang menggantung, hidung melengkung, dan rambut panjang di paha belakang.',
     fn:'Melindungi tubuh dari luka, kuman, sengatan matahari, dan serangga, serta membantu mengatur suhu tubuh.',
     fact:S?'Sapi FH berasal dari daerah beriklim sejuk di Eropa, jadi di Indonesia biasanya dipelihara di dataran tinggi yang dingin, misalnya di lereng gunung di Jawa Timur. Udara panas membuat produksi susunya turun.'
           :'Kambing PE termasuk kambing dwiguna: dipelihara untuk diambil susu dan dagingnya.'},
    {id:'otot',name:'Otot',sci:'Sistem muskuler',ui:'#d0594a',short:'Penggerak tubuh dan rahang pengunyah.',
     what:'Otot rangka menempel ke tulang lewat tendon dan menggerakkan sendi. Otot rahang ruminansia sangat kuat karena dipakai mengunyah berjam-jam.',
     fn:'Menggerakkan kaki untuk berjalan, leher untuk merenggut pakan, dan rahang untuk mengunyah, termasuk mengunyah ulang saat memamah biak.',
     fact:S?'Otot sapi yang kita makan disebut daging. Bagian yang banyak bergerak, seperti kaki, lebih liat dibanding bagian punggung yang jarang bekerja keras.'
           :'Kambing pemanjat yang lincah dan suka meramban, yaitu memakan daun dan ranting semak, bukan hanya merumput di tanah.'},
    {id:'rangka',name:'Rangka',sci:'Sistem rangka',ui:'#eae0c4',short:'Kerangka penopang tubuh yang besar.',
     what:'Rangka terdiri dari tengkorak, tulang belakang, 13 pasang tulang rusuk, panggul, dan tulang kaki. Tiap kaki berakhir pada dua kuku (kuku belah).',
     fn:'Menopang berat tubuh, melindungi organ dalam, dan menjadi tempat melekatnya otot.',
     fact:S?'Sapi tidak punya gigi seri di rahang atas. Sebagai gantinya ada bantalan gigi yang keras. Sapi merenggut rumput dengan lidah, lalu menjepitnya di antara gigi seri bawah dan bantalan itu.'
           :'Tanduk kambing terdiri dari inti tulang yang dibungkus lapisan keratin (bahan yang sama dengan kuku). Tanduk tumbuh seumur hidup dan tidak lepas tiap tahun, berbeda dengan ranggah rusa.'},
    {id:'otak',name:'Otak dan mata',sci:'Sistem saraf',ui:'#e8a8b0',short:'Pusat kendali; mata di samping kepala.',
     what:'Otak mengolah informasi dari indra dan mengatur gerak serta perilaku. Mata ruminansia terletak di sisi kepala.',
     fn:'Mata di samping memberi bidang pandang sangat luas untuk mengawasi pemangsa sambil merunduk makan. Gantinya, area yang terlihat oleh dua mata sekaligus sempit, sehingga menilai jarak kurang tepat.',
     fact:S?'Pupil sapi berbentuk lonjong mendatar. Bentuk ini membantu melihat garis cakrawala yang luas di sekelilingnya.'
           :'Pupil kambing berbentuk persegi panjang mendatar. Saat kambing menunduk untuk makan, bola matanya berputar sehingga pupil tetap sejajar dengan tanah.'},
    {id:'jantung',name:'Jantung',sci:'Sistem peredaran darah',ui:'#e0505e',short:'Pompa darah berbilik empat.',
     what:'Jantung berbilik empat: dua serambi menerima darah dan dua bilik memompanya keluar, sama seperti jantung kucing dan manusia.',
     fn:'Memompa darah berisi oksigen dan nutrisi ke seluruh tubuh, termasuk ke ambing yang butuh banyak darah untuk membuat susu.',
     fact:S?'Detak jantung sapi dewasa yang istirahat umumnya sekitar 48 sampai 84 kali per menit, lebih lambat daripada kucing. Hewan bertubuh besar cenderung berdetak lebih lambat.'
           :'Detak jantung kambing dewasa yang istirahat umumnya sekitar 70 sampai 90 kali per menit.'},
    {id:'paru',name:'Paru-paru',sci:'Sistem pernapasan',ui:'#f0a0a8',short:'Pertukaran oksigen dan karbon dioksida.',
     what:'Udara masuk lewat hidung dan trakea, lalu bercabang di dalam paru-paru sampai ke kantong udara kecil (alveolus).',
     fn:'Mengambil oksigen ke darah dan membuang karbon dioksida. Napas juga membantu membuang panas tubuh.',
     fact:S?'Sapi dewasa yang istirahat bernapas sekitar 26 sampai 50 kali per menit. Saat kepanasan, napasnya jauh lebih cepat untuk membuang panas.'
           :'Kambing dewasa yang istirahat bernapas sekitar 15 sampai 30 kali per menit.'},
    {id:'hati',name:'Hati',sci:'Sistem pencernaan dan metabolisme',ui:'#b0463c',short:'Pengolah nutrisi dan penetral racun.',
     what:'Hati terletak di sisi kanan bagian depan perut, tepat di belakang diafragma.',
     fn:'Mengolah zat hasil pencernaan, menetralkan racun, menyimpan nutrisi, dan membuat empedu.',
     fact:'Ruminansia mendapat sangat sedikit gula langsung dari usus. Hati mereka membuat sebagian besar gula darah dari asam lemak hasil fermentasi di rumen.'},
    {id:'rumen',name:'Rumen',sci:'Lambung ruang 1',ui:'#c9a27e',short:'Tangki fermentasi raksasa berisi mikroba.',
     what:'Rumen adalah ruang lambung terbesar dan menempati hampir seluruh sisi kiri perut. Dindingnya dipenuhi tonjolan kecil (papila) yang menyerap hasil fermentasi.',
     fn:'Bakteri, protozoa, dan jamur di dalam rumen memecah selulosa rumput yang tidak bisa dicerna hewan sendiri. Hasilnya asam lemak yang menjadi sumber energi utama, serta gas.',
     fact:S?'Pada sapi dewasa rumen bisa menampung lebih dari 100 liter. Rumen berkontraksi sekitar 1 sampai 3 kali per menit untuk mengaduk isinya. Gas metana dari fermentasi dikeluarkan lewat sendawa dan termasuk gas rumah kaca.'
           :'Rumen kambing bekerja sama seperti pada sapi, tetapi kambing lebih pemilih: ia memilih daun dan pucuk yang paling bergizi.'},
    {id:'retikulum',name:'Retikulum',sci:'Lambung ruang 2',ui:'#d8a898',short:'Ruang bersekat seperti sarang lebah.',
     what:'Retikulum berada di depan rumen, dekat jantung dan diafragma. Dinding dalamnya bersekat-sekat seperti sarang lebah.',
     fn:'Bersama rumen mengaduk makanan, memilah partikel kasar dan halus, serta mendorong gumpalan makanan (bolus) naik kembali ke mulut untuk dikunyah ulang.',
     fact:'Benda berat yang ikut tertelan, seperti paku atau kawat, bisa tersangkut di retikulum dan melukai dinding sampai ke jantung. Peternak kadang memasukkan magnet khusus ke lambung sapi untuk menangkap logam itu.'},
    {id:'omasum',name:'Omasum',sci:'Lambung ruang 3',ui:'#b8907c',short:'Ruang berlembar-lembar seperti buku.',
     what:'Omasum berbentuk bulat dengan dinding dalam berupa lipatan tipis yang tersusun seperti halaman buku.',
     fn:'Menyerap air dan mineral dari makanan, serta menyaring partikel yang masih kasar sebelum masuk ke abomasum.',
     fact:'Lembaran-lembaran omasum memperluas permukaan penyerapan, mirip prinsip lipatan pada usus halus.'},
    {id:'abomasum',name:'Abomasum',sci:'Lambung ruang 4 (lambung sejati)',ui:'#e08880',short:'Lambung sejati dengan asam dan enzim.',
     what:'Abomasum adalah ruang keempat yang disebut lambung sejati karena cara kerjanya mirip lambung manusia.',
     fn:'Menghasilkan asam lambung dan enzim yang mencerna protein, termasuk protein dari mikroba rumen yang ikut terbawa.',
     fact:'Pada anak sapi atau anak kambing yang masih menyusu, susu mengalir lewat lekukan khusus (alur esofagus) langsung ke abomasum, melewati rumen yang belum berkembang.'},
    {id:'usus',name:'Usus',sci:'Sistem pencernaan',ui:'#f0b8a8',short:'Penyerap nutrisi dan air.',
     what:'Usus halus sangat panjang dan berkelok, lalu berlanjut ke usus besar yang berakhir di anus.',
     fn:'Usus halus menyerap nutrisi ke dalam darah. Usus besar menyerap air dan membentuk kotoran.',
     fact:S?'Usus halus sapi dewasa bisa mencapai puluhan meter. Pakan berserat butuh jalur cerna yang panjang.':'Kotoran kambing berbentuk butiran kecil karena usus besarnya menyerap air dengan sangat efisien.'},
    {id:'ginjal',name:'Ginjal',sci:'Sistem ekskresi',ui:'#a04a3a',short:'Penyaring darah pembuat urine.',
     what:S?'Ginjal sapi tampak bergelambir, terdiri dari banyak lobus kecil yang menyatu.':'Ginjal kambing halus berbentuk kacang, tidak bergelambir seperti ginjal sapi.',
     fn:'Menyaring darah, membuang sisa metabolisme, dan mengatur kadar air serta garam tubuh.',
     fact:'Bentuk ginjal berbeda antarspesies: ginjal sapi berlobus, sedangkan ginjal kambing, domba, dan kucing halus.'},
    {id:'kandung',name:'Kandung kemih',sci:'Sistem ekskresi',ui:'#f0dc8a',short:'Penampung urine.',
     what:'Kantong berdinding otot di bagian belakang rongga perut.',
     fn:'Menampung urine dari ginjal sebelum dikeluarkan.',
     fact:'Urine dan kotoran ternak bisa diolah menjadi pupuk organik dan biogas, sumber energi yang dipakai di banyak peternakan rakyat.'},
    {id:'ambing',name:'Ambing',sci:'Kelenjar susu',ui:'#f4c8c0',short:'Pabrik susu.',
     what:S?'Ambing sapi terbagi menjadi empat kuartir yang terpisah, masing-masing dengan satu puting.':'Ambing kambing terbagi menjadi dua bagian, masing-masing dengan satu puting.',
     fn:'Kelenjar susu mengambil zat dari darah lalu mengubahnya menjadi susu yang berisi lemak, protein, gula susu (laktosa), dan mineral.',
     fact:S?'Untuk membuat 1 liter susu, sekitar 400 sampai 500 liter darah perlu mengalir melewati ambing.':'Susu kambing PE banyak dijual sebagai susu segar dan produk olahan di peternakan rakyat Indonesia.'},
  ];
};

const quiz = (sp) => {
  const S = sp === 'sapi';
  return [
    {id:sp+'1',sp,q:'Ruang lambung mana yang paling besar dan berisi mikroba pemecah selulosa?',o:['Rumen','Retikulum','Omasum','Abomasum'],a:0,e:'Rumen adalah tangki fermentasi. Mikroba di dalamnya memecah selulosa menjadi asam lemak yang menjadi sumber energi.'},
    {id:sp+'2',sp,q:'Ruang lambung mana yang disebut "lambung sejati" karena mirip lambung manusia?',o:['Abomasum','Rumen','Retikulum','Omasum'],a:0,e:'Abomasum menghasilkan asam dan enzim pencerna protein.'},
    {id:sp+'3',sp,q:'Apa yang dimaksud memamah biak?',o:['Makanan yang sudah ditelan dikembalikan ke mulut untuk dikunyah ulang','Makan sambil berjalan','Minum air sangat banyak','Menyimpan makanan di pipi'],a:0,e:'Gumpalan makanan (bolus) didorong dari retikulum ke mulut, dikunyah lagi, lalu ditelan kembali. Titik hijau di animasi menunjukkan perjalanan ini.'},
    {id:sp+'4',sp,q:'Dinding dalam retikulum berbentuk seperti apa?',o:['Sarang lebah','Halaman buku','Bulu halus','Licin tanpa lipatan'],a:0,e:'Sekat-sekat seperti sarang lebah membantu memilah partikel makanan.'},
    {id:sp+'5',sp,q:'Apa fungsi utama omasum?',o:['Menyerap air dan mineral','Membuat susu','Memompa darah','Menghasilkan metana'],a:0,e:'Lipatan-lipatan omasum yang seperti halaman buku memperluas permukaan penyerapan.'},
    {id:sp+'6',sp,q:'Mengapa mata '+(S?'sapi':'kambing')+' terletak di sisi kepala?',o:['Supaya bisa mengawasi sekeliling untuk menghindari pemangsa','Supaya bisa melihat dalam gelap total','Supaya tidak silau','Supaya bisa membaca'],a:0,e:'Hewan mangsa butuh bidang pandang yang sangat luas. Pemangsa seperti kucing punya mata menghadap depan untuk menilai jarak.'},
    S?{id:sp+'7',sp,q:'Berapa jumlah puting pada ambing sapi?',o:['4','2','6','8'],a:0,e:'Ambing sapi terbagi menjadi empat kuartir yang masing-masing punya satu puting.'}
     :{id:sp+'7',sp,q:'Tanduk kambing tersusun dari apa?',o:['Inti tulang yang dibungkus keratin','Tulang rawan saja','Rambut yang mengeras','Kalsium dari susu'],a:0,e:'Inti tulang dilapisi keratin. Tanduk tidak lepas setiap tahun, berbeda dengan ranggah rusa.'},
    S?{id:sp+'8',sp,q:'Mengapa sapi FH di Indonesia banyak dipelihara di dataran tinggi?',o:['Karena berasal dari daerah sejuk dan produksi susunya turun saat kepanasan','Karena rumput hanya tumbuh di gunung','Karena sapi takut laut','Karena lebih dekat ke pasar'],a:0,e:'Sapi FH berasal dari Eropa yang beriklim sejuk. Udara panas membuat sapi stres dan susunya berkurang.'}
     :{id:sp+'8',sp,q:'Bentuk pupil kambing adalah ...',o:['Persegi panjang mendatar','Celah tegak seperti kucing','Bulat seperti manusia','Bintang'],a:0,e:'Pupil mendatar membantu melihat luas ke sekeliling, dan tetap mendatar saat kambing menunduk makan.'},
    {id:sp+'9',sp,q:'Gas apa yang dihasilkan fermentasi di rumen dan dikeluarkan lewat sendawa?',o:['Metana','Oksigen','Helium','Klorin'],a:0,e:'Metana adalah gas rumah kaca. Para peneliti sedang mencari pakan yang bisa mengurangi metana dari ternak.'},
  ];
};

export function ruminantData(sp) {
  const S = sp === 'sapi';
  return {
    id: sp, name: S ? 'Sapi' : 'Kambing', layers: common(sp), quiz: quiz(sp),
    specimen: S
      ? { id:'sapi', kind:'animal', name:'Sapi perah', short:'sapi', sci:'Bos taurus (Friesian Holstein)', family:'Bovidae', x:262, z:33, top:1.7, mkOff:0.9, promptY:1.1, tagNear:7,
          fact:'Sapi adalah ruminansia, hewan memamah biak dengan lambung empat ruang. Sapi perah Friesian Holstein dipelihara untuk diambil susunya.',
          hint:'Geser Kedalaman untuk mengupas lapisan. Di bagian organ, titik oranye adalah perjalanan makanan dan titik hijau adalah gumpalan makanan yang naik lagi ke mulut untuk dikunyah ulang (memamah biak). Kamera mulai dari sisi kiri supaya rumen terlihat.' }
      : { id:'kambing', kind:'animal', name:'Kambing PE', short:'kambing', sci:'Capra hircus (Peranakan Etawa)', family:'Bovidae', x:268, z:38, top:1.05, mkOff:0.7, promptY:0.75, tagNear:6,
          fact:'Kambing juga ruminansia berlambung empat ruang. Kambing PE terkenal dengan telinga panjangnya yang menggantung.',
          hint:'Geser Kedalaman untuk mengupas lapisan. Titik oranye adalah perjalanan makanan, titik hijau adalah gumpalan makanan yang dikunyah ulang (memamah biak). Bandingkan ginjal dan ambingnya dengan sapi.' },
  };
}
