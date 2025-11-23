import "./globals.css";
import { peydaFont } from "./_lib/fonts.js";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "آموزش react و next.js",
  description: "next.js and react blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${peydaFont?.className} antialiased bg-linear-to-bl from-[#04192D] to-[#05192D] text-white relative`}
      >
        <Header />

        <main className=" max-w-7xl mx-auto">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
