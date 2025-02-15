import Logo from '../../assets/logo.png';
import Congrutulations from '../../assets/congrulations.png';
import { IoIosSearch } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Header from '../../componentes/header/Header';
import './styles.css';

export default function Congratulations() {
  return (
    <>
      <Header />

      
      <section class="congratulations">
        <img src={Congrutulations} alt="¡Felicidades! ¡Ganaste!" />
      </section>
    </>
  )
}