import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routing from '../src/components/Routing/routing'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header/> */}
        <Routing/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
