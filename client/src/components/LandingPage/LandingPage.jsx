import React from "react";

// import { Navbar, Nav,} from "react-bootstrap";
import Navigation from "./Navbar"
import Footer from "./Footer"
import Login from "../Login/Login"
import JumbotronCon from "./JumbotronCon";
import Registration from "../Registration/Registration";

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
