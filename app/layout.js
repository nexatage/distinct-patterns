import "../styles/globals.css";
import { Metadata } from "next";

import Navbar from "../components/Navbar.js";
import { Poppins } from "next/font/google";
const poppins_font = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Distinct Patterns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins_font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
