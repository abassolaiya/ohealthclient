import { useState } from "react";
import { useSignup } from './../../hooks/useSignup';
// import { useGSignup } from "../../hooks/useGSignup";
// import jwt_decode from 'jwt-decode';
import Navbar from "../Navbar/Navbar";
import handshake from '../img/handshake.jfif'
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import GSignUp from "./googleSignup";
// import { GoogleLogin } from '@react-oauth/google';
// import {FcGoogle} from 'react-icons/fc';
// import {FaFacebook} from 'react-icons/fa';
// import {BsApple} from 'react-icons/bs';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const {signup, error, isLoading} = useSignup()
    // const { gsignup, error, isLoading } = useGSignup()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await signup(email, password, firstname, lastname, username, phoneNumber)
    }

    // const googleAuth = async (email, password, firstname, lastname, googleId, username) => {
    //     // console.log(email, password, firstname, lastname, username, googleId)
    
    //     await gsignup(email, password, firstname, lastname, googleId, username)
    //   }
  
    return (
      <>
        <Navbar/>

        <div className="main_login" >

        <div className="left_login" >

            <div className="left_login_top" >

                <img className="left_login_top_img" src={handshake} alt="cde" />

                <div className="left_login_top_txt" >Consult a Doctor</div>

                <div className="left_login_top_desc" >
                You can talk to a specialist Doctor at an Affordable Rate and Pocket Friendly Fee, Very Fast and Quality Treatment Guaranteed. <Link to='/aboutus'>Read more...</Link>
                </div>

            </div>

        </div>
        
        <div className="right_login" >
            <form  onSubmit={handleSubmit}>
            <div className="right_login_top" >Sign Up</div>
            <div className="right_login_sub" >Welcome To Ohealth</div>

            <div className="login_form" >
                <label>FirstName</label>
                <input type={"text"}
                onChange={(e) => setFirstname(e.target.value)} 
                value={firstname}  placeholder="Enter your Firstname" />
            </div>

            <div className="login_form" >
                <label>LastName</label>
                <input type={"text"}
                onChange={(e) => setLastname(e.target.value)} 
                value={lastname}  placeholder="Enter your Lastname" />
            </div>

            <div className="login_form" >
                <label>Username</label>
                <input type={"text"}
                onChange={(e) => setUsername(e.target.value)} 
                value={username}  placeholder="Enter your username" />
            </div>

            <div className="login_form" >
                <label>Phone Number</label>
                <input type={"text"}
                onChange={(e) => setPhoneNumber(e.target.value)} 
                value={phoneNumber}  placeholder="Enter your Phone Number" />
            </div>

            <div className="login_form" >
                <label>Email</label>
                <input type={"email"}
                onChange={(e) => setEmail(e.target.value)} 
                value={email}  placeholder="Enter your email" />
            </div>

            <div className="login_form" >
                <label>Password</label>
                <input type={"password"} onChange={(e) => setPassword(e.target.value)} 
            value={password}  placeholder="*********" />
            </div>

            <button disabled={isLoading} onClick={ () => handleSubmit() } className="login_s_button" >
                Sign Up
            </button>

            {error && <div className="error">{error}</div>}

            {/* <Link to={'/'} className="lets_forget" >Forgot your password?</Link> */}

            {/* <div className="login_or" >
                <div></div> <span>or</span> <div></div>
            </div> */}

            {/* <button className="sign_inwith" >
                <FcGoogle className="sign_inwith_ic" />
                <span>Continue with Google</span>
            </button> */}
            {/* <div className="sign_inwith">
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                // console.log(credentialResponse);
                var decoded = jwt_decode(credentialResponse.credential)
                googleAuth({
                    googleId:decoded.sub,
                    email:decoded.email,
                    firstname:decoded.given_name,
                    username:decoded.given_name,
                    // setUsername:decoded.given_name,
                    lastname:decoded.family_name,
                    password:decoded.sub,
                    // setGoogleId:decoded.sub,
                    // setEmail:decoded.email,
                    // setFirstname:decoded.given_name,
                    // setLastname:decoded.family_name,
                    // setPassword:decoded.sub
                })
                } }
                onError={() => console.log('Login Failed')}
            />
            </div> */}

            <div className="lets_forget" >
                Already have an account? <Link to={'/login'} >Let’s Sign in</Link>
            </div>
            </form>
        </div>
        

        </div>

        <Footer/>

      </>
    )
  }
  
  export default Signup