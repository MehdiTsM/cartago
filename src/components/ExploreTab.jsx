import { useState, useEffect } from "react";
import {
  FaPlus, FaEdit, FaTrash, FaStar, FaClock,
  FaMapMarkerAlt, FaTimes, FaTag, FaImage,
  FaEye, FaEyeSlash, FaCompass, FaMountain,
} from "react-icons/fa";
import {
  collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc,
} from "firebase/firestore";
import { db } from "../firebase"; // adjust this path to wherever your Firebase app/db is initialized

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

const COLLECTION_NAME = "explore";

const TAGS = ["Patrimoine UNESCO", "Incontournable", "Ruines romaines", "Écotourisme", "Nature", "Aventure", "Culture", "Randonnée"];
const REGIONS = ["Désert", "Patrimoine", "Nature", "Nord", "Hauts Plateaux"];
const WILAYAS = [
  "Adrar", "Aïn Defla", "Aïn Témouchent", "Alger", "Annaba", "Batna",
  "Béchar", "Béjaïa", "Biskra", "Blida", "Bordj Bou Arréridj", "Bouira",
  "Boumerdès", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued",
  "El Tarf", "Ghardaïa", "Guelma", "Illizi", "Jijel", "Khenchela",
  "Laghouat", "M'Sila", "Mascara", "Médéa", "Mila", "Mostaganem",
  "Naâma", "Oran", "Ouargla", "Oum El Bouaghi", "Relizane", "Saïda",
  "Sétif", "Sidi Bel Abbès", "Skikda", "Souk Ahras", "Tamanrasset",
  "Tébessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou",
  "Tlemcen",
];

const TAG_COLORS = {
  "Patrimoine UNESCO": "bg-[#0092A5]/10 text-[#0092A5]",
  "Incontournable":    "bg-[#fc9403]/15 text-[#b36b00]",
  "Ruines romaines":   "bg-amber-100 text-amber-700",
  "Écotourisme":       "bg-emerald-100 text-emerald-700",
  "Nature":            "bg-green-100 text-green-700",
  "Aventure":          "bg-red-100 text-red-600",
  "Culture":           "bg-violet-100 text-violet-600",
  "Randonnée":         "bg-orange-100 text-orange-600",
};

const REGION_COLORS = {
  "Désert":         "bg-amber-50 text-amber-600",
  "Patrimoine":     "bg-[#0092A5]/10 text-[#0092A5]",
  "Nature":         "bg-emerald-50 text-emerald-600",
  "Nord":           "bg-blue-50 text-blue-600",
};

