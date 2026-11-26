/* Data edukasi BUNGA SEPATU & PENYERBUKAN.
   CATATAN: isi sains perlu divalidasi guru biologi sebelum dipakai di sekolah.
   Rujukan: Campbell Biology bab reproduksi angiospermae; Klein dkk. 2007 (Proc. R. Soc. B) soal peran penyerbuk pada tanaman pangan. */
const LAYERS = [
  { id: 'mahkota', name: 'Mahkota bunga', sci: 'Korola (petal)', ui: '#e8283a', short: 'Papan iklan untuk penyerbuk.',
    what: 'Lima helai daun mahkota berwarna merah dengan pangkal merah tua. Bagian inilah yang paling mencolok dari kembang sepatu.',
    fn: 'Menarik perhatian hewan penyerbuk lewat warna, bentuk, dan pola. Pangkal yang gelap menjadi penunjuk arah ke nektar.',
    fact: 'Banyak bunga punya pola yang hanya terlihat dalam cahaya ultraviolet. Lebah bisa melihat UV, manusia tidak.' },
  { id: 'kelopak', name: 'Kelopak bunga', sci: 'Kaliks (sepal) + kelopak tambahan', ui: '#5a9a3a', short: 'Pelindung kuncup.',
    what: 'Lima helai hijau di bawah mahkota. Kembang sepatu juga punya kelopak tambahan (epikaliks) berupa helai-helai kecil di bawahnya.',
    fn: 'Melindungi kuncup bunga sebelum mekar dan menopang mahkota.',
    fact: 'Kelopak tambahan (epikaliks) adalah ciri khas suku kapas-kapasan (Malvaceae), keluarga kembang sepatu, kapas, dan durian.' },
  { id: 'benangsari', name: 'Benang sari', sci: 'Stamen (alat kelamin jantan)', ui: '#f5bf3a', short: 'Penghasil serbuk sari.',
    what: 'Pada kembang sepatu, tangkai-tangkai benang sari menyatu membentuk tabung panjang yang membungkus tangkai putik. Di sepanjang tabung ada banyak kepala sari kuning.',
    fn: 'Kepala sari (antera) menghasilkan serbuk sari. Di dalam serbuk sari terbentuk sel kelamin jantan.',
    fact: 'Benang sari yang menyatu menjadi satu tabung seperti ini disebut monadelfus.' },
  { id: 'putik', name: 'Putik', sci: 'Pistil (alat kelamin betina)', ui: '#d01c2c', short: 'Penerima serbuk sari.',
    what: 'Terdiri dari kepala putik (stigma), tangkai putik (stilus), dan bakal buah. Kepala putik kembang sepatu bercabang lima, berbentuk bantalan merah di ujung tabung.',
    fn: 'Kepala putik yang lengket menangkap serbuk sari. Tangkai putik menjadi jalan bagi tabung serbuk sari menuju bakal biji.',
    fact: 'Kepala putik bisa "mengenali" serbuk sari. Serbuk sari dari jenis tumbuhan lain biasanya gagal berkecambah.' },
  { id: 'bakal', name: 'Bakal buah', sci: 'Ovarium dan bakal biji (ovulum)', ui: '#9cc860', short: 'Calon buah dan biji.',
    what: 'Bagian pangkal putik yang menggembung. Di dalamnya ada bakal-bakal biji yang masing-masing berisi sel telur.',
    fn: 'Setelah pembuahan, bakal biji berkembang menjadi biji dan bakal buah berkembang menjadi buah.',
    fact: 'Tumbuhan berbunga melakukan pembuahan ganda: satu sel sperma membuahi sel telur (jadi embrio), satu lagi membentuk cadangan makanan biji (endosperma).' },
  { id: 'nektar', name: 'Nektar', sci: 'Cairan gula', ui: '#f7d878', short: 'Hadiah untuk penyerbuk.',
    what: 'Cairan manis yang dihasilkan kelenjar nektar di pangkal bunga.',
    fn: 'Menjadi "upah" bagi hewan penyerbuk. Selagi mengisap nektar, tubuh hewan bersentuhan dengan kepala sari dan kepala putik.',
    fact: 'Lebah madu mengubah nektar menjadi madu dengan menguapkan airnya dan menambahkan enzim.' },
  { id: 'lebah', name: 'Lebah', sci: 'Hewan penyerbuk (Apidae)', ui: '#e6b422', short: 'Kurir serbuk sari.',
    what: 'Serangga berbulu yang mengunjungi bunga untuk mengambil nektar dan serbuk sari sebagai makanan.',
    fn: 'Bulu-bulunya tertempel serbuk sari, lalu ikut terbawa ke kepala putik bunga berikutnya. Proses pindahnya serbuk sari ke kepala putik disebut penyerbukan.',
    fact: 'Lebah punya "keranjang serbuk sari" di kaki belakangnya. Sekitar tiga perempat jenis tanaman pangan utama dunia terbantu oleh hewan penyerbuk.' },
];
const Q = [
  ['Penyerbukan adalah ...', ['Menempelnya serbuk sari di kepala putik', 'Bertemunya sperma dengan sel telur', 'Gugurnya mahkota bunga', 'Tumbuhnya biji menjadi tanaman'], 'Penyerbukan = serbuk sari sampai di kepala putik. Pembuahan terjadi setelahnya, di bakal biji.'],
  ['Alat kelamin jantan pada bunga adalah ...', ['Benang sari', 'Putik', 'Kelopak', 'Mahkota'], 'Benang sari terdiri dari tangkai sari dan kepala sari yang menghasilkan serbuk sari.'],
  ['Setelah pembuahan, bakal buah akan menjadi ...', ['Buah', 'Biji', 'Mahkota', 'Akar'], 'Bakal buah menjadi buah, sedangkan bakal biji menjadi biji.'],
  ['Apa fungsi tabung serbuk sari?', ['Mengantar sel kelamin jantan ke bakal biji', 'Menghasilkan nektar', 'Menarik lebah', 'Menyimpan air'], 'Tabung tumbuh dari serbuk sari, menembus tangkai putik, sampai ke bakal biji.'],
  ['Mengapa mahkota kembang sepatu berwarna mencolok?', ['Untuk menarik hewan penyerbuk', 'Untuk fotosintesis', 'Untuk menyimpan cadangan makanan', 'Untuk menakuti hewan'], 'Bunga yang diserbuki hewan umumnya berwarna cerah, harum, atau punya nektar.'],
  ['Bunga yang memiliki benang sari dan putik sekaligus, seperti kembang sepatu, disebut ...', ['Bunga sempurna (hermafrodit)', 'Bunga jantan', 'Bunga betina', 'Bunga majemuk'], 'Bunga sempurna punya alat kelamin jantan dan betina dalam satu bunga.'],
  ['Mengapa berkurangnya populasi lebah bisa mengancam ketersediaan pangan?', ['Banyak tanaman pangan butuh penyerbuk untuk berbuah', 'Lebah adalah sumber makanan utama manusia', 'Lebah menyuburkan tanah', 'Lebah membuat hujan'], 'Tanpa penyerbuk, banyak tanaman buah dan sayur menghasilkan lebih sedikit buah atau biji.'],
].map((q, i) => ({ id: 'bunga' + i, sp: 'bunga', q: q[0], o: q[1], a: 0, e: q[2] }));

export default {
  id: 'bunga', name: 'Bunga', layers: LAYERS, quiz: Q,
  specimen: { id: 'bunga', kind: 'flower', name: 'Kembang Sepatu', short: 'kembang sepatu', sci: 'Hibiscus rosa-sinensis', family: 'Malvaceae', x: -3, z: 7, top: 1.8, mkOff: 0.6, promptY: 1.2, tagNear: 6,
    fact: 'Kembang sepatu adalah bunga sempurna: dalam satu bunga ada benang sari (jantan) dan putik (betina). Urutannya: penyerbukan (serbuk sari sampai di kepala putik), lalu pembuahan (sel kelamin jantan bertemu sel telur di bakal biji).',
    hint: 'Geser slider Tahap pelan-pelan untuk mengikuti perjalanan serbuk sari: dari kepala sari, menempel di lebah, sampai di kepala putik, lalu tabung serbuk sari tumbuh menuju bakal biji. Ketuk bagian bunga untuk mempelajarinya.' },
};
