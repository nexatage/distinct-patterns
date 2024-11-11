import "../styles/globals.css";

import Navbar from "../components/Navbar.jsx";
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
