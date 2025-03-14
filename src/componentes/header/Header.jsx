import './style.css';
import { IoIosSearch } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../../assets/logo.png';



export default function Header({ naoexibir }) {
  return (
    <>
      <nav className='header'>
        <div className='logo'>
          <img src={Logo} className='img-logo' alt='logo' />
          <p>.com</p>
        </div>
        {!naoexibir ? (
          <div className='serach-box'>
            <input type="text" placeholder='Buscar Amazon.com' />
            <button><IoIosSearch fontSize={30} /></button>
          </div>
        ) : null}

        <div className='infos'>
          <p><FaInfoCircle style={{ marginRight: 8 }} />Ayuda y asistencia</p>
          <p><FaCartShopping style={{ marginRight: 8 }} />Carrito</p>
        </div>
      </nav>
    </>
  );
}