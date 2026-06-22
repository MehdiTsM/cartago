import {
  FaUsers,
  FaMountain,
  FaPalette,
  FaUtensils,
  FaChessKnight,
  FaHandshake,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const activities = [
  {
    icon: <FaMountain />,
    title: "team.activities.outdoor.title",
    text: "team.activities.outdoor.text",
  },
  {
    icon: <FaPalette />,
    title: "team.activities.creative.title",
    text: "team.activities.creative.text",
  },
  {
    icon: <FaChessKnight />,
    title: "team.activities.strategy.title",
    text: "team.activities.strategy.text",
  },
  {
    icon: <FaUtensils />,
    title: "team.activities.food.title",
    text: "team.activities.food.text",
  },
  {
    icon: <FaHandshake />,
    title: "team.activities.seminars.title",
    text: "team.activities.seminars.text",
  },
  {
    icon: <FaUsers />,
    title: "team.activities.corporate.title",
    text: "team.activities.corporate.text",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    label: "Outdoor & Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    label: "Séminaires",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    label: "Ateliers Créatifs",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    label: "Cohésion d'Équipe",
  },
];


export default function TeamBuilding() {
  const { t } = useTranslation();

  return (
<>
{/* ── HERO ── */}
<section className="relative overflow-hidden min-h-[600px] flex items-center">

<img
src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1800&auto=format&fit=crop"
alt=""
aria-hidden="true"
className="absolute inset-0 w-full h-full object-cover object-center"
style={{
WebkitMaskImage:
"linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
maskImage:
"linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
}}
/>

<div
className="absolute inset-0 bg-black/55"
style={{
WebkitMaskImage:
"linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
maskImage:
"linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
}}
/>

<div className="relative z-10 mt-24 max-w-7xl mx-auto px-6 lg:px-12 py-24 text-white">

<span className="inline-block bg-[#fc9403] text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-6 uppercase tracking-widest">
{t("team.badge")}
</span>


<h1
className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
style={{fontFamily:"Montserrat, sans-serif"}}
>

{t("team.hero.title")}

<span className="block text-[#fc9403]">
{t("team.hero.highlight")}
</span>

</h1>


<p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-2xl">
{t("team.hero.description")}
</p>


<div className="flex flex-wrap gap-4 mt-10">

<Link to="/contact?destination=Team%20Building&idea=Hello%2C%20I%20want%20to%20book%20a%20team%20building%20trip.%20Can%20I%20get%20more%20information%3F">

<button className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition">

{t("team.hero.button")}

</button>

</Link>

</div>

</div>

</section>



{/* ── INTRO ── */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>


<h2
className="text-4xl lg:text-5xl font-bold"
style={{fontFamily:"Montserrat, sans-serif"}}
>

{t("team.intro.title")}

</h2>



<p className="text-gray-600 mt-6 text-lg leading-relaxed">

{t("team.intro.text1")}

</p>



<p className="text-gray-600 mt-4 text-lg leading-relaxed">

{t("team.intro.text2")}

</p>



<div className="space-y-4 mt-8">

{[
"team.benefits.0",
"team.benefits.1",
"team.benefits.2",
"team.benefits.3",
].map((item)=>(

<div key={item} className="flex items-start gap-4 text-base">

<div className="mt-0.5 w-7 h-7 min-w-[28px] rounded-full bg-[#0092A5] text-white flex items-center justify-center">

<FaCheck className="text-xs"/>

</div>


<span className="text-gray-700">

{t(item)}

</span>


</div>

))}

</div>


</div>

</div>

</div>

</section>





{/* ── ACTIVITIES ── */}

<section id="activites" className="py-24">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-14">


<h2
className="text-4xl font-bold"
style={{fontFamily:"Montserrat, sans-serif"}}
>

{t("team.sections.activities")}

</h2>


<p className="text-gray-500 mt-3 max-w-xl mx-auto">

{t("team.sections.activitiesDesc")}

</p>


</div>




<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


{activities.map((a)=>(


<div
key={a.title}
className="bg-white rounded-[30px] shadow-lg p-8 flex flex-col items-start hover:-translate-y-1 transition"
>


<div className="w-14 h-14 rounded-2xl bg-cyan-50 text-[#0092A5] flex items-center justify-center text-2xl mb-5">

{a.icon}

</div>


<h3 className="font-bold text-xl">

{t(a.title)}

</h3>


<p className="text-gray-500 mt-3 leading-relaxed">

{t(a.text)}

</p>


</div>


))}


</div>


</div>


</section>





{/* ── AUDIENCE ── */}

<section className="py-24">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-14">


<h2 className="text-4xl font-bold">

{t("team.sections.audience")}

</h2>


<p className="text-gray-500 mt-3 max-w-xl mx-auto">

{t("team.sections.audienceDesc")}

</p>


</div>




<div className="grid md:grid-cols-3 gap-8">


{[

{
title:"team.audience.companies.title",
text:"team.audience.companies.text",
img:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop"
},


{
title:"team.audience.groups.title",
text:"team.audience.groups.text",
img:"https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=900&auto=format&fit=crop"
},


{
title:"team.audience.startups.title",
text:"team.audience.startups.text",
img:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop"
}

].map((c)=>(


<div
key={c.title}
className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition"
>


<img
src={c.img}
alt=""
className="h-52 w-full object-cover"
/>


<div className="p-7">


<h3 className="font-bold text-xl">

{t(c.title)}

</h3>


<p className="text-gray-500 mt-3 leading-relaxed">

{t(c.text)}

</p>


</div>


</div>


))}


</div>


</div>


</section>





{/* ── CTA ── */}

<section className="py-24">


<div className="max-w-7xl mx-auto px-6">


<div className="relative overflow-hidden rounded-[40px]">


<img
src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1800&auto=format&fit=crop"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>


<div className="absolute inset-0 bg-black/60"/>


<div className="relative z-10 px-8 py-24 md:px-16 text-center">


<h2 className="text-4xl md:text-6xl font-bold text-white">

{t("team.sections.ctaTitle")}

</h2>



<p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">

{t("team.sections.ctaText")}

</p>



<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">


<Link
to="/contact?destination=Team%20Building&idea=Hello%2C%20I%20want%20to%20book%20a%20team%20building%20trip.%20Can%20I%20get%20more%20information%3F"
className="bg-[#fc9403] hover:bg-[#db8102] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>

{t("team.hero.button")}

</Link>



<Link
to="/destinations"
className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/25"
>

{t("team.sections.destinations")}

</Link>


</div>


</div>


</div>


</div>


</section>

</>
  );
}