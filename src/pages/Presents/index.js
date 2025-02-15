import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header';
import Boxamazon from '../../componentes/Boxamazon/Boxamazon';
import './style.css';
import presentes from '../../assets/presentes.jpeg';

export default function Presents() {
  const [clickCount, setClickCount] = useState(0);
  const [showNotificacaoFalta, setShowNotificacaoFalta] = useState(false);
  const [showNotificacao, setShowNotificacao] = useState(false);
  
  // Estado para controlar a tela de carregamento
  const [isLoading, setIsLoading] = useState(true);
  // Estado para controlar a exibição da notificacaoContainerPrimeira
  const [showNotificacaoContainerPrimeira, setShowNotificacaoContainerPrimeira] = useState(false);

  useEffect(() => {
    // Após 3 segundos, encerra o carregamento e mostra a notificação "primeira"
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowNotificacaoContainerPrimeira(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBoxamazonClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      
      if (newCount === 1) {
        // Primeiro clique: mostra a notificação de falta por 3 segundos
        setShowNotificacaoFalta(true);
        setTimeout(() => {
          setShowNotificacaoFalta(false);
        }, 3000);
      } else if (newCount === 2) {
        // Segundo clique: mostra a outra notificação e deixa aberta
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

      {/* Tela de carregamento */}
      <div 
        className='telaCarregamentoContainer' 
        style={{ display: isLoading ? 'flex' : 'none' }}
      >
        <div className="loader"></div>
      </div>

      {/* Notificação de falta */}
      <div 
        className='notificacaoFaltaContainer' 
        style={{ display: showNotificacaoFalta ? 'block' : 'none' }}
      >
        <div className='notificacaoFalta'>
          <h2>!Ups!</h2>
          <p>Lamentablemente, esta caja está vacía. Te quedan 2 intentos.</p>
          <button 
            className='botaoOk'
            onClick={() => setShowNotificacaoFalta(false)}
          >
            OK
          </button>
        </div>
      </div>

      {/* Notificação de participação (segunda) */}
      <div 
        className='notificacaoContainer' 
        style={{ display: showNotificacao ? 'block' : 'none' }}
      >
        <div className='notificacao'>
          <img src={presentes} alt="Presentes" />
          <h3>!Felicidades! !Has ganado nuestro nuestro premio: el set de regalo Amazon!</h3>
          <p>Todo lo que necesitas haver es completar la información requerida y pagar el costo de envio</p>
          <p>El paquete será entregado en un plazo de 3 días.</p>
          <button 
            className='botaoOk'
            onClick={() => setShowNotificacao(false)}
          >
            OK
          </button>
        </div>
      </div>

      {/* Notificação "primeira" que aparece após o carregamento */}
      <div 
        className='notificacaoContainerPrimeira'  
        style={{ display: showNotificacaoContainerPrimeira ? 'flex' : 'none' }}
      >
        <div className='notificacao'>
          <img src={presentes} alt="Presentes" />
          <h3>Gracias por tu participación</h3>
          <p>¡Se le ofrece la oportunidad de recibir el set de regalo Amazon!</p>
          <p>Todo lo tienes que hacer es elegir la caja correcta.</p>
          <p>Tienes 3 intentos, ¡buenas suerte!</p>
          <button 
            className='botaoOk'
            onClick={() => setShowNotificacaoContainerPrimeira(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
