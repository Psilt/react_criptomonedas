import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled'
import useMoneda from './../hooks/useMoneda'
import useCriptomoneda from './../hooks/useCriptomoneda'
import axios from 'axios'
import Error from './Error'
const Button=styled.input`
margin-top:20px;
font-weight:bold;
font-size:20px;
padding:10px;
background-color:#66a2fe;
border:none;
width:100%;
border-radius:10px;
color:#FFF;
transition:background-color .3s ease;

&:hover{
    background-color:#326AC0;
    cursor:pointer;
}
`


const Formulario =({setMoneda,setCripto})=>{

  

    const MONEDAS=[
        {codigo:'MXD', nombre:'Peso Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'USD', nombre:'Dolar Estadounidense'},
        {codigo:'GBP', nombre:'Libra Britanica'},
        {codigo:'ARS', nombre:'Peso Argentino'}
    ]
    const [listado,setListado]=useState([])
    const [Seleccionar,state]= useMoneda('Seleccione una moneda','',MONEDAS)
    const [SeleccionarCripto,stateCripto]= useCriptomoneda('Seleccione una criptomoneda','',listado)
    const [error,setError]=useState(false)

    useEffect(()=>{
        const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const consultarApi= async()=>{
            const respuesta = await axios.get(url)
            setListado(respuesta.data.Data)
        }
        consultarApi()
    },[])

    const enviarDatos=(e)=>{
        e.preventDefault()
        //validar
        if(state ==='' || stateCripto===''){
            setError(true)
            return
        }
        setError(false)
        setMoneda(state)
        setCripto(stateCripto)

    }
    
    return(
        <form onSubmit={enviarDatos}>
            {error ? <Error mensaje='Todos los campos son obligatorios'></Error> :null}
            <Seleccionar></Seleccionar>
            <SeleccionarCripto></SeleccionarCripto>
        <Button
        type="submit"
        value="calcular"
        ></Button>

        </form>
    )
}

export default Formulario