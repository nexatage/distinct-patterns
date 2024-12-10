import React, { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <SignedIn>sign out</SignedIn>
    </div>
  );
};
export default Auth;
