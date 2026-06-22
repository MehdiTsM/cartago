import { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  doc,
  getDoc
} from "firebase/firestore";

import {
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaArrowLeft,
  FaCompass
} from "react-icons/fa";

import { useParams, Link } from "react-router-dom";


export default function ExploreDetails(){

const {id} = useParams();

const [place,setPlace] = useState(null);
const [loading,setLoading] = useState(true);



useEffect(() => {

async function fetchPlace(){

try{

const ref = doc(db,"explore",id);

const snap = await getDoc(ref);


if(snap.exists()){

setPlace({
id:snap.id,
...snap.data()
});

}else{

setPlace(null);

}

}catch(error){

console.error(error);

setPlace(null);

}finally{

setLoading(false);

}


}


fetchPlace();
window.scrollTo(0, 0);


},[id]);





if(loading){

return (

<div className="h-screen flex items-center justify-center">

<div className="text-center">

<div className="
w-12
h-12
border-4
border-[#0092A5]
border-t-transparent
rounded-full
animate-spin
mx-auto
"/>

<p className="mt-4 text-gray-500">
Chargement de la destination...
</p>

</div>

</div>

)

}





if(!place){

return (

<div className="h-screen flex flex-col items-center justify-center">

<p className="text-4xl">
🏜️
</p>

<h2 className="text-xl font-bold mt-3">
Destination introuvable
</h2>


<Link 
to="/explore"
className="mt-5 bg-[#0092A5] text-white px-6 py-3 rounded-full"
>
Retour
</Link>


</div>

)

}





return (

<div className="bg-white">



{/* HERO */}

<section className="
relative
h-162.5
overflow-hidden
">


<img

src={place.image}

alt={place.name}

className="
absolute
inset-0
w-full
h-full
object-cover
"
/>



<div className="
absolute
inset-0
bg-linear-to-t
from-black/90
via-black/50
to-black/20
"/>


<Link

to="/explore"

className="
absolute
top-8
left-8
z-20
bg-white/20
backdrop-blur-md
text-white
px-5
py-3
rounded-full
flex
items-center
gap-2
hover:bg-white/30
transition
"

>

<FaArrowLeft/>

Retour

</Link>






<div className="
relative
z-10
h-full
flex
items-end
px-6
md:px-16
pb-16
">


<div className="max-w-4xl">



<span className="
inline-block
bg-[#fc9403]
text-white
px-4
py-2
rounded-full
text-xs
font-bold
uppercase
tracking-widest
mb-5
">

{place.tag}

</span>




<h1

className="
text-5xl
md:text-7xl
font-extrabold
text-white
"

style={{
fontFamily:"Montserrat, sans-serif"
}}

>

{place.name}

</h1>




<p className="
text-gray-200
text-lg
md:text-xl
mt-5
max-w-3xl
">

{place.description}

</p>




<div className="
flex
flex-wrap
gap-6
mt-8
text-white
">


<div className="
flex
items-center
gap-2
">

<FaMapMarkerAlt className="text-[#0092A5]"/>

{place.wilaya}

</div>



<div className="
flex
items-center
gap-2
">

<FaCompass className="text-[#0092A5]"/>

{place.region}

</div>



<div className="
flex
items-center
gap-2
">

<FaClock className="text-[#0092A5]"/>

{place.duration} jours

</div>



<div className="
flex
items-center
gap-2
text-yellow-400
">

<FaStar/>

<span className="text-white">

{place.rating}/5

</span>

</div>

</div>

</div>

</div>
</section>


{/* CONTENT */}

<section className="
max-w-7xl
mx-auto
px-6
py-20
grid
lg:grid-cols-3
gap-12
">





{/* GALLERY */}

<div className="
lg:col-span-2
">


<h2 className="
text-4xl
font-bold
mb-8
">

Galerie

</h2>



<div className="
grid
sm:grid-cols-2
md:grid-cols-3
gap-5
">


{place.gallery?.map((img,index)=>(


<div

key={index}

className="
overflow-hidden
rounded-3xl
group
h-64
"

>


<img

src={img}

alt=""

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-500
"

/>


</div>


))}



</div>


</div>


{/* BOOKING CARD */}

<div>


<div className="
sticky
top-24
bg-white
rounded-3xl
shadow-xl
border
p-8
">


<h3 className="
text-2xl
font-bold
mb-4
">

Envie de visiter ?

</h3>


<p className="
text-gray-500
text-sm
leading-relaxed
">

Organisez votre voyage avec notre équipe et découvrez cette destination avec un circuit adapté.

</p>

<Link

to="/contact"

className="
block
text-center
mt-8
bg-[#0092A5]
hover:bg-[#007b8c]
text-white
py-4
rounded-full
font-semibold
transition
"

>

Organiser ce voyage

</Link>
</div>
</div>
</section>
</div>
)
}