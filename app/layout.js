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
  title: "Superblog",
  description: "A blog app using Next.js and Prisma",
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
