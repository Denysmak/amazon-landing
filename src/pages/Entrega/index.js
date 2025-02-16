import Header from '../../componentes/header/Header';
import './style.css';

export default function Entrega() {
  return (
    <>
      <Header naoexibir={true} />
      <div className="circles-container">
        <div className="containerCircleText">
          <div className="circle" id="circle1">1</div>
          <p>Selección</p>
        </div>
        <div className="line"></div>
        <div className="containerCircleText">
          <div className="circle" id="circle2">2</div>
          <p>Información<br/> del pedido</p>
        </div>
        <div className="line linha2"></div>
        <div className="containerCircleText">
          <div className="circle" id="circle3">3</div>
          <p>Pago</p>
        </div>
      </div>
      <h1>testando</h1>
      <h1>testando</h1>
      <h1>testando</h1>
    </>
  );
}
