import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const drivers = [
  {
    slug: "zebra-zd230",
    title: "Driver Zebra ZD230",
    image: "/images/zd220-photography-website-right-1x1-300x300.jpg.imgo.jpg",
    desc: "ZD220/ZD230 Direct Thermal Desktop Printer Support",
    version: "10.6.26.28275",
    os: "Windows 10 / Windows 11",
    downloads: [
      {
        name: "Driver Windows",
        size: "24 MB",
        type: "ZIP",
        file: "/downloads/zddriver-v1062628275-certified.zip",
      },
    ],
  },

  {
    slug: "Brother",
    title: "Driver Brother",
    image: "/images/Brother.jfif",
    desc: "Driver resmi untuk Printer Barcode Brother.",
    version: "v3.5.1",
    os: "Windows 10 / Windows 11, Linux",
    downloads: [
      {
        name: "Driver Windows",
        size: "35 MB",
        type: "ZIP",
        file: "/downloads/bst200w70jus (1).exe",
      },
    ],
  },

  {
    slug: "kassen-printer",
    title: "Driver Kassen Printer",
    image: "/images/kassen.jfif",
    desc: "Driver resmi untuk Printer Thermal Kassen.",
    version: "v2.1.0",
    os: "Windows 10 / Windows 11, Linux, MacOs",
    downloads: [
      {
        name: "Driver Windows",
        size: "18 MB",
        type: "ZIP",
        file: "/downloads/WINDOWS-20260628T083734Z-3-001.zip",
      },
      {
        name: "Driver Linux",
        size: "18 MB",
        type: "ZIP",
        file: "/downloads/LINUX-20260628T090001Z-3-001.zip",
      },
      {
        name: "Driver MAC",
        size: "18 MB",
        type: "ZIP",
        file: "/downloads/MAC-20260628T090000Z-3-001.zip",
      },
      {
        name: "Manual Book",
        size: "2 MB",
        type: "PDF",
        file: "/downloads/Kassen WL252.pdf",
      },
      {
        name: "Diagnostic Tool",
        size: "10 MB",
        type: "ZIP",
        file: "/downloads/Diagnostic Tool V1.031b (1).zip",
      },
    ],
  },

  {
    slug: "tsc-tdp-247",
    title: "Driver Tsc Tdp 247",
    image: "/images/tsc-tdp247-barcode-printer-1000x1000.webp",
    desc: "Driver Barcode Scanner USB dan Wireless.",
    version: "v1.8.2",
    os: "Windows 10 / Windows 11, Linux",
    downloads: [
      {
        name: "Software Installer",
        size: "12 MB",
        type: "ZIP",
        file: "/downloads/WINDOWS-20260628T083734Z-3-001.zip",
      },
    ],
  },

  {
    slug: "tsc-tdp-225",
    title: "Driver Tsc Tdp 225",
    image: "/images/TSCTDP225.jfif",
    desc: "Driver TSC-TDP225 untuk sistem identifikasi.",
    version: "10.6.24",
    os: "Windows 8.1 | 10 | 11",
    downloads: [
      {
        name: "Software Installer",
        size: "15 MB",
        type: "ZIP",
        file: "/downloads/tsc_loftware_10.6.24.exe",
      },
    ],
  },

  {
    slug: "tsc-ttp-244",
    title: "Driver Tsc Ttp 244",
    image: "/images/tsc-ttp-244-pro.jpg",
    desc: "Driver TSC-TTP244 untuk sistem pencetakan label.",
    version: "12.3",
    os: "Windows 8.1 | 10 | 11",
    downloads: [
      {
        name: "Software Installer",
        size: "80 MB",
        type: "ZIP",
        file: "/downloads/TSC_12.3.exe",
      },
    ],
  },
];

export default async function DriverPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const driver = drivers.find((item) => item.slug === slug);

  if (!driver) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="bg-blue-700 text-white py-10 text-center">
          <h1 className="text-4xl font-bold">
            {driver.title}
          </h1>
        </div>

        <div className="p-10">

          <div className="flex justify-center mb-8">
            <Image
              src={driver.image}
              alt={driver.title}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <p className="text-center text-gray-600 text-lg mb-10">
            {driver.desc}
          </p>

          {/* Informasi */}
          <div className="border rounded-xl overflow-hidden mb-10">
            <table className="w-full">
              <tbody>

                <tr className="border-b">
                  <td className="p-4 font-semibold w-1/3">Versi</td>
                  <td className="p-4">{driver.version}</td>
                </tr>

                <tr>
                  <td className="p-4 font-semibold">
                    Sistem Operasi
                  </td>
                  <td className="p-4">{driver.os}</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Download */}
          <h2 className="text-2xl font-bold mb-6">
            Daftar Download
          </h2>

          <div className="space-y-4">

            {driver.downloads.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
              >

                <div>
                  <h3 className="text-lg font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.type} • {item.size}
                  </p>
                </div>

                <a
                  href={item.file}
                  download
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Download
                </a>

              </div>

            ))}

          </div>

          <div className="text-center mt-10">

            <Link
              href="/software"
              className="text-blue-700 hover:underline"
            >
              ← Kembali ke Daftar Driver
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}