
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifContenedor from '../components/GifContenedor'
import { useGetGifs } from '../hooks/useGetGifs';
jest.mock('../hooks/useGetGifs')

describe('Pruebas en <GifContenedor/>',() => {

    
    test('debe mostrar los gifs al cargar el hook', () =>{

        const gifs = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useGetGifs.mockReturnValue({
            gifs: gifs,
            cargando: false
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <GifContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(false)

    })

    test('debe mostrar cargando', () =>{

        useGetGifs.mockReturnValue({
            gifs: [],
            cargando: true
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <GifContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(true)

    })

    test('La cantidad de elementos GifItem coincide con el número de resultados', () =>{

        const gifs = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useGetGifs.mockReturnValue({
            gifs: gifs,
            cargando: false
        })
    
        const valorBusqueda = 'simpson';
        const wrapper = shallow( <GifContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('GifItem').length).toBe(3)

    })

   
})