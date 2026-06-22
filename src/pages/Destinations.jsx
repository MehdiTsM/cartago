import { useState, useEffect } from "react";
import { FaStar, FaClock, FaMapMarkerAlt, FaHeart, FaSearch, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlane, FaHotel, FaShieldAlt } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust this path to wherever your Firebase app/db is initialized
import { useLanguage } from "../context/LanguageContext";
import { localizeRecord } from "../utils/localizeRecord";

const features = [
  {
    icon: FaPlane,
    title: "Vols inclus",
    desc: "Tous nos forfaits incluent les billets d'avion aller-retour depuis l'Algérie.",
  },
  {
    icon: FaHotel,
    title: "Hôtels sélectionnés",
    desc: "Des établissements testés et validés par notre équipe sur le terrain.",
  },
  {
    icon: FaShieldAlt,
    title: "Voyagez en confiance",
    desc: "Assurance annulation, assistance 24h/24 et paiement sécurisé.",
  },
];

const filters = ["Tous", "Europe", "Asie", "Afrique", "Moyen-Orient", "Amériques"];

const tagColors = {
  "Coup de cœur": "bg-[#F1290E] text-white",
  Tendance: "bg-[#0092A5] text-white",
  Luxe: "bg-amber-500 text-white",
  Classique: "bg-slate-700 text-white",
  Exotique: "bg-emerald-600 text-white",
  Promotion: "bg-red-500 text-white",
  Culture: "bg-violet-600 text-white",
  Urbain: "bg-slate-500 text-white",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function DestinationsPage() {
  const { language } = useLanguage();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeFilter, setActiveFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState({});

  // Fetch destinations from Firestore on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(null);

        // Matches your actual Firestore "destinations" collection fields:
        // name, country, region, tag, rating, duration, groupSize, hotel,
        // image, gallery, description, highlights, included, itinerary, published
        const snapshot = await getDocs(collection(db, "destinations"));
        const data = snapshot.docs
          .map((doc) => ({
            ...localizeRecord(doc.data(), language),
            id: doc.id, // use the real Firestore doc id, in case it differs from the stored "id" field
          }))
          .filter((d) => d.published !== false); // hide drafts; remove this line if you don't want filtering

        setDestinations(data);
      } catch (err) {
        console.error("Error fetching destinations from Firestore:", err);
        setError("Impossible de charger les destinations pour le moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [language]);

  const filtered = destinations.filter((d) => {
    const matchRegion = activeFilter === "Tous" || d.region === activeFilter;
    const matchSearch =
      (d.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (d.country || "").toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  const toggleLike = (id) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  // Pick the "Coup de cœur" destination as featured, fall back to the first one
  const featured =
    destinations.find((d) => d.tag === "Coup de cœur") || destinations[0];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500">Chargement des destinations…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-5xl">⚠️</p>
        <p className="text-xl font-semibold text-gray-700">{error}</p>
        <p className="text-gray-500">Vérifiez votre connexion ou réessayez plus tard.</p>
      </div>
    );
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 text-center">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            VOS PROCHAINES
            <span className="block text-[#0092A5]">AVENTURES</span>
            VOUS ATTENDENT
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Plus de 50 destinations soigneusement sélectionnées pour vous
            offrir des voyages qui marquent à jamais.
          </p>

          {/* Search bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-2xl px-6 py-4 gap-4">
              <FaSearch className="text-[#0092A5] text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Rechercher une destination, un pays…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder-gray-400 text-base"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Stats strip */}
          <div className="flex justify-center gap-10 mt-14 flex-wrap">
            {[
              ["50+", "Destinations"],
              ["10 000+", "Voyageurs satisfaits"],
              ["4.9 / 5", "Note moyenne"],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <p
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {num}
                </p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-none">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeFilter === f
                  ? "bg-[#0092A5] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── DESTINATION GRID ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm mb-8">
            <span className="font-bold text-gray-800 text-base">
              {filtered.length}
            </span>{" "}
            destination{filtered.length > 1 ? "s" : ""} trouvée
            {filtered.length > 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🗺️</p>
              <p className="text-xl font-semibold text-gray-700">
                Aucune destination trouvée
              </p>
              <p className="text-gray-500 mt-2">
                Essayez un autre terme ou explorez toutes nos destinations.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveFilter("Tous"); }}
                className="mt-6 bg-[#0092A5] text-white px-8 py-3 rounded-full font-semibold"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  dest={dest}
                  liked={liked[dest.id]}
                  onLike={() => toggleLike(dest.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── WHY CARTAGO STRIP ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0092A5] border-[#fc9403]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center text-white">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <Icon className="text-5xl mb-4 mx-auto text-[#fc9403]" />

                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-cyan-100 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
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
                Votre voyage sur mesure
              </span>

              <h2
                className="mt-4 text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Vous ne trouvez pas
                <span className="block text-[#0092A5]">ce que vous cherchez ?</span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                Nos conseillers vous concocent un voyage entièrement
                personnalisé selon vos envies, votre budget et vos dates.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:+213000000000"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  Appeler un conseiller
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── DESTINATION CARD ────────────────────────────────────────────────────────

function DestinationCard({ dest, liked, onLike }) {
  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden h-56">
        <img
          src={dest.image || dest.gallery?.[0]}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="font-bold text-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {dest.name}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="text-[#0092A5] text-xs" />
              {dest.country}
            </div>
          </div>

          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <FaStar />
            <span className="font-bold text-gray-800">{dest.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
          {dest.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
          <div>
            <p className="text-[#0092A5] font-extrabold text-lg">
              {dest.hotel}
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-xs mt-0.5">
              <span className="flex items-center gap-1">
                <FaClock className="text-[10px]" />
                {dest.duration} jours
              </span>
              <span className="flex items-center gap-1">
                <FaUsers className="text-[10px]" />
                {dest.groupSize}
              </span>
            </div>
          </div>

          <Link
            to={`/destinations/${dest.id}`}
            className="bg-[#fc9403] hover:bg-[#db8102] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </div>
  );
}