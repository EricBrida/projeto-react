import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ greeting }) => {
  return (
    <header>
      <h1>{greeting} Academia Mogi Atlética</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
