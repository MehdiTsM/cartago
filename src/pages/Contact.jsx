import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative bg-[#0092A5] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <h1
            className="text-6xl md:text-7xl font-extrabold mt-12"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact Us
          </h1>

          <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
            We design unforgettable journeys. Tell us what you want — we’ll handle the rest.
          </p>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="-mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-[30px] grid md:grid-cols-3 overflow-hidden">

            <Info icon={<FaPhone />} title="Phone" text="+213 XXX XXX XXX" />
            <Info icon={<FaEnvelope />} title="Email" text="contact@cartago.com" />
            <Info icon={<FaMapMarkerAlt />} title="Location" text="Sidi Yahia, Hydra - Algiers" />

          </div>
        </div>
      </section>

{/* MAIN */}
<section className="py-18">
  <div className="max-w-7xl mx-auto px-6">

    {/* DESKTOP / LARGE SCREENS */}
    <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">

      {/* IMAGE */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600&auto=format&fit=crop"
          className="rounded-[40px] h-[600px] w-full object-cover shadow-2xl"
          alt=""
        />
      </div>

      {/* FORM */}
      <div>
        <h2
          className="text-5xl font-bold leading-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Tell us about your
          <span className="block text-[#fc9403]">
            dream destination
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Fill in the details and our travel experts will come back to you with a personalized plan.
        </p>

        <form className="mt-10 space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="First name"
              className="bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
            />

            <input
              placeholder="Last name"
              className="bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
            />
          </div>

          <input
            placeholder="Email address"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <input
            placeholder="Where do you want to go?"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <textarea
            rows="5"
            placeholder="Tell us your idea..."
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <button className="w-full bg-[#fc9403] text-white py-4 rounded-2xl font-semibold hover:bg-[#db8102] transition">
            Send Request
          </button>
        </form>
      </div>
    </div>

    {/* MOBILE / TABLET (FORM ONLY) */}
    <div className="lg:hidden">
      <div>
        <h2
          className="text-4xl font-bold leading-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Tell us about your
          <span className="block text-[#fc9403]">
            dream destination
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Fill in the details and our travel experts will come back to you with a personalized plan.
        </p>

        <form className="mt-10 space-y-4">

          <input
            placeholder="First name"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <input
            placeholder="Last name"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <input
            placeholder="Email address"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <input
            placeholder="Where do you want to go?"
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <textarea
            rows="5"
            placeholder="Tell us your idea..."
            className="w-full bg-gray-50 border rounded-2xl px-5 py-4 focus:outline-none focus:border-[#0092A5]"
          />

          <button className="w-full bg-[#fc9403] text-white py-4 rounded-2xl font-semibold hover:bg-[#db8102] transition">
            Send Request
          </button>
        </form>
      </div>
    </div>

  </div>
</section>

      {/* MAP + SOCIAL */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          {/* MAP */}
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <iframe
              title="Sidi Yahia Map"
              src="https://www.google.com/maps?q=Sidi%20Yahia%20Hydra%20Algiers&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            />
          </div>

          {/* SOCIAL */}
<div className="p-10 flex flex-col justify-center">

  <h3
    className="text-3xl font-bold"
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    Follow Us
  </h3>

  <p className="text-gray-600 mt-4">
    Stay connected for travel deals, inspiration, and new destinations.
  </p>

  {/* ICONS */}
  <div className="flex gap-5 mt-8 text-2xl">

    <a
      href="#"
      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0092A5] text-white hover:scale-110 transition"
    >
      <FaFacebookF />
    </a>

    <a
      href="#"
      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0092A5] text-white hover:scale-110 transition"
    >
      <FaInstagram />
    </a>

    <a
      href="#"
      className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0092A5] text-white hover:scale-110 transition"
    >
      <FaTiktok />
    </a>
  </div>

  {/* LOCATION */}
  <div className="mt-10 text-sm">
    Based in{" "}
    <span className="font-semibold text-[#fc9403]">
      Sidi Yahia, Hydra – Algiers
    </span>
  </div>

</div>
        </div>
      </section>

    </div>
  );
}

/* INFO COMPONENT */
function Info({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="w-12 h-12 rounded-2xl bg-[#0092A5] text-white flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
}