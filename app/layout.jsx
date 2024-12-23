import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Poppins, Gwendolyn } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { StateContext } from "@/context/StateContext";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Breadcrumbss from "@/components/breadcrumbsComponent";

// Font setup using `next/font`
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const gwendolyn = Gwendolyn({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gwendolyn",
});

// Metadata for the app
export const metadata = {
  title: "Distinct Patterns",
  description:
    "Shop the perfect blend of fashion and comfort with Distinct Patterns.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" className={`${poppins.variable} ${gwendolyn.variable}`}>
        <body className="min-h-screen bg-white">
          <NuqsAdapter>
            <StateContext>
              <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navbar />
                <div className="w-full px-8">
                  <Breadcrumbss />
                </div>
                {/* Main Content */}
                <main className="flex-1 mt-8">{children}</main>

                {/* Toaster for notifications */}
                <Toaster />

                {/* Footer */}
                <Footer />
              </div>
            </StateContext>
          </NuqsAdapter>
        </body>
      </html>
    </ClerkProvider>
  );
}
