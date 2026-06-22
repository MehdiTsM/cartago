import { useEffect, useMemo, useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaStickyNote,
  FaSearch,
  FaEllipsisV,
  FaChevronDown,
} from "react-icons/fa";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "contacts";

const STATUSES = [
  { id: "nouveau", label: "Nouveau", color: "bg-blue-100 text-blue-700", dot: "bg-blue-400" },
  { id: "contacte", label: "Contacté", color: "bg-yellow-100 text-yellow-700", dot: "bg-yellow-400" },
  { id: "qualifie", label: "Qualifié", color: "bg-purple-100 text-purple-700", dot: "bg-purple-400" },
  { id: "converti", label: "Converti", color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400" },
  { id: "perdu", label: "Perdu", color: "bg-red-100 text-red-500", dot: "bg-red-400" },
];

const STATUS_MAP = Object.fromEntries(STATUSES.map((status) => [status.id, status]));

const SOURCES = ["Site web", "Réseaux sociaux", "Recommandation", "WhatsApp", "Appel direct", "Autre"];
const INTERESTS = ["Istanbul", "Dubaï", "Paris", "Bali", "Maldives", "Tokyo", "Marrakech", "Sur mesure"];

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  status: "nouveau",
  source: "Site web",
  interest: "",
  budget: "",
  notes: "",
};

