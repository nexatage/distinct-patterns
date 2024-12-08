import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { StateContext } from "../context/StateContext.js";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Footer from "@/components/Footer";


const poppins_font = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Distinct Patterns",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <StateContext>
        <body className={poppins_font.className}>
        <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
          <Navbar />
          <NuqsAdapter>
            <div className="mt-[2rem]">{children}</div>
          </NuqsAdapter>
          <Toaster />
          <Footer />
          </main>
        </body>
      </StateContext>
    </html>
    </ClerkProvider>
  );
}
