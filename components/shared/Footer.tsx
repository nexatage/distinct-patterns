import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
          <p className="font-[Gwendolyn] font-bold text-[35px]">
            Distinct Patterns
          </p>
            <p className="text-sm text-muted-foreground">
              EXPLORE OUR COLLECTION, WHERE STYLE MEETS COMFORT IN TRENDY QUALITY FABRICS.
            </p>
            <div className="space-y-2">
              <p className="text-sm">6th Floor, Banana Island, Lagos,</p>
              <p className="text-sm">Nigeria.</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Women
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact Us",
                "FAQs",
                "User Account",
                "Privacy Policy",
                "Terms of Service",
                "Return Policy"
              ].map((item) => (
                <li key={item}>
                  <Link href={`/${item.split(" ")[0].toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">STYLE TIPS</h4>
            <ul className="space-y-2">
              {["Articles", "Blog", "Newsletter"].map((item) => (
                <li key={item}>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Subscribe To Our Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full"
                />
                <Button size="icon" className="rounded-full">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © Copyright {date} Distinct Patterns
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Design & Developed By Nexatage.
          </p>
        </div>
      </div>
    </footer>
  )
}

