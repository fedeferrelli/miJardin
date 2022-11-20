import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Footer from "./pages/Footer";

//const manes = [{name:'keith', edad: 45}, {name:'mick', edad: 40}, {name:'ron', edad: 5}]

import manes from "./data";

console.log(manes);

const Fede = () => {
  return (
    <>
      <h1>fede</h1>

      {manes.map((man) => (
        <li key={man.name}>
          <Link to={`/manes/${man.name}`}>{man.name}</Link>
        </li>
      ))}

      <Link to="/what">ir a what</Link>
    </>
  );
};

const What = () => {
  const { nombre } = useParams();
  console.log(nombre);

  const dataToPrint = manes.find((man) => man.name === nombre);
  const { name, edad } = dataToPrint;
  console.log(dataToPrint);

  return (
    <>
      <h1>{name}</h1>
      <h1>{edad}</h1>

      <Link to="/">ir a home</Link>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fede />} />
        <Route path="/manes/:nombre" element={<What />} />
      </Routes>

      {/*    <Navigation />

      <Home  />

      <About/>

      <Servicios/>

      <Contacto/>

      <Footer/>

 */}
    </Router>
  );
}

export default App;
