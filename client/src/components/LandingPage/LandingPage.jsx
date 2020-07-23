import React from "react";

// import { Navbar, Nav,} from "react-bootstrap";
import Navigation from "../Header/Navbar"
import Footer from "../Footer/Footer"
import JumbotronCon from "./JumbotronCon";
import Registration from "../Registration/Registration";
import Login from "../Login/Login"

function LandingPage() {
    return (
        <div>
      <Navigation />
      <JumbotronCon />
      <Registration />
      <Login /> 
      <Footer />

    </div >
  );
}

export default LandingPage
