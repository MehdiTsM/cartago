import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
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
                href="https://www.facebook.com/share/1Bj3LVxHCa/"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/cartago_travel_?igsh=eWRscDRxbWVmc3dp"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@cartago.travel?_r=1&_t=ZS-97I27vdByh2"
                className="w-11 h-11 rounded-full bg-[#0092A5] flex items-center justify-center hover:scale-110 transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.navigation")}</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/">{t("header.home")}</Link>
              <Link to="/destinations">{t("header.destinations")}</Link>
              <Link to="/explore-dz">{t("header.explore")}</Link>
              <Link to="/about">{t("header.about")}</Link>
              <Link to="/contact">{t("header.contactUs")}</Link>
            </div>
          </div>


{/* Contact */}
<div>
  <h3 className="text-lg font-bold mb-6">{t("footer.contact")}</h3>

  <div className="space-y-5 text-gray-400">
    {/* Address */}
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt className="text-[#0092A5] mt-1 shrink-0" />
      <span>Alger, Algérie</span>
    </div>

    {/* Phone numbers */}
    <div className="flex items-start gap-3">
      <FaPhoneAlt className="text-[#0092A5] mt-1 shrink-0" />
      <div className="flex flex-col gap-1">
        <span>0555 77 77 74</span>
        <span>0555 77 77 79</span>
        <span>0661 80 07 80</span>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-3">
      <FaEnvelope className="text-[#0092A5] shrink-0" />
      <span>cartagotravel.dz@gmail.com</span>
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