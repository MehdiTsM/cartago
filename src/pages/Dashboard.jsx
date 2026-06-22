import { useState } from "react";
import {
  FaMapPin,
  FaMountain,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";

import DestinationsTab from "../components/DestinationsTab";
import ExploreTab from "../components/ExploreTab";
import CRMTab from "../components/CRMTab";
import AnalyticsTab from "../components/AnalyticsTab";

const menuItems = [
  { id: "destinations", label: "Destinations", icon: <FaMapPin /> },
  { id: "explorer",     label: "Explorer",     icon: <FaMountain /> },
  { id: "crm",          label: "CRM",          icon: <FaUsers /> },
  { id: "analytics",    label: "Analytics",    icon: <FaChartBar /> },
];

const tabTitles = {
  destinations: { title: "Destinations",       sub: "Gérez vos offres de voyage" },
  explorer:     { title: "Explorer l'Algérie", sub: "Destinations locales à mettre en avant" },
  crm:          { title: "CRM",                sub: "Vos contacts et leads" },
  analytics:    { title: "Analytics",          sub: "Performances du mois en cours" },
};

const tabComponents = {
  destinations: <DestinationsTab />,
  explorer:     <ExploreTab />,
  crm:          <CRMTab />,
  analytics:    <AnalyticsTab />,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("destinations");
  const { title, sub } = tabTitles[activeTab];

  return (
    <div className="flex h-screen overflow-hidden">

      {/* ── SIDEBAR (desktop) ── */}
      <aside className="
        hidden md:flex
        w-52 min-w-52 h-full flex-col
        bg-[#0a1e2c]
      ">
        <p className="
          text-[10px] font-semibold tracking-widest uppercase
          text-[#4a6a80] px-4 pt-5 pb-2
        ">
          Navigation
        </p>

        <nav className="flex-1 px-3 flex flex-col gap-0.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl
                text-[13.5px] font-medium transition-all duration-150
                border-l-[3px]
                ${activeTab === item.id
                  ? "bg-[#0092a515] text-white border-[#fc9403]"
                  : "text-[#7a9ab0] border-transparent hover:bg-white/5 hover:text-[#c8dde8]"
                }
              `}
            >
              <span className="text-base shrink-0">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/6">
          <button className="
            w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
            text-[#ef6c6c] text-[13px] transition-colors
            hover:bg-[#ef6c6c1a]
          ">
            <FaSignOutAlt />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        {/* ── SCROLLABLE CONTENT ── */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8 flex flex-col gap-5">

          {/* Active tab */}
          {tabComponents[activeTab]}

        </main>

        {/* ── BOTTOM TAB BAR (mobile) ── */}
        <nav className="
          md:hidden shrink-0
          flex justify-around bg-[#0a1e2c]
          border-t border-white/10
        ">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex flex-col items-center gap-1 py-3 px-4 text-[10px]
                transition-colors border-b-[3px]
                ${activeTab === item.id
                  ? "text-white border-[#fc9403]"
                  : "text-[#7a9ab0] border-transparent"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}