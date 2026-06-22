import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHeart,
  FaShieldAlt,
  FaGlobe,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FaHeart />,
      title: t("about.value1Title"),
      desc: t("about.value1Desc"),
    },
    {
      icon: <FaShieldAlt />,
      title: t("about.value2Title"),
      desc: t("about.value2Desc"),
    },
    {
      icon: <FaGlobe />,
      title: t("about.value3Title"),
      desc: t("about.value3Desc"),
    },
  ];

  const testimonials = [
    {
      name: "Yasmine B.",
      dest: t("about.testimonial1Dest"),
      rating: 5,
      text: t("about.testimonial1Text"),
    },
    {
      name: "Rachid M.",
      dest: t("about.testimonial2Dest"),
      rating: 5,
      text: t("about.testimonial2Text"),
    },
    {
      name: "Faiza K.",
      dest: t("about.testimonial3Dest"),
      rating: 5,
      text: t("about.testimonial3Text"),
    },
  ];

  const milestones = [
    { year: "2016", title: t("about.milestone1Title"), desc: t("about.milestone1Desc") },
    { year: "2018", title: t("about.milestone2Title"), desc: t("about.milestone2Desc") },
    { year: "2020", title: t("about.milestone3Title"), desc: t("about.milestone3Desc") },
    { year: "2022", title: t("about.milestone4Title"), desc: t("about.milestone4Desc") },
    { year: "2024", title: t("about.milestone5Title"), desc: t("about.milestone5Desc") },
  ];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="overflow-hidden mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">

            {/* Left — text */}
            <div>
              <span className="inline-block bg-[#fc9403] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6">
                {t("about.heroTag")}
              </span>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("about.heroTitle")}
                <span className="block text-[#0092A5]">{t("about.heroTitleAccent")}</span>
                {t("about.heroTitleEnd")}
              </h1>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-lg">
                {t("about.heroText")}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/destinations"
                  className="bg-[#0092A5] hover:bg-[#007b8c] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t("about.ctaDestinations")}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#0092A5] text-[#0092A5] px-8 py-4 rounded-full font-semibold hover:bg-[#0092A5] hover:text-white transition-all duration-300"
                >
                  {t("about.ctaContact")}
                </Link>
              </div>
            </div>

            {/* Right — photo collage stack */}
            <div className="relative h-[520px] hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=900&auto=format&fit=crop"
                alt=""
                className="absolute top-0 left-8 w-[75%] h-[360px] object-cover rounded-[35px] shadow-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=600&auto=format&fit=crop"
                alt=""
                className="absolute bottom-0 right-0 w-[58%] h-[260px] object-cover rounded-[30px] shadow-xl border-4 border-white"
              />
              <div className="absolute top-8 -left-4 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold text-[#0092A5]" style={{ fontFamily: "Montserrat, sans-serif" }}>8+</p>
                <p className="text-gray-500 text-xs mt-0.5">{t("about.statYears")}</p>
              </div>
              <div className="absolute bottom-16 left-2 bg-[#fc9403] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold" style={{ fontFamily: "Montserrat, sans-serif" }}>10K+</p>
                <p className="text-xs mt-0.5 text-red-100">{t("about.statTravelers")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY + TIMELINE ──────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — intro copy */}
            <div className="lg:sticky lg:top-28">
              <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
                {t("about.storyTag")}
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("about.storyTitle")}
                <span className="text-[#0092A5]"> {t("about.storyTitleAccent")}</span>
                {t("about.storyTitleEnd")}
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                {t("about.storyText1")}
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                {t("about.storyText2")}
              </p>
              <img
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="mt-10 rounded-[30px] shadow-xl w-full h-56 object-cover"
              />
            </div>

            {/* Right — vertical timeline */}
            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-100" />

              {milestones.map((m, i) => (
                <div key={i} className="relative mb-10 last:mb-0">
                  {/* dot */}
                  <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-[#0092A5] border-2 border-white shadow" />
                  <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
                    {m.year}
                  </span>
                  <h3
                    className="mt-1 text-lg font-extrabold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-2 text-gray-500 leading-relaxed text-[15px]">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
              {t("about.valuesTag")}
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("about.valuesTitle")}
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
              {t("about.valuesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl group-hover:bg-[#0092A5] group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fc9403] text-xs font-bold uppercase tracking-widest">
              {t("about.testimonialsTag")}
            </span>
            <h2
              className="mt-4 text-4xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("about.testimonialsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t_item) => (
              <div
                key={t_item.name}
                className="bg-white rounded-[30px] p-8 shadow-lg flex flex-col"
              >
                <div className="flex gap-1 text-yellow-400 text-sm mb-6">
                  {Array.from({ length: t_item.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <FaQuoteLeft className="text-[#0092A5]/20 text-4xl mb-4" />

                <p className="text-gray-600 leading-relaxed flex-1 text-[15px]">
                  {t_item.text}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#fc9403] text-white flex items-center justify-center font-bold text-sm">
                    {t_item.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t_item.name}</p>
                    <p className="text-gray-400 text-xs">{t_item.dest}</p>
                  </div>
                </div>
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
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full tracking-widest uppercase mb-6">
                {t("about.ctaTag")}
              </span>

              <h2
                className="mt-4 text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("about.ctaTitle")}
                <span className="block text-[#0092A5]">
                  {t("about.ctaTitleAccent")}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                {t("about.ctaText")}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t("about.ctaContact")}
                </Link>
                <Link
                  to="/destinations"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  {t("about.ctaDestinations")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}