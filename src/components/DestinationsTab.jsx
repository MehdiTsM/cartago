import { useState, useEffect } from "react";
import { db } from "../firebase"; // adjust path
import { 
  collection, 
  getDocs, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

import {
  FaPlus, FaEdit, FaTrash, FaStar, FaClock,
  FaGlobe, FaTimes, FaTag, FaImage, FaEye, FaEyeSlash,
  FaHotel, FaUsers, FaListUl, FaCheck, FaCalendarAlt,
} from "react-icons/fa";

const TAGS = ["Tendance", "Luxe", "Classique", "Promotion", "Romantique", "Culture", "Exotique", "Aventure"];
const REGIONS = ["Europe", "Asie", "Afrique", "Moyen-Orient", "Amériques"];

const TAG_COLORS = {
  "Tendance":      "bg-[#0092A5]/10 text-[#0092A5]",
  "Luxe":          "bg-amber-100 text-amber-700",
  "Classique":     "bg-slate-100 text-slate-600",
  "Promotion":  "bg-red-100 text-red-600",
  "Romantique":    "bg-pink-100 text-pink-600",
  "Culture":       "bg-violet-100 text-violet-600",
  "Exotique":      "bg-emerald-100 text-emerald-700",
  "Aventure":      "bg-orange-100 text-orange-600",
};

const EMPTY = {
  name: "", country: "", region: "Europe",
  hotel: "", groupSize: "",
  duration: "", rating: "", tag: "Tendance",
  description: "", image: "",
  gallery: [],
  highlights: [],
  included: [],
  itinerary: [],
  published: true,
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function DestinationsTab() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
  fetchDestinations();
}, []);



  const [drawer, setDrawer] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [form, setForm] = useState(EMPTY);

  // temp input states for list fields
  const [newGallery, setNewGallery]       = useState("");
  const [newHighlight, setNewHighlight]   = useState("");
  const [newIncluded, setNewIncluded]     = useState("");
  const [newItinTitle, setNewItinTitle]   = useState("");
  const [newItinDesc, setNewItinDesc]     = useState("");



async function fetchDestinations() {
  try {
    const querySnapshot = await getDocs(
      collection(db, "destinations")
    );

    const destinationsData = querySnapshot.docs.map((doc) => {

      const data = doc.data();

      return {
        id: doc.id,

        ...EMPTY,

        ...data,

        gallery: Array.isArray(data.gallery) 
          ? data.gallery.filter(Boolean) 
          : [],

        highlights: Array.isArray(data.highlights)
          ? data.highlights.filter(Boolean)
          : [],

        included: Array.isArray(data.included)
          ? data.included.filter(Boolean)
          : [],

        itinerary: Array.isArray(data.itinerary)
          ? data.itinerary
          : [],
      };

    });

    setDestinations(destinationsData);

  } catch(error) {
    console.error("Error fetching destinations:", error);
  }
}
  function openAdd() {
    setForm(EMPTY);
    resetListInputs();
    setDrawer({ mode: "add" });
  }
