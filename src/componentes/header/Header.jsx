import './style.css';
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Logo from '../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";



export default function Header({ naoexibir }) {
  return (
    <>
      <nav className='header'>
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
      </nav>
    </>
  );
}