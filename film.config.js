/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "adim-adim-cozum",
    "title": "Adım Adım Çözüm",
    "titleEn": "Step by Step",
    "grade": 5,
    "theme": "Yazılım Tasarımı ve Programlama",
    "code": "BTY.5.6.1",
    "outcome": "Problem çözümü için algoritmik düşünebilme",
    "outcomeEn": "Thinking algorithmically to solve problems",
    "duration": 115.9,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 44.8,
      "name": "Problem, girdi, çıktı",
      "en": "Problem, input, output",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.8,
      "t1": 67.3,
      "name": "Adımları listele",
      "en": "List the steps",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 67.3,
      "t1": 99.7,
      "name": "Akış şeması",
      "en": "Flowchart",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 99.7,
      "t1": 115.9,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
