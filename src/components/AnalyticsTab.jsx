import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const SOCIAL_CHANNELS = [
  {
    id: "facebook",
    label: "Facebook",
    icon: FaFacebook,
    color: "#1877F2",
    bg: "bg-[#1877F2]/10",
    text: "text-[#1877F2]",
    aliases: ["facebook", "fb", "meta"],
  },
  {
    id: "tiktok",
    label: "TikTok",
    icon: FaTiktok,
    color: "#010101",
    bg: "bg-gray-100",
    text: "text-gray-800",
    aliases: ["tiktok", "tt"],
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: FaInstagram,
    color: "#E1306C",
    bg: "bg-[#E1306C]/10",
    text: "text-[#E1306C]",
    aliases: ["instagram", "ig"],
  },
];

const PIE_COLORS = ["#1877F2", "#010101", "#E1306C"];

export default function AnalyticsTab() {
  const [pageViews, setPageViews] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "pageViews"),
      (snapshot) => {
        setPageViews(snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() })));
        setLoading(false);
      },
      (error) => {
        console.error("Error listening to pageViews:", error);
        setPageViews([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "contacts"),
      (snapshot) => setContacts(snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }))),
      (error) => console.error("Error listening to contacts:", error)
    );

    return () => unsubscribe();
  }, []);

  const socialData = useMemo(() => {
    const counts = Object.fromEntries(SOCIAL_CHANNELS.map((channel) => [channel.id, 0]));

    pageViews.forEach((view) => {
      const signal = normalizeField(view.utmSource || view.utm_source);
      if (!signal) return;

      const matched = SOCIAL_CHANNELS.find((channel) =>
        channel.aliases.some((alias) => signal.includes(alias))
      );

      if (matched) {
        counts[matched.id] += 1;
      }
    });

    const total = Object.values(counts).reduce((sum, value) => sum + value, 0) || 1;

    return SOCIAL_CHANNELS.map((channel) => ({
      ...channel,
      visitors: counts[channel.id],
      change: 0,
      pct: Math.round((counts[channel.id] / total) * 100),
    }));
  }, [pageViews]);

  const pieData = useMemo(() => socialData.map((item) => ({ name: item.label, value: item.visitors })), [socialData]);

  const destinationViews = useMemo(() => {
    const counts = new Map();

    contacts.forEach((contact) => {
      const destination = normalizeField(contact.interest);
      if (!destination) return;
      counts.set(destination, (counts.get(destination) || 0) + 1);
    });

    return Array.from(counts.entries())
      .map(([name, views]) => ({ name, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 8);
  }, [contacts]);

  const pageVisits = useMemo(() => {
    const labels = [
      { name: "Accueil", path: "/", keywords: ["accueil", "home", "/"] },
      { name: "Destinations", path: "/destinations", keywords: ["destinations"] },
      { name: "Explorer Algérie", path: "/explore-dz", keywords: ["explorer algérie", "explore-dz", "explore"] },
      { name: "Contact", path: "/contact", keywords: ["contact"] },
      { name: "Transport", path: "/transport", keywords: ["transport"] },
      { name: "Sports", path: "/sports", keywords: ["sports"] },
      { name: "Team Building", path: "/team-building", keywords: ["team building"] },
      { name: "Tourisme Médical", path: "/tourisme-medical", keywords: ["tourisme médical", "tourisme medical"] },
      { name: "À propos", path: "/about", keywords: ["à propos", "about"] },
    ];

    return labels.map((entry) => ({
      name: entry.name,
      path: entry.path,
      visits: countPageHits(pageViews, entry.path, entry.keywords),
    }));
  }, [pageViews]);

  const totalSocial = Math.max(socialData.reduce((sum, item) => sum + item.visitors, 0), 1);
  const maxViews = Math.max(destinationViews[0]?.views || 0, 1);
  const maxVisits = Math.max(pageVisits[0]?.visits || 0, 1);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <div className="w-9 h-9 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Chargement des analytics…</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* ── SOCIAL SOURCES ──────────────────────────────────────── */}
      <div>
        <SectionLabel>Visiteurs par réseau social</SectionLabel>

        <div className="grid sm:grid-cols-3 gap-4">
          {socialData.map((s) => {
            const Icon = s.icon;
            const pct = Math.round((s.visitors / totalSocial) * 100);
            return (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                    <Icon className={`text-lg ${s.text}`} />
                  </div>
                  <span className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                    <FaArrowTrendUp className="text-[11px]" />
                    +{s.change}%
                  </span>
                </div>

                <p className="text-3xl font-bold text-[#0a1e2c] tracking-tight">
                  {s.visitors.toLocaleString("fr-DZ")}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label} · {pct}% du total</p>

                {/* Mini bar */}
                <div className="mt-4 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, background: s.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Donut */}
        <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Répartition
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v) => [`${v} visiteurs`, ""]}
                  contentStyle={{ borderRadius: "10px", border: "none", fontSize: "12px" }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="flex-1 space-y-3 w-full">
              {socialData.map((s, i) => {
                const Icon = s.icon;
                const pct = Math.round((s.visitors / totalSocial) * 100);
                return (
                  <div key={s.id} className="flex items-center gap-3">
                    <Icon className="text-sm shrink-0" style={{ color: PIE_COLORS[i] }} />
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-gray-700">{s.label}</span>
                        <span className="text-gray-400">{s.visitors.toLocaleString("fr-DZ")}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, background: PIE_COLORS[i] }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-500 w-8 text-right">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── DESTINATION VIEWS ───────────────────────────────────── */}
      <div>
        <SectionLabel>Vues par destination</SectionLabel>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="mb-5">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={destinationViews} barSize={28} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#8a9baa" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#8a9baa" }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "#f4f6f8" }}
                  contentStyle={{ borderRadius: "10px", border: "none", fontSize: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                  formatter={(v) => [`${v} vues`, ""]}
                />
                <Bar dataKey="views" radius={[6, 6, 0, 0]} fill="#0092A5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Ranked list */}
          <div className="space-y-2.5 mt-2">
            {destinationViews.map((d, i) => {
              const pct = Math.round((d.views / maxViews) * 100);
              return (
                <div key={d.name} className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-gray-300 w-4 shrink-0">{i + 1}</span>
                  <span className="text-xs font-semibold text-gray-700 w-24 shrink-0">{d.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#0092A5] transition-all duration-500"
                      style={{ width: `${pct}%`, opacity: 1 - i * 0.08 }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium w-14 text-right">
                    {d.views.toLocaleString("fr-DZ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PAGE VISITS ─────────────────────────────────────────── */}
      <div>
        <SectionLabel>Visites par page</SectionLabel>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_160px] gap-4 px-5 py-3 border-b border-gray-50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Page</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Visites</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Part</span>
          </div>

          {pageVisits.map((p, i) => {
            const pct = Math.round((p.visits / maxVisits) * 100);
            const isTop = i === 0;
            return (
              <div
                key={p.path}
                className={`grid grid-cols-[1fr_auto_160px] gap-4 items-center px-5 py-3.5 border-b border-gray-50 last:border-0 transition-colors hover:bg-gray-50/60 ${
                  isTop ? "bg-[#0092A5]/5" : ""
                }`}
              >
                <div>
                  <p className={`text-sm font-semibold ${isTop ? "text-[#0092A5]" : "text-[#0a1e2c]"}`}>
                    {p.name}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono mt-0.5">{p.path}</p>
                </div>

                <span className="text-sm font-bold text-[#0a1e2c] tabular-nums">
                  {p.visits.toLocaleString("fr-DZ")}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isTop ? "bg-[#fc9403]" : "bg-[#0092A5]"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium w-8 text-right">{pct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

function extractSocialSignal(view) {
  return normalizeField(view.utmSource || view.utm_source || view.source || view.utmMedium || view.utm_medium);
}

function countPageHits(pageViews, exactPath, keywords) {
  return pageViews.reduce((total, view) => {
    const path = normalizeField(view.path || view.pagePath || view.pathname);
    const pageName = normalizeField(view.pageName);
    const searchSpace = `${path} ${pageName}`.toLowerCase();

    const matched = path === exactPath || keywords.some((keyword) => searchSpace.includes(keyword));
    return total + (matched ? 1 : 0);
  }, 0);
}

function normalizeField(value) {
  return String(value || "").trim().toLowerCase();
}

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
      {children}
    </p>
  );
}