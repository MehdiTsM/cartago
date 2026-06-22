import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      common: {
        contact: "Contact",
        loading: "Chargement...",
        loadingDots: "Chargement…",
        back: "Retour",
        seeAll: "Voir tout",
        resetFilters: "Réinitialiser les filtres",
        searchPlaceholderDestination: "Rechercher une destination, un pays…",
        searchPlaceholderExplore: "Rechercher un lieu, une wilaya…",
        searchPlaceholderContact: "Rechercher un contact…",
        french: "Français",
        english: "English",
        arabic: "العربية",
      },
      header: {
        home: "Accueil",
        teamBuilding: "Team Building",
        medical: "Tourisme Médical",
        destinations: "Destinations",
        explore: "Explorer l'Algérie",
        transport: "Transport",
        about: "À Propos",
        contactUs: "Contact",
        language: "Changer de langue",
      },
      footer: {
        description:
          "Votre partenaire de confiance pour des voyages inoubliables. Découvrez le monde avec des offres exclusives et un service personnalisé.",
        navigation: "Navigation",
        popular: "Populaires",
        contact: "Contact",
        copyright: "© {{year}} Cartago Travel. Tous droits réservés.",
      },
      routes: {
        home: "Accueil",
        destinations: "Destinations",
        exploreDz: "Explorer Algérie",
        about: "À propos",
        transport: "Transport",
        teamBuilding: "Team Building",
        medical: "Tourisme Médical",
        contact: "Contact",
        login: "Login",
      },
      home: {
        heroTitle: "PARTEZ À LA DÉCOUVERTE",
        heroTitleAccent: "DE NOUVELLES AVENTURES",
        heroText:
          "Découvrez des destinations époustouflantes, des aventures inoubliables et des expériences de voyage personnalisées, conçues rien que pour vous.",
        ctaDestinations: "Voir les Destinations",
        ctaContact: "Contact",
        feature1: "Billetterie",
        feature1Text: "Les meilleures offres aériennes dans le monde entier.",
        feature2: "Hébergement",
        feature2Text: "Des séjours haut de gamme à des prix raisonnables.",
        feature3: "Assurance Voyage",
        feature3Text: "Des plans de voyage sûrs et sécurisés.",
        feature4: "Assistance 24h/7",
        feature4Text: "Une aide disponible à tout moment.",
        feature5: "Transport",
        feature5Text: "Des options de transport flexibles et confortables.",
        feature6: "Organiser",
        feature6Text: "Des solutions de planification de voyage sur mesure.",
        popularDestinations: "Destinations Populaires",
        popularText: "Découvrez nos destinations les plus appréciées.",
        viewAll: "Voir Tout",
        whyTitle: "Pourquoi Voyager avec Cartago ?",
        whyText:
          "Nous créons des expériences inoubliables grâce à des itinéraires personnalisés, des offres exclusives et un accompagnement dédié.",
        whyPoints: [
          "Forfaits voyage sur mesure",
          "Prix compétitifs",
          "Partenaires locaux de confiance",
          "Conseillers voyage dédiés",
        ],
        ctaTitle: "Prêt à Explorer le Monde ?",
        ctaText:
          "Que vous rêviez d'une escapade en Europe, d'un séjour à Dubaï ou d'un voyage sur mesure, notre équipe est là pour vous accompagner.",
      },
