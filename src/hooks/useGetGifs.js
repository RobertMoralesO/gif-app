import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        gifs: [],
        cargando: true
    })

    useEffect(()=>{
        setTimeout(()=>
            getGifs(valorBusqueda)
            .then(gifs =>{
                setEstado({
                    gifs: gifs,
                    cargando: false
                });
            }), 5)
    },[valorBusqueda])

    return estado;
  
}


