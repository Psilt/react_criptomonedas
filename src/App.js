import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Cotizacion from './Components/Cotizacion'
import Formulario from './Components/Formulario'
import axios from 'axios'
import Loader from './Components/Loader'


const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
@media (min-width:992px){
  display:grid;
  grid-template-columns:repeat(2,1fr);
  colunm-gap::2rem;
}
`
const Heading=styled.h1`
font-family: 'Bebas Neue',cursive;
color: #FFF;
text-align:left;
font-weight:700;
font-size:50 px;
margin-bottom:50px;
margin-top:80px;

&::after{
  content:'';
  width:100px;
  height:6px;
  background-color: #66A2FE;
  display:block;
}

`

const Imagen=styled.img `
max-width:100%;
margin-top:5rem;`

function App() {

  const[moneda,setMoneda]=useState('')
  const[cripto,setCripto]=useState('')
  const[cotizacion,setCotizacion]=useState({})
  const[loader,setLoader]=useState(false)
  
useEffect(()=>{
  
  const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
   const consultar= async ()=>{

    if(moneda==='') return

    
   const respuesta=await axios.get(url)
   

    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
      setCotizacion(respuesta.data.DISPLAY[cripto][moneda])
    },3000)

   }
   consultar()
},[moneda,cripto])

let componente = (loader) ? <Loader /> : <Cotizacion cotizacion={cotizacion} />
    return (
    <Contenedor>
      <div>
        <Imagen
        src={imagen}
        alt='imagen de criptomonedas'></Imagen>

      </div>
      <div>
        <Heading>Criptomonedas al instante</Heading>
      <Formulario
      setMoneda={setMoneda}
      setCripto={setCripto}
      ></Formulario>
      {componente}
      </div>
    </Contenedor>
  );
}

export default App;
