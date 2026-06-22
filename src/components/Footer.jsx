import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/cartago-logo.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Cartago Travel"
              className="h-20 rounded-xl p-2"
            />

            <p className="mt-6 text-gray-400 leading-relaxed">{t("footer.description")}</p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.navigation")}</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/">{t("header.home")}</Link>
              <Link to="/destinations">{t("header.destinations")}</Link>
              <Link to="/circuits">Circuits</Link>
              <Link to="/about">{t("header.about")}</Link>
              <Link to="/contact">{t("header.contactUs")}</Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.popular")}</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <span>Turquie</span>
              <span>Dubai</span>
              <span>Malaisie</span>
              <span>Thaïlande</span>
              <span>Omra</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.contact")}</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#0092A5] mt-1" />
                <span>Alger, Algérie</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#0092A5]" />
                <span>+213 XX XX XX XX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#0092A5]" />
                <span>contact@cartago.dz</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>

        </div>
      </div>
    </footer>
  );
}