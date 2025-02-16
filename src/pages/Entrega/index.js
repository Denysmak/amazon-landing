import Header from '../../componentes/header/Header';
import './style.css';
import presentes from '../../assets/presentes.jpeg';

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

      <div className='imagemValor'>
        <img src={presentes}/>
        <div className='containerTexto'>
          <p>Set de regalos Amazon</p>
          <p className='valor'><span>$ 1200</span>&nbsp;&nbsp;&nbsp;Sin costo</p>
        </div>
      </div>
      <div className='detalhesPedido'>
        <h3>Detalles del pedido</h3>
        <div className='textoEspacado'>
          <p>Precio del producto</p>
          <p>Sin costo</p>
        </div>
        <div className='textoEspacado'>
          <p>Costo de envío</p>
          <p>$ 42</p>
        </div>
        <div className='textoEspacado textoBold'>
          <p>Total</p>
          <p>$ 42</p>
        </div>
      </div>

    </>
  );
}
