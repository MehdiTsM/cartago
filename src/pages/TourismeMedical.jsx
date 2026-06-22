import {
  FaHeartbeat,
  FaTooth,
  FaEye,
  FaWeight,
  FaBone,
  FaSyringe,
  FaCheck,
  FaPlane,
  FaHotel,
  FaUserMd,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const specialties = [
  {
    icon: <FaTooth />,
    title: t("medical.specialties.dental.title"),
    text: t("medical.specialties.dental.text"),
  },
  {
    icon: <FaEye />,
    title: t("medical.specialties.eye.title"),
    text: t("medical.specialties.eye.text"),
  },
  {
    icon: <FaHeartbeat />,
    title: t("medical.specialties.heart.title"),
    text: t("medical.specialties.heart.text"),
  },
  {
    icon: <FaWeight />,
    title: t("medical.specialties.weight.title"),
    text: t("medical.specialties.weight.text"),
  },
  {
    icon: <FaBone />,
    title: t("medical.specialties.bone.title"),
    text: t("medical.specialties.bone.text"),
  },
  {
    icon: <FaSyringe />,
    title: t("medical.specialties.beauty.title"),
    text: t("medical.specialties.beauty.text"),
  },
];

const steps = [
  {
    number:"01",
    title:t("medical.steps.one.title"),
    text:t("medical.steps.one.text")
  },
  {
    number:"02",
    title:t("medical.steps.two.title"),
    text:t("medical.steps.two.text")
  },
  {
    number:"03",
    title:t("medical.steps.three.title"),
    text:t("medical.steps.three.text")
  },
  {
    number:"04",
    title:t("medical.steps.four.title"),
    text:t("medical.steps.four.text")
  },
  {
    number:"05",
    title:t("medical.steps.five.title"),
    text:t("medical.steps.five.text")
  }
];

const destinations = [
  {
    country: "Turquie",
    city: "Istanbul",
    specialty: "Dentisterie · Esthétique · Capillaire",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=900&auto=format&fit=crop",
  },
  {
    country: "Tunisie",
    city: "Tunis & Sousse",
    specialty: "Chirurgie · Cardiologie · Ophtalmologie",
    img: "https://images.unsplash.com/photo-1539020140153-e479b8cde4fb?q=80&w=900&auto=format&fit=crop",
  },
  {
    country: "Thaïlande",
    city: "Bangkok",
    specialty: "Orthopédie · Bariatrie · Bilan de santé",
    img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=900&auto=format&fit=crop",
  },
];

export default function TourismeMedical() {
  const { t } = useTranslation();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[620px] flex items-center">

        <div
          className="absolute inset-0 bg-[#0092A5] opacity-30"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mt-24 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-white">
          <span className="inline-block bg-[#0092A5] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Tourisme Médical
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Soignez-vous à l'Étranger,
            <span className="block text-[#fc9403]">
              En Toute Confiance.
            </span>
          </h1>
          <p className="mt-6 text-gray-200 font-semibold p-3 bg-zinc-800/75 rounded-2xl border-2 border-[#0092A5] text-lg leading-relaxed max-w-2xl">
            Cartago vous accompagne de A à Z dans votre parcours de soin à
            l'international — dossier médical, vol, hébergement, clinique
            partenaire et suivi post-opératoire. Vous vous concentrez sur votre
            santé, nous gérons le reste.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact">
              <button className="bg-[#fc9403] cursor-pointer hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition">
                Contact
              </button>
            </Link>
            <Link to="/destinations">
                <button className="bg-[#0092A5] cursor-pointer hover:bg-[#007a8c] text-white px-8 py-4 rounded-full font-semibold transition">
                  Nos Destinations
                </button>
            </Link>
          </div>
        </div>
      </section>



      {/* ── WHY ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Votre Santé Mérite le{" "}
                <span className="text-[#0092A5]">Meilleur</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                Le tourisme médical permet d'accéder à des soins de très haute
                qualité dans des pays où l'expertise médicale est reconnue
                mondialement, pour des coûts souvent 2 à 5 fois inférieurs à
                ceux pratiqués en Europe ou en Algérie.
              </p>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Chez Cartago, nous sélectionnons rigoureusement nos cliniques
                partenaires — accréditations internationales, chirurgiens
                formés à l'étranger, normes d'hygiène irréprochables. Vous ne
                voyagez jamais seul dans votre démarche.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  "Cliniques certifiées JCI ou équivalent international",
                  "Coordination médicale en français tout au long du séjour",
                  "Devis transparent incluant tous les frais annexes",
                  "Suivi post-opératoire assuré à votre retour",
                  "Assurance voyage médicale spécifique incluse",
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
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400&auto=format&fit=crop"
              alt="Clinique médicale moderne"
              className="rounded-[40px] shadow-xl w-full object-cover h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section id="specialites" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Spécialités
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Des disciplines médicales soigneusement sélectionnées, dans des
              établissements de référence à travers le monde.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[30px] shadow-lg p-8 flex flex-col items-start hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl">{s.title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Comment Ça Marche ?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Un parcours structuré, humain et transparent de la première
              consultation jusqu'au retour à domicile.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-cyan-100 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#0092A5] text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.number}
                </div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* mobile stacked version */}
          <div className="md:hidden mt-6 space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#0092A5] text-white flex items-center justify-center font-extrabold text-sm shadow"
                  style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-base">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── INCLUDED SERVICES ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ce Qui Est Inclus
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Un forfait tout compris pour que vous n'ayez à penser qu'à votre
              rétablissement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaUserMd />,
                title: "Coordination Médicale",
                text: "Un coordinateur dédié gère votre dossier, traduit vos documents et reste disponible 24h/24 durant votre séjour.",
              },
              {
                icon: <FaPlane />,
                title: "Vols & Transferts",
                text: "Billets d'avion, navettes aéroport-clinique et déplacements locaux organisés et confirmés avant votre départ.",
              },
              {
                icon: <FaHotel />,
                title: "Hébergement",
                text: "Hôtels sélectionnés à proximité des cliniques, adaptés à la convalescence, avec chambre individuelle et petits-déjeuners.",
              },
              {
                icon: <MdLocalHospital />,
                title: "Prise en Charge Clinique",
                text: "Rendez-vous médicaux, analyses pré-opératoires, intervention, chambre d'hospitalisation et soins infirmiers post-op.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="text-center bg-white rounded-[30px] shadow-lg p-6 flex flex-col items-center hover:-translate-y-1 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mt-4">{s.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{s.text}</p>
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
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <span className="inline-block bg-[#fc9403] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                Première étape gratuite
              </span>
              <h2
                className="text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Parlez-nous de votre Projet de Soin
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                Envoyez-nous vos documents médicaux ou décrivez simplement votre
                besoin. Notre équipe vous répond sous 24 h avec une première
                orientation gratuite et sans engagement.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Consultation Gratuite
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