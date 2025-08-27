import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "MTG - Media Tech Guys",
  description: "MTG - Media Tech Guys",
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
