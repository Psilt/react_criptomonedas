import React from 'react'
import styled from '@emotion/styled'
const Contenedor = styled.div`
color: #FFF;
font-family:Arial,Helvetica,sans-serif;

`
const Info=styled.p`
font-size:30px;
`

const Parrafo=styled.p`
font-size:18px;
spam{
    font-weight:bold;
}

`

const Cotizacion =({cotizacion})=>{
    if(Object.keys(cotizacion).length === 0) return null
    return(
        <Contenedor>
            <Info>La cotizacion es de: <span>{cotizacion.PRICE}</span></Info>
            <Parrafo>El precio mas alto del dia: <span>{cotizacion.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio mas bajo del dia: <span>{cotizacion.LOWDAY}</span></Parrafo>
            <Parrafo>La variacion en las ultimas 24hs: <span>{cotizacion.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>La ultima actualizacion: <span>{cotizacion.LASTUPDATE}</span></Parrafo>
        </Contenedor>
    )
}

export default Cotizacion