transport: {
  heroTitle: "Transport",
  heroTitleAccent: "Sur Mesure",
  heroSubtitle: "De l'aéroport à votre hôtel, d'une ville à l'autre ou à travers le monde — nous vous déplaçons avec style, ponctualité et sérénité.",
  trust1: "Flotte moderne",
  trust2: "Chauffeurs certifiés",
  trust3: "Disponible 24h/7j",
  tag1: "Groupe & Événements",
  title1: "Bus de Luxe",
  desc1: "Voyagez confortablement à bord de notre flotte moderne de bus grand luxe, équipés de la climatisation, de sièges inclinables, de vastes compartiments à bagages et d'un système de divertissement embarqué.",
  features1: ["Jusqu'à 55 passagers", "Intérieur climatisé", "Chauffeurs professionnels", "Sièges inclinables confortables"],
  tag2: "Famille & VIP",
  title2: "Vans Premium",
  desc2: "Idéal pour les familles, les groupes d'affaires et les voyageurs VIP recherchant flexibilité, confort et intimité tout au long de leur trajet.",
  features2: ["6 à 15 passagers", "Transferts privés", "Sièges grand confort", "Service de navette aéroport"],
  tag3: "Prestige",
  title3: "Jets Privés",
  desc3: "Vivez une expérience de luxe absolu et de praticité incomparable grâce à nos solutions d'affrètement de jets privés, pensées pour les dirigeants, personnalités et voyageurs d'exception.",
  features3: ["Expérience VIP", "Horaires flexibles", "Cabines de prestige", "Destinations mondiales"],
  ctaTitle: "Besoin d'un transport personnalisé ?",
  ctaSubtitle: "Notre équipe est disponible 24h/7j pour organiser votre transfert, où que vous soyez.",
  ctaContact: "Nous Contacter",
  ctaDestinations: "Voir les Destinations",
},
about: {
// Hero
heroTag: "Notre histoire",
heroTitle: "VOYAGER,",
heroTitleAccent: "C'EST NOTRE",
heroTitleEnd: "MÉTIER.",
heroText:
"Cartago accompagne les voyageurs algériens vers les plus belles destinations du monde. Nous sommes nés d'une conviction simple : chaque personne mérite un voyage qui lui ressemble.",
ctaDestinations: "Nos destinations",
ctaContact: "Nous contacter",
statYears: "Années d'expérience",
statTravelers: "Voyageurs heureux",

// Story section
storyTag: "Qui sommes-nous",
storyTitle: "Une agence née",
storyTitleAccent: "d'une passion",
storyTitleEnd: ", bâtie sur la confiance.",
storyText1:
"Cartago n'est pas une agence de voyage ordinaire. Chaque membre de notre équipe est lui-même un voyageur : quelqu'un qui a vécu la magie d'un lever de soleil sur les temples d'Angkor, ou la sérénité d'un bungalow aux Maldives.",
storyText2:
"C'est cette expérience personnelle qui nourrit chaque itinéraire que nous construisons pour vous. Nous ne lisons pas des brochures — nous vous racontons ce que nous avons vécu.",

// Timeline milestones
milestone1Title: "La naissance d'une idée",
milestone1Desc:
"Cartago voit le jour à Alger, fondée par une équipe de passionnés de voyage avec un seul objectif : rendre le voyage accessible et mémorable pour chaque Algérien.",
milestone2Title: "Les premières destinations",
milestone2Desc:
"Après deux ans de préparation, nous lançons nos premiers forfaits vers l'Europe et le Moyen-Orient. Plus de 500 voyageurs nous font confiance dès la première année.",
milestone3Title: "Résilience et renouveau",
milestone3Desc:
"Face à la pandémie, nous pivons vers le conseil et la planification à distance. Cette période forge notre engagement envers la flexibilité et la protection du voyageur.",
milestone4Title: "Expansion internationale",
milestone4Desc:
"Nous atteignons 30 destinations, ouvrons un second bureau et signons des partenariats avec les meilleurs hôtels et compagnies aériennes du monde.",
milestone5Title: "Cartago aujourd'hui",
milestone5Desc:
"Plus de 10 000 voyageurs satisfaits, 50+ destinations, et une équipe de 20 conseillers dévoués. L'aventure ne fait que commencer.",

// Values
valuesTag: "Ce qui nous guide",
valuesTitle: "Nos valeurs",
valuesSubtitle:
"Ces trois principes orientent chaque décision que nous prenons, chaque voyage que nous planifions.",
value1Title: "La passion avant tout",
value1Desc:
"Chaque voyage que nous concevons est le reflet de notre propre amour du monde. Nous ne vendons pas des billets — nous créons des souvenirs qui durent.",
value2Title: "Votre confiance, notre priorité",
value2Desc:
"Paiement sécurisé, assurance annulation, assistance 24h/24 : nous ne laissons aucun voyageur seul face à l'imprévu.",
value3Title: "Des partenaires de confiance",
value3Desc:
"Chaque hôtel, chaque transporteur et chaque guide local est sélectionné après une vérification rigoureuse. Rien n'est laissé au hasard.",

// Testimonials
testimonialsTag: "Ils nous ont fait confiance",
testimonialsTitle: "Ce qu'ils disent de nous",
testimonial1Dest: "Voyage à Dubaï",
testimonial1Text:
"Une organisation parfaite du début à la fin. L'équipe Cartago a pensé à tout — même à nos préférences alimentaires. Je recommande les yeux fermés.",
testimonial2Dest: "Lune de miel aux Maldives",
testimonial2Text:
"Notre voyage de noces était absolument magique. Cartago a dépassé toutes nos attentes. Un service exceptionnel, humain et à l'écoute.",
testimonial3Dest: "Séjour à Santorin",
testimonial3Text:
"Première expérience avec Cartago et certainement pas la dernière. Hôtel parfait, guide attentionné, tout était au rendez-vous.",

// CTA
ctaTag: "Rejoignez l'aventure",
ctaTitle: "Prêt à écrire",
ctaTitleAccent: "votre prochaine histoire ?",
ctaText:
"Nos conseillers sont à votre disposition pour construire avec vous le voyage qui vous ressemble, à votre rythme et selon votre budget.",
},
team: {
  badge: "Team Building",

  hero: {
    title: "Des Expériences qui",
    highlight: "Unissent les Équipes",
    description:
      "Que vous soyez une PME, une multinationale ou un groupe d'amis, nous concevons des activités de team building sur mesure pour renforcer la cohésion, stimuler la motivation et créer des souvenirs durables.",
    button: "Demander un Devis",
  },

  intro: {
    title: "Pourquoi le Team Building avec Cartago ?",
    text1:
      "Chez Cartago, nous croyons qu'une équipe soudée est la clé du succès. Depuis plus de 8 ans, nous accompagnons des groupes de toutes tailles — startups, PME et grandes entreprises — dans la création d'expériences qui dépassent le simple divertissement.",
    text2:
      "Nos programmes sont pensés pour renforcer la communication, développer la confiance mutuelle et insuffler une énergie collective durable, bien au-delà de la journée d'événement.",
  },

  benefits: [
    "Programmes 100 % personnalisés selon vos objectifs",
    "Encadrement par des animateurs certifiés",
    "Destinations locales et internationales disponibles",
    "Prise en charge complète : logistique, hébergement, repas",
  ],

  activities: {
    outdoor: {
      title: "Aventures Outdoor",
      text:
        "Randonnées, tyroliennes, parcours d'obstacles — des défis en plein air qui soudent les équipes.",
    },
    creative: {
      title: "Ateliers Créatifs",
      text:
        "Peinture, poterie, cuisine — des expériences artistiques qui libèrent la créativité.",
    },
    strategy: {
      title: "Challenges Stratégiques",
      text:
        "Escape games, chasses au trésor et jeux de rôle pour développer la communication.",
    },
    food: {
      title: "Expériences Gastronomiques",
      text:
        "Cours de cuisine, ateliers pâtisserie ou dîners thématiques.",
    },
    seminars: {
      title: "Séminaires & Cohésion",
      text:
        "Des journées autour de la communication, du leadership et de la collaboration.",
    },
    corporate: {
      title: "Événements Corporatifs",
      text:
        "Soirées d'entreprise, lancements de produits ou voyages incentive.",
    },
  },

  sections: {
    activities: "Nos Activités",
    activitiesDesc:
      "Un catalogue riche et varié pour répondre à chaque profil de groupe, chaque budget et chaque ambition.",

    audience: "Pour Qui ?",
    audienceDesc:
      "Nos programmes s'adaptent à chaque type de groupe, petits ou grands.",

    ctaTitle: "Prêt à Fédérer Votre Équipe ?",
    ctaText:
      "Partagez-nous vos objectifs et la taille de votre groupe — notre équipe vous propose un programme clé en main sous 48 h.",

    destinations: "Voir nos Destinations",
  },

  audience: {
    companies: {
      title: "Entreprises & Corporates",
      text:
        "Kick-offs, incentives, séminaires annuels ou simples journées de cohésion — nous gérons tout de A à Z pour que vos collaborateurs repartent motivés.",
    },

    groups: {
      title: "Groupes & Associations",
      text:
        "Clubs sportifs, associations étudiantes, organisations caritatives — nous créons des activités accessibles à tous les budgets.",
    },

    startups: {
      title: "PME & Startups",
      text:
        "Des formats agiles et innovants pour les structures en croissance qui souhaitent construire une culture d'équipe forte dès le départ.",
    },
  },
},
    },

  },
  en: {
    translation: {
      common: {
        contact: "Contact",
        loading: "Loading...",
        loadingDots: "Loading…",
        back: "Back",
        seeAll: "See all",
        resetFilters: "Reset filters",
        searchPlaceholderDestination: "Search a destination, a country…",
        searchPlaceholderExplore: "Search a place, a wilaya…",
        searchPlaceholderContact: "Search a contact…",
        french: "French",
        english: "English",
        arabic: "Arabic",
      },
      header: {
        home: "Home",
        teamBuilding: "Team Building",
        medical: "Medical Tourism",
        destinations: "Destinations",
        explore: "Explore Algeria",
        transport: "Transport",
        about: "About",
        contactUs: "Contact",
        language: "Change language",
      },
      footer: {
        description:
          "Your trusted partner for unforgettable journeys. Discover the world with exclusive offers and personalized service.",
        navigation: "Navigation",
        popular: "Popular",
        contact: "Contact",
        copyright: "© {{year}} Cartago Travel. All rights reserved.",
      },
      routes: {
        home: "Home",
        destinations: "Destinations",
        exploreDz: "Explore Algeria",
        about: "About",
        transport: "Transport",
        teamBuilding: "Team Building",
        medical: "Medical Tourism",
        contact: "Contact",
        login: "Login",
      },
      home: {
        heroTitle: "SET OUT TO DISCOVER",
        heroTitleAccent: "NEW ADVENTURES",
        heroText:
          "Discover breathtaking destinations, unforgettable adventures, and personalized travel experiences designed just for you.",
        ctaDestinations: "See Destinations",
        ctaContact: "Contact",
        feature1: "Ticketing",
        feature1Text: "The best flight deals worldwide.",
        feature2: "Accommodation",
        feature2Text: "Premium stays at reasonable prices.",
        feature3: "Travel Insurance",
        feature3Text: "Safe and secure travel plans.",
        feature4: "24/7 Assistance",
        feature4Text: "Help available at any time.",
        feature5: "Transport",
        feature5Text: "Flexible and comfortable transport options.",
        feature6: "Planning",
        feature6Text: "Tailor-made travel planning solutions.",
        popularDestinations: "Popular Destinations",
        popularText: "Discover our most loved destinations.",
        viewAll: "View All",
        whyTitle: "Why Travel with Cartago?",
        whyText:
          "We create unforgettable experiences through personalized itineraries, exclusive offers, and dedicated support.",
        whyPoints: [
          "Tailor-made travel packages",
          "Competitive prices",
          "Trusted local partners",
          "Dedicated travel advisors",
        ],
        ctaTitle: "Ready to Explore the World?",
        ctaText:
          "Whether you dream of a European escape, a stay in Dubai, or a tailor-made trip, our team is here to help.",
      },
      transport: {
        heroTitle: "Transport",
        heroTitleAccent: "Tailored for You",
        heroSubtitle: "From the airport to your hotel, city to city or across the world — we move you with style, punctuality and peace of mind.",
        trust1: "Modern fleet",
        trust2: "Certified drivers",
        trust3: "Available 24/7",
        tag1: "Groups & Events",
        title1: "Luxury Buses",
        desc1: "Travel comfortably aboard our modern fleet of luxury coaches, equipped with air conditioning, reclining seats, large luggage compartments and an onboard entertainment system.",
        features1: ["Up to 55 passengers", "Air-conditioned interior", "Professional drivers", "Comfortable reclining seats"],
        tag2: "Family & VIP",
        title2: "Premium Vans",
        desc2: "Ideal for families, business groups and VIP travellers seeking flexibility, comfort and privacy throughout their journey.",
        features2: ["6 to 15 passengers", "Private transfers", "Premium seating", "Airport shuttle service"],
        tag3: "Prestige",
        title3: "Private Jets",
        desc3: "Experience absolute luxury and unmatched convenience with our private jet charter solutions, designed for executives, public figures and exceptional travellers.",
        features3: ["VIP experience", "Flexible schedules", "Prestige cabins", "Worldwide destinations"],
        ctaTitle: "Need a personalised transport?",
        ctaSubtitle: "Our team is available 24/7 to arrange your transfer, wherever you are.",
        ctaContact: "Contact Us",
        ctaDestinations: "View Destinations",
      },
      about: {
    // Hero
    heroTag: "Our story",
    heroTitle: "TRAVEL IS",
    heroTitleAccent: "OUR",
    heroTitleEnd: "BUSINESS.",
    heroText:
      "Cartago guides Algerian travellers to the world's most beautiful destinations. We were born from a simple conviction: every person deserves a journey that reflects who they are.",
    ctaDestinations: "Our destinations",
    ctaContact: "Contact us",
    statYears: "Years of experience",
    statTravelers: "Happy travellers",
   
    // Story section
    storyTag: "Who we are",
    storyTitle: "An agency born",
    storyTitleAccent: "from passion",
    storyTitleEnd: ", built on trust.",
    storyText1:
      "Cartago is not an ordinary travel agency. Every member of our team is a traveller themselves — someone who has experienced the magic of a sunrise over Angkor's temples, or the serenity of a Maldivian bungalow.",
    storyText2:
      "It is that personal experience that fuels every itinerary we build for you. We don't read brochures — we share what we have lived.",
   
    // Timeline milestones
    milestone1Title: "The birth of an idea",
    milestone1Desc:
      "Cartago is founded in Algiers by a team of travel enthusiasts with one goal: making travel accessible and memorable for every Algerian.",
    milestone2Title: "First destinations",
    milestone2Desc:
      "After two years of preparation, we launch our first packages to Europe and the Middle East. Over 500 travellers trust us in our very first year.",
    milestone3Title: "Resilience and renewal",
    milestone3Desc:
      "Faced with the pandemic, we pivot to remote advice and planning. This period forges our commitment to flexibility and traveller protection.",
    milestone4Title: "International expansion",
    milestone4Desc:
      "We reach 30 destinations, open a second office and sign partnerships with the world's best hotels and airlines.",
    milestone5Title: "Cartago today",
    milestone5Desc:
      "Over 10,000 satisfied travellers, 50+ destinations, and a team of 20 dedicated advisors. The adventure is just beginning.",
   
    // Values
    valuesTag: "What guides us",
    valuesTitle: "Our values",
    valuesSubtitle:
      "These three principles shape every decision we make and every journey we plan.",
    value1Title: "Passion first",
    value1Desc:
      "Every trip we design reflects our own love of the world. We don't sell tickets — we create memories that last.",
    value2Title: "Your trust, our priority",
    value2Desc:
      "Secure payment, cancellation insurance, 24/7 assistance: we never leave a traveller alone when the unexpected happens.",
    value3Title: "Trusted partners",
    value3Desc:
      "Every hotel, carrier and local guide is selected after rigorous vetting. Nothing is left to chance.",
   
    // Testimonials
    testimonialsTag: "They trusted us",
    testimonialsTitle: "What they say about us",
    testimonial1Dest: "Trip to Dubai",
    testimonial1Text:
      "Perfect organisation from start to finish. The Cartago team thought of everything — even our dietary preferences. I recommend them wholeheartedly.",
    testimonial2Dest: "Honeymoon in the Maldives",
    testimonial2Text:
      "Our honeymoon was absolutely magical. Cartago exceeded all our expectations. An exceptional, warm and attentive service.",
    testimonial3Dest: "Stay in Santorini",
    testimonial3Text:
      "My first experience with Cartago and certainly not the last. Perfect hotel, attentive guide — everything delivered.",
   
    // CTA
    ctaTag: "Join the adventure",
    ctaTitle: "Ready to write",
    ctaTitleAccent: "your next story?",
    ctaText:
      "Our advisors are available to build with you the journey that suits you, at your pace and within your budget.",
  },
team: {
  badge: "Team Building",

  hero: {
    title: "Experiences that",
    highlight: "Unite Teams",
    description:
      "Whether you are an SME, multinational company or a group of friends, we design tailor-made team building activities to strengthen cohesion, boost motivation and create lasting memories.",
    button: "Request a Quote",
  },

  intro: {
    title: "Why Team Building with Cartago?",
    text1:
      "At Cartago, we believe that a united team is the key to success. For over 8 years, we have supported groups of all sizes — startups, SMEs and large companies — in creating experiences that go beyond simple entertainment.",
    text2:
      "Our programs are designed to strengthen communication, develop mutual trust and create lasting collective energy, far beyond the event day.",
  },

  benefits: [
    "100% customized programs based on your objectives",
    "Supervision by certified facilitators",
    "Local and international destinations available",
    "Complete support: logistics, accommodation, meals",
  ],

  activities: {
    outdoor: {
      title: "Outdoor Adventures",
      text:
        "Hiking, zip lines, obstacle courses — outdoor challenges that bring teams together like nothing else.",
    },
    creative: {
      title: "Creative Workshops",
      text:
        "Painting, pottery, cooking — artistic experiences that unlock creativity and encourage individual expression within the group.",
    },
    strategy: {
      title: "Strategic Challenges",
      text:
        "Escape games, treasure hunts and role-playing games to develop communication, decision-making and collective intelligence.",
    },
    food: {
      title: "Gastronomic Experiences",
      text:
        "Cooking classes, pastry workshops or themed dinners — sharing moments around the table strengthens human connections.",
    },
    seminars: {
      title: "Seminars & Team Cohesion",
      text:
        "Structured days focused on communication, leadership and collaboration between teams.",
    },
    corporate: {
      title: "Corporate Events",
      text:
        "Company evenings, product launches or incentive trips — we organize every detail to create unforgettable moments.",
    },
  },

  sections: {
    activities: "Our Activities",
    activitiesDesc:
      "A rich and varied catalog to meet every group profile, every budget and every ambition.",

    audience: "For Who?",
    audienceDesc:
      "Our programs adapt to every type of group, small or large.",

    ctaTitle: "Ready to Bring Your Team Together?",
    ctaText:
      "Share your goals and group size — our team will propose a turnkey program within 48 hours.",

    destinations: "View Our Destinations",
  },

  audience: {
    companies: {
      title: "Companies & Corporates",
      text:
        "Kick-offs, incentives, annual seminars or simple team days — we manage everything from A to Z so your employees leave motivated.",
    },

    groups: {
      title: "Groups & Associations",
      text:
        "Sports clubs, student associations, charity organizations — we create activities accessible to all budgets.",
    },

    startups: {
      title: "SMEs & Startups",
      text:
        "Agile and innovative formats for growing organizations that want to build a strong team culture from the beginning.",
    },
  },
},
    },
  },
  ar: {
    translation: {
      common: {
        contact: "اتصل بنا",
        loading: "جارٍ التحميل...",
        loadingDots: "جارٍ التحميل…",
        back: "رجوع",
        seeAll: "عرض الكل",
        resetFilters: "إعادة ضبط المرشحات",
        searchPlaceholderDestination: "ابحث عن وجهة أو بلد…",
        searchPlaceholderExplore: "ابحث عن مكان أو ولاية…",
        searchPlaceholderContact: "ابحث عن جهة اتصال…",
        french: "الفرنسية",
        english: "الإنجليزية",
        arabic: "العربية",
      },
      header: {
        home: "الرئيسية",
        teamBuilding: "بناء الفريق",
        medical: "السياحة العلاجية",
        destinations: "الوجهات",
        explore: "استكشف الجزائر",
        transport: "النقل",
        about: "من نحن",
        contactUs: "اتصل بنا",
        language: "تغيير اللغة",
      },
      footer: {
        description:
          "شريكك الموثوق لرحلات لا تُنسى. اكتشف العالم بعروض حصرية وخدمة مخصصة.",
        navigation: "التنقل",
        popular: "الأكثر شهرة",
        contact: "اتصل بنا",
        copyright: "© {{year}} Cartago Travel. جميع الحقوق محفوظة.",
      },
      routes: {
        home: "الرئيسية",
        destinations: "الوجهات",
        exploreDz: "استكشاف الجزائر",
        about: "من نحن",
        transport: "النقل",
        teamBuilding: "بناء الفريق",
        medical: "السياحة العلاجية",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
      },
      home: {
        heroTitle: "انطلق لاكتشاف",
        heroTitleAccent: "مغامرات جديدة",
        heroText:
          "اكتشف وجهات ساحرة ومغامرات لا تُنسى وتجارب سفر مخصصة صُممت خصيصًا لك.",
        ctaDestinations: "عرض الوجهات",
        ctaContact: "اتصل بنا",
        feature1: "حجز التذاكر",
        feature1Text: "أفضل عروض الطيران حول العالم.",
        feature2: "الإقامة",
        feature2Text: "إقامات فاخرة بأسعار معقولة.",
        feature3: "تأمين السفر",
        feature3Text: "خطط سفر آمنة وموثوقة.",
        feature4: "مساعدة 24/7",
        feature4Text: "دعم متوفر في أي وقت.",
        feature5: "النقل",
        feature5Text: "خيارات نقل مرنة ومريحة.",
        feature6: "التخطيط",
        feature6Text: "حلول تخطيط سفر مخصصة.",
        popularDestinations: "الوجهات الشائعة",
        popularText: "اكتشف أكثر وجهاتنا حبًا.",
        viewAll: "عرض الكل",
        whyTitle: "لماذا السفر مع Cartago؟",
        whyText:
          "نصنع تجارب لا تُنسى عبر برامج سفر مخصصة وعروض حصرية ودعم مخصص.",
        whyPoints: [
          "باقات سفر مصممة حسب الطلب",
          "أسعار تنافسية",
          "شركاء محليون موثوقون",
          "مستشارو سفر مخصصون",
        ],
        ctaTitle: "هل أنت مستعد لاستكشاف العالم؟",
        ctaText:
          "سواء كنت تحلم بإجازة في أوروبا أو إقامة في دبي أو رحلة مخصصة، فريقنا هنا لمساعدتك.",
      },
transport: {
  heroTitle: "النقل",
  heroTitleAccent: "على قدر الطلب",
  heroSubtitle: "من المطار إلى فندقك، من مدينة إلى أخرى أو عبر العالم — ننقلك بأسلوب وانضباط وراحة بال.",
  trust1: "أسطول حديث",
  trust2: "سائقون معتمدون",
  trust3: "متاح 24/7",
  tag1: "المجموعات والفعاليات",
  title1: "حافلات فاخرة",
  desc1: "سافر براحة على متن أسطولنا الحديث من الحافلات الفارهة، المجهزة بتكييف الهواء ومقاعد قابلة للإمالة وأقسام أمتعة واسعة ونظام ترفيه على متنها.",
  features1: ["حتى 55 راكبًا", "مقصورة مكيفة", "سائقون محترفون", "مقاعد مريحة قابلة للإمالة"],
  tag2: "العائلات والـ VIP",
  title2: "فانات مميزة",
  desc2: "مثالية للعائلات ومجموعات الأعمال والمسافرين VIP الباحثين عن المرونة والراحة والخصوصية طوال رحلتهم.",
  features2: ["من 6 إلى 15 راكبًا", "نقل خاص", "مقاعد فاخرة", "خدمة تنقل المطار"],
  tag3: "النخبة",
  title3: "الطائرات الخاصة",
  desc3: "عش تجربة الفخامة المطلقة والراحة التي لا مثيل لها مع حلول استئجار الطائرات الخاصة، المصممة للمديرين والشخصيات والمسافرين الاستثنائيين.",
  features3: ["تجربة VIP", "جداول مرنة", "مقصورات راقية", "وجهات عالمية"],
  ctaTitle: "هل تحتاج إلى نقل مخصص؟",
  ctaSubtitle: "فريقنا متاح على مدار الساعة لتنظيم نقلك، أينما كنت.",
  ctaContact: "اتصل بنا",
  ctaDestinations: "عرض الوجهات",
},
about: {
// Hero
heroTag: "قصتنا",
heroTitle: "السفر",
heroTitleAccent: "هو",
heroTitleEnd: "مهنتنا.",
heroText:
  "كارتاغو ترافق المسافرين الجزائريين نحو أجمل وجهات العالم. وُلدنا من قناعة بسيطة: كل شخص يستحق رحلة تعكس شخصيته.",
ctaDestinations: "وجهاتنا",
ctaContact: "اتصل بنا",
statYears: "سنوات من الخبرة",
statTravelers: "مسافر سعيد",

// Story section
storyTag: "من نحن",
storyTitle: "وكالة وُلدت",
storyTitleAccent: "من شغف",
storyTitleEnd: "، بُنيت على الثقة.",
storyText1:
  "كارتاغو ليست وكالة سفر عادية. كل عضو في فريقنا مسافر بنفسه — شخص عاش سحر شروق الشمس فوق معابد أنغكور، أو هدوء كوخ في جزر المالديف.",
storyText2:
  "هذه التجربة الشخصية هي ما يُغذّي كل مسار نبنيه لك. نحن لا نقرأ الكتيبات — بل نحكي لك ما عشناه.",

// Timeline milestones
milestone1Title: "ميلاد فكرة",
milestone1Desc:
  "تأسست كارتاغو في الجزائر العاصمة على يد فريق من عشاق السفر بهدف واحد: جعل السفر متاحًا ولا يُنسى لكل جزائري.",
milestone2Title: "أولى الوجهات",
milestone2Desc:
  "بعد عامين من التحضير، أطلقنا أولى باقاتنا نحو أوروبا والشرق الأوسط. وثق بنا أكثر من 500 مسافر في السنة الأولى.",
milestone3Title: "صمود وتجديد",
milestone3Desc:
  "في مواجهة الجائحة، تحوّلنا نحو الاستشارة والتخطيط عن بُعد. عزّزت هذه المرحلة التزامنا بالمرونة وحماية المسافر.",
milestone4Title: "التوسع الدولي",
milestone4Desc:
  "بلغنا 30 وجهة، وافتتحنا مكتبًا ثانيًا وأبرمنا شراكات مع أفضل الفنادق وشركات الطيران في العالم.",
milestone5Title: "كارتاغو اليوم",
milestone5Desc:
  "أكثر من 10,000 مسافر راضٍ، و50+ وجهة، وفريق من 20 مستشارًا متفانيًا. المغامرة لم تبدأ بعد.",

// Values
valuesTag: "ما يوجّهنا",
valuesTitle: "قيمنا",
valuesSubtitle: "ثلاثة مبادئ تحكم كل قرار نتخذه وكل رحلة نخطط لها.",
value1Title: "الشغف أولاً",
value1Desc:
  "كل رحلة نصمّمها هي انعكاس لحبّنا الشخصي للعالم. نحن لا نبيع تذاكر — بل نصنع ذكريات تدوم.",
value2Title: "ثقتك أولويتنا",
value2Desc:
  "دفع آمن، تأمين إلغاء، مساعدة على مدار الساعة: لا نترك أي مسافر وحيدًا في مواجهة المفاجآت.",
value3Title: "شركاء موثوقون",
value3Desc:
  "كل فندق وناقل ومرشد محلي يُختار بعد تدقيق صارم. لا شيء يُترك للصدفة.",

// Testimonials
testimonialsTag: "وثقوا بنا",
testimonialsTitle: "ما يقولونه عنّا",
testimonial1Dest: "رحلة إلى دبي",
testimonial1Text:
  "تنظيم مثالي من البداية إلى النهاية. فكّر فريق كارتاغو في كل شيء — حتى تفضيلاتنا الغذائية. أنصح بهم بعيون مغمضة.",
testimonial2Dest: "شهر عسل في المالديف",
testimonial2Text:
  "كانت رحلة شهر العسل سحرية تمامًا. تجاوزت كارتاغو كل توقعاتنا. خدمة استثنائية وإنسانية ومتجاوبة.",
testimonial3Dest: "إقامة في سانتوريني",
testimonial3Text:
  "تجربتي الأولى مع كارتاغو وبالتأكيد ليست الأخيرة. فندق مثالي، مرشد متفانٍ، كل شيء كان في موعده.",

// CTA
ctaTag: "انضم إلى المغامرة",
ctaTitle: "مستعد لتكتب",
ctaTitleAccent: "قصتك القادمة؟",
ctaText:
  "مستشارونا في خدمتك لبناء الرحلة التي تناسبك، بإيقاعك وضمن ميزانيتك.",
},
team: {
  badge: "بناء الفريق",

  hero: {
    title: "تجارب",
    highlight: "تجمع الفرق",
    description:
      "سواء كنتم شركة صغيرة أو مؤسسة متعددة الجنسيات أو مجموعة أصدقاء، نصمم أنشطة بناء فريق مخصصة لتعزيز التعاون وخلق ذكريات تدوم.",
    button: "اطلب عرض سعر",
  },

  intro: {
    title: "لماذا بناء الفريق مع Cartago؟",
    text1:
      "نؤمن في Cartago أن الفريق المتماسك هو مفتاح النجاح. منذ أكثر من 8 سنوات نرافق الشركات والمجموعات لإنشاء تجارب تتجاوز الترفيه العادي.",
    text2:
      "برامجنا تساعد على تطوير التواصل والثقة وروح التعاون المستمرة.",
  },

  benefits: [
    "برامج مخصصة 100% حسب أهدافكم",
    "إشراف من منشطين محترفين",
    "وجهات محلية ودولية متاحة",
    "تكفل كامل: النقل، الإقامة، الوجبات",
  ],

  activities: {
    outdoor: {
      title: "مغامرات خارجية",
      text:
        "رحلات، تحديات ومسارات خارجية تقوي روابط الفريق.",
    },
    creative: {
      title: "ورشات إبداعية",
      text:
        "الرسم، الفخار والطبخ لتنمية الإبداع.",
    },
    strategy: {
      title: "تحديات استراتيجية",
      text:
        "ألعاب جماعية لتطوير التواصل واتخاذ القرار.",
    },
    food: {
      title: "تجارب غذائية",
      text:
        "ورش طبخ وتجارب مشاركة حول الطعام.",
    },
    seminars: {
      title: "ندوات وتماسك الفريق",
      text:
        "برامج تركز على القيادة والتعاون.",
    },
    corporate: {
      title: "فعاليات الشركات",
      text:
        "تنظيم فعاليات ورحلات تحفيزية للشركات.",
    },
  },

  sections: {
    activities: "أنشطتنا",
    activitiesDesc:
      "مجموعة متنوعة من البرامج تناسب كل الفرق والميزانيات.",

    audience: "لمن؟",
    audienceDesc:
      "برامجنا تناسب جميع أنواع المجموعات الصغيرة والكبيرة.",

    ctaTitle: "هل أنت مستعد لتوحيد فريقك؟",
    ctaText:
      "شاركنا أهدافك وعدد أفراد مجموعتك — سيقترح فريقنا برنامجاً متكاملاً خلال 48 ساعة.",

    destinations: "شاهد وجهاتنا",
  },

  audience: {
    companies: {
      title: "الشركات والمؤسسات",
      text:
        "فعاليات الشركات، الحوافز والندوات — نتكفل بكل التفاصيل لضمان تجربة ناجحة.",
    },

    groups: {
      title: "المجموعات والجمعيات",
      text:
        "الأندية الرياضية والجمعيات والمنظمات — نصمم أنشطة تناسب جميع الميزانيات.",
    },

    startups: {
      title: "الشركات الناشئة والمؤسسات الصغيرة",
      text:
        "برامج مرنة ومبتكرة لبناء ثقافة فريق قوية.",
    },
  },
},
    },
  },

};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
