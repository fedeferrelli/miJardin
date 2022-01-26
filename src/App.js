


import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './pages/Navigation'
import Home from './pages/Home';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';




function App() {
  return (

    <Router>
      
      <Navigation />

      <Home  />

      <About/>

      <Servicios/>

      <Contacto/>

      <Footer/>


    </Router>

  );
}

export default App;