function openEdit(dest) {
  setForm({
    ...EMPTY,
    ...dest,
  });

  resetListInputs();
  setDrawer({ mode: "edit" });
}
  function closeDrawer() { setDrawer(null); }

  function resetListInputs() {
    setNewGallery(""); setNewHighlight("");
    setNewIncluded(""); setNewItinTitle(""); setNewItinDesc("");
  }

  function field(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  // ── list helpers ─────────────────────────────────────────────
  function addToList(key, value) {
    if (!value.trim()) return;
    setForm((f) => ({ ...f, [key]: [...f[key], value.trim()] }));
  }
  function removeFromList(key, index) {
    setForm((f) => ({ ...f, [key]: f[key].filter((_, i) => i !== index) }));
  }
  function addItinerary() {
    if (!newItinTitle.trim()) return;
    const day = form.itinerary.length + 1;
    setForm((f) => ({
      ...f,
      itinerary: [...f.itinerary, { day, title: newItinTitle.trim(), desc: newItinDesc.trim() }],
    }));
    setNewItinTitle(""); setNewItinDesc("");
  }
  function removeItinerary(index) {
    setForm((f) => ({
      ...f,
      itinerary: f.itinerary
        .filter((_, i) => i !== index)
        .map((item, i) => ({ ...item, day: i + 1 })),
    }));
  }

  // ── save ─────────────────────────────────────────────────────
async function save() {

  if (!form.name.trim() || !form.country.trim()) return;
  const cleanedForm = {

    ...form,

    gallery: form.gallery.filter(Boolean),

    highlights: form.highlights.filter(Boolean),

    included: form.included.filter(Boolean),

    itinerary: Array.isArray(form.itinerary)
      ? form.itinerary
      : []

  };
  try {
    if(drawer.mode === "add") {
      const docRef = await addDoc(
        collection(db,"destinations"),
        cleanedForm
      );
      setDestinations(prev=>[
        ...prev,
        {
          id:docRef.id,
          ...cleanedForm
        }
      ]);
    } else {
      await updateDoc(
        doc(db,"destinations",form.id),
        cleanedForm
      );
      setDestinations(prev=>
        prev.map(d=>

          d.id === form.id
          ? {
              id:form.id,
              ...cleanedForm
            }
          : d
        )
      );
    }
    closeDrawer();
  } catch(error){
    console.error("Save error:",error);
  }

}

  function confirmDelete(id) { setDeleteConfirm(id); }

async function doDelete(){

  try{

    await deleteDoc(
      doc(db,"destinations",deleteConfirm)
    );


    setDestinations(prev =>
      prev.filter(d=>d.id !== deleteConfirm)
    );


    setDeleteConfirm(null);


  }catch(error){

    console.error(error);

  }

}
  function togglePublished(id) {
    setDestinations((prev) =>
      prev.map((d) => (d.id === id ? { ...d, published: !d.published } : d))
    );
  }

  return (
    <div className="relative">

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8a9baa] mb-0.5">Catalogue</p>
          <h3 className="text-lg font-bold text-[#0a1e2c]">
            {destinations.length} destination{destinations.length > 1 ? "s" : ""}
          </h3>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#fc9403] hover:bg-[#e08400] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 shadow-sm hover:shadow-md"
        >
          <FaPlus className="text-xs" /> Ajouter
        </button>
      </div>

      {/* ── CARD GRID ───────────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {destinations.map((dest) => (
          <DestCard
            key={dest.id}
            dest={dest}
            onEdit={() => openEdit(dest)}
            onDelete={() => confirmDelete(dest.id)}
            onToggle={() => togglePublished(dest.id)}
          />
        ))}
        <button
          onClick={openAdd}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#0092A5] hover:bg-[#0092A5]/5 text-gray-400 hover:text-[#0092A5] transition-all duration-200 min-h-[220px] group"
        >
          <span className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
            <FaPlus />
          </span>
          <span className="text-sm font-medium">Nouvelle destination</span>
        </button>
      </div>

      {/* ── DELETE CONFIRM ──────────────────────────────────────── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <h4 className="text-lg font-bold text-[#0a1e2c] mb-2">Supprimer la destination ?</h4>
            <p className="text-sm text-gray-500 mb-6">
              Cette action est irréversible. La destination sera retirée du catalogue.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
                Annuler
              </button>
              <button onClick={doDelete} className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DRAWER ──────────────────────────────────────────────── */}
      {drawer && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />

          <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0092A5]">
                  {drawer.mode === "add" ? "Nouvelle destination" : "Modifier"}
                </p>
                <h4 className="text-lg font-bold text-[#0a1e2c] mt-0.5">
                  {drawer.mode === "add" ? "Ajouter une destination" : form.name || "Destination"}
                </h4>
              </div>
              <button onClick={closeDrawer} className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-400 transition">
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-7 py-6 space-y-8">

              {/* ── Infos de base ── */}
              <Section icon={<FaGlobe />} title="Infos de base">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nom de la destination *">
                    <input value={form.name} onChange={(e) => field("name", e.target.value)} placeholder="ex. Istanbul" className={inp} />
                  </Field>
                  <Field label="Pays *">
                    <input value={form.country} onChange={(e) => field("country", e.target.value)} placeholder="ex. Turquie" className={inp} />
                  </Field>
                </div>
                <Field label="Région">
                  <select value={form.region} onChange={(e) => field("region", e.target.value)} className={inp}>
                    {REGIONS.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </Field>
                <Field label="Description courte">
                  <textarea
                    value={form.description}
                    onChange={(e) => field("description", e.target.value)}
                    placeholder="Décrivez cette destination en 1-2 phrases…"
                    rows={3}
                    className={inp + " resize-none"}
                  />
                </Field>
              </Section>

              {/* ── Hébergement ── */}
              <Section icon={<FaHotel />} title="Hébergement & groupe">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nom de l'hôtel">
                    <input value={form.hotel} onChange={(e) => field("hotel", e.target.value)} placeholder="ex. Caldera View Hotel" className={inp} />
                  </Field>
                  <Field label="Taille du groupe">
                    <input value={form.groupSize} onChange={(e) => field("groupSize", e.target.value)} placeholder="ex. 2 – 15" className={inp} />
                  </Field>
                </div>
              </Section>

              {/* ── Détails du voyage ── */}
              <Section icon={<FaClock />} title="Détails du voyage">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Durée (jours)">
                    <input type="number" min="1" value={form.duration} onChange={(e) => field("duration", e.target.value)} placeholder="7" className={inp} />
                  </Field>
                  <Field label="Note /5">
                    <input type="number" step="0.1" min="0" max="5" value={form.rating} onChange={(e) => field("rating", e.target.value)} placeholder="4.8" className={inp} />
                  </Field>
                </div>
              </Section>

              {/* ── Tag ── */}
              <Section icon={<FaTag />} title="Étiquette">
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => field("tag", t)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                        form.tag === t
                          ? "border-[#0092A5] bg-[#0092A5] text-white"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Section>

              {/* ── Image principale ── */}
              <Section icon={<FaImage />} title="Image principale">
                <Field label="URL de l'image">
                  <input value={form.image} onChange={(e) => field("image", e.target.value)} placeholder="https://images.unsplash.com/…" className={inp} />
                </Field>
                {form.image && (
                  <div className="mt-3 rounded-xl overflow-hidden h-40 bg-gray-100">
                    <img src={form.image} alt="preview" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                  </div>
                )}
              </Section>

              {/* ── Galerie ── */}
              <Section icon={<FaImage />} title="Galerie (photos supplémentaires)">
                <div className="flex gap-2">
                  <input
                    value={newGallery}
                    onChange={(e) => setNewGallery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addToList("gallery", newGallery); setNewGallery(""); }}}
                    placeholder="https://images.unsplash.com/…"
                    className={inp + " flex-1"}
                  />
                  <button
                    type="button"
                    onClick={() => { addToList("gallery", newGallery); setNewGallery(""); }}
                    className="px-3 py-2 rounded-xl bg-[#0092A5]/10 text-[#0092A5] hover:bg-[#0092A5]/20 transition text-sm font-semibold"
                  >
                    <FaPlus />
                  </button>
                </div>
                {form.gallery.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {form.gallery.map((src, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden h-20 bg-gray-100 group">
                        <img src={src} alt="" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                        <button
                          onClick={() => removeFromList("gallery", i)}
                          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              {/* ── Points forts ── */}
              <Section icon={<FaStar />} title="Points forts">
                <div className="flex gap-2">
                  <input
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addToList("highlights", newHighlight); setNewHighlight(""); }}}
                    placeholder="ex. Coucher de soleil à Oia"
                    className={inp + " flex-1"}
                  />
                  <button
                    type="button"
                    onClick={() => { addToList("highlights", newHighlight); setNewHighlight(""); }}
                    className="px-3 py-2 rounded-xl bg-[#0092A5]/10 text-[#0092A5] hover:bg-[#0092A5]/20 transition text-sm font-semibold"
                  >
                    <FaPlus />
                  </button>
                </div>
                {form.highlights.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {form.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#0092A5]/5 rounded-xl px-3 py-2">
                        <FaCheck className="text-[#0092A5] text-[10px] flex-shrink-0" />
                        <span className="text-sm text-gray-700 flex-1">{h}</span>
                        <button onClick={() => removeFromList("highlights", i)} className="text-gray-300 hover:text-red-400 transition">
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              {/* ── Inclus ── */}
              <Section icon={<FaListUl />} title="Ce qui est inclus">
                <div className="flex gap-2">
                  <input
                    value={newIncluded}
                    onChange={(e) => setNewIncluded(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addToList("included", newIncluded); setNewIncluded(""); }}}
                    placeholder="ex. Vol aller-retour depuis Alger"
                    className={inp + " flex-1"}
                  />
                  <button
                    type="button"
                    onClick={() => { addToList("included", newIncluded); setNewIncluded(""); }}
                    className="px-3 py-2 rounded-xl bg-[#0092A5]/10 text-[#0092A5] hover:bg-[#0092A5]/20 transition text-sm font-semibold"
                  >
                    <FaPlus />
                  </button>
                </div>
                {form.included.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    {form.included.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-emerald-50 rounded-xl px-3 py-2">
                        <FaCheck className="text-emerald-500 text-[10px] flex-shrink-0" />
                        <span className="text-sm text-gray-700 flex-1">{item}</span>
                        <button onClick={() => removeFromList("included", i)} className="text-gray-300 hover:text-red-400 transition">
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              {/* ── Itinéraire ── */}
              <Section icon={<FaCalendarAlt />} title="Programme jour par jour">
                <div className="space-y-2">
                  <Field label="Titre de l'étape">
                    <input
                      value={newItinTitle}
                      onChange={(e) => setNewItinTitle(e.target.value)}
                      placeholder="ex. Arrivée & Fira"
                      className={inp}
                    />
                  </Field>
                  <Field label="Description">
                    <div className="flex gap-2">
                      <textarea
                        value={newItinDesc}
                        onChange={(e) => setNewItinDesc(e.target.value)}
                        placeholder="Décrivez la journée…"
                        rows={2}
                        className={inp + " flex-1 resize-none"}
                      />
                      <button
                        type="button"
                        onClick={addItinerary}
                        disabled={!newItinTitle.trim()}
                        className="px-3 py-2 rounded-xl bg-[#0092A5]/10 text-[#0092A5] hover:bg-[#0092A5]/20 transition text-sm font-semibold self-end disabled:opacity-30"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </Field>
                </div>
                {form.itinerary.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {form.itinerary.map((item, i) => (
                      <div key={i} className="flex gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0092A5]/10 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-[#0092A5]">J{item.day}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[#0a1e2c]">{item.title}</p>
                          {item.desc && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>}
                        </div>
                        <button onClick={() => removeItinerary(i)} className="text-gray-300 hover:text-red-400 transition flex-shrink-0">
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              {/* ── Visibilité ── */}
              <Section icon={<FaEye />} title="Visibilité">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => field("published", !form.published)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${form.published ? "bg-[#0092A5]" : "bg-gray-200"}`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${form.published ? "translate-x-5" : ""}`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {form.published ? "Publiée — visible sur le site" : "Masquée — non publiée"}
                  </span>
                </label>
              </Section>

            </div>

            {/* Footer */}
            <div className="px-7 py-5 border-t border-gray-100 sticky bottom-0 bg-white flex gap-3">
              <button onClick={closeDrawer} className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition">
                Annuler
              </button>
              <button
                onClick={save}
                disabled={!form.name.trim() || !form.country.trim()}
                className="flex-1 px-4 py-3 rounded-xl bg-[#0092A5] hover:bg-[#007b8c] text-white text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {drawer.mode === "add" ? "Ajouter la destination" : "Enregistrer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DESTINATION CARD ─────────────────────────────────────────────────────────

function DestCard({ dest, onEdit, onDelete, onToggle }) {
  const tagClass = TAG_COLORS[dest.tag] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        {dest.image ? (
          <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <FaImage className="text-4xl" />
          </div>
        )}
        <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${tagClass}`}>
          {dest.tag}
        </span>
        <button
          onClick={onToggle}
          title={dest.published ? "Masquer" : "Publier"}
          className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition ${
            dest.published ? "bg-emerald-500 text-white" : "bg-gray-300 text-white"
          }`}
        >
          {dest.published ? <FaEye className="text-xs" /> : <FaEyeSlash className="text-xs" />}
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-bold text-[#0a1e2c] text-base leading-tight">{dest.name}</h4>
        <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
          <FaGlobe className="text-[10px]" /> {dest.country} · {dest.region}
        </p>
        {dest.hotel && (
          <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
            <FaHotel className="text-[10px]" /> {dest.hotel}
          </p>
        )}
        {dest.description && (
          <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">{dest.description}</p>
        )}

        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50 text-xs text-gray-500">
          {dest.duration && (
            <span className="flex items-center gap-1">
              <FaClock className="text-[10px]" /> {dest.duration}j
            </span>
          )}
          {dest.groupSize && (
            <span className="flex items-center gap-1">
              <FaUsers className="text-[10px]" /> {dest.groupSize}
            </span>
          )}
          {dest.rating && (
            <span className="flex items-center gap-1 ml-auto">
              <FaStar className="text-yellow-400 text-[10px]" /> {dest.rating}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#0092A5]/10 text-[#0092A5] text-xs font-semibold hover:bg-[#0092A5]/20 transition"
          >
            <FaEdit className="text-[10px]" /> Modifier
          </button>
          <button
            onClick={onDelete}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-red-50 text-red-500 text-xs font-semibold hover:bg-red-100 transition"
          >
            <FaTrash className="text-[10px]" /> Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function Section({ icon, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#0092A5] text-sm">{icon}</span>
        <h5 className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</h5>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inp =
  "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-[#0092A5] focus:ring-2 focus:ring-[#0092A5]/10 transition";