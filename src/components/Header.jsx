import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";
import logo from "../assets/cartago-logo.png";
import { useLanguage } from "../context/LanguageContext";



const languages = [
  { code: "fr", label: "Français"},
  { code: "en", label: "English"},
  { code: "ar", label: "العربية" },
];

// ── Reusable Nav Dropdown ──────────────────────────────────────────────────────
function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const enter = () => { clearTimeout(timerRef.current); setOpen(true); };
  const leave = () => { timerRef.current = setTimeout(() => setOpen(false), 150); };
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 relative text-gray-700 font-medium transition duration-300 hover:text-[#0092A5] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0092A5] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <FaChevronDown className={`text-xs mt-px transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-130 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex justify-center">
          <div className="w-3 h-3 bg-white border-l border-t border-white/40 rotate-45 -mb-1.5 shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
        </div>
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-4 grid grid-cols-2 gap-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#0092A5]/8 transition-colors duration-200 group"
            >
              <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0092A5] transition-colors">{item.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Language Picker ────────────────────────────────────────────────────────────
function LangPicker({ align = "left" }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const enter = () => { clearTimeout(timerRef.current); setOpen(true); };
  const leave = () => { timerRef.current = setTimeout(() => setOpen(false), 150); };
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const current = languages.find((l) => l.code === language);

  return (
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-1.5 text-gray-600 hover:text-[#0092A5] transition-colors duration-200"
      aria-label={t("header.language")}
      aria-expanded={open}
    >
        <MdTranslate className="text-xl" />
        <span className="text-sm font-medium hidden xl:inline">{current?.label}</span>
        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute top-[calc(100%+14px)] ${align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"} w-44 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Arrow — centred over icon */}
        <div className={`flex ${align === "right" ? "justify-end pr-4" : "justify-center"}`}>
          <div className="w-3 h-3 bg-white border-l border-t border-white/40 rotate-45 -mb-1.5 shadow-[-2px_-2px_4px_rgba(0,0,0,0.06)]" />
        </div>

        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150 ${
                language === lang.code
                  ? "bg-[#0092A5]/10 text-[#0092A5] font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{lang.label}</span>
              {language === lang.code && <span className="ml-auto text-[#0092A5] text-xs">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile Accordion ───────────────────────────────────────────────────────────
function MobileAccordion({ label, items, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-gray-700 font-medium hover:text-[#0092A5] transition"
      >
        {label}
        <FaChevronDown className={`text-xs transition-transform duration-300 ${open ? "rotate-180 text-[#0092A5]" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-125 pb-2" : "max-h-0"}`}>
        <div className="grid grid-cols-2 gap-1 pb-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#0092A5]/8 transition"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Header ────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed w-full top-0 z-50 px-4 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg rounded-2xl">

            {/* ── Desktop: two-row layout ── */}
            <div className="hidden lg:block">
              {/* Row 1 — Logo + Contact */}
              <div className="flex items-center justify-between px-8 pt-4 pb-3 border-b border-gray-100/60">
                <Link to="/" className="flex items-center">
                  <img
                    src={logo}
                    alt="Cartago Travel"
                    className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap text-sm"
                >
                  {t("header.contactUs")}
                </Link>
              </div>

              {/* Row 2 — Nav links + Language */}
              <nav className="flex items-center justify-center gap-8 xl:gap-10 px-8 py-3">
                {[
                  { name: t("header.home"), path: "/" },
                  { name: t("header.teamBuilding"), path: "/team-building" },
                  { name: t("header.medical"), path: "/tourisme-medical" },
                  { name: t("header.destinations"), path: "/destinations" },
                  { name: t("header.explore"), path: "/explore-dz" }
                ].map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="relative text-gray-700 font-medium transition duration-300 hover:text-[#0092A5] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0092A5] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                  >
                    {name}
                  </Link>
                ))}


                <Link
                  to="/transport"
                  className="relative text-gray-700 font-medium transition duration-300 hover:text-[#0092A5] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0092A5] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                >
                  {t("header.transport")}
                </Link>

                <Link
                  to="/about"
                  className="relative text-gray-700 font-medium transition duration-300 hover:text-[#0092A5] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#0092A5] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                >
                  {t("header.about")}
                </Link>

                {/* Divider + Language picker */}
                <span className="w-px h-5 bg-gray-200 rounded-full" aria-hidden="true" />
                <LangPicker align="right" />
              </nav>
            </div>

            {/* ── Mobile: single-row layout ── */}
            <div className="flex lg:hidden items-center justify-between h-20 px-6">
              <Link to="/" className="flex items-center">
<img
  src={logo}
  alt="Cartago Travel"
  className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>
              </Link>

              {/* Right side: lang picker + hamburger */}
              <div className="flex items-center gap-4">
                <LangPicker align="right" />
                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="text-[#0092A5] text-2xl transition"
                  aria-label="Toggle menu"
                >
                  {mobileMenu ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden fixed left-4 right-4 top-23.75 z-40 transition-all duration-300 ${
          mobileMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
          <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto">
            {[
              { name: t("header.home"), path: "/" },
              { name: t("header.medical"), path: "/tourisme-medical" },
              { name: t("header.teamBuilding"), path: "/team-building" },
              { name: t("header.destinations"), path: "/destinations" },
              { name: t("header.explore"), path: "/explore-dz" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="py-4 text-gray-700 font-medium border-b border-gray-100 hover:text-[#0092A5] transition"
              >
                {link.name}
              </Link>
            ))}


            <Link
              to="/transport"
              onClick={() => setMobileMenu(false)}
              className="py-4 text-gray-700 font-medium border-b border-gray-100 hover:text-[#0092A5] transition"
            >
              {t("header.transport")}
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="py-4 text-gray-700 font-medium border-b border-gray-100 hover:text-[#0092A5] transition"
            >
              {t("header.about")}
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-6 bg-[#fc9403] hover:bg-[#db8102] text-white text-center py-3 rounded-full font-semibold transition"
            >
              {t("header.contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}