


import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './pages/Navigation'
import Home from './pages/Home';
import About from './pages/About';
import Servicios from './pages/Servicios';




function App() {
  return (

    <Router>
      
      <Navigation />

      <Home  />

      <About/>

      <Servicios/>


    </Router>

  );
}

export default App;