const EMPTY = {
  name: "", wilaya: "Alger", region: "Patrimoine",
  duration: "", rating: "", tag: "Incontournable",
  description: "", image: "", gallery: [], published: true,
};

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ExploreTab() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [drawer, setDrawer] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Live subscription to the "explore" collection — any add/edit/delete,
  // from this dashboard or elsewhere, updates the list automatically.
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, COLLECTION_NAME),
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setPlaces(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Error listening to explore collection:", err);
        setError("Impossible de charger les lieux pour le moment.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filters = ["Tous", ...REGIONS];

  const filtered = activeFilter === "Tous"
    ? places
    : places.filter((p) => p.region === activeFilter);

  function openAdd() { setForm(EMPTY); setDrawer({ mode: "add" }); }
  function openEdit(place) { setForm({ ...EMPTY, ...place }); setDrawer({ mode: "edit" }); }
  function closeDrawer() { setDrawer(null); }
  function field(key, val) { setForm((f) => ({ ...f, [key]: val })); }

  function addGalleryImage() {
    setForm((f) => ({ ...f, gallery: [...f.gallery, ""] }));
  }
  function updateGalleryImage(i, val) {
    setForm((f) => {
      const next = [...f.gallery];
      next[i] = val;
      return { ...f, gallery: next };
    });
  }
  function removeGalleryImage(i) {
    setForm((f) => ({ ...f, gallery: f.gallery.filter((_, idx) => idx !== i) }));
  }

  async function save() {
    if (!form.name.trim() || !form.wilaya.trim()) return;

    setSaving(true);
    try {
      const { id, ...rest } = form;
      const payload = {
        ...rest,
        gallery: (rest.gallery || []).map((u) => u.trim()).filter(Boolean),
      };

      if (drawer.mode === "add") {
        await addDoc(collection(db, COLLECTION_NAME), payload);
      } else {
        await updateDoc(doc(db, COLLECTION_NAME, id), payload);
      }
      closeDrawer();
    } catch (err) {
      console.error("Error saving place:", err);
      alert("Une erreur est survenue lors de l'enregistrement. Veuillez réessayer.");
    } finally {
      setSaving(false);
    }
  }

  function confirmDelete(id) { setDeleteConfirm(id); }

  async function doDelete() {
    setDeletingId(deleteConfirm);
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, deleteConfirm));
    } catch (err) {
      console.error("Error deleting place:", err);
      alert("Une erreur est survenue lors de la suppression. Veuillez réessayer.");
    } finally {
      setDeletingId(null);
      setDeleteConfirm(null);
    }
  }

  async function togglePublished(place) {
    try {
      await updateDoc(doc(db, COLLECTION_NAME, place.id), { published: !place.published });
    } catch (err) {
      console.error("Error toggling published state:", err);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <div className="w-9 h-9 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Chargement des lieux…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-24 text-center">
        <p className="text-4xl">⚠️</p>
        <p className="text-sm font-medium text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative">

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8a9baa] mb-0.5">
            Algérie
          </p>
          <h3 className="text-lg font-bold text-[#0a1e2c]">
            {places.length} lieu{places.length > 1 ? "x" : ""}
          </h3>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#fc9403] hover:bg-[#e08400] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md"
        >
          <FaPlus className="text-xs" /> Ajouter
        </button>
      </div>

      {/* ── REGION FILTER PILLS ─────────────────────────────────── */}
      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeFilter === f
                ? "bg-[#0092A5] text-white shadow-sm"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── CARD GRID ───────────────────────────────────────────── */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            isDeleting={deletingId === place.id}
            onEdit={() => openEdit(place)}
            onDelete={() => confirmDelete(place.id)}
            onToggle={() => togglePublished(place)}
          />
        ))}

        {activeFilter === "Tous" && (
          <button
            onClick={openAdd}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#0092A5] hover:bg-[#0092A5]/5 text-gray-400 hover:text-[#0092A5] transition-all duration-200 min-h-55 group"
          >
            <span className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaPlus />
            </span>
            <span className="text-sm font-medium">Nouveau lieu</span>
          </button>
        )}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <FaMountain className="text-4xl mx-auto mb-3 text-gray-200" />
          <p className="font-medium text-gray-500">Aucun lieu dans cette région</p>
          <button onClick={openAdd} className="mt-4 text-sm text-[#0092A5] hover:underline font-medium">
            Ajouter un lieu →
          </button>
        </div>
      )}

      {/* ── DELETE CONFIRM ──────────────────────────────────────── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <h4 className="text-lg font-bold text-[#0a1e2c] mb-2">Supprimer ce lieu ?</h4>
            <p className="text-sm text-gray-500 mb-6">
              Ce lieu sera retiré définitivement de la section Explorer l'Algérie.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                disabled={deletingId !== null}
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition disabled:opacity-40"
              >
                Annuler
              </button>
              <button
                onClick={doDelete}
                disabled={deletingId !== null}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition disabled:opacity-50"
              >
                {deletingId !== null ? "Suppression…" : "Supprimer"}
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
                  {drawer.mode === "add" ? "Nouveau lieu" : "Modifier"}
                </p>
                <h4 className="text-lg font-bold text-[#0a1e2c] mt-0.5">
                  {drawer.mode === "add" ? "Ajouter un lieu" : form.name || "Lieu"}
                </h4>
              </div>
              <button
                onClick={closeDrawer}
                className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-400 transition"
              >
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-7 py-6 space-y-8">

              {/* Infos de base */}
              <Section icon={<FaCompass />} title="Infos de base">
                <Field label="Nom du lieu *">
                  <input
                    value={form.name}
                    onChange={(e) => field("name", e.target.value)}
                    placeholder="ex. Tassili n'Ajjer"
                    className={inp}
                  />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Wilaya *">
                    <select value={form.wilaya} onChange={(e) => field("wilaya", e.target.value)} className={inp}>
                      {WILAYAS.map((w) => <option key={w}>{w}</option>)}
                    </select>
                  </Field>
                  <Field label="Type de région">
                    <select value={form.region} onChange={(e) => field("region", e.target.value)} className={inp}>
                      {REGIONS.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Description">
                  <textarea
                    value={form.description}
                    onChange={(e) => field("description", e.target.value)}
                    placeholder="Décrivez ce lieu en 1-2 phrases…"
                    rows={3}
                    className={inp + " resize-none"}
                  />
                </Field>
              </Section>

              {/* Détails de la visite */}
              <Section icon={<FaClock />} title="Détails de la visite">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Durée recommandée (jours)">
                    <input
                      type="number" min="1"
                      value={form.duration}
                      onChange={(e) => field("duration", e.target.value)}
                      placeholder="ex. 3"
                      className={inp}
                    />
                  </Field>
                  <Field label="Note /5">
                    <input
                      type="number" step="0.1" min="0" max="5"
                      value={form.rating}
                      onChange={(e) => field("rating", e.target.value)}
                      placeholder="ex. 4.8"
                      className={inp}
                    />
                  </Field>
                </div>
              </Section>

              {/* Étiquette */}
              <Section icon={<FaTag />} title="Étiquette">
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <button
                      key={t} type="button"
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

              {/* Image principale */}
              <Section icon={<FaImage />} title="Image principale">
                <Field label="URL de l'image">
                  <input
                    value={form.image}
                    onChange={(e) => field("image", e.target.value)}
                    placeholder="https://images.unsplash.com/…"
                    className={inp}
                  />
                </Field>
                {form.image && (
                  <div className="mt-3 rounded-xl overflow-hidden h-40 bg-gray-100">
                    <img
                      src={form.image} alt="preview"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                )}
              </Section>

              {/* Galerie (images supplémentaires) */}
              <Section icon={<FaImage />} title="Galerie (images supplémentaires)">
                <div className="space-y-3">
                  {form.gallery.map((url, i) => (
                    <div key={i} className="flex gap-2 items-center">
                      <input
                        value={url}
                        onChange={(e) => updateGalleryImage(i, e.target.value)}
                        placeholder="https://images.unsplash.com/…"
                        className={inp}
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(i)}
                        title="Retirer cette image"
                        className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addGalleryImage}
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#0092A5] hover:underline"
                  >
                    <FaPlus className="text-[10px]" /> Ajouter une image
                  </button>
                </div>

                {form.gallery.filter((u) => u.trim()).length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {form.gallery.filter((u) => u.trim()).map((url, i) => (
                      <div key={i} className="rounded-lg overflow-hidden h-20 bg-gray-100">
                        <img
                          src={url} alt=""
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Section>

              {/* Visibilité */}
              <Section icon={<FaEye />} title="Visibilité">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div
                    onClick={() => field("published", !form.published)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                      form.published ? "bg-[#0092A5]" : "bg-gray-200"
                    }`}
                  >
                    <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
                      form.published ? "translate-x-5" : ""
                    }`} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {form.published ? "Publié — visible sur le site" : "Masqué — non publié"}
                  </span>
                </label>
              </Section>

            </div>

            {/* Footer */}
            <div className="px-7 py-5 border-t border-gray-100 sticky bottom-0 bg-white flex gap-3">
              <button
                onClick={closeDrawer}
                disabled={saving}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition disabled:opacity-40"
              >
                Annuler
              </button>
              <button
                onClick={save}
                disabled={!form.name.trim() || !form.wilaya.trim() || saving}
                className="flex-1 px-4 py-3 rounded-xl bg-[#0092A5] hover:bg-[#007b8c] text-white text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {saving
                  ? "Enregistrement…"
                  : drawer.mode === "add" ? "Ajouter le lieu" : "Enregistrer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PLACE CARD ───────────────────────────────────────────────────────────────

function PlaceCard({ place, onEdit, onDelete, onToggle, isDeleting }) {
  const tagClass  = TAG_COLORS[place.tag]       || "bg-gray-100 text-gray-600";
  const regClass  = REGION_COLORS[place.region] || "bg-gray-100 text-gray-500";

  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col ${isDeleting ? "opacity-40 pointer-events-none" : ""}`}>
      {/* Image */}
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        {place.image ? (
          <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300">
            <FaMountain className="text-4xl" />
          </div>
        )}
        {place.gallery?.length > 0 && (
          <span className="absolute bottom-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm">
            +{place.gallery.length} photo{place.gallery.length > 1 ? "s" : ""}
          </span>
        )}
        <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${tagClass}`}>
          {place.tag}
        </span>
        <button
          onClick={onToggle}
          title={place.published ? "Masquer" : "Publier"}
          className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition ${
            place.published ? "bg-emerald-500 text-white" : "bg-gray-300 text-white"
          }`}
        >
          {place.published ? <FaEye className="text-xs" /> : <FaEyeSlash className="text-xs" />}
        </button>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-bold text-[#0a1e2c] text-base leading-tight">{place.name}</h4>
            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
              <FaMapMarkerAlt className="text-[10px] text-[#0092A5]" />
              {place.wilaya}
            </p>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${regClass}`}>
            {place.region}
          </span>
        </div>

        {place.description && (
          <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
            {place.description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50 text-xs text-gray-500">
          {place.duration && (
            <span className="flex items-center gap-1">
              <FaClock className="text-[10px] text-[#0092A5]" /> {place.duration}j
            </span>
          )}
          {place.rating && (
            <span className="flex items-center gap-1 ml-auto">
              <FaStar className="text-yellow-400 text-[10px]" />
              <span className="font-semibold text-gray-700">{place.rating}</span>
            </span>
          )}
        </div>

        {/* Actions */}
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