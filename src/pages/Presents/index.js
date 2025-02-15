import React, { useState } from 'react';
import Header from '../../componentes/header/Header';
import Boxamazon from '../../componentes/Boxamazon/Boxamazon';
import './style.css';
import presentes from '../../assets/presentes.jpeg';

export default function Presents() {
  const [clickCount, setClickCount] = useState(0);
  const [showNotificacaoFalta, setShowNotificacaoFalta] = useState(false);
  const [showNotificacao, setShowNotificacao] = useState(false);

  const handleBoxamazonClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      
      if (newCount === 1) {
        // Primeiro clique: mostra a notificaçãoFalta por 3 segundos
        setShowNotificacaoFalta(true);
        setTimeout(() => {
          setShowNotificacaoFalta(false);
        }, 3000);
      } else if (newCount === 2) {
        // Segundo clique: mostra a notificação e deixa aberta
        setShowNotificacao(true);
      }
      return newCount;
    });
  };

  return (
    <div className='containerTotal'>
      <Header />
      <div className='containerBox'>
        {/* Replicamos o Boxamazon com o onClick */}
        <Boxamazon onClick={handleBoxamazonClick} />
        <Boxamazon onClick={handleBoxamazonClick} />
        <Boxamazon onClick={handleBoxamazonClick} />
        <Boxamazon onClick={handleBoxamazonClick} />
        <Boxamazon onClick={handleBoxamazonClick} />
        <Boxamazon onClick={handleBoxamazonClick} />
      </div>

      {/* Notificação de falta, inicialmente oculta */}
      <div 
        className='notificacaoFaltaContainer' 
        style={{ display: showNotificacaoFalta ? 'block' : 'none' }}
      >
        <div className='notificacaoFalta'>
          <h2>!Ups!</h2>
          <p>Lamentablemente, esta caja está vacía. Te quedan 2 intentos.</p>
          <button className='botaoOk' onClick={()=>{setShowNotificacaoFalta(false)}}>OK</button>
        </div>
      </div>

      {/* Notificação de participação, inicialmente oculta */}
      <div 
        className='notificacaoContainer' 
        style={{ display: showNotificacao ? 'block' : 'none' }}
      >
        <div className='notificacao'>
          <img src={presentes} alt="Presentes" />
          <h3>Gracias por tu participación</h3>
          <p>¡Se le ofrece la oportunidad de recibir el set de regalo Amazon!</p>
          <p>Todo lo tienes que hacer es elegir la caja correcta.</p>
          <p>Tienes 3 intentos, ¡buenas suerte!</p>
          <button className='botaoOk'>OK</button>
        </div>
      </div>
    </div>
  );
}
