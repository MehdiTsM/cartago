import {
  FaUsers,
  FaMountain,
  FaPalette,
  FaUtensils,
  FaChessKnight,
  FaHandshake,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const activities = [
  {
    icon: <FaMountain />,
    title: "Aventures Outdoor",
    text: "Randonnées, tyroliennes, parcours d'obstacles — des défis en plein air qui soudent les équipes comme rien d'autre.",
  },
  {
    icon: <FaPalette />,
    title: "Ateliers Créatifs",
    text: "Peinture, poterie, cuisine — des expériences artistiques qui libèrent la créativité et favorisent l'expression individuelle au sein du groupe.",
  },
  {
    icon: <FaChessKnight />,
    title: "Challenges Stratégiques",
    text: "Escape games, chasses au trésor et jeux de rôle pour développer la communication, la prise de décision et l'intelligence collective.",
  },
  {
    icon: <FaUtensils />,
    title: "Expériences Gastronomiques",
    text: "Cours de cuisine, ateliers pâtisserie ou dîners thématiques — le plaisir du partage autour de la table renforce les liens humains.",
  },
  {
    icon: <FaHandshake />,
    title: "Séminaires & Cohésion",
    text: "Des journées structurées autour de la communication bienveillante, du leadership et de la collaboration interéquipes.",
  },
  {
    icon: <FaUsers />,
    title: "Événements Corporatifs",
    text: "Soirées d'entreprise, lancements de produits ou voyages incentive — nous orchestrons chaque détail pour marquer les esprits.",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    label: "Outdoor & Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    label: "Séminaires",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    label: "Ateliers Créatifs",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    label: "Cohésion d'Équipe",
  },
];


export default function TeamBuilding() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        
<img
  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop"
  alt=""
  aria-hidden="true"
  className="absolute inset-0 w-full h-full object-cover object-center"
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
  }}
/>

<div
  className="absolute inset-0 bg-black/55"
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
  }}
/>

        <div className="relative z-10 mt-24 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-white">
          <span className="inline-block bg-[#fc9403] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Team Building
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Des Expériences qui
            <span className="block text-[#fc9403]">Unissent les Équipes</span>
          </h1>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-2xl">
            Que vous soyez une PME, une multinationale ou un groupe d'amis,
            nous concevons des activités de team building sur mesure pour
            renforcer la cohésion, stimuler la motivation et créer des souvenirs
            durables.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact">
              <button className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition">
                Demander un Devis
              </button>
            </Link>
            <a href="#activites">

            </a>
          </div>
        </div>
      </section>



      {/* ── INTRO ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Pourquoi le Team Building avec{" "}
                <span className="text-[#0092A5]">Cartago ?</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Chez Cartago, nous croyons qu'une équipe soudée est la clé du
                succès. Depuis plus de 8 ans, nous accompagnons des groupes de
                toutes tailles — startups, PME, grandes entreprises — dans la
                création d'expériences qui dépassent le simple divertissement.
              </p>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Nos programmes sont pensés pour renforcer la communication,
                développer la confiance mutuelle et insuffler une énergie
                collective durable, bien au-delà de la journée d'événement.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  "Programmes 100 % personnalisés selon vos objectifs",
                  "Encadrement par des animateurs certifiés",
                  "Destinations locales et internationales disponibles",
                  "Prise en charge complète : logistique, hébergement, repas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 text-base">
                    <div className="mt-0.5 w-7 h-7 min-w-[28px] rounded-full bg-[#0092A5] text-white flex items-center justify-center">
                      <FaCheck className="text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ── */}
      <section id="activites" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Activités
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Un catalogue riche et varié pour répondre à chaque profil de
              groupe, chaque budget, chaque ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-[30px] shadow-lg p-8 flex flex-col items-start hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl mb-5">
                  {a.icon}
                </div>
                <h3 className="font-bold text-xl">{a.title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── AUDIENCE ── */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Pour Qui ?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Nos programmes s'adaptent à chaque type de groupe, petits ou
              grands.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Entreprises & Corporates",
                text: "Kick-offs, incentives, séminaires annuels ou simples journées de cohésion — nous gérons tout de A à Z pour que vos collaborateurs repartent galvanisés.",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "Groupes & Associations",
                text: "Clubs sportifs, associations étudiantes, organisations caritatives — nous créons des activités fédératrices accessibles à tous les budgets.",
                img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=900&auto=format&fit=crop",
              },
              {
                title: "PME & Startups",
                text: "Des formats agiles et innovants pour les structures en croissance qui souhaitent construire une culture d'équipe forte dès le départ.",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-bold text-xl">{c.title}</h3>
                  <p className="text-gray-500 mt-3 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <h2
                className="text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Prêt à Fédérer Votre Équipe ?
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                Partagez-nous vos objectifs et la taille de votre groupe — notre
                équipe vous propose un programme clé en main sous 48 h.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Demander un Devis
                </Link>
                <Link
                  to="/destinations"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  Voir nos Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}