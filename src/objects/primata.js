/* Data ORANGUTAN dan TARSIUS. Perlu validasi primatolog.
   Rujukan singkat: IUCN Red List (ketiga spesies orangutan Kritis; Tarsius spectrum Rentan); Nater dkk. 2017 (orangutan Tapanuli). */
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));
const common = (sp, o) => [
  L('kulit', o.kulitName || 'Kulit dan rambut', 'Integumen', o.ui, o.kulitShort, o.kulitWhat, o.kulitFn, o.kulitFact),
  L('otot', 'Otot', 'Sistem muskuler', '#d0594a', o.ototShort, o.ototWhat, o.ototFn, o.ototFact),
  L('rangka', 'Rangka', 'Sistem rangka', '#eae0c4', o.rangkaShort, o.rangkaWhat, o.rangkaFn, o.rangkaFact),
  L('otak', 'Otak dan mata', 'Sistem saraf', '#e8a8b0', o.otakShort, o.otakWhat, o.otakFn, o.otakFact),
  L('tangan', 'Tangan dan kaki', 'Pencengkeram', '#8a6a58', 'Ibu jari berhadapan.', 'Tangan dan kaki punya ibu jari yang bisa berhadapan dengan jari lain.', o.tanganFn, o.tanganFact),
  L('jantung', 'Jantung', 'Sistem peredaran darah', '#e0505e', 'Empat ruang.', 'Jantung berbilik empat, sama seperti manusia.', 'Dua serambi menerima darah, dua bilik memompanya ke paru dan ke seluruh tubuh.', 'Primata, termasuk manusia, punya susunan organ dalam yang sangat mirip.'),
  L('paru', 'Paru-paru', 'Sistem pernapasan', '#e07a88', 'Pertukaran gas.', 'Sepasang paru di rongga dada yang dilindungi tulang rusuk.', 'Oksigen masuk ke darah, karbon dioksida keluar.', 'Diafragma, otot di bawah paru, membantu bernapas seperti pada manusia.'),
  L('hati', 'Hati', 'Kelenjar pencernaan', '#7a2018', 'Pengolah zat makanan.', 'Organ besar di bawah diafragma.', 'Mengolah sari makanan, menyimpan cadangan gula, dan menetralkan racun.', o.hatiFact),
  L('lambung', 'Lambung', 'Sistem pencernaan', '#e09a8a', 'Satu ruang.', 'Lambung satu ruang seperti manusia, tidak empat ruang seperti sapi.', o.lambungFn, o.lambungFact),
  L('usus', 'Usus', 'Sistem pencernaan', '#f0b8a8', 'Penyerap sari makanan.', 'Usus halus dan usus besar.', 'Menyerap sari makanan dan air.', o.ususFact),
  L('ginjal', 'Ginjal', 'Sistem ekskresi', '#7a2a20', 'Penyaring darah.', 'Sepasang ginjal berbentuk kacang.', 'Menyaring darah dan membuang sisa dalam bentuk urine.', 'Bentuk ginjal primata mirip ginjal manusia.'),
];

export const ORANGUTAN = {
  id: 'orangutan', name: 'Orangutan',
  layers: common('orangutan', {
    ui: '#a24a1c', kulitShort: 'Rambut panjang cokelat kemerahan.', kulitWhat: 'Rambut panjang dan jarang berwarna cokelat kemerahan. Jantan dewasa punya bantalan pipi lebar (flensa) dan kantong suara di leher.', kulitFn: 'Rambut melindungi dari hujan dan sinar matahari. Bantalan pipi dan kantong suara membantu jantan mengeluarkan seruan panjang yang terdengar jauh.', kulitFact: 'Nama orangutan berasal dari bahasa Melayu: "orang hutan".',
    ototShort: 'Lengan sangat kuat.', ototWhat: 'Otot lengan, bahu, dan jari yang sangat kuat.', ototFn: 'Dipakai untuk bergelantungan dan berpindah dari pohon ke pohon.', ototFact: 'Orangutan adalah kera besar yang paling banyak hidup di pohon (arboreal).',
    rangkaShort: 'Lengan lebih panjang dari kaki.', rangkaWhat: 'Lengan orangutan jauh lebih panjang dari kakinya. Rentang kedua lengan jantan dewasa bisa sekitar 2 meter.', rangkaFn: 'Lengan panjang memudahkan meraih dahan dan buah. Sendi panggulnya sangat lentur sehingga kaki bisa dipakai seperti tangan.', rangkaFact: 'Di tanah orangutan berjalan bertumpu pada kepalan tangan.',
    otakShort: 'Cerdas dan pandai belajar.', otakWhat: 'Otak besar dengan mata menghadap ke depan.', otakFn: 'Orangutan bisa memakai alat, misalnya ranting untuk mengambil biji buah atau daun sebagai payung.', otakFact: 'Anak orangutan tinggal bersama induknya sampai sekitar 7-8 tahun untuk belajar mencari makan.',
    tanganFn: 'Mencengkeram dahan dengan kuat, memetik buah, dan membuat sarang dari daun dan ranting.', tanganFact: 'Orangutan membuat sarang baru di pohon hampir setiap malam.',
    hatiFact: 'Buah-buahan memberi banyak gula yang disimpan hati sebagai cadangan.',
    lambungFn: 'Mencerna buah, daun muda, kulit kayu, dan serangga.', lambungFact: 'Sebagian besar makanan orangutan adalah buah.',
    ususFact: 'Biji buah yang ditelan keluar utuh bersama kotoran dan tumbuh menjadi pohon baru. Karena itu orangutan dijuluki "tukang kebun hutan".',
  }),
  quiz: Q('orangutan', [
    ['Indonesia punya berapa spesies orangutan?', ['Tiga: Kalimantan, Sumatra, dan Tapanuli', 'Satu', 'Lima', 'Tidak ada'], 'Orangutan Tapanuli baru dideskripsikan pada tahun 2017.'],
    ['Mengapa orangutan dijuluki "tukang kebun hutan"?', ['Menyebarkan biji buah lewat kotorannya', 'Menyiram tanaman', 'Menebang pohon', 'Menanam padi'], 'Biji yang tersebar tumbuh menjadi pohon baru.'],
    ['Ciri rangka orangutan yang khas adalah ...', ['Lengan jauh lebih panjang dari kaki', 'Kaki lebih panjang dari lengan', 'Punya ekor panjang', 'Tidak punya tulang rusuk'], 'Lengan panjang cocok untuk bergelantungan.'],
    ['Apa ancaman terbesar bagi orangutan?', ['Hilangnya hutan dan perburuan', 'Terlalu banyak hujan', 'Kekurangan salju', 'Dimakan ikan'], 'Ketiga spesies orangutan berstatus Kritis.'],
  ]),
  specimen: { id: 'orangutan', kind: 'animal', name: 'Orangutan', short: 'orangutan', sci: 'Pongo pygmaeus', family: 'Hominidae', x: -232, z: 5, top: 1.3, mkOff: 1.4, promptY: 1.2, tagNear: 8, reach: 10,
    fact: 'Orangutan adalah kera besar asli Indonesia dan Malaysia yang hidup di hutan hujan Kalimantan dan Sumatra. Ketiga spesiesnya berstatus Kritis.',
    hint: 'Bandingkan rangka orangutan dengan kucing dan sapi: lengannya sangat panjang. Ketuk lapisan Tangan dan kaki.' },
};

