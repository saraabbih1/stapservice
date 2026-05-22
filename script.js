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
    'about.panel.heading': 'Why choose Stapservice?',
    'about.panel.copy': 'We combine precision repairs with thoughtful customer care so your appliances run smoothly and your home stays peaceful.',
    'award.card1.eyebrow': 'MORE THAN',
    'award.card1.title': '20 YEARS OF EXPERIENCE',
    'award.card1.copy': 'Skilled, fast, and reliable service since 2004.',
    'award.card2.eyebrow': 'CERTIFIED BY',
    'award.card2.title': 'E Techniek Nederland',
    'award.card2.copy': 'installQ demonstrably better',
    'award.card3.eyebrow': 'QUALITY GUARANTEED',
    'award.card3.title': 'Original Parts',
    'award.card3.copy': 'We use genuine parts and guarantee our repairs.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get support in your area',
    'contact.copy': 'Reach out by phone, email, or WhatsApp and we\'ll handle the rest.',
    'contact.phone.title': 'Phone',
    'contact.phone.value': '0031644660577',
    'contact.email.title': 'Email',
    'contact.email.value': 'stapservice@gmail.com',
    'contact.region.title': 'Region',
    'contact.region.value': 'Rotterdam and surrounding areas',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Message us',
    'partners.header.eyebrow': 'Brand Specialists',
    'partners.header.title': 'Brands we work with',
    'footer.copy': '© 2026 Stapservice. All rights reserved.',
    'footer.tagline': 'Fast · Reliable · On-site',
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
    'award.card1.eyebrow': 'MEER DAN',
    'award.card1.title': '20 JAAR ERVARING',
    'award.card1.copy': 'Deskundig, snel en betrouwbaar sinds 2004.',
    'award.card2.eyebrow': 'ERKEND DOOR',
    'award.card2.title': 'E Techniek Nederland',
    'award.card2.copy': 'installQ aantoonbaar beter',
    'award.card3.eyebrow': 'KWALITEIT GEGARANDEERD',
    'award.card3.title': 'Originele onderdelen',
    'award.card3.copy': 'Wij werken met originele onderdelen en geven garantie op reparatie.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Neem contact op',
    'contact.copy': 'Stuur ons een bericht via e-mail of WhatsApp voor snelle service.',
    'contact.email.title': 'Email',
    'contact.email.value': 'info@stapservice.nl',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.button': 'Stuur ons een bericht',
    'partners.header.eyebrow': 'Merkspecialisten',
    'partners.header.title': 'Merken waar we mee werken',
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

const partnerImages = document.querySelectorAll('.partner-image');
partnerImages.forEach((img) => {
  const label = img.closest('.partner-badge')?.querySelector('.partner-label');
  const hideLabel = () => {
    if (label) {
      label.style.display = 'none';
    }
  };
  const showLabel = () => {
    img.style.display = 'none';
    if (label) {
      label.style.display = 'flex';
    }
  };

  img.addEventListener('load', hideLabel);
  img.addEventListener('error', showLabel);

  if (img.complete) {
    if (img.naturalWidth > 0) {
      hideLabel();
    } else {
      showLabel();
    }
  }
});

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
