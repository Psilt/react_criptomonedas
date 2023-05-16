import React,{useState} from 'react'
import styled from '@emotion/styled'

const Label =styled.label`
font-family:'Bebas Neue',cursive;
color:#FFF;
text-transform:uppercase;
font-weigth:bold;
font-size:2.4rem;
margin-top:2rem;
display:block;`

const Select =styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-appearance:none;
border-radius:10px;
border:none;
font-size:1.2rem;`

const useCriptomoneda=(label,stateInicial,opciones)=>{

    //creat estado

    const[state,actualizarState]=useState(stateInicial)
    const SeleccionarCripto=()=>(
        <>
        <Label>{label}</Label>
        <Select
        onChange={e => actualizarState(e.target.value)}
           value={state} 
            >
            <option value="">--Seleccione una opcion--</option>
            {opciones.map(opcion =>{
                return(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                )
            })}
        </Select>
        </>
    )

return [SeleccionarCripto,state,actualizarState]
}

export default useCriptomoneda