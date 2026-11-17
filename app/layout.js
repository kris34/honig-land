import "./globals.css";
import Header from "./components/Header";
import Footer from './components/Footer'

import localFont from "next/font/local";

// Self-hosted: next/font/google fails on Vercel because Google now returns
// font URLs without a file extension, which Next 15.1 can't parse.
const fredoka = localFont({
  src: "./fonts/Fredoka-latin-variable.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
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
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
