import React, {useEffect} from 'react';
import Routing from '../src/components/Routing/Routing'
import Navigation from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';



function App() {
  useEffect(()=>{
    ReactGA.initialize('UA-174131151-1', {
      debug: true,
      titleCase: false,
      gaOptions: {
        name:"9flats-clone",
        siteSpeedSampleRate: 100
      }
    });
    
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  return (
    <div className="App">
      <Navigation/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;