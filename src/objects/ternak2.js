/* Data domba Garut, banteng, rusa timor. Dasar lapisan organ ruminansia (empat ruang lambung) dari data sapi/kambing.
   Perlu validasi dokter hewan / ahli satwa. Rujukan singkat: IUCN Red List (banteng Terancam, rusa timor Rentan); Permen LHK P.106/2018. */
import { ruminantData } from './ruminansia.js';
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));
const mk = (base, id, name, kulit, extra, quiz, specimen) => { const D = ruminantData(base); D.id = id; D.name = name; D.layers = D.layers.map((l) => (l.id === 'kulit' ? { ...l, ...kulit } : extra[l.id] ? { ...l, ...extra[l.id] } : l)); D.quiz = Q(id, quiz); D.specimen = specimen; return D; };

export const DOMBA = mk('kambing', 'domba', 'Domba Garut',
  { ui: '#e8e0cc', what: 'Tubuh tertutup wol tebal bergelombang. Domba Garut jantan punya tanduk besar yang melingkar spiral.', fn: 'Wol menjebak udara sehingga menahan panas tubuh. Wol terus tumbuh, jadi domba perlu dicukur.', fact: 'Domba Garut berasal dari Garut, Jawa Barat, dan terkenal sebagai domba laga (adu ketangkasan).' },
  { otot: { fact: 'Leher dan bahu domba Garut jantan sangat kekar untuk menahan benturan kepala saat beradu.' },
    rangka: { fact: 'Tanduk domba terdiri dari inti tulang yang dibungkus keratin. Tanduk tumbuh seumur hidup dan tidak lepas, berbeda dengan ranggah rusa.' },
    otak: { fact: 'Pupil domba berbentuk persegi panjang mendatar, membantu melihat luas ke sekeliling saat merumput.' },
    usus: { fact: 'Kotoran domba berbentuk butiran kecil karena usus besarnya menyerap air dengan efisien.' },
    ambing: { what: 'Ambing domba betina terbagi menjadi dua bagian, masing-masing dengan satu puting.', fact: 'Selain wol dan daging, susu domba juga bisa diolah menjadi keju.' } },
  [
    ['Apa fungsi wol pada domba?', ['Menahan panas tubuh', 'Menyimpan air', 'Untuk terbang', 'Menangkap serangga'], 'Wol menjebak udara seperti selimut.'],
    ['Domba termasuk ruminansia, artinya ...', ['Memamah biak dengan lambung empat ruang', 'Bertelur', 'Berdarah dingin', 'Tidak punya gigi'], 'Sama seperti sapi, kambing, dan kerbau.'],
    ['Domba Garut berasal dari ...', ['Jawa Barat', 'Papua', 'Bali', 'Kalimantan'], 'Domba lokal unggulan Indonesia.'],
    ['Mengapa domba perlu dicukur?', ['Wolnya terus tumbuh', 'Supaya bisa terbang', 'Supaya tanduknya tumbuh', 'Supaya tidak makan rumput'], 'Wol yang terlalu tebal membuat domba kepanasan.'],
  ],
  { id: 'domba', kind: 'animal', name: 'Domba Garut', short: 'domba', sci: 'Ovis aries', family: 'Bovidae', x: 258, z: 40, top: 1.1, mkOff: 0.75, promptY: 0.8, tagNear: 6,
    fact: 'Domba Garut adalah domba lokal dari Jawa Barat. Seperti kambing, domba memamah biak. Tubuhnya tertutup wol yang terus tumbuh.',
    hint: 'Bandingkan domba dengan kambing PE di padang yang sama: rangka dan lambungnya mirip, tapi bulu dan tanduknya berbeda.' });

