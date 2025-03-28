import './style.css';
import { IoIosSearch } from "react-icons/io";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";
import Logo from '../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";


export default function Header({ naoexibir }) {
 
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const data = await response.json();
        setCity(data.city || "Cidade não encontrada");
      } catch (err) {
        setError("Erro ao obter a localização via IP.");
      }
    }
    fetchLocation();
  }, []);
  return (
    <>
      <nav className='header'>
        <div className='container'>
       
        <div className='logo'>
          <img src={Logo} className='img-logo' alt='logo' />
        
        </div>
        {!naoexibir ? (
          <div className='serach-box'>
            <button><IoIosSearch fontSize={30} /></button>
            <input type="text" placeholder='Estoy buscando' />
          </div>
        ) : null}

        <div className='infos'>
          <RxHamburgerMenu className='hamburguer'/>
          <p><FiShoppingCart style={{ marginRight: 8 }} /></p>
        </div>




        </div>
        <div className="localiza p-5 text-center">
      {city && <p className="mt-4 text-lg flex justify-between items-center">
          <span className='text-lg'>
            <FaMapMarkerAlt style={{ marginRight: "4px" }} />
            Enviar a {city}
          </span>
          <FaArrowRight />
        </p>
        
        }
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!city && !error && <p>Carregando...</p>}
    </div>
      </nav>
    </>
  );
}