import "./App.css";
// Je renomme BrowserRouter en Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";

// Import components
import Header from "./components/Header";

function App() {
  const str = "tom";

  console.log(import.meta.env.VITE_API_URL);

  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home str={str} />} />
        <Route path="/details" element={<Details />} />
        {/* La route offer/:id necessite l'envoie d'un params */}
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
    </Router>
  );
}

export default App;
