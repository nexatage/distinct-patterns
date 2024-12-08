import "../styles/globals.css";
import Navbar from "../components/Navbar.jsx";
import { Poppins } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { StateContext } from "../context/StateContext.js";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
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
          <NuqsAdapter>{children}</NuqsAdapter>
          </main>
        </body>
      </StateContext>
    </html>
    </ClerkProvider>
  );
}
