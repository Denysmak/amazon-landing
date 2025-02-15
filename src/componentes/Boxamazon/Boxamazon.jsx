import { useState } from 'react';
import './style.css';
import boximagem from '../../assets/boximage.png';

export default function Boxamazon() {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // Remove o efeito após 500ms
  };

  return (
    <div className='imageContainer' onClick={handleClick}>
      <img className={`boximage ${isShaking ? 'shake' : ''}`} src={boximagem} alt="" />
    </div>
  );
}
