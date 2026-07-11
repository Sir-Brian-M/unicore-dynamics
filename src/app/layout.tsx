import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unicoredynamics.co.ke"),
  title: {
    default: "Unicore Dynamics | Kids Equipment Built to Last",
    template: "%s | Unicore Dynamics",
  },
  description:
    "Kids equipment for every stage, from nursery to primary school age. Cribs, car seats, bikes, school gear and toys, sold with pay on delivery, M-Pesa, or card, and same day delivery in Nairobi and Thika.",
  keywords: [
    "kids equipment Kenya",
    "baby gear Kenya",
    "pay on delivery kids equipment",
    "car seats Kenya",
    "strollers Kenya",
    "kids bikes Kenya",
  ],
  openGraph: {
    title: "Unicore Dynamics | Kids Equipment Built to Last",
    description:
      "Every stage of childhood, sorted. Nursery, everyday essentials, growing years, and play, all in one place.",
    url: "https://unicoredynamics.co.ke",
    siteName: "Unicore Dynamics",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unicore Dynamics | Kids Equipment Built to Last",
    description:
      "Every stage of childhood, sorted. Nursery, everyday essentials, growing years, and play, all in one place.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-stone text-ink antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
