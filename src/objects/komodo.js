/* Data KOMODO. Perlu validasi ahli herpetologi.
   Rujukan singkat: IUCN Red List 2021 (Terancam/Endangered); Fry dkk. 2009 PNAS (kelenjar bisa komodo); Balai Taman Nasional Komodo. */
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));

export const KOMODO = {
  id: 'komodo', name: 'Komodo',
  layers: [
    L('kulit', 'Kulit bersisik', 'Integumen', '#5a5440', 'Sisik dengan keping tulang.', 'Kulit tertutup sisik kecil berbutir. Di bawah sisik ada keping-keping tulang kecil (osteoderm) seperti baju zirah.', 'Melindungi tubuh dari gigitan dan luka. Sisik juga mengurangi penguapan air di savana yang kering.', 'Komodo berganti kulit sedikit demi sedikit, tidak sekaligus seperti ular.'),
    L('otot', 'Otot', 'Sistem muskuler', '#d0594a', 'Kuat di leher dan ekor.', 'Otot leher, kaki, dan ekor yang sangat kuat.', 'Ekor yang berotot dipakai untuk keseimbangan dan bisa dipukulkan saat berkelahi.', 'Komodo bisa berlari cepat dalam jarak pendek untuk menyergap mangsa.'),
    L('rangka', 'Rangka', 'Sistem rangka', '#eae0c4', 'Kaki merangkak ke samping.', 'Kaki keluar ke samping tubuh lalu menekuk ke bawah, berbeda dari kaki mamalia yang lurus di bawah badan.', 'Posisi kaki ini membuat badan rendah dekat tanah. Saat berjalan, tubuh komodo meliuk ke kiri dan kanan.', 'Gigi komodo bergerigi seperti pisau gergaji dan terus diganti seumur hidup.'),
    L('otak', 'Otak dan mata', 'Sistem saraf', '#e8a8b0', 'Penglihatan cukup baik.', 'Otak kecil di dalam tengkorak yang pipih.', 'Komodo bisa melihat benda bergerak cukup jauh, tetapi indra utamanya adalah penciuman lewat lidah.', 'Komodo juga bisa mendengar, walau tidak setajam penciumannya.'),
    L('lidah', 'Lidah bercabang', 'Organ Jacobson', '#f0c040', 'Mencium dengan lidah.', 'Lidah kuning panjang bercabang di ujung. Di langit-langit mulut ada sepasang lubang organ Jacobson.', 'Lidah menangkap partikel bau dari udara lalu menempelkannya ke organ Jacobson. Cabang kiri dan kanan membantu menentukan arah sumber bau.', 'Komodo bisa mencium bau bangkai dari jarak beberapa kilometer.'),
    L('bisa', 'Kelenjar bisa', 'Kelenjar di rahang bawah', '#9ac060', 'Racun di rahang.', 'Sepasang kelenjar di rahang bawah yang menghasilkan bisa.', 'Bisa mencegah darah membeku dan menurunkan tekanan darah mangsa, sehingga mangsa yang tergigit cepat lemas.', 'Dulu orang mengira mangsa komodo mati karena bakteri di air liurnya. Penelitian tahun 2009 menemukan bahwa komodo punya kelenjar bisa.'),
    L('jantung', 'Jantung', 'Sistem peredaran darah', '#c83040', 'Tiga ruang.', 'Jantung dengan dua serambi dan satu bilik yang sebagian bersekat.', 'Memompa darah ke paru dan ke seluruh tubuh. Sekat sebagian membantu memisahkan darah kaya dan miskin oksigen.', 'Kebanyakan reptil punya jantung tiga ruang, sedangkan burung dan mamalia empat ruang.'),
    L('paru', 'Paru-paru', 'Sistem pernapasan', '#e07a88', 'Panjang dan besar.', 'Sepasang paru panjang di rongga dada.', 'Menukar oksigen dan karbon dioksida. Komodo bisa menahan napas cukup lama dan pandai berenang.', 'Komodo bisa berenang menyeberang antarpulau yang berdekatan.'),
    L('hati', 'Hati', 'Kelenjar pencernaan', '#7a2018', 'Gudang energi.', 'Hati besar berlobus dua.', 'Menyimpan cadangan energi sehingga komodo bisa bertahan lama tanpa makan.', 'Komodo dewasa bisa tidak makan beberapa minggu setelah makan besar.'),
    L('lambung', 'Lambung', 'Sistem pencernaan', '#e09a8a', 'Bisa melar sangat besar.', 'Lambung dan kerongkongan yang sangat elastis.', 'Komodo bisa menelan potongan daging sangat besar sekaligus, hingga sebagian besar berat badannya sendiri.', 'Bagian yang tidak tercerna seperti tanduk, rambut, dan gigi dimuntahkan dalam gumpalan berlendir.'),
    L('usus', 'Usus', 'Sistem pencernaan', '#f0b8a8', 'Penyerap sari makanan.', 'Usus yang menyerap sari makanan dari daging.', 'Pencernaan berlangsung lambat, apalagi saat suhu tubuh rendah.', 'Karena itu komodo berjemur setelah makan untuk mempercepat pencernaan.'),
    L('ginjal', 'Ginjal', 'Sistem ekskresi', '#7a2a20', 'Hemat air.', 'Sepasang ginjal di bagian belakang rongga tubuh.', 'Membuang sisa nitrogen dalam bentuk asam urat yang padat, sehingga hemat air.', 'Cara hemat air ini cocok untuk hidup di pulau-pulau yang kering.'),
  ],
  quiz: Q('komodo', [
    ['Komodo hidup secara alami di ...', ['Pulau Komodo, Rinca, dan sebagian Flores', 'Seluruh pulau Jawa', 'Papua', 'Kalimantan'], 'Kawasan ini dilindungi sebagai Taman Nasional Komodo.'],
    ['Komodo mencium bau dengan bantuan ...', ['Lidah bercabang dan organ Jacobson', 'Telinga', 'Sisik', 'Ekor'], 'Lidah membawa partikel bau ke organ Jacobson di langit-langit mulut.'],
    ['Mengapa komodo sering berjemur?', ['Berdarah dingin, jadi butuh panas matahari untuk menghangatkan tubuh', 'Untuk mencari air', 'Untuk berganti kulit', 'Untuk bertelur'], 'Hewan ektoterm mengandalkan panas dari lingkungan.'],
    ['Penelitian terbaru menemukan komodo membunuh mangsa dengan bantuan ...', ['Kelenjar bisa di rahang bawah', 'Racun di ekor', 'Tanduk', 'Bulu beracun'], 'Bisa membuat darah mangsa sulit membeku.'],
    ['Jantung komodo, seperti kebanyakan reptil, mempunyai ...', ['Tiga ruang', 'Dua ruang', 'Empat ruang', 'Satu ruang'], 'Dua serambi dan satu bilik yang sebagian bersekat.'],
  ]),
  specimen: { id: 'komodo', kind: 'animal', name: 'Komodo', short: 'komodo', sci: 'Varanus komodoensis', family: 'Varanidae', x: 200, z: 135, top: 0.7, mkOff: 1.0, promptY: 0.7, tagNear: 8, reach: 10,
    fact: 'Komodo adalah kadal terbesar di dunia, panjangnya bisa sekitar 3 meter. Ia hanya hidup di beberapa pulau di Nusa Tenggara Timur dan berstatus Terancam.',
    hint: 'Ketuk lidah bercabang dan kelenjar bisa. Bandingkan jantung tiga ruang komodo dengan jantung empat ruang kucing.' },
};
