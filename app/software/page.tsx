import Link from "next/link";
import Image from "next/image";

export default function SoftwarePage() {
  const drivers = [
    {
      slug: "zebra-zd230",
      title: "Driver Zebra ZD230",
      image: "/images/zd220-photography-website-right-1x1-300x300.jpg.imgo.jpg",
      desc: "ZD220/ZD230 Direct Thermal Desktop Printer Support",
    },
    {
      slug: "Brother",
      title: "Driver Brother TD 2020",
      image: "/images/Brother.jfif",
      desc: "Driver Brother Direct Thermal Desktop Printer Support.",
    },
    {
      slug: "kassen-printer",
      title: "Driver Kassen WL252 Printer",
      image: "/images/kassen.jfif",
      desc: "Driver KassenDirect Thermal Desktop Printer Support.",
    },
    {
    slug: "tsc-tdp-247",
    title: "Driver Tsc Tdp 247",
    image: "/images/tsc-tdp247-barcode-printer-1000x1000.webp",
    desc: "Driver TDP-247 Direct Thermal Desktop Printer Support.",
    },
    {
      slug: "tsc-tdp-225",
      title: "Driver Tsc Tdp 225",
      image: "/images/TSCTDP225.jfif",
      desc: "Driver TDP-225 Direct Thermal Desktop Printer Support",
    },
    {
      slug: "tsc-ttp-244",
      title: "Driver Tsc Ttp 244",
      image: "/images/tsc-ttp-244-pro.jpg",
      desc: "Software desain dan cetak label barcode, wristband, dan etiket.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Download Driver & Software
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Download driver, software, firmware, dan utility resmi untuk
            berbagai perangkat seperti Printer Barcode, Wristband Printer,
            Barcode Scanner, RFID Reader, serta perangkat lainnya.
          </p>
        </div>
      </section>

      {/* List Driver */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drivers.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
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

                  <p className="text-gray-600 leading-7 mb-6">
                    {item.desc}
                  </p>

                  <Link
                    href={`/software/${item.slug}`}
                    className="block text-center bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bantuan */}
          <div className="mt-20 bg-blue-50 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Tidak Menemukan Driver?
            </h2>

            <p className="text-gray-600 mb-8">
              Hubungi tim kami jika driver yang Anda butuhkan belum tersedia.
              Kami akan membantu memberikan driver atau software yang sesuai
              dengan perangkat Anda.
            </p>

            <a
              href="https://wa.me/6285286083882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Back */}
          <div className="text-center mt-16">
            <Link
              href="/"
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-full transition"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}