import React from 'react';
import Routing from '../src/components/Routing/Routing'
import Navigation from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
