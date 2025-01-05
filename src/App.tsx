import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Página inicial
import Services from "./pages/services"; // Página de serviços
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