export const TARSIUS = {
  id: 'tarsius', name: 'Tarsius',
  layers: common('tarsius', {
    ui: '#8a7258', kulitShort: 'Bulu lembut dan telinga besar.', kulitWhat: 'Bulu lembut kecokelatan, telinga besar yang bisa digerakkan, dan ekor panjang yang hampir tak berambut.', kulitFn: 'Telinga besar menangkap suara serangga di malam hari.', kulitFact: 'Tarsius kecil sekali, tubuhnya kira-kira sebesar kepalan tangan orang dewasa.',
    ototShort: 'Kaki pelompat.', ototWhat: 'Otot paha belakang yang kuat.', ototFn: 'Dipakai untuk melompat jauh dari batang ke batang untuk menangkap serangga.', ototFact: 'Tarsius bisa melompat berkali-kali lipat dari panjang tubuhnya.',
    rangkaShort: 'Tulang pergelangan kaki panjang.', rangkaWhat: 'Tulang pergelangan kaki (tarsal) sangat panjang. Dari sinilah nama tarsius berasal.', rangkaFn: 'Tulang kaki yang panjang membuat lompatan lebih kuat.', rangkaFact: 'Tarsius bisa memutar kepalanya hampir setengah lingkaran untuk melihat ke belakang.',
    otakShort: 'Mata raksasa.', otakWhat: 'Setiap bola mata tarsius kira-kira sebesar otaknya.', otakFn: 'Mata yang sangat besar menangkap banyak cahaya, sehingga tarsius bisa berburu di malam hari. Matanya tidak bisa bergerak di rongga mata, jadi kepalanya yang berputar.', otakFact: 'Tarsius adalah hewan nokturnal: aktif di malam hari.',
    tanganFn: 'Ujung jari punya bantalan lebar yang lengket untuk berpegangan pada batang tegak.', tanganFact: 'Tarsius biasa berpegangan tegak di batang pohon atau bambu.',
    hatiFact: 'Tarsius hanya memakan hewan, terutama serangga.',
    lambungFn: 'Mencerna serangga, laba-laba, dan kadal kecil.', lambungFact: 'Tarsius adalah satu-satunya primata yang seluruhnya pemakan hewan.',
    ususFact: 'Usus tarsius relatif pendek, cocok untuk makanan hewani yang mudah dicerna.',
  }),
  quiz: Q('tarsius', [
    ['Ciri paling mencolok tarsius adalah ...', ['Mata yang sangat besar', 'Belalai panjang', 'Tanduk', 'Sisik'], 'Setiap bola matanya kira-kira sebesar otaknya.'],
    ['Nama tarsius berasal dari ...', ['Tulang pergelangan kaki (tarsal) yang panjang', 'Nama penemunya', 'Warna bulunya', 'Suaranya'], 'Tulang tarsal yang panjang membantu melompat.'],
    ['Tarsius aktif mencari makan pada ...', ['Malam hari (nokturnal)', 'Siang hari', 'Saat hujan saja', 'Tidak pernah'], 'Matanya yang besar menangkap cahaya redup.'],
    ['Makanan utama tarsius adalah ...', ['Serangga', 'Buah', 'Rumput', 'Nektar'], 'Tarsius adalah primata pemakan hewan.'],
  ]),
  specimen: { id: 'tarsius', kind: 'animal', name: 'Tarsius', short: 'tarsius', sci: 'Tarsius spectrum', family: 'Tarsiidae', x: -268, z: -12, top: 0.2, mkOff: 0.4, promptY: 0.35, tagNear: 4, reach: 6,
    fact: 'Tarsius adalah primata mungil dari Sulawesi dengan mata raksasa. Ia aktif di malam hari dan berburu serangga dengan melompat.',
    hint: 'Bandingkan otak dan mata tarsius dengan orangutan. Ketuk lapisan Rangka untuk melihat kaki pelompatnya.' },
};
