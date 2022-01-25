
import Navigation from './pages/Navigation'

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (

    <Router>
      
      <Navigation />

      <Home />



    </Router>

  );
}

export default App;
