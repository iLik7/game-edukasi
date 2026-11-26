/* Data edukasi tumbuhan MONOKOTIL: kelapa dan bambu.
   CATATAN: isi sains perlu divalidasi guru biologi sebelum dipakai di sekolah. */
const berkas = (sp) => ({ id: 'berkas', name: 'Berkas pembuluh', sci: 'Xilem dan floem tersebar', ui: '#6b4a2a', short: 'Saluran air dan makanan, tersebar.',
  what: 'Tiap berkas berisi xilem (pembuluh besar berwarna biru di gambar penampang) dan floem (hijau) yang berdampingan, dibungkus serat keras (cokelat). Di antara xilem dan floem tidak ada kambium, sehingga disebut berkas kolateral tertutup.',
  fn: 'Xilem mengangkut air dan mineral dari akar ke daun. Floem mengangkut gula hasil fotosintesis dari daun ke seluruh tubuh. Serat pembungkusnya membuat batang kuat.',
  fact: sp === 'kelapa' ? 'Berkas makin rapat ke arah tepi, jadi bagian luar batang kelapa jauh lebih keras daripada bagian tengahnya. Kayu kelapa (glugu) dipakai untuk rangka rumah dan mebel.'
    : 'Pada bambu, berkas paling rapat di bagian luar dinding buluh. Serat di sekitar berkas inilah yang membuat bambu kuat sekaligus lentur, sehingga dipakai untuk rumah, jembatan, dan perancah.' });

const KELAPA = [
  { id: 'kulit', name: 'Lapisan luar', sci: 'Epidermis dan bekas pelepah', ui: '#7d7262', short: 'Permukaan keras bercincin.',
    what: 'Permukaan batang kelapa keras dan bercincin. Tiap cincin adalah bekas tempat menempelnya satu pelepah daun yang sudah gugur.',
    fn: 'Melindungi jaringan di dalamnya dari luka, serangga, dan kehilangan air.',
    fact: 'Lapisan luar batang kelapa bukan kulit kayu seperti pada pohon jati atau mahoni, karena batang kelapa tidak punya kambium gabus yang terus membentuk kulit baru.' },
  { id: 'korteks', name: 'Korteks', sci: 'Jaringan tepi berserat', ui: '#b79a6a', short: 'Lapisan tipis berserat di bawah permukaan.',
    what: 'Lapisan tipis di bawah permukaan yang berisi banyak serat.',
    fn: 'Menambah kekuatan bagian tepi batang.',
    fact: 'Pada batang monokotil, batas antara korteks dan bagian dalam batang tidak tegas, karena berkas pembuluh tersebar sampai dekat tepi.' },
  { id: 'parenkim', name: 'Jaringan dasar', sci: 'Parenkim', ui: '#e6d9b8', short: 'Pengisi batang tempat berkas tersebar.',
    what: 'Jaringan dasar berupa sel-sel parenkim yang mengisi seluruh batang. Berkas pembuluh tersebar di dalamnya.',
    fn: 'Menyimpan air dan cadangan makanan, serta menjadi tempat tertanamnya berkas pembuluh.',
    fact: 'Karena tidak ada kambium, penampang kelapa tidak punya cincin tahun. Umur kelapa lebih mudah diperkirakan dari jumlah bekas pelepah, karena kelapa dewasa membentuk sekitar satu pelepah baru tiap bulan.' },
  berkas('kelapa'),
];
const BAMBU = [
  { id: 'kulit', name: 'Kulit buluh', sci: 'Epidermis bersilika', ui: '#6f9a34', short: 'Lapisan luar licin dan keras.',
    what: 'Lapisan terluar buluh bambu tipis, licin, dan keras karena mengandung silika, zat yang sama dengan bahan utama pasir.',
    fn: 'Melindungi buluh dari air, jamur, dan serangga.',
    fact: 'Di bawah tiap buku sering terlihat lapisan seperti bedak putih. Itu lapisan lilin yang membantu mengurangi penguapan.' },
  { id: 'dinding', name: 'Dinding buluh', sci: 'Parenkim dan serat', ui: '#d9cf9e', short: 'Dinding tebal tempat berkas tersebar.',
    what: 'Dinding buluh terdiri dari parenkim dan serat, dengan berkas pembuluh tersebar di dalamnya, makin rapat ke arah luar.',
    fn: 'Menopang buluh setinggi belasan meter sambil tetap lentur saat diterpa angin.',
    fact: 'Bambu termasuk keluarga rumput-rumputan (Poaceae), sama seperti padi dan jagung. Bambu adalah salah satu tumbuhan dengan pertumbuhan tercepat: rebungnya bisa bertambah tinggi puluhan sentimeter dalam sehari.' },
  berkas('bambu'),
  { id: 'buku', name: 'Buku dan sekat', sci: 'Nodus dan diafragma', ui: '#c8b874', short: 'Cincin penguat dan sekat melintang.',
    what: 'Buku adalah cincin menonjol pada buluh. Di dalamnya ada sekat melintang (diafragma) yang menutup rongga.',
    fn: 'Sekat membuat buluh tidak mudah gepeng atau patah. Dari buku juga tumbuh cabang dan daun.',
    fact: 'Bagian di antara dua buku disebut ruas. Panjang ruas berbeda-beda tiap jenis bambu.' },
  { id: 'rongga', name: 'Rongga', sci: 'Lakuna', ui: '#9fd6ff', short: 'Ruang kosong di tengah buluh.',
    what: 'Bagian tengah buluh kosong berisi udara, dibatasi sekat di tiap buku.',
    fn: 'Membuat batang ringan tetapi tetap kaku, seperti pipa. Bahan dipakai di tepi, tempat paling efektif menahan tekukan.',
    fact: 'Prinsip yang sama dipakai pada tiang lampu, rangka sepeda, dan tulang burung: berongga supaya ringan tapi kuat.' },
];

