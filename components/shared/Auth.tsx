// Auth Component
import {
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Auth = ({handleNavClick}) => {
  return (
    <>
      <div className="w-full flex items-center max-md:flex-col  space-y-2">
        <SignedIn>
        <Link onClick={handleNavClick} href="/orders" className="w-full text-left max-md:mb-2 mx-5 hover:text-black transition text-slate-500 border rounded-full p-[0.5rem]">
              ORDERS
          </Link>
          <SignOutButton>
            <Button
            onClick={handleNavClick}
              className={
                "w-full text-left px-4 py-2 bg-black text-white rounded-2xl"
              }
            >
              Log out
            </Button>
          </SignOutButton>
         
        </SignedIn>
      </div>
      <SignedOut>
        <div className={"flex max-md:flex-col max-md:space-y-2  space-x-2"}>
          <Button  onClick={handleNavClick} className="px-4 py-2 bg-black text-white rounded-2xl">
            <Link href="/sign-in">Log In</Link>
          </Button>

          <Button variant="outline" onClick={handleNavClick} className="px-4 py-2 rounded-2xl">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </SignedOut>
    </>
  );
};

export default Auth;
