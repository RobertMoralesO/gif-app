import React from 'react'
import { useState } from 'react'
import AgregarBusqueda from './AgregarBusqueda';
import GifContenedor from './GifContenedor';

const GifApp = ({categorias = ['simpson']}) => {
    const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
  return (
    <>
    <div>Aplicación de Gifs</div>
    <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda}/>
    <hr/>
    <ol>
        {
            categoriasBusqueda.map(categoriaBusqueda => (
                <GifContenedor
                    key = {categoriaBusqueda} 
                    valorBusqueda={categoriaBusqueda}
                />
            ))
        }
    </ol>

    </>
  )
}

export default GifApp