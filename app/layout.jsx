import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { StateContext } from "../context/StateContext.js";
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
      <StateContext>
        <body className={poppins_font.className}>
          <Navbar />
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
        </body>
      </StateContext>
    </html>
  );
}
