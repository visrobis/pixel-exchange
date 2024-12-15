import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContextApiProvider } from "@/context/contextapi";

export const metadata = {
  title: "Pixel Exchange",
  description:
    "We specialize in buying and selling in-game items and currency, offering secure and reliable services for players in Ran Online Pinas and Albion Online. As experienced middlemen, we facilitate smooth, trustworthy transactions to ensure customer satisfaction and a hassle-free trading experience. Whether you're looking to enhance your gameplay or make fair trades, we are your go-to solution in the gaming marketplace.",
};

const karmaticArcade = localFont({
  src: [
    {
      path: "../public/fonts/KarmaticArcade-6Yrp1.ttf",
      weight: "700",
    },
  ],
  variable: "--font-karmatic",
});

const jersey = localFont({
  src: [
    {
      path: "../public/fonts/Jersey20-Regular.ttf",
    },
  ],
  variable: "--font-jersey",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karmaticArcade.variable} ${jersey.variable} ${inter.className} antialiased`}
      >
        <ContextApiProvider>
          <Header />
          {children}
          <Footer />
        </ContextApiProvider>
      </body>
    </html>
  );
}
