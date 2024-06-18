import React from 'react';
import './produto.css';

const Produto = ({ nome, preco, img }) => {
  return (
    <div className="produto">
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <p>{preco}</p>
    </div>
  );
};

export default Produto;
