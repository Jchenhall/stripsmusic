import React, { useContext } from "react";
import { Router, Redirect } from '@reach/router';
import AdminHome from '../AdminHome/AdminHome';
import AdminLogin from '../AdminLogin/AdminLogin';
import Home from '../../Home/Home';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Music from '../../Music/Music';
import AdminSongList from '../AdminSongList/AdminSongList';
import AdminSongLibrary from '../AdminSongLibrary/AdminSongLibrary.jsx';
import AdminPasswordReset from '../AdminPasswordReset/AdminPasswordReset';
import ViewMusic from '../../ViewMusic/ViewMusic';
import { UserContext } from "../../../context/UserProvider";

function Application() {

  const user = useContext(UserContext);

  return (
    
        user ?

        <>
          <Router>
          <Redirect from="/adminlogin" to="/adminhome" noThrow />
          <AdminHome path="/adminhome"/>
          <AdminSongList path="/adminhome/adminsonglist"/>
          <AdminSongLibrary path="/adminhome/adminsonglibrary"/>
              <Music path="/music" />
              <ViewMusic path ="/viewmusic"/>
              <Contact path="/contact" />
              <AdminLogin path="/adminlogin" />
              <About path="/about" />
              <AdminPasswordReset path="/adminpasswordreset" />
              <Home path="/"/>
          </Router>
       </>

      :
      
        <>
          <Router>
          <Redirect from="/adminhome" to="/" noThrow />
              <Music path="/music" />
              <ViewMusic path ="/viewmusic"/>
              <Contact path="/contact" />
              <AdminLogin path="/adminlogin" />
              <About path="/about" />
              <AdminPasswordReset path="/adminpasswordreset" />
              <Home path="/"/>
            </Router>
        </>
      
  );
}
export default Application;
