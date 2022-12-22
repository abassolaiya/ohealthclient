import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function GSignIn() {
  const googleAuth = async ({ profileObj }) => {
    axios({
      method: "post",
      url: "/auth/google/signin",
      data: {
        googleId: profileObj.googleId,
        email: profileObj.email,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleLogin
      clientId="499310307666-aa3gr516ll90qvl9ndgc1063cim9fa2b.apps.googleusercontent.com"
      onSuccess={googleAuth}
      onFailure={googleAuth}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GSignIn;