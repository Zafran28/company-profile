import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trinovasidigitalsolusi.com"),

  title: {
    default: "PT Trinovasi Digital Solusi",
    template: "%s | PT.Trinovasi Digital Solusi",
  },

  description:
    "PT.Trinovasi Digital Solusi menyediakan gelang pasien, barcode printer, barcode scanner, printer kartu, label barcode, thermal ribbon, software rumah sakit, serta solusi identifikasi pasien dan AIDC di Indonesia.",

  keywords: [
    "PT Trinovasi Digital Solusi",
    "Gelang Pasien",
    "Barcode Printer",
    "Barcode Scanner",
    "Printer Barcode",
    "Printer Kartu",
    "Card Printer",
    "Label Barcode",
    "Thermal Ribbon",
    "Wristband Printer",
    "Software Rumah Sakit",
    "AIDC",
    "Healthcare",
    "Hospital",
    "Label Printer",
    "TSC Printer",
    "Zebra Printer",
    "Citizen Printer",
    "Evolis Card Printer",
    "Indonesia",
  ],

  authors: [
    {
      name: "PT.Trinovasi Digital Solusi",
    },
  ],

  creator: "PT.Trinovasi Digital Solusi",

  publisher: "PT.Trinovasi Digital Solusi",

  applicationName: "PT.Trinovasi Digital Solusi",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "PT Trinovasi Digital Solusi",

    description:
      "Distributor Gelang Pasien, Barcode Printer, Barcode Scanner, Printer Kartu, Thermal Ribbon, Label Barcode dan Software Rumah Sakit.",

    url: "https://trinovasidigitalsolusi.com",

    siteName: "PT.Trinovasi Digital Solusi",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT Trinovasi Digital Solusi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "PT Trinovasi Digital Solusi",

    description:
      "Solusi Barcode Printer, Gelang Pasien, Label Barcode, Card Printer dan Software Rumah Sakit.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    google: "ISI_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}