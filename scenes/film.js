/* ─────────────────────────────────────────────────────────────
   ADIM ADIM ÇÖZÜM — BTY.5.6.1 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'adim-adim-cozum', title: 'Adım Adım Çözüm', titleEn: 'Step by Step', code: 'BTY.5.6.1',
    outcomeEn: 'Thinking algorithmically to solve problems',
    summary: 'Okula geç kalmak gibi günlük bir problem seçilir; problemin girdisi (saat, çanta, ders programı) ve çıktısı (okula zamanında varmak) belirlenir. Çözüm için işlem adımları sırayla listelenir ve bu adım dizisinin bir algoritma olduğu gösterilir. Akış şeması sembolleri (başla/bitir, girdi/çıktı, işlem, karar) tanıtılır ve aynı çözüm bir karar adımı içeren akış şemasıyla gösterilir.',
    summaryEn: 'Karo picks an everyday problem (being late for school), names its inputs and output, lists the solution steps as an algorithm, meets flowchart symbols and draws the solution as a flowchart with a decision.',
    blurb: 'Günlük problem, girdi ve çıktı, işlem adımları, algoritma ve akış şeması.',
    posterAlt: 'Başlık ve Karo; çevresinde akış şeması, saat, çanta ve karar karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'flowchart', c: 'kobalt' }, { icon: 'algorithm', c: 'turkuaz' }, { icon: 'clock', c: 'safran' }, { icon: 'school', c: 'mercan' }, { icon: 'decision', c: 'mor' }, { icon: 'alarm', c: 'mercan' }, { icon: 'target', c: 'zumrut' }, { icon: 'lightbulb', c: 'safran' }],
      beats: [
        { tr: 'Eyvah, yine okula geç kaldım!', en: 'Oh no, I\'m late for school again!', extra: 1,
          note: 'Karo bu hafta iki kez okula geç kaldı. Bir gün çantasını da unuttu. Bu bir problem!', karo: { mood: 'worried', caret: '!' } },
        { tr: 'Bu problemi adım adım çözelim', en: 'Let\'s solve this problem step by step',
          note: 'Problemleri çözmek için algoritmik düşünürüz: problemi tanır, adımları sıralar, şemaya dökeriz.' },
      ] },
    { type: 'cards', name: 'Problem, girdi, çıktı', en: 'Problem, input, output', desc: 'Günlük bir problemin girdi ve çıktıları.', out: 'a, b',
      cards: [
        { word: 'PROBLEM', def: 'Okula zamanında varamıyorum', icon: 'warning', c: 'mercan' },
        { word: 'GİRDİ', def: 'Çözüm için elimizdekiler: saat, çanta, ders programı', icon: 'clock', c: 'kobalt' },
        { word: 'ÇIKTI', def: 'Ulaşmak istediğimiz sonuç: okula zamanında varmak', icon: 'school', c: 'zumrut' },
      ],
      result: { word: 'ALGORİTMA', c: 'safran', join: false, chips: ['girdi', 'adımlar', 'çıktı'], line: 'Bir problemi çözmek için sıralı adımlar' },
      beats: [
        { tr: 'Problem: okula zamanında varamıyorum', en: 'Problem: I can\'t get to school on time',
          note: 'Önce problemi açıkça yazarız: okula zamanında varamıyorum.' },
        { tr: 'Girdi: saat, çanta, ders programı', en: 'Input: the clock, my bag, my timetable',
          note: 'Girdiler, çözüm için elimizde olan bilgiler ve nesnelerdir: saat, çanta ve ders programı.' },
        { tr: 'Çıktı: okula zamanında varmak', en: 'Output: arriving at school on time',
          note: 'Çıktı, ulaşmak istediğimiz sonuçtur: okula zamanında ve eksiksiz varmak.' },
        { tr: 'Algoritma: problemi çözen sıralı adımlar', en: 'Algorithm: ordered steps that solve a problem', extra: 1,
          note: 'Girdiden çıktıya giden sıralı adımlara algoritma denir. Yemek tarifi de, yol tarifi de birer algoritmadır.' },
      ] },
    { type: 'steps', name: 'Adımları listele', en: 'List the steps', desc: 'Çözüm için işlem adımları sırayla yazılır.', out: 'c',
      steps: [
        { icon: 'alarm', label: '1. adım', text: 'Alarm çalınca kalk', c: 'mercan' },
        { icon: 'water', label: '2. adım', text: 'Yüzünü yıka, giyin', c: 'turkuaz' },
        { icon: 'sun', label: '3. adım', text: 'Kahvaltını yap', c: 'safran' },
        { icon: 'rubric', label: '4. adım', text: 'Çantanı programa göre kontrol et', c: 'mor' },
        { icon: 'school', label: '5. adım', text: '7.30\'da evden çık', c: 'zumrut' },
      ],
      beats: [
        { tr: 'Kalk, yıkan, giyin', en: 'Get up, wash, get dressed', show: 2,
          note: 'Çözümün adımlarını sırayla yazalım. Alarm çalınca kalkarız. Yüzümüzü yıkar, giyiniriz.' },
        { tr: 'Kahvaltı yap, çantanı kontrol et', en: 'Have breakfast and check your bag', show: 4,
          note: 'Kahvaltımızı yaparız. Sonra ders programına bakarak çantamızı kontrol ederiz.' },
        { tr: 'Sıra önemli: 7.30\'da evden çık', en: 'Order matters: leave home at 7:30', show: 5, extra: 1,
          note: 'Saat 7.30\'da evden çıkarız. Adımların sırası önemlidir: çantayı kontrol etmeden çıkarsak bir şey unutabiliriz.' },
      ] },
    { type: 'flow', name: 'Akış şeması', en: 'Flowchart', desc: 'İşlem adımları başla, girdi, işlem, karar ve bitir sembolleriyle akış şemasına dökülür.', out: 'ç',
      side: { title: 'Semboller', lines: ['Oval: başla ve bitir', 'Paralelkenar: girdi ve çıktı', 'Dikdörtgen: işlem', 'Eşkenar dörtgen: karar'] },
      nodes: [
        { id: 'a', shape: 'start', text: 'Başla' },
        { id: 'b', shape: 'io', text: 'Saati oku' },
        { id: 'c', shape: 'dec', text: 'Saat 7.00 mı?' },
        { id: 'd', shape: 'proc', text: 'Kalk, hazırlan' },
        { id: 'e', shape: 'proc', text: 'Çantanı kontrol et' },
        { id: 'f', shape: 'end', text: 'Okula git' },
      ],
      edges: [['a', 'b'], ['b', 'c'], ['c', 'd', 'evet'], ['c', 'b', 'hayır', 'right'], ['d', 'e'], ['e', 'f']],
      beats: [
        { tr: 'Oval ile başla, paralelkenarla girdiyi al', en: 'Start with an oval; take input with a parallelogram', show: 2, sideLines: 2, extra: 1,
          note: 'Akış şeması algoritmayı şekillerle gösterir. Oval başlangıcı, paralelkenar girdiyi gösterir: saati okuruz.' },
        { tr: 'Eşkenar dörtgen bir soru sorar', en: 'A diamond asks a question', show: 3, sideLines: 4, extra: 1,
          note: 'Eşkenar dörtgen bir karar verir: Saat 7 mi? Cevap hayırsa saati yeniden okuruz; evetse bir sonraki adıma geçeriz. Dikdörtgenler ise işlemleri gösterir.' },
        { tr: 'İşlemler ve sonunda bitir', en: 'The steps, and finally the end', show: 6,
          note: 'Kalkar, hazırlanır, çantamızı kontrol ederiz. Oval ile biter: okula gideriz.' },
        { tr: 'Şemayı baştan sona izleyelim', en: 'Let\'s follow the chart from start to end', trace: ['a', 'b', 'c', 'b', 'c', 'd', 'e', 'f'], extra: 2,
          note: 'Şemayı izleyelim: başla, saati oku, saat 7 değil, yeniden oku. Saat 7 oldu: kalk, hazırlan, çantanı kontrol et ve okula git.' },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'target', c: 'mercan', text: 'Problemi, girdiyi ve çıktıyı belirle' },
        { icon: 'algorithm', c: 'turkuaz', text: 'Adımları doğru sırayla yaz' },
        { icon: 'flowchart', c: 'kobalt', text: 'Akış şemasıyla göster' },
      ],
      beats: [
        { tr: 'Aklında kalsın: her problemin bir algoritması var', en: 'Remember: every problem has an algorithm',
          note: 'Aklında kalsın: problemi belirle, girdiyi ve çıktıyı bul, adımları sırala ve şemaya dök.' },
        { tr: 'Adım adım, hep zamanında!', en: 'Step by step, always on time!',
          note: 'Karo artık okula hep zamanında gidiyor. Sen de kendi problemin için bir algoritma yaz!' },
      ] },
  ],
});
