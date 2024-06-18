import React from 'react';
import Produto from './produto.jsx';
import './produtos.css';

const produtos = [
  { nome: 'Whey Protein', preco: 'R$ 120,00', img: 'src/assets/whey.jfif' },
  { nome: 'Creatina', preco: 'R$ 80,00', img: 'src/assets/crea.jfif' },
  { nome: 'Pasta de Amendoim', preco: 'R$ 25,50', img: 'src/assets/pasta.jfif' },
  { nome: 'Hormônio de Crescimento', preco: 'R$ 899,99', img: 'src/assets/gh.jfif' },
  { nome: 'Camiseta Mogi Atlética', preco: 'R$ 60,00', img: 'src/assets/camiseta.jfif' },
  { nome: 'Barra de Cereal', preco: 'R$ 15,00', img: 'src/assets/barra.jfif' },
  { nome: 'Pré-Treino', preco: 'R$ 90,50', img: 'src/assets/haze.jfif' },
  { nome: 'Beta Alanina', preco: 'R$ 80,00', img: 'src/assets/beta.jfif' },
  { nome: 'YoPro', preco: 'R$ 12,00', img: 'src/assets/yo.webp' },
];

const Produtos = () => {
  return (
    <div className="produtos">
      {produtos.map((produto, index) => (
        <Produto key={index} {...produto} />
      ))}
    </div>
  );
};

export default Produtos;
