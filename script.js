const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const langButtons = document.querySelectorAll('.lang-button');

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'language.choose': 'Choose language:',
    'hero.eyebrow': 'Premium Appliance Care',
    'hero.title': 'Fast, professional home appliance repair',
    'hero.copy': 'We fix your appliances at home with reliable, fast, and careful service. Trusted by families who want comfort restored without compromise.',
    'hero.cta': 'Contact on WhatsApp',
    'hero.cta2': 'View services',
    'card.label': 'On-site assistance',
    'card.title': 'Same-day diagnostics',
    'card.copy': 'Certified technicians arrive with the right tools and a friendly, professional approach.',
    'card.bullet1': 'Fast appliance evaluation',
    'card.bullet2': 'Quality parts and repairs',
    'card.bullet3': 'Service warranty included',
    'services.header.eyebrow': 'Our Services',
    'services.header.title': 'Expert repair for every major appliance',
    'services.header.copy': 'A premium service experience for washing machines, refrigerators, ovens, and more.',
    'service.washing': 'Washing Machine Repair',
    'service.fridge': 'Refrigerator Repair',
    'service.oven': 'Oven Repair',
    'service.dishwasher': 'Dishwasher Repair',
    'service.ac': 'Air Conditioner Repair',
    'service.tv': 'Television Repair',
    'service.diagnostic': 'On-site Diagnostic',
    'service.maintenance': 'Maintenance & Servicing',
    'about.eyebrow': 'About Stapservice',
    'about.title': 'Dependable appliance care with a premium approach',
    'about.copy': 'Stapservice is dedicated to restoring comfort in your home with fast, skilled repairs delivered directly to your door. We emphasize transparent pricing, expert workmanship, and a calm, high-end experience.',
    'about.bullet1': 'Certified technicians',
    'about.bullet2': 'Clear quotes and flexible scheduling',
    'about.bullet3': 'Fast, clean on-site service',
    'about.panel.title': 'Why choose Stapservice?',
    'about.panel.copy': 'We combine precision repairs with thoughtful customer care so your appliances run smoothly and your home stays peaceful.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get support in your area',
    'contact.copy': 'Reach out by phone, email, or WhatsApp and we\'ll handle the rest.',
    'contact.phone.title': 'Phone',
    'contact.phone.value': '0034644660577',
    'contact.email.title': 'Email',
    'contact.email.value': 'stapservice@gmail.com',
    'contact.region.title': 'Region',
    'contact.region.value': 'The Netherlands and surrounding areas',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Message us',
    'footer.copy': '© 2026 Stapservice. All rights reserved.',
    'footer.tagline': 'Fast · Reliable · On-site',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'language.choose': 'Choisissez la langue :',
    'hero.eyebrow': 'Soin Premium des appareils',
    'hero.title': 'Réparation électroménager rapide et professionnelle',
    'hero.copy': 'Nous réparons vos appareils à domicile avec un service fiable, rapide et soigné. Confié par des familles qui veulent retrouver leur confort sans compromis.',
    'hero.cta': 'Contacter sur WhatsApp',
    'hero.cta2': 'Voir les services',
    'card.label': 'Assistance sur place',
    'card.title': 'Diagnostic le jour même',
    'card.copy': 'Des techniciens certifiés arrivent avec les bons outils et une approche professionnelle.',
    'card.bullet1': 'Évaluation rapide',
    'card.bullet2': 'Pièces de qualité',
    'card.bullet3': 'Garantie de service incluse',
    'services.header.eyebrow': 'Nos services',
    'services.header.title': 'Réparation experte pour chaque appareil majeur',
    'services.header.copy': 'Une expérience premium pour machines à laver, réfrigérateurs, fours et plus.',
    'service.washing': 'Réparation machine à laver',
    'service.fridge': 'Réparation réfrigérateur',
    'service.oven': 'Réparation four',
    'service.dishwasher': 'Réparation lave-vaisselle',
    'service.ac': 'Réparation climatiseur',
    'service.tv': 'Réparation télévision',
    'service.diagnostic': 'Diagnostic à domicile',
    'service.maintenance': 'Maintenance et entretien',
    'about.eyebrow': 'À propos de Stapservice',
    'about.title': 'Soin fiable des appareils avec une approche premium',
    'about.copy': 'Stapservice restaure votre confort à domicile avec des réparations rapides et qualifiées. Nous privilégions la transparence, le savoir-faire et une expérience soignée.',
    'about.bullet1': 'Techniciens certifiés',
    'about.bullet2': 'Devis clairs et planification flexible',
    'about.bullet3': 'Service propre et rapide sur place',
    'about.panel.title': 'Pourquoi choisir Stapservice ?',
    'about.panel.copy': 'Nous associons des réparations précises à un service client attentif pour que vos appareils fonctionnent parfaitement.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Obtenez de l’aide dans votre région',
    'contact.copy': 'Contactez-nous par téléphone, e-mail ou WhatsApp et nous nous occupons du reste.',
    'contact.phone.title': 'Téléphone',
    'contact.phone.value': '0034644660577',
    'contact.email.title': 'E-mail',
    'contact.email.value': 'stapservice@gmail.com',
    'contact.region.title': 'Zone',
    'contact.region.value': 'The Netherlands and surrounding areas',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Envoyez un message',
    'footer.copy': '© 2026 Stapservice. Tous droits réservés.',
    'footer.tagline': 'Rapide · Fiable · Sur place',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.whatsapp': 'WhatsApp',
    'language.choose': 'Dil seçin:',
    'hero.eyebrow': 'Premium Cihaz Bakımı',
    'hero.title': 'Hızlı, profesyonel beyaz eşya onarımı',
    'hero.copy': 'Cihazlarınızı evde güvenilir, hızlı ve özenli bir servisle tamir ediyoruz. Rahatlığınızı geri kazanmak isteyen aileler tarafından tercih ediliyor.',
    'hero.cta': 'WhatsApp ile iletişime geçin',
    'hero.cta2': 'Hizmetlere göz atın',
    'card.label': 'Yerinde destek',
    'card.title': 'Aynı gün tanı',
    'card.copy': 'Sertifikalı teknisyenler doğru aletlerle ve profesyonel bir yaklaşımla gelir.',
    'card.bullet1': 'Hızlı cihaz değerlendirmesi',
    'card.bullet2': 'Kaliteli parça ve onarım',
    'card.bullet3': 'Servis garantisi dahildir',
    'services.header.eyebrow': 'Hizmetlerimiz',
    'services.header.title': 'Her büyük cihaz için uzman onarım',
    'services.header.copy': 'Çamaşır makineleri, buzdolapları, fırınlar ve daha fazlası için premium servis deneyimi.',
    'service.washing': 'Çamaşır Makinesi Onarımı',
    'service.fridge': 'Buzdolabı Onarımı',
    'service.oven': 'Fırın Onarımı',
    'service.dishwasher': 'Bulaşık Makinesi Onarımı',
    'service.ac': 'Klima Onarımı',
    'service.tv': 'Televizyon Onarımı',
    'service.diagnostic': 'Yerinde Tanı',
    'service.maintenance': 'Bakım ve Servis',
    'about.eyebrow': 'Stapservice Hakkında',
    'about.title': 'Premium yaklaşım ile güvenilir cihaz bakımı',
    'about.copy': 'Stapservice, evinizde konforu geri getirmeye adanmıştır. Hızlı, uzman onarımlar, şeffaf fiyatlandırma ve kaliteli servis sunar.',
    'about.bullet1': 'Sertifikalı teknisyenler',
    'about.bullet2': 'Net teklif ve esnek planlama',
    'about.bullet3': 'Hızlı, temiz yerinde servis',
    'about.panel.title': 'Neden Stapservice?',
    'about.panel.copy': 'Cihazlarınızın sorunsuz çalışması için hassas onarımlar ve dikkatli müşteri hizmeti sunarız.',
    'contact.eyebrow': 'İletişim',
    'contact.title': 'Bölgenizde destek alın',
    'contact.copy': 'Hızlı yardım için telefon, e-posta veya WhatsApp üzerinden bize ulaşın.',
    'contact.phone.title': 'Telefon',
    'contact.phone.value': '0034644660577',
    'contact.email.title': 'E-posta',
    'contact.email.value': 'stapservice@gmail.com',
    'contact.region.title': 'Bölge',
    'contact.region.value': 'Hollanda ve çevresindeki bölgeler',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Mesaj gönder',
    'footer.copy': '© 2026 Stapservice. Tüm hakları saklıdır.',
    'footer.tagline': 'Hızlı · Güvenilir · Yerinde',
  },
  nl: {
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.about': 'Over ons',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    'language.choose': 'Kies een taal:',
    'hero.eyebrow': 'Premium apparaatservice',
    'hero.title': 'Snelle, professionele reparatie van huishoudelijke apparaten',
    'hero.copy': 'Wij repareren uw apparaten thuis met een betrouwbare, snelle en zorgvuldige service. Vertrouwd door gezinnen die comfort willen herstellen zonder compromissen.',
    'hero.cta': 'Contact via WhatsApp',
    'hero.cta2': 'Bekijk diensten',
    'card.label': 'Ter plaatse ondersteuning',
    'card.title': 'Diagnose op dezelfde dag',
    'card.copy': 'Gecertificeerde technici komen met de juiste gereedschappen en een professionele aanpak.',
    'card.bullet1': 'Snelle apparaatbeoordeling',
    'card.bullet2': 'Kwaliteitsonderdelen en -reparaties',
    'card.bullet3': 'Garantie op service inbegrepen',
    'services.header.eyebrow': 'Onze diensten',
    'services.header.title': 'Expert reparatie voor elk groot apparaat',
    'services.header.copy': 'Een premium service-ervaring voor wasmachines, koelkasten, ovens en meer.',
    'service.washing': 'Wasmachine reparatie',
    'service.fridge': 'Koelkast reparatie',
    'service.oven': 'Oven reparatie',
    'service.dishwasher': 'Vaatwasser reparatie',
    'service.ac': 'Airconditioning reparatie',
    'service.tv': 'Televisie reparatie',
    'service.diagnostic': 'Diagnose op locatie',
    'service.maintenance': 'Onderhoud en service',
    'about.eyebrow': 'Over Stapservice',
    'about.title': 'Betrouwbare apparaatverzorging met een premium aanpak',
    'about.copy': 'Stapservice is toegewijd aan het herstellen van comfort in uw huis met snelle, deskundige reparaties. We geven prioriteit aan transparante prijzen, vakmanschap en een verzorgde ervaring.',
    'about.bullet1': 'Gecertificeerde technici',
    'about.bullet2': 'Duidelijke offertes en flexibele planning',
    'about.bullet3': 'Snelle, schone service op locatie',
    'about.panel.title': 'Waarom Stapservice?',
    'about.panel.copy': 'We combineren nauwkeurige reparaties met aandacht voor de klant, zodat uw apparaten soepel blijven werken.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Krijg ondersteuning in uw regio',
    'contact.copy': 'Neem contact op via telefoon, e-mail of WhatsApp en wij regelen de rest.',
    'contact.phone.title': 'Telefoon',
    'contact.phone.value': '0034644660577',
    'contact.email.title': 'E-mail',
    'contact.email.value': 'stapservice@gmail.com',
    'contact.region.title': 'Regio',
    'contact.region.value': 'The Netherlands and surrounding areas',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Stuur bericht',
    'footer.copy': '© 2026 Stapservice. Alle rechten voorbehouden.',
    'footer.tagline': 'Snel · Betrouwbaar · Op locatie',
  },
};

const translatePage = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = translations[lang]?.[key];
    if (text) {
      el.textContent = text;
    }
  });
  document.documentElement.lang = lang;
};

const setLanguage = (lang) => {
  if (!translations[lang]) {
    lang = 'en';
  }
  translatePage(lang);
  localStorage.setItem('siteLanguage', lang);
  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem('siteLanguage') || 'en';
setLanguage(savedLanguage);

const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const animatedItems = document.querySelectorAll('[data-animate]');
animatedItems.forEach((el, index) => {
  el.classList.add('animate');
  el.style.setProperty('--animate-delay', `${index * 80}ms`);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

animatedItems.forEach((el) => revealObserver.observe(el));
