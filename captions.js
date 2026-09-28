/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Eyvah, yine okula geç kaldım!", en: "Oh no, I'm late for school again!",
      note: "Karo bu hafta iki kez okula geç kaldı. Bir gün çantasını da unuttu. Bu bir problem!" },
    { scene: 1, start: 8.4, end: 14.2, tr: "Bu problemi adım adım çözelim", en: "Let's solve this problem step by step",
      note: "Problemleri çözmek için algoritmik düşünürüz: problemi tanır, adımları sıralar, şemaya dökeriz." },
    { scene: 2, start: 17, end: 22.7, tr: "Problem: okula zamanında varamıyorum", en: "Problem: I can't get to school on time",
      note: "Önce problemi açıkça yazarız: okula zamanında varamıyorum." },
    { scene: 2, start: 23.5, end: 29.2, tr: "Girdi: saat, çanta, ders programı", en: "Input: the clock, my bag, my timetable",
      note: "Girdiler, çözüm için elimizde olan bilgiler ve nesnelerdir: saat, çanta ve ders programı." },
    { scene: 2, start: 30, end: 35.6, tr: "Çıktı: okula zamanında varmak", en: "Output: arriving at school on time",
      note: "Çıktı, ulaşmak istediğimiz sonuçtur: okula zamanında ve eksiksiz varmak." },
    { scene: 2, start: 36.5, end: 43.4, tr: "Algoritma: problemi çözen sıralı adımlar", en: "Algorithm: ordered steps that solve a problem",
      note: "Girdiden çıktıya giden sıralı adımlara algoritma denir. Yemek tarifi de, yol tarifi de birer algoritmadır." },
    { scene: 3, start: 46.3, end: 51.9, tr: "Kalk, yıkan, giyin", en: "Get up, wash, get dressed",
      note: "Çözümün adımlarını sırayla yazalım. Alarm çalınca kalkarız. Yüzümüzü yıkar, giyiniriz." },
    { scene: 3, start: 52.8, end: 58.4, tr: "Kahvaltı yap, çantanı kontrol et", en: "Have breakfast and check your bag",
      note: "Kahvaltımızı yaparız. Sonra ders programına bakarak çantamızı kontrol ederiz." },
    { scene: 3, start: 59.3, end: 66, tr: "Sıra önemli: 7.30'da evden çık", en: "Order matters: leave home at 7:30",
      note: "Saat 7.30'da evden çıkarız. Adımların sırası önemlidir: çantayı kontrol etmeden çıkarsak bir şey unutabiliriz." },
    { scene: 4, start: 68.7, end: 75.8, tr: "Oval ile başla, paralelkenarla girdiyi al", en: "Start with an oval; take input with a parallelogram",
      note: "Akış şeması algoritmayı şekillerle gösterir. Oval başlangıcı, paralelkenar girdiyi gösterir: saati okuruz." },
    { scene: 4, start: 76.6, end: 83.3, tr: "Eşkenar dörtgen bir soru sorar", en: "A diamond asks a question",
      note: "Eşkenar dörtgen bir karar verir: Saat 7 mi? Cevap hayırsa saati yeniden okuruz; evetse bir sonraki adıma geçeriz. Dikdörtgenler ise işlemleri gösterir." },
    { scene: 4, start: 84.1, end: 89.8, tr: "İşlemler ve sonunda bitir", en: "The steps, and finally the end",
      note: "Kalkar, hazırlanır, çantamızı kontrol ederiz. Oval ile biter: okula gideriz." },
    { scene: 4, start: 90.6, end: 98.3, tr: "Şemayı baştan sona izleyelim", en: "Let's follow the chart from start to end",
      note: "Şemayı izleyelim: başla, saati oku, saat 7 değil, yeniden oku. Saat 7 oldu: kalk, hazırlan, çantanı kontrol et ve okula git." },
    { scene: 5, start: 101.1, end: 108, tr: "Aklında kalsın: her problemin bir algoritması var", en: "Remember: every problem has an algorithm",
      note: "Aklında kalsın: problemi belirle, girdiyi ve çıktıyı bul, adımları sırala ve şemaya dök." },
    { scene: 5, start: 108.8, end: 114.5, tr: "Adım adım, hep zamanında!", en: "Step by step, always on time!",
      note: "Karo artık okula hep zamanında gidiyor. Sen de kendi problemin için bir algoritma yaz!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
