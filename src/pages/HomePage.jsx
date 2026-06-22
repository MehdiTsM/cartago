import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaPlane,
  FaHotel,
  FaShieldAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logoBanner.jpg";
import Banner from '../assets/homeBanner.jpg';
import { SlOrganization } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useLanguage } from "../context/LanguageContext";
import { localizeRecord } from "../utils/localizeRecord";


export default function HomePage() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [destinations, setDestinations] = useState([]);
  const [loadingDestinations, setLoadingDestinations] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchDestinations() {
      setLoadingDestinations(true);

      try {
        const snapshot = await getDocs(collection(db, "destinations"));
        const records = snapshot.docs
          .map((doc) => ({
            ...localizeRecord(doc.data(), language),
            id: doc.id,
          }))
          .filter((doc) => doc.published !== false)
          .sort((left, right) => {
            if (left.tag === "Coup de cœur" && right.tag !== "Coup de cœur") return -1;
            if (right.tag === "Coup de cœur" && left.tag !== "Coup de cœur") return 1;
            return Number(right.rating || 0) - Number(left.rating || 0);
          })
          .slice(0, 4);

        if (!cancelled) {
          setDestinations(records);
        }
      } catch (error) {
        console.error("Error fetching homepage destinations:", error);
        if (!cancelled) {
          setDestinations([]);
        }
      } finally {
        if (!cancelled) {
          setLoadingDestinations(false);
        }
      }
    }

    fetchDestinations();

    return () => {
      cancelled = true;
    };
  }, [language]);

  return (
    <>

{/* ── HERO with background banner ── */}
<section   className="relative overflow-hidden"
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",

  }}>
    
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-transparent via-white/70 to-transparent" />
  {/* Background image */}
  <img
    src={Banner}
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
style={{
  WebkitMaskImage: `
    linear-gradient(to bottom, black 0%, black 80%, transparent 100%),
    linear-gradient(to left, black 0%, black 80%, transparent 100%)
  `,
  maskImage: `
    linear-gradient(to bottom, black 0%, black 80%, transparent 100%),
    linear-gradient(to left, black 0%, black 80%, transparent 100%)
  `,
  WebkitMaskComposite: "source-in",
}}
  />

  {/* Gradient overlay — heavier at top-left where text lives, lighter on the right */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-14 items-center mt-12">
      <div>
        <h1
          className="mt-6 text-5xl md:text-6xl text-[#0092A5] lg:text-7xl font-extrabold leading-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {t("home.heroTitle")}
          <span className="block text-[#fc9403]">
            {t("home.heroTitleAccent")}
          </span>
        </h1>

        <p className="mt-6 text-zinc-50 border-2 border-[#0092A5] font-semibold shadow-text text-lg bg-zinc-900/60 p-3 rounded-xl shadow-xl leading-relaxed max-w-xl">
          {t("home.heroText")}
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

<Link to="/destinations">
  <button className=" bg-[#0092A5] hover:bg-[#007b8c] cursor-pointer text-zinc-100 px-8 py-4 rounded-full font-semibold hover:text-white transition">
    {t("home.ctaDestinations")}
  </button>
</Link>

<Link to="/contact">
  <button className="border-2 border-[#0092A5] bg-zinc-100 text-[#0092A5] cursor-pointer px-8 py-4 rounded-full font-semibold hover:bg-[#0092A5] hover:text-white transition">
    {t("home.ctaContact")}
  </button>
</Link>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FEATURES */}
      <section className="-mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className=" rounded-[35px]  p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Feature
              icon={<FaPlane />}
              title={t("home.feature1")}
              text={t("home.feature1Text")}
            />

            <Feature
              icon={<FaHotel />}
              title={t("home.feature2")}
              text={t("home.feature2Text")}
            />

            <Feature
              icon={<FaShieldAlt />}
              title={t("home.feature3")}
              text={t("home.feature3Text")}
            />

            <Feature
              icon={<FaHeadset />}
              title={t("home.feature4")}
              text={t("home.feature4Text")}
            />
            <Feature
              icon={<FaStar />}
              title={t("home.feature5")}
              text={t("home.feature5Text")}
            />
            <Feature
              icon={<SlOrganization />}
              title={t("home.feature6")}
              text={t("home.feature6Text")}
            />
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-14">
            <div>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("home.popularDestinations")}
              </h2>

              <p className="text-gray-500 mt-2">
                {t("home.popularText")}
              </p>
            </div>

            <Link to="/destinations">
              <button className="cursor-pointer mt-4 md:mt-0  text-white px-6 py-3 rounded-full font-semibold bg-[#fc9403] hover:bg-[#db8102] transition">
                {t("home.viewAll")}
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loadingDestinations ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="h-64 w-full bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-5 w-2/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  </div>
                </div>
              ))
            ) : destinations.length > 0 ? (
              destinations.map((item) => (
                <Link
                  key={item.id}
                  to={`/destinations/${item.id}`}
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition block"
                >
                  <img
                    src={item.image || item.gallery?.[0]}
                    alt={item.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <h3 className="font-bold text-xl leading-tight">{item.name}</h3>
                        <p className="text-gray-500 mt-2">{item.country}</p>
                      </div>

                      <div className="flex items-center gap-1 text-yellow-500 shrink-0">
                        <FaStar />
                        <span className="font-semibold text-gray-800">
                          {item.rating || "4.9"}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-500 mt-4 line-clamp-3">
                      {item.description}
                    </p>

                    <p className="text-[#0092A5] font-bold mt-4">
                      {item.duration ? `${item.duration} jours` : t("home.viewAll")}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                Aucune destination disponible pour le moment.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-xl"
            />

            <div>
              <h2
                className="text-5xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("home.whyTitle")}
              </h2>

              <p className="text-gray-600 mt-6 text-lg">
                {t("home.whyText")}
              </p>

              <div className="space-y-5 mt-10">
                {t("home.whyPoints", { returnObjects: true }).map((item) => (
                  <div key={item} className="flex items-center gap-4 text-lg">
                    <div className="w-8 h-8 rounded-full bg-[#0092A5] text-white flex items-center justify-center">
                      ✓
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
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
              <h2
                className="mt-6 text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {t("home.ctaTitle")}
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
                {t("home.ctaText")}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  {t("home.ctaContact")}
                </Link>

                <Link
                  to="/destinations"
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
                >
                  {t("home.ctaDestinations")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="text-center bg-white rounded-[30px] shadow-lg p-6 flex flex-col items-center">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h3 className="font-bold text-xl mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
}