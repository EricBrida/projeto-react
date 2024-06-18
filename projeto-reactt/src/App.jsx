import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Sobre from './components/Sobre/index.tsx';
import Home from './components/Home/index.jsx';
import Produtos from './components/Produtos/index.jsx';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Header greeting="Bem-vindo à" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre><p>Oferecemos uma ampla gama de equipamentos e aulas de fitness.</p></Sobre>} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
