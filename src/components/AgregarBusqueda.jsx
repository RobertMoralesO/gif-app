import {useState} from 'react'

const AgregarBusqueda = ({setCategoriasBusqueda}) => {
    const [valorBusqueda, setValorBusqueda] = useState('');

    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();

        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        
    }

  return (
    <>
    <form onSubmit={buscar}>
       <input
       type='text'
       value = {valorBusqueda}
       onChange={cambiarValorBusqueda}
       />
    </form>
    <p>{valorBusqueda}</p>
    </>
  )
}

export default AgregarBusqueda