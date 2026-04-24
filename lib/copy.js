// ÚNICA FUENTE DE CONTENIDO VISIBLE — todo el texto mostrado por la landing
// vive aquí. Los componentes NO deben tener strings hardcodeados.
export const copy = {
  metadata: {
    title: "500 zdravých koláčov — Babka Anka",
    description:
      "500 receptov na mäkučké, nadýchané a chutné koláče, úplne bez lepku, mlieka a pridaného cukru.",
    productName: "Kniha „500 koláčov Babky Anky“",
  },

  hero: {
    urgencyBar: "PONUKA KONČÍ DNES · ZĽAVA 90 % iba na dnes",
    badge: "Nová kniha receptov · +3 200 spokojných zákazníkov",
    headline: {
      before: "KEĎ TOTO UVIDÍŠ, UŽ NIKDY SA NEBUDEŠ NA ",
      accent: "ZDRAVÉ KOLÁČE",
      after: " POZERAŤ ROVNAKO.",
    },
    subheadline:
      "Objav 500 receptov na mäkké, nadýchané a lahodné koláče, úplne bez lepku, laktózy a cukru, aby si si mohla vychutnať každé sústo bez bolesti, výčitiek a obmedzení.",
    ctaLabel: "ÁNO, CHCEM KNIHU",
    starsAriaLabel: "Hodnotenie 5 z 5 hviezdičiek",
    starsRating: "5.0",
    socialProof: "+3 200 certifikovaných absolventov",
    trustChips: [
      { icon: "🌾", text: "Bez lepku" },
      { icon: "🥛", text: "Bez mlieka" },
      { icon: "🍬", text: "Bez cukru" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Kniha 500 zdravých koláčov Babky Anky",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Hotovo za", bottom: "20 min" },
      discount: { icon: "🔥", top: "Dnes", bottom: "ZĽAVA 90 %" },
    },
  },

  preview: {
    kicker: "Krátka ukážka",
    headline: "POZRI SI TIE DOBROTY, KTORÉ SA NAUČÍŠ PIECŤ",
    items: [
      { src: "/preview/3-6.webp", alt: "Zdravý koláč 1" },
      { src: "/preview/2-7.webp", alt: "Zdravý koláč 2" },
      { src: "/preview/4-3.webp", alt: "Zdravý koláč 3" },
      { src: "/preview/3-5-1.webp", alt: "Zdravý koláč 4" },
      { src: "/preview/1-7.webp", alt: "Zdravý koláč 5" },
      { src: "/preview/4-2.webp", alt: "Zdravý koláč 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Zdravý koláč 7" },
      { src: "/preview/1-5-1.webp", alt: "Zdravý koláč 8" },
      { src: "/preview/3-3.webp", alt: "Zdravý koláč 9" },
      { src: "/preview/2-4.webp", alt: "Zdravý koláč 10" },
      { src: "/preview/1-4.webp", alt: "Zdravý koláč 11" },
      { src: "/preview/1-6-1.webp", alt: "Zdravý koláč 12" },
      { src: "/preview/2-3.webp", alt: "Zdravý koláč 13" },
      { src: "/preview/chocolate.webp", alt: "Zdravý čokoládový koláč" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Zdravý koláč 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Zdravý koláč 16" },
      { src: "/preview/12-1-2.webp", alt: "Zdravý koláč 17" },
      { src: "/preview/2-6.webp", alt: "Zdravý koláč 18" },
      { src: "/preview/1-8.webp", alt: "Zdravý koláč 19" },
    ],
  },

  benefits: {
    kicker: "Prečo si ju zamiluješ",
    headline: "Zdravé koláče bez kompromisov v chuti",
    items: [
      { icon: "🎂", title: "500 chutí, aby ťa to nikdy neomrzelo" },
      { icon: "✨", title: "Dokonalá textúra aj bez lepku" },
      { icon: "🌾", title: "Nepotrebuješ žiadne špeciálne múky" },
      { icon: "⚡", title: "Expresné koláče za 20 minút" },
      { icon: "💚", title: "Úplne bez mlieka a bez cukru" },
      { icon: "📖", title: "Jednoduché návody krok za krokom" },
    ],
  },

  samples: {
    kicker: "Malá ochutnávka",
    headline: "NEUVERITEĽNE LAHODNÉ KOLÁČE (ZDRAVÁ VERZIA):",
    badge: "Bez cukru, lepku a laktózy",
    items: [
      {
        name: "ČOKOLÁDOVÝ KOLÁČ",
        variant: "(FIT A NADÝCHANÝ)",
        kcal: "88",
        time: "20 minút",
        src: "/samples/pastel-chocolate.gif",
        alt: "Fit čokoládový koláč",
      },
      {
        name: "MRKVOVÝ KOLÁČ",
        variant: "(S FIT ČOKOLÁDOVOU POLEVOU)",
        kcal: "120",
        time: "20 minút",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Mrkvový koláč s čokoládou",
      },
      {
        name: "BANÁNOVÝ KOLÁČ",
        variant: "(FIT)",
        kcal: "90",
        time: "20 minút",
        src: "/samples/pastel-platano.gif",
        alt: "Fit banánový koláč",
      },
      {
        name: "TORTA TRES LECHES",
        variant: "(BEZ LAKTÓZY)",
        kcal: "100",
        time: "20 minút",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Torta Tres leches bez laktózy",
      },
      {
        name: "ČOKOLÁDOVÁ TORTA",
        variant: "(Z 5 INGREDIENCIÍ)",
        kcal: "108",
        time: "20 minút",
        src: "/samples/chocotorta.gif",
        alt: "Zdravá čokoládová torta",
      },
      {
        name: "CITRÓNOVÝ KOLÁČ",
        variant: "(Z MIXÉRA)",
        kcal: "100",
        time: "20 minút",
        src: "/samples/pastel-limon.gif",
        alt: "Citrónový koláč",
      },
      {
        name: "TORTA RED VELVET",
        variant: "(FIT)",
        kcal: "105",
        time: "19 minút",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Fit torta Red velvet",
      },
    ],
    caloriesLabel: "Kalórie",
    timeLabel: "Čas",
  },

  moreRecipesCta: {
    pretitle: "A ďalších viac ako",
    big: "493",
    post: "RECEPTOV NA KOLÁČE...",
    ctaLabel: "STIAHNUŤ MÔJ VÝTLAČOK",
  },

  testimonials: {
    kicker: "Skutočné dôkazy",
    headline: "POZRI SA, ČO HOVORIA TÍ, KTORÍ SI JU UŽ KÚPILI",
    subheadline: "Čo zdieľajú naše zákazníčky",
    studentsBadge: "+ 3 200 certifikovaných absolventov",
    items: [
      {
        text: "Včera som urobila čokoládový koláč a neostal ani kúsok 😍 Rodina ma už prosila, aby som ho cez víkend upiekla znova. Bez cukru a bez lepku... je to proste neuveriteľné!!",
        time: "10:23",
      },
      {
        text: "Nechápala som, ako to môže byť také dobré bez mlieka a cukru. Torta Tres leches bez laktózy ma nechala bez slov 🤯 Už 3 dni pečiem bez prestávky.",
        time: "11:47",
      },
      {
        text: "Mám celiakiu už 10 rokov a nikdy som nemohla jesť poriadnu tortu. Vďaka tejto knihe si konečne môžem dopriať ako všetci ostatní 😭❤️",
        time: "14:02",
      },
      {
        text: "Mrkvový koláč s čokoládovou polevou chutil PRESNE ako z cukrárne, ale bez múky a cukru. Priniesla som ho do kancelárie a nikto neveril, že je zdravý hahaha.",
        time: "09:15",
      },
      {
        text: "Knihu mám mesiac a už som vyskúšala vyše 15 receptov. Fit Red Velvet je nádherne nadýchaný a má krásnu farbu 🎂 100% odporúčam všetkým!!",
        time: "16:38",
      },
      {
        text: "Na začiatku som mala pochybnosti... ale prvý koláč si ma hneď získal. Fit banánový koláč za 20 minút je hotový zázrak ⭐⭐⭐⭐⭐ Ďakujem, že ste.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Kniha receptov na telefóne, počítači a tablete",
    },
  },

  categories: {
    kicker: "Aby ťa to nikdy neomrzelo",
    headline: "RECEPTY ROZDELENÉ DO KATEGÓRIÍ",
    groups: [
      {
        title: "100 plnených koláčov",
        items: [
          { src: "/preview/1-4.webp", alt: "Plnený koláč 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Plnený koláč 2" },
          { src: "/preview/12-1-2.webp", alt: "Plnený koláč 3" },
          { src: "/preview/2-3.webp", alt: "Plnený koláč 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Plnený koláč 5" },
        ],
      },
      {
        title: "100 ovocných koláčov",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Ovocný koláč 1" },
          { src: "/preview/2-4.webp", alt: "Ovocný koláč 2" },
          { src: "/preview/3-3.webp", alt: "Ovocný koláč 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Ovocný koláč 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Ovocný koláč 5" },
        ],
      },
      {
        title: "100 klasických koláčov",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasický koláč 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasický koláč 2" },
          { src: "/preview/4-2.webp", alt: "Klasický koláč 3" },
        ],
      },
      {
        title: "100 moderných dezertov",
        items: [
          { src: "/preview/1-7.webp", alt: "Moderný dezert 1" },
          { src: "/preview/2-6.webp", alt: "Moderný dezert 2" },
          { src: "/preview/3-5-1.webp", alt: "Moderný dezert 3" },
          { src: "/preview/4-3.webp", alt: "Moderný dezert 4" },
        ],
      },
      {
        title: "100 studených dezertov",
        items: [
          { src: "/preview/1-8.webp", alt: "Studený dezert 1" },
          { src: "/preview/2-7.webp", alt: "Studený dezert 2" },
          { src: "/preview/3-6.webp", alt: "Studený dezert 3" },
          { src: "/preview/4-4.webp", alt: "Studený dezert 4" },
        ],
      },
    ],
    ctaLabel: "CHCEM RECEPTY",
  },

  story: {
    kicker: "Príbeh za knihou",
    headline: "AKO VZNIKLA TÁTO KNIHA RECEPTOV?",
    paragraphs: [
      "Babka Anka vždy rozvoňala náš dom koláčmi, ktoré spájali celú rodinu. Ale keď moja dcéra Zuzka zistila, že nemôže jesť lepok, všetko sa zmenilo.",
      "Ako odborníčka na výživu som sa s mamou rozhodla tieto recepty premeniť na zdravé alternatívy: bez cukru, bez lepku a bez laktózy. Po mnohých pokusoch sme dosiahli výsledky, ktoré prekvapili aj samotnú Babku Anku.",
      "A tak sa zrodila táto kniha: rodinné dedičstvo plné chuti a lásky, ktoré sa teraz môže stať súčasťou aj tvojho príbehu.",
    ],
    image: {
      src: "/story.webp",
      alt: "Babka Anka a jej vnučka v kuchyni",
    },
  },

  bonuses: {
    kicker: "Darčeky k tomu",
    headline: "ZÍSKAŠ +5 BONUSOV ZADARMO",
    items: [
      {
        label: "BONUSOVÁ KNIHA 1",
        name: "SUŠIENKY A MUFFINY",
        desc: "20 neodolateľných receptov na chrumkavé sušienky a nadýchané muffiny, chutné a zdravé.",
        price: "19,90 €",
        freeLabel: "DNES ZADARMO",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Sušienky a Muffiny" },
      },
      {
        label: "BONUSOVÁ KNIHA 2",
        name: "PROTEÍNOVÉ RECEPTY Z TEPLOVZDUŠNEJ FRITÉZY",
        desc: "20 receptov na rýchle, zdravé jedlá plné bielkovín, pripravené len v teplovzdušnej fritéze.",
        price: "19,90 €",
        freeLabel: "DNES ZADARMO",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Teplovzdušná fritéza" },
      },
      {
        label: "BONUSOVÁ KNIHA 3",
        name: "RECEPTY NA ZDRAVÉ ŠIŠKY",
        desc: "Chrumkavé, bez výčitiek, zdravé a plné chuti v každom súste.",
        price: "19,90 €",
        freeLabel: "DNES ZADARMO",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Zdravé Šišky" },
      },
      {
        label: "BONUSOVÁ KNIHA 4",
        name: "RECEPTY NA CHUTNÉ ŠALÁTY",
        desc: "Svieže, jednoduché a zdravé šaláty, aby si si ich mohla užívať každý deň s chuťou a rovnováhou.",
        price: "19,90 €",
        freeLabel: "DNES ZADARMO",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Šaláty" },
      },
      {
        label: "BONUSOVÁ KNIHA 5",
        name: "67 DETOXIKAČNÝCH ŠTIAV",
        desc: "Obnov svoju energiu so 67 receptami na prírodné, osviežujúce a výživné detoxikačné šťavy.",
        price: "19,90 €",
        freeLabel: "DNES ZADARMO",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 Detoxikačných štiav" },
      },
    ],
    secretBonus: {
      label: "+3 TAJNÉ BONUSY",
      name: "Exkluzívne prekvapenia pre tie, ktoré si knihu receptov zaobstarajú ešte dnes.",
      price: "59,90 €",
      freeLabel: "DNES ZADARMO",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Krabica s tajnými bonusmi" },
    },
    ctaLabel: "CHCEM RECEPTY",
  },

  audience: {
    kicker: "Je to pre teba?",
    headline: "PRE ĽUDÍ, KTORÍ HĽADAJÚ:",
    items: [
      "Zdravšie recepty",
      "Zmenu stravovacích návykov",
      "Majú intoleranciu na laktózu",
      "Trpia celiakiou",
      "Sú diabetici",
    ],
  },

  finalCta: {
    flagline: "Prvých 100 zákazníčok získa 20 videolekcií zadarmo",
    headline: "KNIHA S 500 KOLÁČMI OD BABKY ANKY ®",
    subheadline: "Všetko, čo potrebuješ, aby si mohla piecť bez výčitiek",
    includesTitle: "+5 KNÍH ZADARMO:",
    includes: [
      "+ CHUTNÉ RECEPTY NA ŠALÁTY A DRESINGY",
      "+ RECEPTY NA ZDRAVÉ ŠIŠKY",
      "+ RECEPTY NA SUŠIENKY A MUFFINY",
      "+ PROTEÍNOVÉ RECEPTY Z TEPLOVZDUŠNEJ FRITÉZY",
      "+ 67 RECEPTOV NA DETOXIKAČNÉ ŠŤAVY",
    ],
    secretTitle: "+3 TAJNÉ BONUSY:",
    discountLabel: "ZĽAVA 90 %",
    regularPriceLabel: "Z",
    regularPrice: "59,90 €",
    regularPriceSuffix: "...",
    offerPriceLabel: "Iba za",
    offerCurrency: "",
    offerPrice: "8,90 €",
    button: "ÁNO, CHCEM JU",
    urgencyNote: "**PONUKA KONČÍ DNES**",
    paymentLabel: "MOŽNOSTI PLATBY",
    paymentImage: { src: "/payment-methods.webp", alt: "Možnosti platby" },
    secureLabel: "100% BEZPEČNÁ STRÁNKA",
    secureImage: { src: "/secure-site.webp", alt: "100% bezpečná stránka" },
    image: { src: "/final-mockup.webp", alt: "Knihy receptov na všetkých platformách" },
    bonusesBadge: "+8 bonusov zadarmo",
    discountStickerLabel: "Zľava",
    discountStickerValue: "ZĽAVA 90 %",
  },

  delivery: {
    kicker: "Doručenie",
    headline: "AKO DOSTANEM RECEPTY?",
    items: [
      { icon: "🖨️", text: "Môžeš si ich vytlačiť na papier." },
      { icon: "📱", text: "Môžeš si ich prezerať v telefóne." },
      { icon: "💻", text: "Môžeš ich čítať na počítači." },
      { icon: "✅", text: "Môžeš si ich prezerať aj na tablete." },
      { icon: "♾️", text: "Doživotný prístup: Vrátane nových receptov." },
      { icon: "📩", text: "Stratila si recept? Pošleme ti ho znova." },
      { icon: "📚", text: "Každý mesiac získaš nové knihy." },
    ],
  },

  guarantee: {
    kicker: "Bez rizika",
    headline: "VYSKÚŠAJ BEZ RIZIKA — 14-dňová bezpodmienečná záruka.",
    body: "Máš 14 dní na to, aby si ich vyskúšala. Ak ťa recepty nepresvedčia, vrátim ti peniaze do posledného centu. Bez komplikácií. Bez stresu.",
    alt: "Pečať pre 14-dňovú bezpodmienečnú záruku",
    image: { src: "/guarantee-badge.webp", alt: "14 dní záruka" },
  },

  faq: {
    kicker: "Otázky a odpovede",
    headline: "FAQ — to, na čo sa všetci pýtajú",
    items: [
      {
        q: "Sú ingrediencie drahé?",
        a: "Nie! Používame bežné suroviny, ktoré už máš doma: žiadne zložité ani predražené produkty.",
      },
      {
        q: "Naozaj môže byť koláč bez pšenice, mlieka, laktózy a cukru chutný?",
        a: "Áno, a to najlepšie: príprava je mimoriadne jednoduchá! Recepty sú vytvorené tak, aby si zachovali chuť, ktorú miluješ, z ľahkých a ľahko dostupných surovín.",
      },
      {
        q: "Sú recepty ľahké aj pre začiatočníčky (ktoré nikdy nepiekli)?",
        a: "Sú priam ideálne pre začiatočníčky! Všetko je vysvetlené krok za krokom, s bežnými surovinami a jednoduchými pokynmi. Ak vieš zapnúť rúru, zvládneš ich upiecť aj ty.",
      },
      {
        q: "Čím sa koláče sladia?",
        a: "Môžeš si vybrať, čo preferuješ: ovocím (banánmi alebo datľami), medom alebo sladidlami ako stévia a erytritol. V každom recepte je uvedené presné množstvo pre každú možnosť.",
      },
      {
        q: "Môžem nahradiť cukor ovocím (banán, datle)? Ako na to?",
        a: "Áno, môžeš! A je to jednoduchšie, než sa zdá: recept ti presne povie, aké ovocie použiť, koľko ho pridať a ako vytvoriť dokonalý, šťavnatý a sladký dezert.",
      },
      {
        q: "Aké múky používate?",
        a: "Používame zmesi múk, ako napríklad ryžovú, ovsenú alebo mandľovú, ktoré dnes nájdeš v každom supermarkete, často dokonca lacnejšie ako bežnú pšeničnú múku.",
      },
      {
        q: "Za koľko minút je koláč hotový?",
        a: "Väčšina z nich trvá 20 až 30 minút. Kým si urobíš kávu, koláč ti už bude rozvoniavať v kuchyni.",
      },
    ],
  },

  footer: {
    brand: "Babka Anka",
    links: [
      { label: "Zásady ochrany osobných údajov", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Podmienky používania", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Zásady vrátenia tovaru", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Babka Anka – Všetky práva vyhradené.",
  },

  stickyCta: {
    priceLabel: "Dnes",
    offerPrice: "8,90 €",
    strikePrice: "59,90 €",
    ctaLabel: "CHCEM JU",
  },
};