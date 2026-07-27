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
      image: "/images/kassen.png",
      desc: "Printer khusus untuk mencetak gelang identifikasi pasien secara cepat dan akurat."
    },
    {
      title: "Label Barcode",
      image: "/images/ETIKET LABEL.png",
      desc: "Berbagai ukuran label barcode untuk kebutuhan rumah sakit, retail, dan manufaktur."
    },
    {
      title: "Thermal Ribbon",
      image: "/images/Ribbon.png",
      desc: "Ribbon Wax, Wax Resin, dan Resin untuk hasil cetak yang tajam dan tahan lama."
    },
    {
      title: "Continuous Form",
      image: "/images/Continous From.jfif",
      desc: "Continuous form untuk kebutuhan cetak dokumen berkelanjutan dengan pilihan ukuran sesuai kebutuhan."
    },
    {
      title: "Kertas HVS",
      image: "/images/Kertas HVS.png",
      desc: "Kertas HVS berkualitas untuk kebutuhan kantor, rumah sakit, sekolah, dan instansi dengan berbagai ukuran."
    },
    {
      title: "Kertas Struk",
      image: "/images/Kertas Struk Parkir.png",
      desc: "Kertas struk berkualitas untuk kebutuhan pencetakan transaksi dengan hasil jelas dan tahan lama."
    },
    {
      title: "Map Rumah Sakit",
      image: "/images/Map Rumah Sakit.jpg",
      desc: "Map rekam medis rumah sakit yang dapat dicustom dengan logo dan desain sesuai kebutuhan."
    },
    {
      title: "Formulir Pendaftaran Pasien",
      image: "/images/Formulir Pendaftaran Pasien.webp",
      desc: "Formulir medis dan administrasi rumah sakit yang dapat dicustom sesuai kebutuhan."
    },
    {
      title: "Ribbon LX/LQ",
      image: "/images/Ribbon Lx Lq.png",
      desc: "Ribbon printer dot matrix Epson LX dan LQ dengan kualitas tinta tajam dan tahan lama."
    },
    {
      title: "Tinta Printer Epson",
      image: "/images/Tinta Printer Epson.png",
      desc: "Tinta printer Epson original maupun kompatibel dengan kualitas cetak tajam dan warna akurat."
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50">


      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Produk Kami
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            PT Trinovasi Digital Solusi menyediakan produk identifikasi pasien,
            barcode, dan solusi pencetakan berkualitas dengan harga kompetitif,
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
                    className="object-contain max-h-52"
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