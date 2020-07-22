import React from "react";

// import { Navbar, Nav,} from "react-bootstrap";
import Navigation from "./Navbar"
import Footer from "./Footer"
import JumbotronCon from "./JumbotronCon";

function LandingPage() {
    return (
        <div>
      <Navigation />
      <JumbotronCon />
      <Footer />

    </div >
  );
}

export default LandingPage
