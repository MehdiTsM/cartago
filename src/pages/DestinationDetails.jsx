import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaStar, FaClock, FaMapMarkerAlt, FaPlane, FaHotel,
  FaShieldAlt, FaCheck, FaTimes, FaArrowLeft, FaPhone,
  FaUsers, FaCalendarAlt, FaGlobe,
} from "react-icons/fa";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // adjust this path to wherever your Firebase app/db is initialized

const tagColors = {
  "Coup de cœur": "bg-[#F1290E] text-white",
  Tendance:       "bg-[#0092A5] text-white",
  Luxe:           "bg-amber-500 text-white",
  Classique:      "bg-slate-700 text-white",
  Exotique:       "bg-emerald-600 text-white",
  Promotion:      "bg-red-500 text-white",
  Culture:        "bg-violet-600 text-white",
  Urbain:         "bg-slate-500 text-white",
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dest, setDest] = useState(null);
  const [others, setOthers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setError(null);

        // "id" comes from the URL, e.g. /destinations/H7MFemgBnqf4x26CUeul
        // which matches the Firestore document id used in the "Voir plus" link
        const snap = await getDoc(doc(db, "destinations", id));

        if (!snap.exists()) {
          setNotFound(true);
          setDest(null);
          return;
        }

        const current = { ...snap.data(), id: snap.id };
        setDest(current);

        // Pull a few other destinations for the "Découvrir aussi" section
        const allSnap = await getDocs(collection(db, "destinations"));
        const otherDocs = allSnap.docs
          .map((d) => ({ ...d.data(), id: d.id }))
          .filter((d) => d.id !== current.id && d.published !== false)
          .slice(0, 3);

        setOthers(otherDocs);
      } catch (err) {
        console.error("Error fetching destination:", err);
        setError("Impossible de charger cette destination pour le moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500">Chargement…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-5xl mb-4">⚠️</p>
        <p className="text-xl font-semibold text-gray-700">{error}</p>
      </div>
    );
  }

  if (notFound || !dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-6xl mb-4">🗺️</p>
        <h1 className="text-2xl font-bold text-gray-800">
          Destination introuvable
        </h1>
        <p className="text-gray-500 mt-2 mb-6">
          Cette destination n'existe pas ou a été supprimée.
        </p>
        <Link
          to="/destinations"
          className="bg-[#0092A5] text-white px-6 py-3 rounded-full font-semibold"
        >
          Voir toutes les destinations
        </Link>
      </div>
    );
  }

  const heroImage = dest.image || dest.gallery?.[0];

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-6 lg:left-12 z-10 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/25 transition"
        >
          <FaArrowLeft className="text-xs" /> Retour
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${tagColors[dest.tag] || "bg-gray-600 text-white"}`}>
            {dest.tag}
          </span>
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-none"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {dest.name}
          </h1>
          <div className="flex items-center gap-4 mt-4 flex-wrap text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#0092A5]" /> {dest.country}
            </span>
            <span className="flex items-center gap-1.5">
              <FaStar className="text-yellow-400" />
              <span className="font-bold text-white">{dest.rating}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock /> {dest.duration} jours
            </span>
            <span className="flex items-center gap-1.5">
              <FaUsers /> {dest.groupSize} personnes
            </span>
          </div>
        </div>
      </section>

      {/* ── BODY ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── LEFT CONTENT ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-14">

            {/* Description */}
            <div>
              <EyebrowLabel>À propos</EyebrowLabel>
              <p className="text-gray-600 text-lg leading-relaxed">{dest.description}</p>
            </div>

            {/* Highlights */}
            {dest.highlights?.length > 0 && (
              <div>
                <EyebrowLabel>Points forts</EyebrowLabel>
                <div className="grid sm:grid-cols-2 gap-3">
                  {dest.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                      <span className="w-6 h-6 rounded-full bg-[#0092A5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-[#0092A5] text-[10px]" />
                      </span>
                      <span className="text-sm text-gray-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {dest.gallery?.length > 0 && (
              <div>
                <EyebrowLabel>Galerie</EyebrowLabel>
                <div className="grid grid-cols-3 gap-3">
                  {dest.gallery.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden h-40 bg-gray-100">
                      <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {dest.itinerary?.length > 0 && (
              <div>
                <EyebrowLabel>Programme jour par jour</EyebrowLabel>
                <div className="space-y-3">
                  {dest.itinerary.map((item, i) => (
                    <div key={i} className="flex gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0092A5]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#0092A5]">J{item.day}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#0a1e2c] text-sm">{item.title}</p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included */}
            {dest.included?.length > 0 && (
              <div>
                <EyebrowLabel>Inclus</EyebrowLabel>
                <div className="space-y-2.5">
                  {dest.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheck className="text-emerald-600 text-[9px]" />
                      </span>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ── STICKY SIDEBAR ─────────────────────────────────────── */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-white rounded-[28px] border border-gray-100 shadow-xl p-7">

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-[#0092A5] flex-shrink-0" />
                    <span>{dest.duration} jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-[#0092A5] flex-shrink-0" />
                    <span>Groupe : {dest.groupSize} personnes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHotel className="text-[#0092A5] flex-shrink-0" />
                    <span>{dest.hotel}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPlane className="text-[#0092A5] flex-shrink-0" />
                    <span>Vol depuis Alger</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-[#0092A5] flex-shrink-0" />
                    <span>Assurance annulation incluse</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <Link
                    to="/contact"
                    className="w-full block text-center bg-[#fc9403] hover:bg-[#e08400] text-white py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.02] shadow-md shadow-[#fc9403]/30"
                  >
                    Réserver ce voyage
                  </Link>
                  <a
                    href="tel:+213000000000"
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-[#0092A5] hover:text-[#0092A5] text-gray-600 py-3.5 rounded-2xl font-semibold text-sm transition-all"
                  >
                    <FaPhone className="text-xs" /> Appeler un conseiller
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
                  <FaShieldAlt className="text-emerald-500" />
                  Paiement sécurisé · Annulation flexible
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE STICKY BAR ───────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-2xl px-5 py-4 flex items-center justify-center">
        <Link
          to="/contact"
          className="bg-[#fc9403] hover:bg-[#e08400] text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition"
        >
          Réserver ce voyage
        </Link>
      </div>
      <div className="lg:hidden h-24" /> {/* spacer for mobile sticky bar */}

      {/* ── OTHER DESTINATIONS ──────────────────────────────────── */}
      {others.length > 0 && (
        <section className="py-20 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-10">
              <span className="text-[#fc9403] text-sm font-bold uppercase tracking-widest">
                Découvrir aussi
              </span>
              <h2 className="text-3xl font-extrabold mt-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Autres destinations
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {others.map((d) => (
                <Link
                  key={d.id}
                  to={`/destinations/${d.id}`}
                  className="bg-white rounded-[28px] overflow-hidden shadow-md hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={d.image || d.gallery?.[0]}
                      alt={d.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${tagColors[d.tag] || "bg-gray-600 text-white"}`}>
                      {d.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#0a1e2c]" style={{ fontFamily: "Montserrat, sans-serif" }}>{d.name}</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <FaMapMarkerAlt className="text-[#0092A5] text-[10px]" /> {d.country}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <FaStar className="text-yellow-400" /> {d.rating}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <FaClock className="text-[#0092A5] text-[10px]" /> {d.duration} jours
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// ─── HELPER ───────────────────────────────────────────────────────────────────

function EyebrowLabel({ children }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-[#0092A5] mb-4">
      {children}
    </p>
  );
}