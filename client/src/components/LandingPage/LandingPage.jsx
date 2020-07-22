import React from "react";

// import { Navbar, Nav,} from "react-bootstrap";
import Navigation from "./Navbar"
import Footer from "./Footer"
import Login from "../Login/Login"
import JumbotronCon from "./JumbotronCon";

function LandingPage() {
    return (
        <div>
      <Navigation />
      <JumbotronCon />
      <Login />
      <Footer />

    </div >
  );
}

export default LandingPage
