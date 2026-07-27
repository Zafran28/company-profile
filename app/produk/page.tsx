import Link from "next/link";
import Image from "next/image";

export default function ProdukPage() {
  const products = [
  {
    title: "Gelang Identifikasi Pasien",
    image: "/images/gelang pasien.png",
    desc: "Gelang pasien dewasa, anak, dan bayi dengan material berkualitas tinggi serta tahan air."
  },
  {
    title: "Barcode Printer",
    image: "/images/zd220-photography-website-right-1x1-300x300.jpg.imgo.jpg",
    desc: "Printer barcode untuk kebutuhan rumah sakit, laboratorium, gudang, dan industri."
  },
  {
    title: "Printer Wristband",
    image: "/images/kassen.jfif",
    desc: "Printer khusus untuk mencetak gelang identifikasi pasien secara cepat dan akurat."
  },
  
  {
    title: "Label Barcode",
    image: "/images/ETIKET LABEL.jfif",
    desc: "Berbagai ukuran label barcode untuk kebutuhan rumah sakit, retail, dan manufaktur."
  },
  {
    title: "Thermal Ribbon",
    image: "/images/Ribbon.jfif",
    desc: "Ribbon Wax, Wax Resin, dan Resin untuk hasil cetak yang tajam dan tahan lama."
  },
  {
    title: "continuous form ",
    image: "/images/Continous From.jfif",
    desc: "continuous form untuk kebutuhan cetak dokumen berkelanjutan Anda. Sesuaikan pilihan ukuran kebutuhan Anda."
  },
  {
  title: "Kertas HVS",
  image: "/images/Kertas HVS.jfif",
  desc: "Menyediakan kertas HVS berkualitas dari berbagai merek terpercaya dengan pilihan ukuran A4, F4, A3, Letter, serta berbagai gramasi sesuai kebutuhan perkantoran, rumah sakit, sekolah, dan instansi."
},
  {
    title: "Kertas Struk",
    image: "/images/Kertas Struk Parkir.jfif",
    desc: "Kertas struk berkualitas untuk kebutuhan pencetakan transaksi Anda dengan hasil cetak yang jelas dan tahan lama."
  },
  {
  title: "Map Rumah Sakit",
  image: "/images/Map Rumah Sakit.jpg",
  desc: "Map rekam medis rumah sakit yang dapat dicustom dengan logo, identitas, dan desain sesuai kebutuhan instansi. Menggunakan bahan berkualitas untuk penggunaan jangka panjang."
 },
  {
  title: "Formulir Pendaftaran Pasien",
  image: "/images/Formulir Pendaftaran Pasien.webp",
  desc: "Menyediakan formulir pendaftaran pasien serta berbagai formulir medis dan administrasi rumah sakit yang dapat dicustom sesuai kebutuhan. Tersedia dalam berbagai ukuran, jenis kertas, dan desain dengan hasil cetak berkualitas tinggi."
},
 {
  title: "Ribbon LX/LQ",
  image: "/images/Ribbon Lx Lq.jfif",
  desc: "Menyediakan ribbon printer dot matrix untuk berbagai seri Epson LX dan LQ dengan kualitas tinta yang tajam dan tahan lama. Tersedia dalam berbagai tipe sesuai kebutuhan pencetakan dokumen, formulir, dan continuous form."
},
 {
  title: "Tinta Printer Epson",
  image: "/images/Tinta Printer Epson.jfif",
  desc: "Menyediakan tinta printer Epson original maupun kompatibel untuk berbagai seri printer. Tersedia dalam pilihan warna dan tipe yang lengkap dengan kualitas cetak yang tajam, warna akurat, dan performa yang andal."
},
];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
     

      {/* Produk */} <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Produk Kami
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
  PT Trinovasi Digital Solusi berkomitmen menyediakan produk identifikasi pasien,
  barcode, dan solusi pencetakan berkualitas dengan harga yang kompetitif,
  pelayanan cepat, serta dukungan teknis yang andal.
</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-60 bg-gray-100 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="bg-blue-700 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}