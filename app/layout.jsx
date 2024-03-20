import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Aipro Agency",
  description: "Aipro Agency - Full-Cycle Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="font-montserrat font-normal text-white">
        <Header />
        <main>{children}</main>
        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
