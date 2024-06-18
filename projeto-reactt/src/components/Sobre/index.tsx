import React from 'react';
import './Sobre.css';

const Sobre = ({ children }) => {
  return (
    <main >
      <div className='divzika'>     
          <h2>Sobre Nós</h2>
          <p>A Academia Mogi Atlética foi fundada em 2020 com a missão de promover saúde e bem-estar.</p>
          {children}
      </div>
    </main>
  );
};

export default Sobre;