const Q = (sp) => {
  const K = sp === 'kelapa';
  return [
    ['Mengapa penampang batang ' + sp + ' tidak punya cincin tahun?', ['Karena tidak punya kambium', 'Karena tumbuh di daerah tropis', 'Karena batangnya berongga', 'Karena terlalu muda'], 'Cincin tahun dibuat oleh kambium. Monokotil tidak punya kambium, jadi tidak ada lapisan kayu baru tiap tahun.'],
    ['Bagaimana susunan berkas pembuluh pada batang monokotil?', ['Tersebar di seluruh jaringan dasar', 'Melingkar rapi membentuk cincin', 'Hanya di bagian tengah', 'Tidak punya berkas pembuluh'], 'Pada dikotil seperti jati, berkas tersusun melingkar. Pada monokotil, berkas tersebar.'],
    ['Apa isi satu berkas pembuluh monokotil?', ['Xilem dan floem yang dibungkus serat', 'Kambium dan empulur', 'Hanya xilem', 'Stomata'], 'Xilem dan floem berdampingan dibungkus serat sklerenkim, tanpa kambium di antaranya (kolateral tertutup).'],
    K ? ['Cincin-cincin di permukaan batang kelapa adalah ...', ['Bekas pelepah daun yang gugur', 'Cincin tahun', 'Bekas gigitan hewan', 'Retakan karena panas'], 'Tiap cincin menandai tempat satu pelepah pernah menempel.']
      : ['Bambu termasuk keluarga tumbuhan apa?', ['Rumput-rumputan (Poaceae)', 'Palem', 'Polong-polongan', 'Pakis'], 'Bambu adalah rumput raksasa, sekerabat dengan padi dan jagung.'],
    K ? ['Bagian mana dari batang kelapa yang paling keras?', ['Bagian tepi, karena berkas paling rapat', 'Bagian tengah', 'Sama keras di semua bagian', 'Pucuknya'], 'Berkas pembuluh dan seratnya makin rapat ke arah tepi.']
      : ['Apa fungsi sekat (diafragma) di buku bambu?', ['Memperkuat buluh agar tidak mudah gepeng atau patah', 'Menyimpan air hujan', 'Menghasilkan bunga', 'Membuat bambu berbunyi'], 'Sekat melintang menahan dinding buluh tetap bulat saat ditekan.'],
    ['Mengapa batang ' + sp + ' hampir tidak bertambah besar setelah tumbuh tinggi?', ['Tidak ada kambium untuk pertumbuhan ke samping', 'Kekurangan air', 'Karena dipangkas', 'Karena akarnya serabut'], 'Pertumbuhan ke samping (sekunder) dibuat oleh kambium. Tanpa kambium, diameter batang sudah ditentukan sejak muda.'],
  ].map((q, i) => ({ id: sp + 'm' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));
};

export function monoData(sp) {
  const K = sp === 'kelapa';
  return {
    id: sp, name: K ? 'Kelapa' : 'Bambu', layers: K ? KELAPA : BAMBU, quiz: Q(sp),
    specimen: K
      ? { id: 'kelapa', kind: 'mono', name: 'Pohon Kelapa', short: 'kelapa', sci: 'Cocos nucifera', family: 'Arecaceae', x: -17, z: 33, top: 9, mkOff: 1.2,
          fact: 'Kelapa adalah tumbuhan monokotil dari keluarga palem. Akarnya serabut, daunnya bertulang sejajar, dan batangnya tidak bercabang. Hampir semua bagiannya berguna: buah, sabut, tempurung, daun, nira, dan batang.',
          hint: 'Geser Kedalaman untuk mengupas lapisan sampai berkas pembuluh terlihat. Bandingkan dengan penampang jati: di sini tidak ada cincin tahun dan tidak ada kambium. Geser Matahari untuk melihat air (biru) naik dan gula (oranye) turun.' }
      : { id: 'bambu', kind: 'mono', name: 'Rumpun Bambu', short: 'bambu', sci: 'Gigantochloa apus', family: 'Poaceae', x: 28, z: 14, top: 9, mkOff: 1.2,
          fact: 'Bambu apus banyak ditanam di Jawa dan dipakai untuk bangunan, anyaman, dan kerajinan. Bambu tumbuh berumpun dari akar rimpang, dan tunas mudanya (rebung) bisa dimasak.',
          hint: 'Geser Kedalaman untuk mengupas kulit buluh dan melihat berkas pembuluh di dinding. Perhatikan sekat di buku dan rongga di tengah. Geser Matahari untuk melihat aliran air dan gula.' },
  };
}
