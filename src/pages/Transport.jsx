import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaBus, FaShuttleVan, FaPlane, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import TransportImage from "../assets/transportImage.jpg";
import TransportImage2 from "../assets/transportImage2.png";
import transportImage3 from "../assets/transportImage3.jpg";
import transportImage4 from "../assets/transportImage4.jpg";

export default function Transport() {
  const { t } = useTranslation();

  const transports = [
    {
      icon: <FaBus />,
      tag: t("transport.tag1"),
      title: t("transport.title1"),
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1600&auto=format&fit=crop",
      description: t("transport.desc1"),
      features: t("transport.features1", { returnObjects: true }),
    },
    {
      icon: <FaShuttleVan />,
      tag: t("transport.tag2"),
      title: t("transport.title2"),
      image: transportImage4,
      description: t("transport.desc2"),
      features: t("transport.features2", { returnObjects: true }),
    },
    {
      icon: <FaPlane />,
      tag: t("transport.tag3"),
      title: t("transport.title3"),
      image: transportImage3,
      description: t("transport.desc3"),
      features: t("transport.features3", { returnObjects: true }),
    },
  ];

  const trustItems = [
    t("transport.trust1"),
    t("transport.trust2"),
    t("transport.trust3"),
  ];

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[520px] flex items-end"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
        }}
      >
        {/* Full-bleed background */}
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2400&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient — heavier at bottom where text lives */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {t("transport.heroTitle")}
            <span className="block text-[#0092A5]">{t("transport.heroTitleAccent")}</span>
          </h1>
          <p className="mt-6 font-semibold text-white text-lg max-w-2xl">
            {t("transport.heroSubtitle")}
          </p>

          {/* Quick trust bar */}
          <div className="flex flex-wrap gap-6 mt-10">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <FaCheckCircle className="text-[#0092A5]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEHICLE CARDS ────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {transports.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-[40px] shadow-2xl h-[460px] w-full object-cover"
                />
                {/* Floating tag badge */}
                <span className="absolute top-6 left-6 bg-[#0092A5] text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg">
                  {item.tag}
                </span>
              </div>

              {/* Text */}
              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#0092A5]/10 text-[#0092A5] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3
                  className="mt-5 text-4xl font-bold text-gray-900"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Teal accent line */}
                <div className="mt-4 w-12 h-1 rounded-full bg-[#0092A5]" />

                <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                  {item.description}
                </p>

                {/* Feature list */}
                <ul className="mt-8 space-y-3">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-[#fc9403]/15 flex items-center justify-center shrink-0">
                        <span className="w-2 h-2 rounded-full bg-[#fc9403] block" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-24 px-6">
          <img
            src={TransportImage}
            alt="Transport"
            className="w-full md:w-[320px] h-[290px] object-cover rounded-[25px] shadow-lg"
          />
          <img
            src={TransportImage2}
            alt="Transport"
            className="w-full md:w-[320px] h-[290px] object-cover rounded-[25px] shadow-lg"
          />
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0092A5]">
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {t("transport.ctaTitle")}
                </h2>
                <p className="mt-3 text-white/75 text-lg max-w-xl">
                  {t("transport.ctaSubtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  to="/contact?destination=Transport&idea=Hello%2C%20I%20want%20to%20book%20transport%20services.%20Can%20I%20get%20more%20information%3F"
                  className="inline-flex items-center gap-2 bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                >
                  <FaPhoneAlt className="text-sm" />
                  {t("transport.ctaContact")}
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 bg-white/15 border border-white/30 backdrop-blur text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25 whitespace-nowrap"
                >
                  <MdLocationOn className="text-base" />
                  {t("transport.ctaDestinations")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>-
    </div>
  );
}

function Stat({ number, label, accent }) {
  return (
    <div className="bg-white rounded-[28px] p-8 shadow-md flex flex-col items-center text-center">
      <h3 className="text-4xl font-extrabold" style={{ color: accent }}>
        {number}
      </h3>
      <p className="mt-3 text-gray-500 font-medium">{label}</p>
    </div>
  );
}