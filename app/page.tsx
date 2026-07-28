"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

const [menu,setMenu]=useState(false);


const products=[
{
icon:"🏥",
title:"Gelang Pasien",
desc:"Gelang identifikasi pasien dewasa, anak dan bayi untuk mendukung keselamatan pasien."
},
{
icon:"🖨️",
title:"Barcode Printer",
desc:"Printer barcode untuk kebutuhan label, wristband dan industri."
},
{
icon:"🏷️",
title:"Label & Ribbon",
desc:"Label barcode, thermal ribbon dan media cetak berkualitas tinggi."
},
{
icon:"🔧",
title:"Instalasi & Support",
desc:"Instalasi perangkat, konfigurasi sistem dan dukungan teknis."
}
];


const clients=[
{
img:"/images/RSUD.png",
name:"RSUD Sayang Cianjur",
desc:"Pengadaan gelang pasien, barcode printer dan label rumah sakit."
},
{
img:"/images/RS-PENA.png",
name:"RS Pena 88",
desc:"Implementasi E-Tiket dan pencetakan label."
},
{
img:"/images/rs-nusantara.png",
name:"RS Nusantara Mustika Jaya",
desc:"Solusi identifikasi pasien modern."
},
{
img:"/images/rs-bhayangkara-cianjur.png",
name:"RS Bhayangkara Cianjur",
desc:"Implementasi gelang pasien dan printer wristband."
},
{
img:"/images/rs-sekarwangi.png",
name:"RSUD Sekarwangi Sukabumi",
desc:"Sistem kartu identitas pasien."
},
{
img:"/images/rs-muhammadiyah.png",
name:"RS Muhammadiyah Taman Puring",
desc:"Solusi identifikasi pasien rumah sakit."
}
];



return(

<main className="bg-white text-gray-800 scroll-smooth">


{/* NAVBAR */}

<header className="
fixed top-0 left-0 right-0
bg-white/95 backdrop-blur
shadow-md
z-50">


<div className="
max-w-7xl mx-auto
flex items-center justify-between
px-4
py-4">


<h1 className="
text-base
sm:text-xl
md:text-2xl
font-bold
text-blue-600">

PT.TRINOVASI DIGITAL SOLUSI

</h1>



{/* DESKTOP */}

<nav className="
hidden md:flex
gap-8
font-medium">


<a href="#home">Home</a>
<a href="#about">About</a>

<Link href="/software">
Software
</Link>

<a href="#services">
Services
</a>

<a href="#portfolio">
Portfolio
</a>

<a href="#contact">
Contact
</a>


</nav>



{/* MOBILE BUTTON */}

<button

onClick={()=>setMenu(!menu)}

className="
md:hidden
text-3xl
p-2
">

☰

</button>


</div>




{/* MOBILE MENU */}

{
menu &&

<div className="
md:hidden
bg-white
shadow-lg
px-6
py-6">


<nav className="
flex
flex-col
gap-5
font-semibold">


<a 
onClick={()=>setMenu(false)}
href="#home">

Home

</a>


<a 
onClick={()=>setMenu(false)}
href="#about">

About

</a>


<Link
onClick={()=>setMenu(false)}
href="/software">

Software

</Link>


<a 
onClick={()=>setMenu(false)}
href="#services">

Services

</a>


<a 
onClick={()=>setMenu(false)}
href="#portfolio">

Portfolio

</a>


<a 
onClick={()=>setMenu(false)}
href="#contact">

Contact

</a>


</nav>

</div>

}



</header>





{/* HERO */}

<section
id="home"
className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-r
from-blue-700
to-cyan-500
text-white
px-5
pt-24">


<div className="
max-w-5xl
text-center">


<h2 className="
text-3xl
sm:text-4xl
md:text-6xl
font-bold
leading-tight
mb-6">


Solusi Identifikasi Pasien
& Barcode Terpercaya


</h2>



<p className="
text-base
sm:text-lg
md:text-xl
leading-7
md:leading-9
mb-10">


PT Trinovasi Digital Solusi menyediakan
gelang pasien, kartu pasien, barcode printer,
printer kartu, label barcode, thermal ribbon,
dan perangkat AIDC untuk rumah sakit,
klinik, laboratorium serta industri.


</p>



<div className="
flex
flex-col
sm:flex-row
justify-center
gap-4">


<a
href="#contact"
className="
bg-white
text-blue-700
px-8
py-4
rounded-full
font-bold">

Hubungi Kami

</a>



<Link
href="/produk"
className="
border-2
border-white
px-8
py-4
rounded-full
font-bold">

Lihat Produk

</Link>


</div>


</div>


</section>





{/* ABOUT */}

<section
id="about"
className="
py-20
px-5">


<div className="
max-w-6xl
mx-auto">


<h2 className="
text-3xl
md:text-4xl
font-bold
text-center
mb-10">

Tentang Kami

</h2>



<div className="
text-center
space-y-6
text-gray-600
leading-8
text-base
md:text-lg">


<p>

<b>
PT Trinovasi Digital Solusi
</b>

merupakan perusahaan penyedia
solusi teknologi informasi dan
sistem identifikasi otomatis.

</p>



<p>

Kami menyediakan gelang pasien,
barcode printer, barcode scanner,
label barcode dan perangkat AIDC.

</p>



<p>

Kami membantu rumah sakit,
klinik dan perusahaan melakukan
transformasi digital.

</p>


</div>


</div>


</section>






{/* SERVICES */}

<section
id="services"
className="
bg-gray-100
py-20
px-5">


<div className="
max-w-7xl
mx-auto">


<h2 className="
text-3xl
md:text-4xl
font-bold
text-center
mb-12">

Produk & Layanan

</h2>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6">


{
products.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
shadow-lg
p-6
transition">


<div className="
text-5xl
mb-5">

{item.icon}

</div>


<h3 className="
text-xl
font-bold
mb-3">

{item.title}

</h3>


<p className="
text-gray-600
leading-7">

{item.desc}

</p>


</div>


))
}


</div>


</div>


</section>





{/* PORTFOLIO */}

<section
id="portfolio"
className="
py-20
px-5">


<div className="
max-w-7xl
mx-auto">


<h2 className="
text-3xl
md:text-4xl
font-bold
text-center
mb-5">

Klien Kami

</h2>



<p className="
text-center
text-gray-600
mb-12">

Dipercaya berbagai rumah sakit
dalam solusi identifikasi pasien.

</p>




<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8">


{
clients.map((client,index)=>(


<div
key={index}
className="
bg-white
rounded-2xl
shadow-lg
p-6
text-center">


<div className="
h-40
flex
justify-center
items-center
mb-5">


<Image

src={client.img}
alt={client.name}
width={180}
height={180}
className="
object-contain
max-h-36"

/>


</div>


<h3 className="
text-xl
font-bold
mb-3">

{client.name}

</h3>



<p className="
text-gray-600">

{client.desc}

</p>


</div>


))
}


</div>


</div>


</section>





{/* CONTACT */}

<section
id="contact"
className="
bg-blue-700
text-white
py-16
px-5
text-center">


<h2 className="
text-3xl
font-bold
mb-5">

Hubungi Kami

</h2>


<p>

Siap membantu kebutuhan barcode
dan identifikasi pasien perusahaan Anda.

</p>


</section>





<footer
className="
bg-black
text-white
text-center
py-6
text-sm">

© 2026 PT.TRINOVASI DIGITAL SOLUSI

</footer>


</main>

)

}