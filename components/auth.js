import React, { useState } from "react";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <button>Add to cart</button> : <button>Login</button>}
    </div>
  );
};
export default Auth;
