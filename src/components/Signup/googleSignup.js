// import React from "react";
// import { useState } from "react";
// import { useSignup } from './../../hooks/useSignup';
// import { GoogleLogin, googleLogout  } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode'
// import axios from "axios";

// const GSignUp =() => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [username, setUsername] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const {signup, error, isLoading} = useSignup()
  

//   return (
//     <GoogleLogin
//     onSuccess={(credentialResponse) => {
//       console.log(credentialResponse);
//       var decoded = jwt_decode(credentialResponse.credential)
//       console.log(decoded.sub);
//       googleAuth({
//         googleId:decoded.sub,
//         email:decoded.email,
//         givenName:decoded.given_name,
//         familyName:decoded.family_name
//       })
//     } }
//     onError={() => console.log('Login Failed')}
//   />
//   );
// }}

// export default GSignUp