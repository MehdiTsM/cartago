import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";import { FaStar, FaClock, FaMapMarkerAlt, FaSearch, FaCompass, FaLeaf, FaLandmark, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { localizeRecord } from "../utils/localizeRecord";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const places = [];

const filters = ["Tous", "Désert", "Patrimoine", "Nature", 'Nord'];

const filterIcons = {
  Tous: FaCompass,
  Désert: FaSun,
  Patrimoine: FaLandmark,
  Nature: FaLeaf,
  Nord: FaMapMarkerAlt,
};

const tagColors = {
  "Patrimoine UNESCO": "bg-[#0092A5] text-white",
  "Incontournable":    "bg-[#fc9403] text-white",
  "Ruines romaines":   "bg-amber-700 text-white",
  "Écotourisme":       "bg-emerald-600 text-white",
  "Nature":            "bg-green-600 text-white",
  "Aventure":          "bg-[#F1290E] text-white",
};

const featured = places[0];

const stats = [
  ["48", "Wilayas à explorer"],
  ["3", "Sites UNESCO"],
  ["2 381 741 km²", "Le plus grand pays d'Afrique"],
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ExploreDZ() {
  const { language } = useLanguage();
  const [places, setPlaces] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    try {
      const snapshot = await getDocs(collection(db, "explore"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...localizeRecord(doc.data(), language),
      }));

      setPlaces(data);

    } catch (error) {
      console.error("Error fetching explore:", error);
    }
  }

  const filtered = places.filter((p) => {
    const matchRegion = activeFilter === "Tous" || p.region === activeFilter;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.wilaya.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop"
          alt="Sahara algérien"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 text-center">


          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            EXPLORER
            <span className="block text-[#0092A5]">L'ALGÉRIE</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Du Sahara aux côtes méditerranéennes, des massifs kabyles aux plaines du Tell —
            l'Algérie est le plus grand pays d'Afrique et l'un des moins explorés.
          </p>

          {/* Search */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-2xl px-6 py-4 gap-4">
              <FaSearch className="text-[#0092A5] text-lg flex-shrink-0" />
              <input
                type="text"
                placeholder="Rechercher un lieu, une wilaya…"
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

          {/* Stats */}
          <div className="flex justify-center gap-10 mt-14 flex-wrap">
            {stats.map(([num, label]) => (
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

      {/* ── FILTER TABS ───────────────────────────────────────────── */}
      <section className="sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-none">
          {filters.map((f) => {
            const Icon = filterIcons[f];
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-[#0092A5] text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="text-xs" />
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm mb-8">
            <span className="font-bold text-gray-800 text-base">{filtered.length}</span>{" "}
            lieu{filtered.length > 1 ? "x" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🏜️</p>
              <p className="text-xl font-semibold text-gray-700">Aucun lieu trouvé</p>
              <p className="text-gray-500 mt-2">Essayez un autre terme ou explorez toutes les régions.</p>
              <button
                onClick={() => { setSearch(""); setActiveFilter("Tous"); }}
                className="mt-6 bg-[#0092A5] text-white px-8 py-3 rounded-full font-semibold"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((place) => (
                <PlaceCard key={place.id} place={place} tagColors={tagColors} />
              ))}
            </div>
          )}
        </div>
      </section>


      {/* ── REGIONS STRIP ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#0092A5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-extrabold text-white text-center mb-12"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            L'Algérie par ses régions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            {[
              {
                Icon: FaSun,
                title: "Grand Sud",
                desc: "Erg, regs, oasis et volcans : le Sahara algérien couvre plus de 2 millions de km². Hoggar, Tassili, Erg Occidental.",
              },
              {
                Icon: FaLandmark,
                title: "Hauts Plateaux & Tell",
                desc: "Timgad, Djémila, Tipasa, Cirta — un arc de cités romaines classées UNESCO sur fond de montagnes vertes.",
              },
              {
                Icon: FaLeaf,
                title: "Nord & Méditerranée",
                desc: "Côtes kabyles, parcs nationaux, forêts de pins et ports de pêche où la mer est encore sauvage.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title}>
                <Icon className="text-5xl mb-4 mx-auto text-[#fc9403]" />
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-cyan-100 leading-relaxed">{desc}</p>
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
              src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full tracking-widest uppercase mb-6">
                Voyage sur mesure en Algérie
              </span>

              <h2
                className="mt-4 text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Prêt à découvrir
                <span className="block text-[#0092A5]">votre propre pays ?</span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                Nos guides locaux vous emmènent là où les agences ordinaires ne vont pas.
                Circuits privés, bivouacs sahariens, rencontres authentiques.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Planifier mon circuit
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

// ─── PLACE CARD ───────────────────────────────────────────────────────────────

function PlaceCard({ place, tagColors }) {
  const tagClass = tagColors[place.tag] || "bg-gray-600 text-white";

  return (
    <div className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col">
      <div className="relative overflow-hidden h-56">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${tagClass}`}
        >
          {place.tag}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3
              className="font-bold text-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {place.name}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
              <FaMapMarkerAlt className="text-[#0092A5] text-xs" />
              {place.wilaya}
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 text-sm flex-shrink-0">
            <FaStar />
            <span className="font-bold text-gray-800">{place.rating}</span>
            <span className="text-gray-400">({place.reviews})</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed flex-1">
          {place.description}
        </p>

        <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <FaClock className="text-[#0092A5] text-xs" />
            {place.duration}
          </div>
<Link
  to={`/explore/${place.id}`}
  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
>
  Voir ce lieu
</Link>
        </div>
      </div>
    </div>
  );
}