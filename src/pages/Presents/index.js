import Header from '../../componentes/header/Header';
import Boxamazon from '../../componentes/Boxamazon/Boxamazon';
import './style.css';


export default function Presents() {
  
  return (
    <>
      <div className='containerTotal'>
      <Header />
      <div className='containerBox'>
        <Boxamazon />
        <Boxamazon />
        <Boxamazon />
        <Boxamazon />
        <Boxamazon />
        <Boxamazon />
      </div>
      </div>
    </>
  );
}
