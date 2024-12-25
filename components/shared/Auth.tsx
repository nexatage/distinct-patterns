// Auth Component
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Auth = () => {
  return (
    <>
      <div className="w-full flex items-center max-md:flex-col  space-y-2">
        <SignedIn>
          <SignOutButton>
            <Button
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
          <SignInButton>
            <Button className="px-4 py-2 bg-black text-white rounded-2xl">
              Log in
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="outline" className="px-4 py-2 rounded-2xl">
              Sign up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </>
  );
};

export default Auth;