export default function CRMTab() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [drawer, setDrawer] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("tous");
  const [openMenu, setOpenMenu] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, COLLECTION_NAME),
      (snapshot) => {
        const nextContacts = snapshot.docs.map((entry) => normalizeContact(entry.id, entry.data()));
        setContacts(nextContacts);
        setLoading(false);
        setError(null);
      },
      (snapshotError) => {
        console.error("Error listening to contacts collection:", snapshotError);
        setError("Impossible de charger le CRM pour le moment.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filtered = useMemo(() => {
    return contacts.filter((contact) => {
      const name = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      const searchValue = search.toLowerCase();
      const matchSearch =
        name.includes(searchValue) ||
        (contact.email || "").toLowerCase().includes(searchValue) ||
        (contact.phone || "").includes(search);
      const matchStatus = filterStatus === "tous" || contact.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [contacts, search, filterStatus]);

  const pipeline = useMemo(
    () =>
      STATUSES.map((status) => ({
        ...status,
        count: contacts.filter((contact) => contact.status === status.id).length,
      })),
    [contacts]
  );

  function openAdd() {
    setForm({ ...EMPTY, createdAt: new Date().toISOString().slice(0, 10) });
    setDrawer({ mode: "add" });
    setOpenMenu(null);
  }

  function openEdit(contact) {
    setForm({ ...EMPTY, ...contact });
    setDrawer({ mode: "edit" });
    setOpenMenu(null);
  }

  function closeDrawer() {
    setDrawer(null);
  }

  function field(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function save() {
    if (!form.firstName.trim() || !form.phone.trim()) return;

    setSaving(true);
    try {
      const { id, ...rest } = form;
      const payload = {
        ...rest,
        firstName: rest.firstName.trim(),
        lastName: rest.lastName.trim(),
        email: rest.email.trim(),
        phone: rest.phone.trim(),
        city: rest.city.trim(),
        interest: rest.interest.trim(),
        budget: rest.budget.trim(),
        notes: rest.notes.trim(),
        updatedAt: new Date().toISOString(),
        createdAt: rest.createdAt || new Date().toISOString(),
      };

      if (drawer.mode === "add") {
        await addDoc(collection(db, COLLECTION_NAME), payload);
      } else {
        await updateDoc(doc(db, COLLECTION_NAME, id), payload);
      }

      closeDrawer();
    } catch (saveError) {
      console.error("Error saving contact:", saveError);
      alert("Une erreur est survenue lors de l'enregistrement. Veuillez réessayer.");
    } finally {
      setSaving(false);
    }
  }

  async function doDelete() {
    if (!deleteConfirm) return;

    try {
      await deleteDoc(doc(db, COLLECTION_NAME, deleteConfirm));
    } catch (deleteError) {
      console.error("Error deleting contact:", deleteError);
      alert("Une erreur est survenue lors de la suppression. Veuillez réessayer.");
    } finally {
      setDeleteConfirm(null);
    }
  }

  async function changeStatus(id, status) {
    try {
      await updateDoc(doc(db, COLLECTION_NAME, id), {
        status,
        updatedAt: new Date().toISOString(),
      });
    } catch (statusError) {
      console.error("Error updating contact status:", statusError);
      alert("Impossible de mettre à jour le statut. Veuillez réessayer.");
    } finally {
      setOpenMenu(null);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <div className="w-9 h-9 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Chargement des contacts…</p>
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
    <div className="relative space-y-6">
      <div className="grid grid-cols-5 gap-3">
        {pipeline.map((status) => (
          <button
            key={status.id}
            onClick={() => setFilterStatus(filterStatus === status.id ? "tous" : status.id)}
            className={`rounded-2xl p-4 text-left transition-all border-2 ${
              filterStatus === status.id
                ? "border-[#0092A5] bg-[#0092A5]/5"
                : "border-transparent bg-white hover:border-gray-200"
            } shadow-sm`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${status.dot}`} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {status.label}
              </span>
            </div>
            <p className="text-2xl font-bold text-[#0a1e2c]">{status.count}</p>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un contact…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm placeholder-gray-300 outline-none focus:border-[#0092A5] focus:ring-2 focus:ring-[#0092A5]/10 transition bg-white"
          />
        </div>

        {filterStatus !== "tous" && (
          <button
            onClick={() => setFilterStatus("tous")}
            className="px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50 transition flex items-center gap-1.5 bg-white"
          >
            <FaTimes className="text-[10px]" />
            {STATUS_MAP[filterStatus]?.label}
          </button>
        )}

        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-[#fc9403] hover:bg-[#e08400] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm hover:shadow-md"
        >
          <FaPlus className="text-xs" /> Ajouter
        </button>
      </div>

      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <FaUser className="text-4xl mx-auto mb-3 text-gray-200" />
            <p className="font-medium text-gray-500">Aucun contact trouvé</p>
          </div>
        )}

        {filtered.map((contact) => {
          const status = STATUS_MAP[contact.status] || STATUS_MAP.nouveau;
          const initials = `${contact.firstName?.[0] || ""}${contact.lastName?.[0] || ""}`.trim() || "?";

          return (
            <div
              key={contact.id}
              className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-center gap-4 hover:shadow-sm transition-shadow group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0092A5]/10 flex items-center justify-center shrink-0 font-bold text-[#0092A5] text-sm">
                {initials}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#0a1e2c] text-sm">
                  {contact.firstName} {contact.lastName}
                </p>
                <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-400 flex-wrap">
                  {contact.email && (
                    <span className="flex items-center gap-1">
                      <FaEnvelope className="text-[10px]" /> {contact.email}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FaPhone className="text-[10px]" /> {contact.phone}
                  </span>
                  {contact.city && (
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[10px]" /> {contact.city}
                    </span>
                  )}
                </div>
              </div>

              <div className="hidden lg:flex flex-col items-end text-right shrink-0">
                {contact.interest && (
                  <span className="text-xs font-semibold text-[#0092A5]">{contact.interest}</span>
                )}
                {contact.budget && (
                  <span className="text-xs text-gray-400 mt-0.5">{contact.budget} DA</span>
                )}
              </div>

              <div className="relative shrink-0">
                <button
                  onClick={() => setOpenMenu(openMenu === contact.id ? null : contact.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${status.color} transition`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                  {status.label}
                  <FaChevronDown className="text-[9px] opacity-60" />
                </button>

                {openMenu === contact.id && (
                  <div className="absolute right-0 top-8 z-20 bg-white rounded-xl shadow-xl border border-gray-100 py-1 min-w-35">
                    {STATUSES.map((nextStatus) => (
                      <button
                        key={nextStatus.id}
                        onClick={() => changeStatus(contact.id, nextStatus.id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold hover:bg-gray-50 transition text-left ${
                          contact.status === nextStatus.id ? "opacity-40" : ""
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${nextStatus.dot}`} />
                        {nextStatus.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                <button
                  onClick={() => openEdit(contact)}
                  className="w-8 h-8 rounded-lg bg-[#0092A5]/10 text-[#0092A5] flex items-center justify-center hover:bg-[#0092A5]/20 transition"
                >
                  <FaEdit className="text-xs" />
                </button>
                <button
                  onClick={() => setDeleteConfirm(contact.id)}
                  className="w-8 h-8 rounded-lg bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length > 0 && (
        <p className="text-xs text-gray-400 text-center pb-2">
          {filtered.length} contact{filtered.length > 1 ? "s" : ""}
          {filterStatus !== "tous" && ` · ${STATUS_MAP[filterStatus]?.label}`}
        </p>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
            <h4 className="text-lg font-bold text-[#0a1e2c] mb-2">Supprimer ce contact ?</h4>
            <p className="text-sm text-gray-500 mb-6">
              Ce contact sera retiré définitivement du CRM.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button
                onClick={doDelete}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {drawer && (
        <div className="fixed inset-0 z-50 flex" onClick={() => setOpenMenu(null)}>
          <div className="flex-1 bg-black/30 backdrop-blur-sm" onClick={closeDrawer} />

          <div className="w-full max-w-lg bg-white h-full overflow-y-auto shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0092A5]">
                  {drawer.mode === "add" ? "Nouveau contact" : "Modifier"}
                </p>
                <h4 className="text-lg font-bold text-[#0a1e2c] mt-0.5">
                  {drawer.mode === "add"
                    ? "Ajouter un contact"
                    : `${form.firstName} ${form.lastName}`.trim() || "Contact"}
                </h4>
              </div>
              <button
                onClick={closeDrawer}
                className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-gray-100 text-gray-400 transition"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 px-7 py-6 space-y-8">
              <Section icon={<FaUser />} title="Identité">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Prénom *">
                    <input value={form.firstName} onChange={(e) => field("firstName", e.target.value)} placeholder="Ahmed" className={inputClass} />
                  </Field>
                  <Field label="Nom *">
                    <input value={form.lastName} onChange={(e) => field("lastName", e.target.value)} placeholder="Bensalem" className={inputClass} />
                  </Field>
                </div>
                <Field label="Ville">
                  <input value={form.city} onChange={(e) => field("city", e.target.value)} placeholder="Alger" className={inputClass} />
                </Field>
              </Section>

              <Section icon={<FaPhone />} title="Coordonnées">
                <Field label="Téléphone *">
                  <input value={form.phone} onChange={(e) => field("phone", e.target.value)} placeholder="0550 123 456" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => field("email", e.target.value)} placeholder="ahmed@gmail.com" className={inputClass} />
                </Field>
              </Section>

              <Section icon={<FaGlobe />} title="Intérêt voyage">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Destination souhaitée">
                    <select value={form.interest} onChange={(e) => field("interest", e.target.value)} className={inputClass}>
                      <option value="">— Choisir —</option>
                      {INTERESTS.map((interest) => (
                        <option key={interest}>{interest}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget (DA)">
                    <div className="relative">
                      <input value={form.budget} onChange={(e) => field("budget", e.target.value)} placeholder="90 000" className={`${inputClass} pr-10`} />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">DA</span>
                    </div>
                  </Field>
                </div>
                <Field label="Source">
                  <select value={form.source} onChange={(e) => field("source", e.target.value)} className={inputClass}>
                    {SOURCES.map((source) => (
                      <option key={source}>{source}</option>
                    ))}
                  </select>
                </Field>
              </Section>

              <Section icon={<FaEllipsisV />} title="Statut">
                <div className="flex flex-wrap gap-2">
                  {STATUSES.map((status) => (
                    <button
                      key={status.id}
                      type="button"
                      onClick={() => field("status", status.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all ${
                        form.status === status.id
                          ? "border-[#0092A5] bg-[#0092A5] text-white"
                          : "border-gray-200 text-gray-500 hover:border-gray-300"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${form.status === status.id ? "bg-white" : status.dot}`} />
                      {status.label}
                    </button>
                  ))}
                </div>
              </Section>

              <Section icon={<FaStickyNote />} title="Notes">
                <textarea
                  value={form.notes}
                  onChange={(e) => field("notes", e.target.value)}
                  placeholder="Informations supplémentaires, remarques, suivi…"
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </Section>
            </div>

            <div className="px-7 py-5 border-t border-gray-100 sticky bottom-0 bg-white flex gap-3">
              <button
                onClick={closeDrawer}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition"
              >
                Annuler
              </button>
              <button
                onClick={save}
                disabled={saving || !form.firstName.trim() || !form.phone.trim()}
                className="flex-1 px-4 py-3 rounded-xl bg-[#0092A5] hover:bg-[#007b8c] text-white text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {saving ? "Enregistrement..." : drawer.mode === "add" ? "Ajouter le contact" : "Enregistrer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function normalizeContact(id, data) {
  return {
    id,
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    phone: data.phone || "",
    city: data.city || "",
    status: data.status || "nouveau",
    source: data.source || "Site web",
    interest: data.interest || "",
    budget: data.budget || "",
    notes: data.notes || "",
    createdAt: data.createdAt || "",
    updatedAt: data.updatedAt || "",
  };
}

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

const inputClass =
  "w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5] focus:ring-2 focus:ring-[#0092A5]/10 transition";