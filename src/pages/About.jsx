import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2016",
    title: "La naissance d'une idée",
    desc: "Cartago voit le jour à Alger, fondée par une équipe de passionnés de voyage avec un seul objectif : rendre le voyage accessible et mémorable pour chaque Algérien.",
  },
  {
    year: "2018",
    title: "Les premières destinations",
    desc: "Après deux ans de préparation, nous lançons nos premiers forfaits vers l'Europe et le Moyen-Orient. Plus de 500 voyageurs nous font confiance dès la première année.",
  },
  {
    year: "2020",
    title: "Résilience et renouveau",
    desc: "Face à la pandémie, nous pivons vers le conseil et la planification à distance. Cette période forge notre engagement envers la flexibilité et la protection du voyageur.",
  },
  {
    year: "2022",
    title: "Expansion internationale",
    desc: "Nous atteignons 30 destinations, ouvrons un second bureau et signons des partenariats avec les meilleurs hôtels et compagnies aériennes du monde.",
  },
  {
    year: "2024",
    title: "Cartago aujourd'hui",
    desc: "Plus de 10 000 voyageurs satisfaits, 50+ destinations, et une équipe de 20 conseillers dévoués. L'aventure ne fait que commencer.",
  },
];

const values = [
  {
    icon: <FaHeart />,
    title: "La passion avant tout",
    desc: "Chaque voyage que nous concevons est le reflet de notre propre amour du monde. Nous ne vendons pas des billets — nous créons des souvenirs qui durent.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Votre confiance, notre priorité",
    desc: "Paiement sécurisé, assurance annulation, assistance 24h/24 : nous ne laissons aucun voyageur seul face à l'imprévu.",
  },
  {
    icon: <FaGlobe />,
    title: "Des partenaires de confiance",
    desc: "Chaque hôtel, chaque transporteur et chaque guide local est sélectionné après une vérification rigoureuse. Rien n'est laissé au hasard.",
  },
];



const testimonials = [
  {
    name: "Yasmine B.",
    dest: "Voyage à Dubaï",
    rating: 5,
    text: "Une organisation parfaite du début à la fin. L'équipe Cartago a pensé à tout — même à nos préférences alimentaires. Je recommande les yeux fermés.",
  },
  {
    name: "Rachid M.",
    dest: "Lune de miel aux Maldives",
    rating: 5,
    text: "Notre voyage de noces était absolument magique. Cartago a dépassé toutes nos attentes. Un service exceptionnel, humain et à l'écoute.",
  },
  {
    name: "Faiza K.",
    dest: "Séjour à Santorin",
    rating: 5,
    text: "Première expérience avec Cartago et certainement pas la dernière. Hôtel parfait, guide attentionné, tout était au rendez-vous.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="overflow-hidden mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">

            {/* Left — text */}
            <div>
              <span className="inline-block bg-[#fc9403] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6">
                Notre histoire
              </span>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                VOYAGER,
                <span className="block text-[#0092A5]">C'EST NOTRE</span>
                MÉTIER.
              </h1>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-lg">
                Cartago accompagne les voyageurs algériens vers les
                plus belles destinations du monde. Nous sommes nés d'une
                conviction simple : chaque personne mérite un voyage qui lui
                ressemble.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/destinations"
                  className="bg-[#0092A5] hover:bg-[#007b8c] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Nos destinations
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#0092A5] text-[#0092A5] px-8 py-4 rounded-full font-semibold hover:bg-[#0092A5] hover:text-white transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Right — photo collage stack */}
            <div className="relative h-[520px] hidden lg:block">
              {/* Main photo */}
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=900&auto=format&fit=crop"
                alt=""
                className="absolute top-0 left-8 w-[75%] h-[360px] object-cover rounded-[35px] shadow-2xl"
              />
              {/* Secondary photo — overlapping bottom right */}
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute bottom-0 right-0 w-[58%] h-[260px] object-cover rounded-[30px] shadow-xl border-4 border-white"
              />
              {/* Floating stat pill */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold text-[#0092A5]" style={{ fontFamily: "Montserrat, sans-serif" }}>8+</p>
                <p className="text-gray-500 text-xs mt-0.5">Années d'expérience</p>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-16 left-2 bg-[#fc9403] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold" style={{ fontFamily: "Montserrat, sans-serif" }}>10K+</p>
                <p className="text-xs mt-0.5 text-red-100">Voyageurs heureux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY + TIMELINE ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — intro copy */}
            <div className="lg:sticky lg:top-28">
              <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
                Qui sommes-nous
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Une agence née
                <span className="text-[#0092A5]"> d'une passion</span>,
                bâtie sur la confiance.
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Cartago n'est pas une agence de voyage ordinaire. Chaque membre
                de notre équipe est lui-même un voyageur : quelqu'un qui a vécu
                la magie d'un lever de soleil sur les temples d'Angkor, ou la
                sérénité d'un bungalow aux Maldives.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                C'est cette expérience personnelle qui nourrit chaque itinéraire
                que nous construisons pour vous. Nous ne lisons pas des
                brochures — nous vous racontons ce que nous avons vécu.
              </p>
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="mt-10 rounded-[30px] shadow-xl w-full h-56 object-cover"
              />
            </div>

            {/* Right — vertical timeline */}
            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-100" />

            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
              Ce qui nous guide
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Nos valeurs
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
              Ces trois principes orientent chaque décision que nous prenons,
              chaque voyage que nous planifions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl group-hover:bg-[#0092A5] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
              Ils nous ont fait confiance
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ce qu'ils disent de nous
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-[30px] p-8 shadow-lg flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-sm mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <FaQuoteLeft className="text-[#0092A5]/20 text-4xl mb-4" />

                <p className="text-gray-600 leading-relaxed flex-1 text-[15px]">
                  {t.text}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fc9403] text-white flex items-center justify-center font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.dest}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full tracking-widest uppercase mb-6">
                Rejoignez l'aventure
              </span>

              <h2
                className="mt-4 text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Prêt à écrire
                <span className="block text-[#0092A5]">
                  votre prochaine histoire ?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                Nos conseillers sont à votre disposition pour construire avec
                vous le voyage qui vous ressemble, à votre rythme et selon
                votre budget.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/destinations"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  Voir les destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}