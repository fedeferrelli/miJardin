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

import data from "./data";

console.log(data);

const Fede = () => {
  return (
    <>
      <h1>fede</h1>

      {data.map((man, i) => (
        <li key={i}>
          <Link to={`/manes/${i}`}> tester {i}</Link>
        </li>
      ))}

      <Link to="/what">ir a what</Link>
    </>
  );
};

const What = () => {
  const { nombre } = useParams();
  const fede = data[nombre];
  console.log(fede);

  return (
    <>
      <h1 className="text-red-400 bg-yellow-500">{fede.transcription}</h1>
      {fede.preguntas.map((preg) => {
        return (
          <>
            <h1 key={preg.texto}>{preg.texto}</h1>
          </>
        );
      })}
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
