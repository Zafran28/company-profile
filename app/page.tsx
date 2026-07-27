import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            PT.TRINOVASI DIGITAL SOLUSI
          </h1>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
           <Link href="/software" className="hover:text-blue-600">
  Software
</Link>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-linear-to-r from-blue-700 to-cyan-500 text-white"
      >
        <div className="text-center px-6">
  <h1 className="text-6xl font-bold mb-6 leading-tight">
    Solusi Identifikasi Pasien & Barcode Terpercaya
  </h1>

  <p className="text-xl max-w-4xl mx-auto mb-10 leading-8">
    PT Trinovasi Digital Solusi menyediakan berbagai solusi identifikasi pasien
    seperti gelang pasien, kartu pasien, barcode printer, printer kartu,
    label barcode, thermal ribbon, dan perangkat AIDC untuk mendukung
    operasional rumah sakit, klinik, laboratorium, serta berbagai sektor industri.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="#contact"
      className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition"
    >
      Hubungi Kami
    </a>

    <Link
  href="/produk"
  className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
>
  Lihat Produk
</Link>
  </div>
</div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            Tentang Kami
          </h2>

          <div className="max-w-5xl mx-auto text-gray-600 leading-8">

  <p className="mb-6 text-lg text-center">
    <strong>PT Trinovasi Digital Solusi</strong> merupakan perusahaan yang bergerak
    di bidang penyediaan solusi teknologi informasi serta perangkat identifikasi
    otomatis untuk mendukung transformasi digital di berbagai sektor industri,
    khususnya rumah sakit, klinik, laboratorium, manufaktur, dan retail.
  </p>

  <p className="mb-6 text-lg text-center">
    Kami menyediakan berbagai produk dan layanan seperti gelang identifikasi pasien,
    kartu pasien, barcode scanner, barcode printer, printer kartu, label barcode,
    thermal ribbon, serta berbagai perangkat pendukung lainnya yang dirancang untuk
    meningkatkan efisiensi, akurasi, dan produktivitas operasional pelanggan.
  </p>

  <p className="mb-10 text-lg text-center">
    Dengan didukung tenaga profesional dan pengalaman di bidang teknologi,
    PT Trinovasi Digital Solusi berkomitmen menghadirkan produk berkualitas,
    layanan terbaik, serta solusi yang inovatif guna membantu pelanggan
    mencapai kinerja bisnis yang lebih optimal.
  </p>

  <div className="mt-12">
    <h3 className="text-3xl font-bold text-blue-700 mb-4 text-center">
      Visi
    </h3>

    <p className="text-lg text-center mb-10">
      Menjadi perusahaan penyedia solusi teknologi informasi dan sistem identifikasi
      terpercaya di Indonesia yang memberikan nilai tambah bagi setiap pelanggan.
    </p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-700 mb-4 text-center">
      Misi
    </h3>

    <ul className="list-disc pl-6 space-y-3 text-lg">
      <li>
        Menyediakan produk dan solusi teknologi yang berkualitas serta sesuai
        dengan kebutuhan pelanggan.
      </li>

      <li>
        Memberikan pelayanan profesional dengan mengutamakan kepuasan pelanggan.
      </li>

      <li>
        Membangun hubungan kerja sama jangka panjang yang dilandasi kepercayaan
        dan integritas.
      </li>

      <li>
        Mendukung transformasi digital melalui inovasi teknologi yang efisien
        dan berkelanjutan.
      </li>

      <li>
        Terus meningkatkan kompetensi sumber daya manusia dan kualitas layanan
        agar mampu memberikan solusi terbaik bagi pelanggan.
      </li>
    </ul>
  </div>

</div>
        </div>
      </section>

      {/* Services */}
     <section
  id="services"
  className="py-24 bg-gray-100"
>
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
      Produk & Layanan
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
      Kami menyediakan berbagai produk identifikasi pasien, perangkat barcode,
      serta solusi pencetakan label yang mendukung operasional rumah sakit,
      klinik, laboratorium, dan berbagai sektor industri.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="text-5xl mb-5">🏥</div>
        <h3 className="text-2xl font-bold mb-3">
          Gelang Pasien
        </h3>
        <p className="text-gray-600 leading-7">
          Menyediakan gelang identifikasi pasien dewasa, anak, dan bayi
          dengan kualitas tinggi untuk mendukung keselamatan pasien di
          rumah sakit dan fasilitas kesehatan.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="text-5xl mb-5">🖨️</div>
        <h3 className="text-2xl font-bold mb-3">
          Barcode Printer
        </h3>
        <p className="text-gray-600 leading-7">
          Menyediakan berbagai printer barcode berkualitas tinggi
          untuk kebutuhan pencetakan label, wristband, barcode,
          dan kebutuhan industri lainnya.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="text-5xl mb-5">🏷️</div>
        <h3 className="text-2xl font-bold mb-3">
          Label & Ribbon
        </h3>
        <p className="text-gray-600 leading-7">
          Menyediakan label barcode, label identifikasi, wristband label,
          thermal ribbon, serta berbagai media cetak berkualitas tinggi
          untuk kebutuhan bisnis Anda.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="text-5xl mb-5">🔧</div>
        <h3 className="text-2xl font-bold mb-3">
          Instalasi & Support
        </h3>
        <p className="text-gray-600 leading-7">
          Layanan instalasi perangkat, konfigurasi sistem,
          pelatihan pengguna, serta dukungan teknis untuk
          memastikan solusi berjalan optimal.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Portfolio */}
     <section id="portfolio" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-4xl font-bold text-center mb-4">
     Partners
    </h2>

    <p className="text-center text-gray-600 mb-12">
      ESP Scan Solutions berkolaborasi dengan berbagai mitra terpercaya untuk menghadirkan solusi terbaik bagi pelanggan.
    </p>

    <h3 className="text-3xl font-bold text-center text-blue-700 mb-12">
      PT. FOKUS KREASI MEDIA
    </h3>



    <h2 className="text-4xl font-bold text-center mb-4">
      Klien Kami
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
      Kami telah dipercaya oleh berbagai rumah sakit, klinik, dan perusahaan
      dalam menyediakan solusi identifikasi pasien, barcode, serta perangkat
      pendukung operasional.
    </p>
