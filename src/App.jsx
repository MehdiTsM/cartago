import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundEffects from "./BackgroundEffects";
import { db } from "./firebase";

import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import ExploreDZ from "./pages/ExploreDZ";
import About from "./pages/About";
import Transport from "./pages/Transport";
import TeamBuilding from "./pages/TeamBuilding";
import TourismMedical from "./pages/TourismeMedical";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ExploreDetails from "./pages/ExploreDetails";


const DASHBOARD_ROUTES = ["/admin-dashboard"];
function RouteAnalytics() {
  const location = useLocation();
  const { t } = useTranslation();

  const trackedRoutes = [
    { path: "/", name: t("routes.home") },
    { path: "/destinations", name: t("routes.destinations") },
    { path: "/explore-dz", name: t("routes.exploreDz") },
    { path: "/about", name: t("routes.about") },
    { path: "/transport", name: t("routes.transport") },
    { path: "/team-building", name: t("routes.teamBuilding") },
    { path: "/tourisme-medical", name: t("routes.medical") },
    { path: "/contact", name: t("routes.contact") },
    { path: "/login", name: t("routes.login") },
  ];

  useEffect(() => {
    const { pathname, search } = location;

    if (pathname === "/admin-dashboard") {
      return;
    }

    const route = trackedRoutes.find((entry) => entry.path === pathname);
    const params = new URLSearchParams(search);
    const utmSource = params.get("utm_source") || "";
    const utmMedium = params.get("utm_medium") || "";
    const utmCampaign = params.get("utm_campaign") || "";
    const storageKey = "cartago:last-pageview";
    const currentKey = `${pathname}${search}`;
    const now = Date.now();

    try {
      const last = JSON.parse(sessionStorage.getItem(storageKey) || "null");
      if (last && last.key === currentKey && now - last.at < 1500) {
        return;
      }

      sessionStorage.setItem(storageKey, JSON.stringify({ key: currentKey, at: now }));
    } catch {
      // Ignore sessionStorage failures and continue tracking.
    }

    const sessionStorageKey = "cartago:session-id";
    let sessionId = "";
    try {
      sessionId = sessionStorage.getItem(sessionStorageKey) || "";
      if (!sessionId) {
        sessionId = globalThis.crypto?.randomUUID?.() || `${now}-${Math.random().toString(36).slice(2)}`;
        sessionStorage.setItem(sessionStorageKey, sessionId);
      }
    } catch {
      sessionId = `${now}-${Math.random().toString(36).slice(2)}`;
    }

    void addDoc(collection(db, "pageViews"), {
      path: pathname,
      search,
      pageName: route?.name || pathname,
      utmSource,
      utmMedium,
      utmCampaign,
      referrer: document.referrer || "",
      sessionId,
      createdAt: new Date().toISOString(),
    }).catch((error) => {
      console.error("Error logging page view:", error);
    });
  }, [location.pathname, location.search]);

  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isDashboard = DASHBOARD_ROUTES.includes(pathname);
  const [showRouteSpinner, setShowRouteSpinner] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);

    setShowRouteSpinner(true);
    const timer = window.setTimeout(() => {
      setShowRouteSpinner(false);
    }, 220);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <BackgroundEffects />
      <div className="relative min-h-screen flex flex-col">
        {!isDashboard && <Header />}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetails />} />
            <Route path="/explore-dz" element={<ExploreDZ />} />
            <Route path="/about" element={<About />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/team-building" element={<TeamBuilding />} />
            <Route path="/tourisme-medical" element={<TourismMedical />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/explore/:id" element={<ExploreDetails />} />
          </Routes>
        </main>

        {!isDashboard && <Footer />}
      </div>

      {showRouteSpinner && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-white/25 backdrop-blur-sm">
          <div className="text-center">
            <div className="w-14 h-14 border-4 border-[#0092A5] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="mt-4 text-sm font-medium text-gray-600">{t("common.loading")}</p>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteAnalytics />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;