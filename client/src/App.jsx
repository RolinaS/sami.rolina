import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Sog from './pages/SOG';
import Gd from './pages/GD';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/gendarmes" element={<Gd />} />
        <Route path="/sous-officier" element={<Sog />} />
      </Routes>
      <Footer/>
    </Router>
  );
}