import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://scottsdalemedicalstays.com"),
  title: {
    default: "Scottsdale Medical Stays | Rest. Recover. Feel at Home.",
    template: "%s | Scottsdale Medical Stays"
  },
  description:
    "Comfortable furnished Scottsdale stays for patients, caregivers, families and visiting medical professionals. Rest, recover and feel at home.",
  keywords: [
    "Scottsdale medical stays",
    "Scottsdale furnished condos",
    "medical travel Scottsdale",
    "Mayo Clinic Scottsdale lodging",
    "medical housing Scottsdale",
    "furnished stays Scottsdale",
    "caregiver lodging Scottsdale"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Scottsdale Medical Stays",
    description:
      "Beautiful furnished spaces and convenient Scottsdale locations for a more comfortable medical-stay journey.",
    url: "https://scottsdalemedicalstays.com/",
    siteName: "Scottsdale Medical Stays",
    type: "website",
    images: [
      {
        url: "/scottsdale-medical-stays-logo.png",
        width: 1536,
        height: 1536,
        alt: "Scottsdale Medical Stays"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Scottsdale Medical Stays",
    description:
      "Rest, recover and feel at home in a comfortable furnished Scottsdale stay."
  },
  icons: {
    icon: "/favicon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