<div className="grid md:grid-cols-3 gap-8">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

<<<<<<< HEAD
      <div className="h-40 flex items-center justify-center mb-6">
       <Image
    src="/images/RSUD.png"
    alt="Logo RSUD"
    width={180}
    height={180}
    unoptimized
    className="max-h-36 w-auto object-contain"
  />
=======
    <div className="h-40 flex items-center justify-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/RSUD.png"
      alt="Logo RSUD"
      width={180}
      height={180}
    />
>>>>>>> 3b1dbf3 (update product images and company profile)
    </div>

    <h3 className="text-2xl font-bold mb-3">
      RSUD Sayang Cianjur
    </h3>

    <p className="text-gray-600">
      Pengadaan gelang identifikasi pasien, barcode printer,
      serta label rumah sakit.
    </p>

  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

    <div className="h-40 flex items-center justify-center mb-6">
<<<<<<< HEAD
        <Image
  src="/images/RS-PENA.png"
  alt="Logo RS Pena"
  width={180}
  height={180}
  unoptimized
  className="max-h-36 w-auto object-contain"
=======
         <Image
  src="/images/rs-pena.png"
  alt="RS Pena"
  width={180}
  height={180}
  unoptimized
>>>>>>> 3b1dbf3 (update product images and company profile)
/>
    </div>

    <h3 className="text-2xl font-bold mb-3">
      RS Pena 88
    </h3>
    <p className="text-gray-600">
     Implementasi E-Tiket, printer label, serta solusi pencetakan label identifikasi pasien untuk meningkatkan efisiensi dan akurasi pelayanan.
    </p>
    

  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

    <div className="h-40 flex items-center justify-center mb-6">
      <Image
        src="/images/rs-nusantara.png"
        alt="Logo Perusahaan"
        width={180}
        height={180}
        className="max-h-36 w-auto object-contain"
      />
    </div>

    <h3 className="text-2xl font-bold mb-3">
        RS Nusantara Mustika Jaya
    </h3>

    <p className="text-gray-600">
     Implementasi E-Tiket, printer label, serta solusi pencetakan label identifikasi pasien untuk meningkatkan efisiensi dan akurasi pelayanan.
    </p>

  </div>
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

    <div className="h-40 flex items-center justify-center mb-6">
      <Image
        src="/images/rs-bhayangkara-cianjur.png"
        alt="Logo Perusahaan"
        width={180}
        height={180}
        className="max-h-36 w-auto object-contain"
      />
    </div>

    <h3 className="text-2xl font-bold mb-3">
        RS BHAYANGKARA CIANJUR
    </h3>

    <p className="text-gray-600">
      Implementasi gelang identifikasi pasien dan printer wristband untuk mendukung pelayanan kesehatan yang lebih aman dan efisien.
    </p>

  </div>
   <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

    <div className="h-40 flex items-center justify-center mb-6">
      <Image
        src="/images/rs-sekarwangi.png"
        alt="Logo Perusahaan"
        width={180}
        height={180}
        className="max-h-36 w-auto object-contain"
      />
    </div>

    <h3 className="text-2xl font-bold mb-3">
        RSUD SEKARWANGI SUKABUMI
    </h3>

    <p className="text-gray-600">
      Implementasi kartu identitas pasien beserta sistem pencetakan kartu untuk mendukung proses registrasi, identifikasi, dan pelayanan kesehatan yang lebih cepat, akurat, dan efisien.
    </p>

  </div>

   <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

    <div className="h-40 flex items-center justify-center mb-6">
      <Image
        src="/images/rs-muhammadiyah.png"
        alt="Logo Perusahaan"
        width={180}
        height={180}
        className="max-h-36 w-auto object-contain"
      />
    </div>

    <h3 className="text-2xl font-bold mb-3">
        RS MUHAMADIYAH Taman Puring
    </h3>

    <p className="text-gray-600">
     Implementasi gelang identifikasi pasien dan printer wristband untuk mendukung pelayanan kesehatan yang lebih aman dan efisien.
    </p>

  </div>

</div>

  </div>
     </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 bg-blue-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            Hubungi Kami
          </h2>

          <p className="mb-3">
            📍{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Pasar+Jengkol+Babakan+Setu+Tangerang+Selatan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 underline"
            >
              Jl. Raya Pasar Jengkol Babakan Setu Tangerang Selatan
            </a>
          </p>
          <p className="mb-8">
            ✉ digitaltrinovasisolusi@gmail.com
          </p>

          <p className="mb-3">
            📞 +62 852-8608-3882
          </p>

          <a
            href="https://wa.me/6285286083882"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition"
          >
            WhatsApp Kami
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        © 2026 PT.TRINOVASI DIGITAL SOLUSI. All Rights Reserved.
      </footer>

    </main>
  );
}
