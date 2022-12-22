import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

import Contactus from './components/contactus/Contactus';
import Individuals from './components/individuals/Individuals';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Signup from './components/Signup/signup';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import BlogForm from './components/Blog/BlogForm';
import BlogDetails from './components/Blog/BlogDetail';
import Axios from 'axios';
import { AdminDetails } from './components/AdminDetails/AdminDetails';

function App() {
  const { user } = useAuthContext()

  // Axios.defaults.baseURL = 'http://localhost:5000'; 

  if ( user ) {
    Axios.defaults.headers.common['Authorization'] = `Bearer  ${user.token}`
  }


  return (
    <div className="App">
      <GoogleOAuthProvider clientId="499310307666-aa3gr516ll90qvl9ndgc1063cim9fa2b.apps.googleusercontent.com">
        <BrowserRouter>
          <div> 
            <Routes>
              <Route path="/" exact element={ <Home/>} />
              <Route path="/contactus" element={<Contactus/>} />
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path="/individuals" element={<Individuals/>} />
              <Route path="/members_details/:member_value" element={<AdminDetails/>} />
              <Route path="/blogs" element={<Blog/>} />
              <Route path="/blogs/blog/:blogid" element={<BlogDetails/>} />
              <Route path="/blogpost" element={<BlogForm/>} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/blogs" />} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/blogs" />}  />

              <Route path="" component={<Home/>} />
              
              {/* <Route path="/auth" exact component={() => (!user ? <Register /> : <Redirect to="/blogs" />)} /> */}
            </Routes>
          </div>

        </BrowserRouter>
      </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
