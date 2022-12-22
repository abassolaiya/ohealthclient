import { useState } from "react";
import { useLogin } from './../../hooks/useLogin';
import Navbar from "../Navbar/Navbar";
import './login.css';
import handshake from '../img/handshake.jfif'
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import {FcGoogle} from 'react-icons/fc';
// import {FaFacebook} from 'react-icons/fa';
// import {BsApple} from 'react-icons/bs';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <>
            <Navbar />

        <div className="main_login" >

            <div className="left_login" >

                <div className="left_login_top" >

                    <img className="left_login_top_img" src={handshake} alt="cde" />

                    <div className="left_login_top_txt" >Consult a Doctor</div>

                    <div className="left_login_top_desc" >
                    You can talk to a specialist Doctor at an Affordable Rate and Pocket Friendly Fee, Very Fast and Quality Treatment Guaranteed. <Link to='/aboutus'>read more ...</Link>
                    </div>

                </div>

            </div>

            <div className="right_login" >
            <form className="" onSubmit={handleSubmit}>

                <div className="right_login_top" >Sign In</div>
                <div className="right_login_sub" >Welcome back to Ohealth</div>

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
                <button disabled={isLoading} className="login_s_button">Sign in</button>

                {/* <button disabled={isLoading} onClick={ () => handleSubmit() } className="login_s_button" >
                    Sign In
                </button> */}

            {error && <div className="error">{error}</div>}

                {/* <Link to={'/'} className="lets_forget" >Forgot your password?</Link> */}

                {/* <div className="login_or" >
                    <div></div> <span>or</span> <div></div>
                </div> */}

                {/* <button className="sign_inwith" >
                    <FcGoogle className="sign_inwith_ic" />
                    <span>Continue with Google</span>
                </button> */}

                {/* <button className="sign_inwith" >
                    <FaFacebook className="sign_inwith_ic" color="blue" />
                    <span>Continue with Facebook</span>
                </button>

                <button className="sign_inwith" >
                    <BsApple className="sign_inwith_ic" color="black" />
                    <span>Continue with Apple</span>
                </button> */}

                <div className="lets_forget" >
                    Don’t have an account yet? <Link to={'/signup'} >Let’s Sign up</Link>
                </div>
                </form>

            </div>

        </div>

        <Footer/>

        </>
    )
}

export default Login;