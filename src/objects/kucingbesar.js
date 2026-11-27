/* Data harimau Sumatra dan macan tutul Jawa. Lapisan organ memakai dasar data kucing (sama-sama Felidae).
   Perlu validasi ahli satwa liar. Rujukan singkat: IUCN Red List; Permen LHK P.106/2018; Keppres 4/1993 (macan tutul Jawa satwa langka nasional). */
import CAT from './kucing.js';
const L = (id, name, sci, ui, short, what, fn, fact) => ({ id, name, sci, ui, short, what, fn, fact });
const Q = (sp, arr) => arr.map((q, i) => ({ id: sp + 'q' + i, sp, q: q[0], o: q[1], a: 0, e: q[2] }));
const base = (over) => CAT.layers.map((l) => (over[l.id] ? { ...l, ...over[l.id] } : l));

export const HARIMAU = {
  id: 'harimau', name: 'Harimau Sumatra',
  layers: [
    ...base({ kulit: { ui: '#d4782a', short: 'Loreng untuk menyamar.', what: 'Bulu jingga kemerahan dengan loreng hitam yang rapat, perut dan pipi putih. Loreng harimau Sumatra lebih rapat dan lebih tipis dibanding subspesies harimau lain.', fn: 'Loreng memecah bentuk tubuh di antara bayangan batang dan semak, sehingga mangsa sulit melihatnya mendekat.', fact: 'Pola loreng setiap harimau berbeda, seperti sidik jari. Peneliti mengenali tiap individu dari foto kamera jebak.' },
      lambung: { fn: 'Harimau bisa makan sangat banyak dalam sekali makan, lalu tidak makan beberapa hari.', fact: 'Mangsanya rusa, babi hutan, kijang, dan tapir.' } }),
    L('konservasi', 'Konservasi', 'Kritis (Critically Endangered)', '#c03020', 'Tersisa di hutan Sumatra.', 'Kalung di leher adalah pemancar GPS yang dipasang peneliti untuk melacak pergerakannya. Harimau Sumatra adalah satu-satunya harimau yang masih hidup di Indonesia. Harimau Bali dan harimau Jawa sudah punah.', 'Ancaman utamanya hilangnya hutan, perburuan, dan konflik dengan manusia. Harimau dilindungi undang-undang.', 'Harimau Sumatra berstatus Kritis menurut IUCN. Hutan yang terhubung (koridor) penting supaya harimau bisa berpindah dan mencari pasangan.'),
  ],
  quiz: Q('harimau', [
    ['Harimau yang masih hidup di alam Indonesia adalah ...', ['Harimau Sumatra', 'Harimau Jawa', 'Harimau Bali', 'Harimau Benggala'], 'Harimau Jawa dan harimau Bali sudah punah.'],
    ['Apa fungsi loreng harimau?', ['Menyamar di antara bayangan hutan', 'Menarik lebah', 'Menghangatkan air', 'Menakuti hujan'], 'Mangsa sulit melihat bentuk tubuhnya.'],
    ['Bagaimana peneliti mengenali tiap harimau?', ['Dari pola loreng di foto kamera jebak', 'Dari warna matanya', 'Dari suaranya saja', 'Dari panjang kumisnya'], 'Pola loreng tiap individu berbeda.'],
    ['Harimau termasuk keluarga yang sama dengan ...', ['Kucing rumah (Felidae)', 'Anjing (Canidae)', 'Beruang', 'Sapi'], 'Rangka dan organnya mirip kucing, hanya jauh lebih besar.'],
  ]),
  specimen: { id: 'harimau', kind: 'animal', name: 'Harimau Sumatra', short: 'harimau', sci: 'Panthera tigris sumatrae', family: 'Felidae', x: -300, z: 10, top: 1.4, mkOff: 1.8, promptY: 1.2, tagNear: 8, reach: 10,
    fact: 'Harimau Sumatra adalah harimau terkecil yang masih ada dan satu-satunya harimau yang tersisa di Indonesia. Statusnya Kritis.',
    hint: 'Bandingkan dengan kucing di Hutan Ilmu: rangka dan organnya mirip, ukurannya berbeda jauh. Ketuk lapisan Konservasi.' },
};

export const MACAN = {
  id: 'macan', name: 'Macan tutul Jawa',
  layers: [
    ...base({ kulit: { ui: '#c9a25a', short: 'Roset untuk menyamar.', what: 'Bulu kuning kecokelatan dengan pola roset: bintik-bintik hitam yang tersusun melingkar. Sebagian macan tutul Jawa berbulu hitam (melanistik) dan disebut macan kumbang; rosetnya tetap ada tapi samar.', fn: 'Roset menyamarkan tubuh di bawah cahaya yang berbintik-bintik di hutan.', fact: 'Macan kumbang dan macan tutul bisa lahir dari induk yang sama. Bedanya hanya pada gen warna bulu.' },
      otot: { fact: 'Macan tutul sangat kuat. Ia bisa menyeret mangsanya naik ke dahan pohon supaya tidak direbut satwa lain.' } }),
    L('konservasi', 'Konservasi', 'Terancam (Endangered)', '#c08020', 'Pemangsa puncak terakhir di Jawa.', 'Kalung di leher adalah pemancar GPS untuk penelitian. Setelah harimau Jawa punah, macan tutul Jawa menjadi pemangsa puncak terakhir di pulau Jawa. Ia hidup di hutan-hutan pegunungan yang terpencar.', 'Sebagai pemangsa puncak, ia menjaga jumlah hewan mangsa seperti babi hutan dan kijang tetap seimbang.', 'Macan tutul Jawa ditetapkan sebagai satwa langka nasional (Keppres No. 4 Tahun 1993) dan berstatus Terancam menurut IUCN.'),
  ],
  quiz: Q('macan', [
    ['Pola bintik melingkar pada macan tutul disebut ...', ['Roset', 'Loreng', 'Sisik', 'Garis'], 'Roset membantu menyamar di bawah cahaya berbintik.'],
    ['Macan kumbang adalah ...', ['Macan tutul berbulu hitam', 'Jenis harimau', 'Kucing rumah besar', 'Singa muda'], 'Bulunya hitam karena gen warna, rosetnya tetap ada tapi samar.'],
    ['Setelah harimau Jawa punah, pemangsa puncak terakhir di Jawa adalah ...', ['Macan tutul Jawa', 'Elang Jawa', 'Ular sanca', 'Biawak'], 'Perannya menjaga keseimbangan jumlah hewan mangsa.'],
    ['Mengapa macan tutul membawa mangsa ke atas pohon?', ['Supaya tidak direbut satwa lain', 'Supaya cepat busuk', 'Untuk dijemur', 'Supaya mangsanya hidup lagi'], 'Ia sangat kuat dan pandai memanjat.'],
  ]),
  specimen: { id: 'macan', kind: 'animal', name: 'Macan tutul Jawa', short: 'macan tutul', sci: 'Panthera pardus melas', family: 'Felidae', x: -40, z: -215, top: 1.1, mkOff: 1.5, promptY: 1.0, tagNear: 7, reach: 9,
    fact: 'Macan tutul Jawa hidup di hutan pegunungan Jawa. Ia pemangsa puncak terakhir di pulau Jawa dan termasuk satwa langka nasional.',
    hint: 'Bandingkan corak roset macan tutul dengan loreng harimau. Ketuk lapisan Konservasi.' },
};
