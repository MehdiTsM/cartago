import {
  FaHeartbeat,
  FaTooth,
  FaEye,
  FaWeight,
  FaBone,
  FaSyringe,
  FaCheck,
  FaPlane,
  FaHotel,
  FaUserMd,
} from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function TourismeMedical() {
  const { t } = useTranslation();

  const benefits = t("medical.whyBenefits", { returnObjects: true });

  const includedServices = [
    {
      icon: <FaUserMd />,
      title: t("medical.includedServices.coordination.title"),
      text: t("medical.includedServices.coordination.text"),
    },
    {
      icon: <FaPlane />,
      title: t("medical.includedServices.travel.title"),
      text: t("medical.includedServices.travel.text"),
    },
    {
      icon: <FaHotel />,
      title: t("medical.includedServices.accommodation.title"),
      text: t("medical.includedServices.accommodation.text"),
    },
    {
      icon: <MdLocalHospital />,
      title: t("medical.includedServices.clinical.title"),
      text: t("medical.includedServices.clinical.text"),
    },
  ];
  
  const specialties = [
    {
      icon: <FaTooth />,
      title: t("medical.specialties.dental.title"),
      text: t("medical.specialties.dental.text"),
    },
    {
      icon: <FaEye />,
      title: t("medical.specialties.eye.title"),
      text: t("medical.specialties.eye.text"),
    },
    {
      icon: <FaHeartbeat />,
      title: t("medical.specialties.heart.title"),
      text: t("medical.specialties.heart.text"),
    },
    {
      icon: <FaWeight />,
      title: t("medical.specialties.weight.title"),
      text: t("medical.specialties.weight.text"),
    },
    {
      icon: <FaBone />,
      title: t("medical.specialties.bone.title"),
      text: t("medical.specialties.bone.text"),
    },
    {
      icon: <FaSyringe />,
      title: t("medical.specialties.beauty.title"),
      text: t("medical.specialties.beauty.text"),
    },
  ];
  
  const steps = [
    {
      number:"01",
      title:t("medical.steps.one.title"),
      text:t("medical.steps.one.text")
    },
    {
      number:"02",
      title:t("medical.steps.two.title"),
      text:t("medical.steps.two.text")
    },
    {
      number:"03",
      title:t("medical.steps.three.title"),
      text:t("medical.steps.three.text")
    },
    {
      number:"04",
      title:t("medical.steps.four.title"),
      text:t("medical.steps.four.text")
    },
    {
      number:"05",
      title:t("medical.steps.five.title"),
      text:t("medical.steps.five.text")
    }
  ];
  
  return (
    <>
      <section className="relative overflow-hidden min-h-155 flex items-center">

        <div
          className="absolute inset-0 bg-[#0092A5] opacity-30"
          style={{
            WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mt-24 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-white">
          <span className="inline-block bg-[#0092A5] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            {t("medical.heroBadge")}
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {t("medical.heroTitle")}
            <span className="block text-[#fc9403]">{t("medical.heroTitleAccent")}</span>
          </h1>
          <p className="mt-6 text-gray-200 font-semibold p-3 bg-zinc-800/75 rounded-2xl border-2 border-[#0092A5] text-lg leading-relaxed max-w-2xl">
            {t("medical.heroSubtitle")}
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact?destination=Tourisme%20m%C3%A9dical&idea=Hello%2C%20I%20want%20to%20book%20a%20medical%20trip.%20Can%20I%20get%20more%20information%3F">
              <button className="bg-[#fc9403] cursor-pointer hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition">
                {t("medical.heroCtaContact")}
              </button>
            </Link>
            <Link to="/destinations">
                <button className="bg-[#0092A5] cursor-pointer hover:bg-[#007a8c] text-white px-8 py-4 rounded-full font-semibold transition">
                  {t("medical.heroCtaDestinations")}
                </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("medical.whyTitlePrefix")} <span className="text-[#0092A5]">{t("medical.whyTitleAccent")}</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                {t("medical.whyText1")}
              </p>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                {t("medical.whyText2")}
              </p>
              <div className="space-y-4 mt-8">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-4 text-base">
                    <div className="mt-0.5 w-7 h-7 min-w-7 rounded-full bg-[#0092A5] text-white flex items-center justify-center">
                      <FaCheck className="text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1400&auto=format&fit=crop"
              alt={t("medical.whyImageAlt")}
              className="rounded-[40px] shadow-xl w-full object-cover h-130"
            />
          </div>
        </div>
      </section>

      <section id="specialites" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("medical.specialtiesTitle")}
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              {t("medical.specialtiesText")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-[30px] shadow-lg p-8 flex flex-col items-start hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl">{s.title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("medical.stepsTitle")}
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              {t("medical.stepsText")}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-cyan-100 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#0092A5] text-white flex items-center justify-center font-extrabold text-lg mb-4 shadow-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.number}
                </div>
                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          {/* mobile stacked version */}
          <div className="md:hidden mt-6 space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 items-start">
                <div className="w-12 h-12 min-w-12 rounded-full bg-[#0092A5] text-white flex items-center justify-center font-extrabold text-sm shadow"
                  style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-base">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("medical.includedTitle")}
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              {t("medical.includedText")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedServices.map((s) => (
              <div
                key={s.title}
                className="text-center bg-white rounded-[30px] shadow-lg p-6 flex flex-col items-center hover:-translate-y-1 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mt-4">{s.title}</h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1800&auto=format&fit=crop"
              alt={t("medical.ctaImageAlt")}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-8 py-24 md:px-16 text-center">
              <span className="inline-block bg-[#fc9403] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                {t("medical.ctaBadge")}
              </span>
              <h2
                className="text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("medical.ctaTitle")}
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                {t("medical.ctaText")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact?destination=Tourisme%20m%C3%A9dical&idea=Hello%2C%20I%20want%20to%20book%20a%20medical%20trip.%20Can%20I%20get%20more%20information%3F"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t("medical.ctaContact")}
                </Link>
                <Link
                  to="/destinations"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  {t("medical.ctaDestinations")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}