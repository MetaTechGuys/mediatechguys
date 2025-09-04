import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "MTG - Media Tech Guys",
  description: "A marketing, content production, creation, and strategy agency that specializes in creating solutions for businesses.",
  icons: {
    icon: "/images/tabicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="show-scrollbar">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
