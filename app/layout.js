import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer'

import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Honing Land",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.className}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="bee bee-1 text-4xl"><span className="buzz">🐝</span></div>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