export const BANTENG = mk('sapi', 'banteng', 'Banteng',
  { ui: '#2a1e16', what: 'Jantan dewasa berwarna hitam kecokelatan, betina cokelat kemerahan. Keduanya punya "kaus kaki" putih di bagian bawah kaki dan bercak putih di pantat.', fn: 'Bercak putih di pantat membantu kawanan saling mengikuti saat berlari di semak.', fact: 'Sapi Bali adalah keturunan banteng yang dijinakkan. Karena itu sapi Bali juga punya kaus kaki dan bercak pantat putih.' },
  {},
  [
    ['Sapi Bali adalah keturunan dari ...', ['Banteng yang dijinakkan', 'Kerbau', 'Rusa', 'Kambing'], 'Ciri kaus kaki putih diwarisi dari banteng.'],
    ['Ciri khas banteng adalah ...', ['Kaki bagian bawah dan pantat berwarna putih', 'Belalai panjang', 'Tubuh berloreng', 'Bertelur'], 'Ciri ini juga ada pada sapi Bali.'],
    ['Status banteng di alam menurut IUCN adalah ...', ['Terancam (Endangered)', 'Tidak terancam', 'Sudah punah', 'Hewan peliharaan'], 'Populasinya kecil dan terpencar.'],
    ['Di Jawa, banteng liar masih bisa dilihat di ...', ['Taman Nasional Baluran dan Ujung Kulon', 'Kebun binatang saja', 'Puncak Jaya', 'Danau Toba'], 'Kedua taman nasional melindungi padang rumput dan hutan tempat banteng hidup.'],
  ],
  { id: 'banteng', kind: 'animal', name: 'Banteng', short: 'banteng', sci: 'Bos javanicus', family: 'Bovidae', x: 175, z: 105, top: 1.8, mkOff: 0.9, promptY: 1.1, tagNear: 7,
    fact: 'Banteng adalah sapi liar asli Asia Tenggara. Di Indonesia, banteng liar hidup di taman nasional seperti Baluran dan Ujung Kulon. Statusnya Terancam.',
    hint: 'Bandingkan banteng dengan sapi perah di peternakan: lambungnya sama-sama empat ruang, bulunya berbeda.' });

export const RUSA = mk('kambing', 'rusa', 'Rusa timor',
  { ui: '#8a6a46', what: 'Bulu cokelat keabuan yang kasar. Jantan punya ranggah (tanduk bercabang) yang biasanya bercabang tiga di tiap sisi.', fn: 'Ranggah dipakai jantan untuk beradu dengan jantan lain saat musim kawin.', fact: 'Berbeda dengan tanduk sapi atau kambing, ranggah rusa terbuat dari tulang dan lepas setiap tahun lalu tumbuh lagi.' },
  { rangka: { fact: 'Saat tumbuh, ranggah dibungkus kulit berbulu halus yang kaya pembuluh darah, disebut velvet.' },
    otot: { fact: 'Rusa adalah pelari dan pelompat yang cepat. Otot kaki belakangnya kuat untuk melarikan diri dari pemangsa.' },
    otak: { fact: 'Pupil rusa berbentuk lonjong mendatar, membantu mengawasi sekeliling sambil merumput.' },
    usus: { fact: 'Kotoran rusa berbentuk butiran kecil, mirip kotoran kambing.' },
    ambing: { what: 'Rusa betina punya empat puting untuk menyusui anaknya.', fact: 'Anak rusa biasanya lahir satu ekor dan bisa berdiri tak lama setelah lahir.' } },
  [
    ['Ranggah rusa berbeda dari tanduk sapi karena ...', ['Lepas setiap tahun lalu tumbuh lagi', 'Tidak pernah lepas', 'Terbuat dari rambut', 'Hanya dimiliki betina'], 'Ranggah terbuat dari tulang dan diganti setiap tahun.'],
    ['Untuk apa rusa jantan memakai ranggah?', ['Beradu dengan jantan lain saat musim kawin', 'Menggali tanah', 'Memanjat pohon', 'Menyimpan air'], 'Ranggah juga menunjukkan kekuatan jantan.'],
    ['Rusa timor termasuk hewan ...', ['Memamah biak (ruminansia)', 'Pemakan daging', 'Bertelur', 'Berdarah dingin'], 'Lambungnya empat ruang seperti sapi.'],
    ['Kulit berbulu halus yang membungkus ranggah yang sedang tumbuh disebut ...', ['Velvet', 'Wol', 'Sisik', 'Kuku'], 'Velvet kaya pembuluh darah dan mengering saat ranggah selesai tumbuh.'],
  ],
  { id: 'rusa', kind: 'animal', name: 'Rusa timor', short: 'rusa', sci: 'Rusa timorensis', family: 'Cervidae', x: -60, z: -195, top: 1.4, mkOff: 1.0, promptY: 1.0, tagNear: 7,
    fact: 'Rusa timor hidup di padang rumput dan hutan terbuka di Jawa, Bali, dan Nusa Tenggara. Jantannya punya ranggah yang lepas dan tumbuh lagi setiap tahun. Statusnya Rentan dan dilindungi.',
    hint: 'Bandingkan ranggah rusa dengan tanduk kambing dan domba. Lambungnya sama-sama empat ruang.' });
