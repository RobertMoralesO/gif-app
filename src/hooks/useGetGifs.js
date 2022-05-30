import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        gifs: [],
        cargando: true
    })

    useEffect(()=>{
        getGifs(valorBusqueda)
        .then(gifs =>{
            setEstado({
                gifs: gifs,
                cargando: false
            });
        })

    })

    return estado;
  
}


