import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [message, setMessage] = useState("Seu lugar para ficar em forma e saudável.");
  const [showMore, setShowMore] = useState(false);

  const changeMessage = () => {
    setMessage("Venha nos visitar e confira nossas ofertas!");
    setShowMore(true);
  };

  return (
    <main>
      <div className="content">
        <h2>Bem-vindo à Academia Mogi Atlética</h2>
        <p>{message}</p>
        <button onClick={changeMessage}>Clique aqui para saber mais</button>
      </div>
      {showMore && (
        <div className="sidebar">
          <h3>Nosso Endereço</h3>
          <p>Rua Zezin, 702, Bairro Fitness, Cidade Mogi Mirim</p>
          <img src="src\assets\gym.jpg" alt="Academia XYZ" />
        </div>
      )}
    </main>
  );
};

export default Home;
