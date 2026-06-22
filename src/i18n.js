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
      medical: {
        heroBadge: "Tourisme Médical",
        heroTitle: "SOIGNEZ-VOUS À L'ÉTRANGER,",
        heroTitleAccent: "EN TOUTE CONFIANCE.",
        heroSubtitle:
          "Cartago vous accompagne de A à Z dans votre parcours de soin à l'international — dossier médical, vol, hébergement, clinique partenaire et suivi post-opératoire. Vous vous concentrez sur votre santé, nous gérons le reste.",
        heroCtaContact: "Contact",
        heroCtaDestinations: "Nos Destinations",
        whyTitlePrefix: "Votre Santé Mérite le",
        whyTitleAccent: "Meilleur",
        whyText1:
          "Le tourisme médical permet d'accéder à des soins de très haute qualité dans des pays où l'expertise médicale est reconnue mondialement, pour des coûts souvent 2 à 5 fois inférieurs à ceux pratiqués en Europe ou en Algérie.",
        whyText2:
          "Chez Cartago, nous sélectionnons rigoureusement nos cliniques partenaires — accréditations internationales, chirurgiens formés à l'étranger, normes d'hygiène irréprochables. Vous ne voyagez jamais seul dans votre démarche.",
        whyBenefits: [
          "Cliniques certifiées JCI ou équivalent international",
          "Coordination médicale en français tout au long du séjour",
          "Devis transparent incluant tous les frais annexes",
          "Suivi post-opératoire assuré à votre retour",
          "Assurance voyage médicale spécifique incluse",
        ],
        whyImageAlt: "Clinique médicale moderne",
        specialtiesTitle: "Nos Spécialités",
        specialtiesText:
          "Des disciplines médicales soigneusement sélectionnées, dans des établissements de référence à travers le monde.",
        specialties: {
          dental: {
            title: "Dentisterie",
            text: "Implants, facettes, soins esthétiques et réhabilitation complète du sourire.",
          },
          eye: {
            title: "Ophtalmologie",
            text: "Chirurgie réfractive, cataracte et traitements de pointe pour la vision.",
          },
          heart: {
            title: "Cardiologie",
            text: "Bilan, prise en charge et intervention dans des centres spécialisés.",
          },
          weight: {
            title: "Bariatrique",
            text: "Solutions médicales pour la gestion durable du poids et du métabolisme.",
          },
          bone: {
            title: "Orthopédie",
            text: "Prothèses, traumatologie et rééducation avec des équipes expertes.",
          },
          beauty: {
            title: "Esthétique",
            text: "Chirurgie plastique et soins de beauté réalisés dans un cadre sécurisé.",
          },
        },
        stepsTitle: "Comment Ça Marche ?",
        stepsText:
          "Un parcours structuré, humain et transparent de la première consultation jusqu'au retour à domicile.",
        steps: {
          one: {
            title: "Premier contact",
            text: "Vous nous décrivez votre besoin et nous analysons votre dossier sans engagement.",
          },
          two: {
            title: "Avis médical",
            text: "Nous orientons votre demande vers la clinique et le spécialiste les plus adaptés.",
          },
          three: {
            title: "Planification",
            text: "Nous organisons le vol, l'hébergement, les transferts et le calendrier de soins.",
          },
          four: {
            title: "Séjour encadré",
            text: "Un coordinateur dédié vous accompagne sur place tout au long du séjour.",
          },
          five: {
            title: "Retour et suivi",
            text: "Nous assurons le suivi post-opératoire et restons disponibles à votre retour.",
          },
        },
        includedTitle: "Ce Qui Est Inclus",
        includedText:
          "Un forfait tout compris pour que vous n'ayez à penser qu'à votre rétablissement.",
        includedServices: {
          coordination: {
            title: "Coordination Médicale",
            text: "Un coordinateur dédié gère votre dossier, traduit vos documents et reste disponible 24h/24 durant votre séjour.",
          },
          travel: {
            title: "Vols & Transferts",
            text: "Billets d'avion, navettes aéroport-clinique et déplacements locaux organisés et confirmés avant votre départ.",
          },
          accommodation: {
            title: "Hébergement",
            text: "Hôtels sélectionnés à proximité des cliniques, adaptés à la convalescence, avec chambre individuelle et petits-déjeuners.",
          },
          clinical: {
            title: "Prise en Charge Clinique",
            text: "Rendez-vous médicaux, analyses pré-opératoires, intervention, chambre d'hospitalisation et soins infirmiers post-op.",
          },
        },
        ctaImageAlt: "Équipe médicale en consultation",
        ctaBadge: "Première étape gratuite",
        ctaTitle: "Parlez-nous de votre Projet de Soin",
        ctaText:
          "Envoyez-nous vos documents médicaux ou décrivez simplement votre besoin. Notre équipe vous répond sous 24 h avec une première orientation gratuite et sans engagement.",
        ctaContact: "Consultation Gratuite",
        ctaDestinations: "Voir nos Destinations",
      },
      destinationsPage: {
        heroTitle: "VOS PROCHAINES",
        heroTitleAccent: "AVENTURES",
        heroTitleEnd: "VOUS ATTENDENT",
        heroText:
          "Plus de 50 destinations soigneusement sélectionnées pour vous offrir des voyages qui marquent à jamais.",
        searchPlaceholder: "Rechercher une destination, un pays…",
        stats: [
          { value: "50+", label: "Destinations" },
          { value: "10 000+", label: "Voyageurs satisfaits" },
          { value: "4.9 / 5", label: "Note moyenne" },
        ],
        filters: ["Tous", "Europe", "Asie", "Afrique", "Moyen-Orient", "Amériques"],
        loading: "Chargement des destinations…",
        error: "Impossible de charger les destinations pour le moment.",
        retry: "Vérifiez votre connexion ou réessayez plus tard.",
        emptyTitle: "Aucune destination trouvée",
        emptyText: "Essayez un autre terme ou explorez toutes nos destinations.",
        resetFilters: "Réinitialiser les filtres",
        resultsOne: "destination trouvée",
        resultsMany: "destinations trouvées",
        features: {
          flights: {
            title: "Vols inclus",
            text: "Tous nos forfaits incluent les billets d'avion aller-retour depuis l'Algérie.",
          },
          hotels: {
            title: "Hôtels sélectionnés",
            text: "Des établissements testés et validés par notre équipe sur le terrain.",
          },
          trust: {
            title: "Voyagez en confiance",
            text: "Assurance annulation, assistance 24h/24 et paiement sécurisé.",
          },
        },
        ctaBadge: "Votre voyage sur mesure",
        ctaTitlePrefix: "Vous ne trouvez pas",
        ctaTitleAccent: "ce que vous cherchez ?",
        ctaText:
          "Nos conseillers vous concoctent un voyage entièrement personnalisé selon vos envies, votre budget et vos dates.",
        ctaButton: "Demander un devis gratuit",
        ctaCall: "Appeler un conseiller",
        cardDaysSuffix: "jours",
        cardViewMore: "Voir plus",
      },
      destinationDetails: {
        back: "Retour",
        notFoundTitle: "Destination introuvable",
        notFoundText: "Cette destination n'existe pas ou a été supprimée.",
        notFoundCta: "Voir toutes les destinations",
        about: "À propos",
        highlights: "Points forts",
        gallery: "Galerie",
        itinerary: "Programme jour par jour",
        included: "Inclus",
        daysSuffix: "jours",
        groupPrefix: "Groupe :",
        departFromAlgiers: "Vol depuis Alger",
        cancelInsurance: "Assurance annulation incluse",
        book: "Réserver ce voyage",
        callAdvisor: "Appeler un conseiller",
        securePayment: "Paiement sécurisé · Annulation flexible",
        discoverAlso: "Découvrir aussi",
        otherDestinations: "Autres destinations",
      },
      exploreDz: {
        heroTitle: "EXPLORER",
        heroTitleAccent: "L'ALGÉRIE",
        heroText:
          "Du Sahara aux côtes méditerranéennes, des massifs kabyles aux plaines du Tell — l'Algérie est le plus grand pays d'Afrique et l'un des moins explorés.",
        searchPlaceholder: "Rechercher un lieu, une wilaya…",
        stats: [
          { value: "48", label: "Wilayas à explorer" },
          { value: "3", label: "Sites UNESCO" },
          { value: "2 381 741 km²", label: "Le plus grand pays d'Afrique" },
        ],
        filters: ["Tous", "Désert", "Patrimoine", "Nature", "Nord"],
        loading: "Chargement des lieux…",
        emptyTitle: "Aucun lieu trouvé",
        emptyText: "Essayez un autre terme ou explorez toutes les régions.",
        resetFilters: "Réinitialiser les filtres",
        resultsOne: "lieu trouvé",
        resultsMany: "lieux trouvés",
        regionsTitle: "L'Algérie par ses régions",
        regions: [
          {
            title: "Grand Sud",
            text: "Erg, regs, oasis et volcans : le Sahara algérien couvre plus de 2 millions de km². Hoggar, Tassili, Erg Occidental.",
          },
          {
            title: "Hauts Plateaux & Tell",
            text: "Timgad, Djémila, Tipasa, Cirta — un arc de cités romaines classées UNESCO sur fond de montagnes vertes.",
          },
          {
            title: "Nord & Méditerranée",
            text: "Côtes kabyles, parcs nationaux, forêts de pins et ports de pêche où la mer est encore sauvage.",
          },
        ],
        ctaBadge: "Voyage sur mesure en Algérie",
        ctaTitlePrefix: "Prêt à découvrir",
        ctaTitleAccent: "votre propre pays ?",
        ctaText:
          "Nos guides locaux vous emmènent là où les agences ordinaires ne vont pas. Circuits privés, bivouacs sahariens, rencontres authentiques.",
        ctaButton: "Planifier mon circuit",
        ctaCall: "Appeler un conseiller",
        cardButton: "Voir ce lieu",
        cardRating: "Note",
        cardDurationSuffix: "jours",
      },
      exploreDetails: {
        loading: "Chargement de la destination...",
        notFoundTitle: "Destination introuvable",
        notFoundText: "Retour",
        gallery: "Galerie",
        bookingTitle: "Envie de visiter ?",
        bookingText:
          "Organisez votre voyage avec notre équipe et découvrez cette destination avec un circuit adapté.",
        bookingButton: "Réserver ce voyage",
        bookingCall: "Appeler un conseiller",
        back: "Retour",
        daysSuffix: "jours",
        heroDurationSuffix: "jours",
        heroRatingSuffix: "/5",
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
      medical: {
        heroBadge: "Medical Tourism",
        heroTitle: "GET TREATED ABROAD,",
        heroTitleAccent: "WITH COMPLETE CONFIDENCE.",
        heroSubtitle:
          "Cartago supports you end to end in your international care journey — medical file, flights, accommodation, partner clinic and post-operative follow-up. You focus on your health, we handle the rest.",
        heroCtaContact: "Contact",
        heroCtaDestinations: "Our Destinations",
        whyTitlePrefix: "Your Health Deserves the",
        whyTitleAccent: "Best",
        whyText1:
          "Medical tourism gives access to top-quality care in countries where medical expertise is internationally recognized, often at costs 2 to 5 times lower than in Europe or Algeria.",
        whyText2:
          "At Cartago, we carefully select our partner clinics — international accreditations, doctors trained abroad, and impeccable hygiene standards. You never travel alone in your process.",
        whyBenefits: [
          "JCI-certified clinics or equivalent international standards",
          "French-speaking medical coordination throughout the stay",
          "Transparent quotes including all additional fees",
          "Post-operative follow-up after you return home",
          "Dedicated medical travel insurance included",
        ],
        whyImageAlt: "Modern medical clinic",
        specialtiesTitle: "Our Specialties",
        specialtiesText:
          "Carefully selected medical disciplines in leading facilities around the world.",
        specialties: {
          dental: {
            title: "Dentistry",
            text: "Implants, veneers, cosmetic care and complete smile restoration.",
          },
          eye: {
            title: "Ophthalmology",
            text: "Refractive surgery, cataract care and advanced vision treatments.",
          },
          heart: {
            title: "Cardiology",
            text: "Diagnostics, treatment and interventions in specialized centers.",
          },
          weight: {
            title: "Bariatric Care",
            text: "Medical solutions for long-term weight and metabolic management.",
          },
          bone: {
            title: "Orthopedics",
            text: "Prosthetics, trauma care and rehabilitation with expert teams.",
          },
          beauty: {
            title: "Aesthetics",
            text: "Plastic surgery and beauty treatments delivered in a safe setting.",
          },
        },
        stepsTitle: "How It Works?",
        stepsText:
          "A structured, human and transparent journey from the first consultation to your return home.",
        steps: {
          one: {
            title: "First contact",
            text: "You describe your needs and we review your file with no commitment.",
          },
          two: {
            title: "Medical review",
            text: "We direct your request to the most suitable clinic and specialist.",
          },
          three: {
            title: "Planning",
            text: "We arrange flights, accommodation, transfers and your care schedule.",
          },
          four: {
            title: "Guided stay",
            text: "A dedicated coordinator supports you on site throughout your stay.",
          },
          five: {
            title: "Return and follow-up",
            text: "We ensure post-operative follow-up and remain available after you return.",
          },
        },
        includedTitle: "What Is Included",
        includedText:
          "An all-inclusive package so you can focus only on your recovery.",
        includedServices: {
          coordination: {
            title: "Medical Coordination",
            text: "A dedicated coordinator manages your file, translates your documents and stays available 24/7 during your stay.",
          },
          travel: {
            title: "Flights & Transfers",
            text: "Flights, airport-clinic shuttles and local transfers arranged and confirmed before departure.",
          },
          accommodation: {
            title: "Accommodation",
            text: "Hotels selected near the clinics, adapted for recovery, with private rooms and breakfast.",
          },
          clinical: {
            title: "Clinical Care",
            text: "Medical appointments, pre-op tests, surgery, hospital room and post-op nursing care.",
          },
        },
        ctaImageAlt: "Medical team in consultation",
        ctaBadge: "Free first step",
        ctaTitle: "Tell us about your care project",
        ctaText:
          "Send us your medical documents or simply describe your needs. Our team replies within 24 hours with a free, no-obligation first assessment.",
        ctaContact: "Free Consultation",
        ctaDestinations: "See Destinations",
      },
      destinationsPage: {
        heroTitle: "YOUR NEXT",
        heroTitleAccent: "ADVENTURES",
        heroTitleEnd: "ARE WAITING",
        heroText:
          "More than 50 carefully selected destinations to give you journeys that stay with you forever.",
        searchPlaceholder: "Search a destination, a country…",
        stats: [
          { value: "50+", label: "Destinations" },
          { value: "10,000+", label: "Happy travellers" },
          { value: "4.9 / 5", label: "Average rating" },
        ],
        filters: ["All", "Europe", "Asia", "Africa", "Middle East", "Americas"],
        loading: "Loading destinations…",
        error: "We can't load the destinations right now.",
        retry: "Check your connection or try again later.",
        emptyTitle: "No destination found",
        emptyText: "Try another term or explore all our destinations.",
        resetFilters: "Reset filters",
        resultsOne: "destination found",
        resultsMany: "destinations found",
        features: {
          flights: {
            title: "Flights included",
            text: "All our packages include round-trip flights from Algeria.",
          },
          hotels: {
            title: "Selected hotels",
            text: "Properties tested and approved by our on-the-ground team.",
          },
          trust: {
            title: "Travel with confidence",
            text: "Cancellation insurance, 24/7 assistance and secure payment.",
          },
        },
        ctaBadge: "Your tailor-made trip",
        ctaTitlePrefix: "Can't find",
        ctaTitleAccent: "what you're looking for?",
        ctaText:
          "Our advisors build a fully personalized trip based on your wishes, budget and dates.",
        ctaButton: "Request a free quote",
        ctaCall: "Call an advisor",
        cardDaysSuffix: "days",
        cardViewMore: "View more",
      },
      destinationDetails: {
        back: "Back",
        notFoundTitle: "Destination not found",
        notFoundText: "This destination doesn't exist or has been removed.",
        notFoundCta: "See all destinations",
        about: "About",
        highlights: "Highlights",
        gallery: "Gallery",
        itinerary: "Day-by-day itinerary",
        included: "Included",
        daysSuffix: "days",
        groupPrefix: "Group:",
        departFromAlgiers: "Flight from Algiers",
        cancelInsurance: "Cancellation insurance included",
        book: "Book this trip",
        callAdvisor: "Call an advisor",
        securePayment: "Secure payment · Flexible cancellation",
        discoverAlso: "Discover also",
        otherDestinations: "Other destinations",
      },
      exploreDz: {
        heroTitle: "EXPLORE",
        heroTitleAccent: "ALGERIA",
        heroText:
          "From the Sahara to the Mediterranean coast, from the Kabylie mountains to the Tell plains — Algeria is Africa's largest country and one of its least explored.",
        searchPlaceholder: "Search a place, a wilaya…",
        stats: [
          { value: "48", label: "Wilayas to explore" },
          { value: "3", label: "UNESCO sites" },
          { value: "2,381,741 km²", label: "Africa's largest country" },
        ],
        filters: ["All", "Desert", "Heritage", "Nature", "North"],
        loading: "Loading places…",
        emptyTitle: "No place found",
        emptyText: "Try another term or explore all regions.",
        resetFilters: "Reset filters",
        resultsOne: "place found",
        resultsMany: "places found",
        regionsTitle: "Algeria by region",
        regions: [
          {
            title: "Great South",
            text: "Ergs, regs, oases and volcanoes: the Algerian Sahara spans more than 2 million km². Hoggar, Tassili, Western Erg.",
          },
          {
            title: "High Plateaus & Tell",
            text: "Timgad, Djemila, Tipasa, Cirta — an arc of UNESCO-listed Roman cities against green mountains.",
          },
          {
            title: "North & Mediterranean",
            text: "Kabyle coasts, national parks, pine forests and fishing ports where the sea still feels wild.",
          },
        ],
        ctaBadge: "Tailor-made travel in Algeria",
        ctaTitlePrefix: "Ready to discover",
        ctaTitleAccent: "your own country?",
        ctaText:
          "Our local guides take you where ordinary agencies don't go. Private circuits, desert bivouacs, authentic encounters.",
        ctaButton: "Plan my circuit",
        ctaCall: "Call an advisor",
        cardButton: "View this place",
        cardRating: "Rating",
        cardDurationSuffix: "days",
      },
      exploreDetails: {
        loading: "Loading destination...",
        notFoundTitle: "Destination not found",
        notFoundText: "Back",
        gallery: "Gallery",
        bookingTitle: "Want to visit?",
        bookingText:
          "Plan your trip with our team and discover this destination with a suitable circuit.",
        bookingButton: "Book this trip",
        bookingCall: "Call an advisor",
        back: "Back",
        daysSuffix: "days",
        heroDurationSuffix: "days",
        heroRatingSuffix: "/5",
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
      medical: {
        heroBadge: "السياحة العلاجية",
        heroTitle: "تلَقَّ العلاج في الخارج،",
        heroTitleAccent: "بثقة كاملة.",
        heroSubtitle:
          "ترافقك Cartago من البداية إلى النهاية في رحلة العلاج الدولية — الملف الطبي، التذاكر، الإقامة، العيادة الشريكة والمتابعة بعد العملية. أنت تركز على صحتك، ونحن نتولى الباقي.",
        heroCtaContact: "اتصل بنا",
        heroCtaDestinations: "وجهاتنا",
        whyTitlePrefix: "صحتك تستحق",
        whyTitleAccent: "الأفضل",
        whyText1:
          "تتيح السياحة العلاجية الوصول إلى رعاية عالية الجودة في دول تتمتع بخبرة طبية معترف بها دوليًا، وبكلفة أقل غالبًا من أوروبا أو الجزائر بما يصل إلى 2 إلى 5 مرات.",
        whyText2:
          "في Cartago نختار عياداتنا الشريكة بعناية — اعتماد دولي، أطباء تلقوا تدريبهم في الخارج، ومعايير نظافة صارمة. أنت لا تسافر وحدك أبدًا في هذه الرحلة.",
        whyBenefits: [
          "عيادات معتمدة JCI أو ما يعادلها دوليًا",
          "تنسيق طبي باللغة الفرنسية طوال فترة الإقامة",
          "عروض شفافة تشمل جميع التكاليف الإضافية",
          "متابعة بعد العملية عند عودتك",
          "تأمين سفر طبي مخصص مشمول",
        ],
        whyImageAlt: "عيادة طبية حديثة",
        specialtiesTitle: "تخصصاتنا الطبية",
        specialtiesText:
          "تخصصات طبية مختارة بعناية داخل مؤسسات مرجعية حول العالم.",
        specialties: {
          dental: {
            title: "طب الأسنان",
            text: "زرعات، قشور تجميلية، وعلاجات متقدمة لاستعادة الابتسامة.",
          },
          eye: {
            title: "طب العيون",
            text: "جراحة تصحيح النظر، علاج الساد، وعلاجات متقدمة للرؤية.",
          },
          heart: {
            title: "أمراض القلب",
            text: "تشخيص وعلاج وتدخلات في مراكز متخصصة.",
          },
          weight: {
            title: "الجراحة السُّمنة",
            text: "حلول طبية لإدارة الوزن والتمثيل الغذائي على المدى الطويل.",
          },
          bone: {
            title: "جراحة العظام",
            text: "تعويضات، علاج الإصابات وإعادة التأهيل مع فرق خبيرة.",
          },
          beauty: {
            title: "التجميل",
            text: "جراحات تجميل وعلاجات جمال ضمن بيئة آمنة.",
          },
        },
        stepsTitle: "كيف تعمل الخدمة؟",
        stepsText:
          "رحلة منظمة وإنسانية وشفافة من أول استشارة حتى العودة إلى المنزل.",
        steps: {
          one: {
            title: "التواصل الأول",
            text: "تصف لنا احتياجك ونراجع ملفك بدون أي التزام.",
          },
          two: {
            title: "تقييم طبي",
            text: "نوجّه طلبك إلى العيادة والطبيب الأنسب لحالتك.",
          },
          three: {
            title: "التخطيط",
            text: "ننظم الرحلة والإقامة والتنقلات وجدول الرعاية الطبية.",
          },
          four: {
            title: "إقامة بإشراف",
            text: "يرافقك منسق مخصص في المكان طوال فترة الإقامة.",
          },
          five: {
            title: "العودة والمتابعة",
            text: "نؤمّن المتابعة بعد العملية ونبقى متاحين بعد عودتك.",
          },
        },
        includedTitle: "ما الذي يشمله العرض",
        includedText:
          "باقة شاملة حتى تركز فقط على التعافي.",
        includedServices: {
          coordination: {
            title: "التنسيق الطبي",
            text: "منسق مخصص يدير ملفك، يترجم مستنداتك ويبقى متاحًا 24/7 خلال الإقامة.",
          },
          travel: {
            title: "الرحلات والتنقلات",
            text: "تذاكر الطيران، تنقلات المطار-العيادة والتنقلات المحلية منظمة ومؤكدة قبل السفر.",
          },
          accommodation: {
            title: "الإقامة",
            text: "فنادق مختارة بالقرب من العيادات ومناسبة لفترة النقاهة مع غرفة خاصة وإفطار.",
          },
          clinical: {
            title: "الرعاية السريرية",
            text: "المواعيد الطبية، الفحوصات قبل العملية، التدخل، الغرفة الطبية والتمريض بعد العملية.",
          },
        },
        ctaImageAlt: "فريق طبي في استشارة",
        ctaBadge: "الخطوة الأولى مجانية",
        ctaTitle: "حدثنا عن مشروعك العلاجي",
        ctaText:
          "أرسل لنا ملفاتك الطبية أو صف احتياجك ببساطة. يرد فريقنا خلال 24 ساعة مع توجيه أولي مجاني ودون التزام.",
        ctaContact: "استشارة مجانية",
        ctaDestinations: "عرض الوجهات",
      },
      destinationsPage: {
        heroTitle: "وجهاتك",
        heroTitleAccent: "القادمة",
        heroTitleEnd: "تنتظرك",
        heroText:
          "أكثر من 50 وجهة مختارة بعناية لتمنحك رحلات تبقى في الذاكرة.",
        searchPlaceholder: "ابحث عن وجهة أو بلد…",
        stats: [
          { value: "50+", label: "وجهة" },
          { value: "10,000+", label: "مسافر سعيد" },
          { value: "4.9 / 5", label: "التقييم المتوسط" },
        ],
        filters: ["الكل", "أوروبا", "آسيا", "إفريقيا", "الشرق الأوسط", "الأمريكتان"],
        loading: "جارٍ تحميل الوجهات…",
        error: "لا يمكننا تحميل الوجهات الآن.",
        retry: "تحقق من اتصالك أو أعد المحاولة لاحقًا.",
        emptyTitle: "لم يتم العثور على وجهة",
        emptyText: "جرّب مصطلحًا آخر أو استكشف جميع وجهاتنا.",
        resetFilters: "إعادة ضبط المرشحات",
        resultsOne: "وجهة واحدة",
        resultsMany: "وجهات",
        features: {
          flights: {
            title: "رحلات مشمولة",
            text: "جميع باقاتنا تشمل تذاكر الطيران ذهابًا وإيابًا من الجزائر.",
          },
          hotels: {
            title: "فنادق مختارة",
            text: "فنادق مختبرة ومعتمدة من فريقنا الميداني.",
          },
          trust: {
            title: "سافر بثقة",
            text: "تأمين إلغاء، دعم على مدار الساعة، ودفع آمن.",
          },
        },
        ctaBadge: "رحلتك المصممة خصيصًا",
        ctaTitlePrefix: "ألا تجد",
        ctaTitleAccent: "ما تبحث عنه؟",
        ctaText:
          "يقوم مستشارونا بإعداد رحلة مخصصة بالكامل حسب رغباتك وميزانيتك وتواريخك.",
        ctaButton: "اطلب عرضًا مجانيًا",
        ctaCall: "اتصل بمستشار",
        cardDaysSuffix: "أيام",
        cardViewMore: "عرض المزيد",
      },
      destinationDetails: {
        back: "رجوع",
        notFoundTitle: "الوجهة غير موجودة",
        notFoundText: "هذه الوجهة غير موجودة أو تم حذفها.",
        notFoundCta: "عرض جميع الوجهات",
        about: "نبذة",
        highlights: "أبرز المزايا",
        gallery: "المعرض",
        itinerary: "البرنامج اليومي",
        included: "المشمول",
        daysSuffix: "أيام",
        groupPrefix: "المجموعة:",
        departFromAlgiers: "رحلة من الجزائر",
        cancelInsurance: "تأمين الإلغاء مشمول",
        book: "احجز هذه الرحلة",
        callAdvisor: "اتصل بمستشار",
        securePayment: "دفع آمن · إلغاء مرن",
        discoverAlso: "اكتشف أيضًا",
        otherDestinations: "وجهات أخرى",
      },
      exploreDz: {
        heroTitle: "اكتشف",
        heroTitleAccent: "الجزائر",
        heroText:
          "من الصحراء الكبرى إلى سواحل المتوسط، ومن جبال القبائل إلى سهول التل — الجزائر أكبر بلد في إفريقيا وأقلها استكشافًا.",
        searchPlaceholder: "ابحث عن مكان أو ولاية…",
        stats: [
          { value: "48", label: "ولاية للاستكشاف" },
          { value: "3", label: "مواقع يونسكو" },
          { value: "2,381,741 كم²", label: "أكبر بلد في إفريقيا" },
        ],
        filters: ["الكل", "الصحراء", "التراث", "الطبيعة", "الشمال"],
        loading: "جارٍ تحميل الأماكن…",
        emptyTitle: "لم يتم العثور على مكان",
        emptyText: "جرّب مصطلحًا آخر أو استكشف جميع المناطق.",
        resetFilters: "إعادة ضبط المرشحات",
        resultsOne: "مكان واحد",
        resultsMany: "أماكن",
        regionsTitle: "الجزائر حسب المناطق",
        regions: [
          {
            title: "الجنوب الكبير",
            text: "كثبان ورُقع رملية وواحات وبراكين: تغطي الصحراء الجزائرية أكثر من مليوني كيلومتر مربع. الهقار، الطاسيلي، العرق الغربي.",
          },
          {
            title: "الهضاب العليا والتل",
            text: "تيمقاد، جميلة، تيبازة، سيرتا — قوس من المدن الرومانية المصنفة ضمن يونسكو وسط جبال خضراء.",
          },
          {
            title: "الشمال والبحر المتوسط",
            text: "سواحل القبائل، المتنزهات الوطنية، غابات الصنوبر وموانئ الصيد حيث ما يزال البحر بريًا.",
          },
        ],
        ctaBadge: "رحلة مصممة في الجزائر",
        ctaTitlePrefix: "هل أنت مستعد لاكتشاف",
        ctaTitleAccent: "بلدك؟",
        ctaText:
          "يأخذك مرشدونا المحليون إلى أماكن لا تصلها الوكالات العادية. برامج خاصة، تخييم صحراوي، ولقاءات أصيلة.",
        ctaButton: "خطط لرحلتي",
        ctaCall: "اتصل بمستشار",
        cardButton: "عرض هذا المكان",
        cardRating: "التقييم",
        cardDurationSuffix: "أيام",
      },
      exploreDetails: {
        loading: "جارٍ تحميل الوجهة...",
        notFoundTitle: "الوجهة غير موجودة",
        notFoundText: "رجوع",
        gallery: "المعرض",
        bookingTitle: "هل ترغب في الزيارة؟",
        bookingText:
          "نظم رحلتك مع فريقنا واكتشف هذه الوجهة عبر برنامج مناسب.",
        bookingButton: "احجز هذه الرحلة",
        bookingCall: "اتصل بمستشار",
        back: "رجوع",
        daysSuffix: "أيام",
        heroDurationSuffix: "أيام",
        heroRatingSuffix: "/5",
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
