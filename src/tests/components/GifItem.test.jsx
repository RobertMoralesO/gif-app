import {shallow} from 'enzyme';
import GifItem from '../components/GifItem';

describe('Pruebas en <GifItem/>',() => {
    test('debe tener la imagen con las propiedades url y alt', () =>{
        const titulo = 'Titulo prueba';
        const url = 'https://roberto.morales/imagen.jpg'
        const wrapper = shallow( <GifItem title={titulo} url={url}/>);

        expect(wrapper.find('img').prop('alt')).toBe(titulo);
        expect(wrapper.find('img').prop('src')).toBe(url);

    })

    test('debe tener el efecto animate__fadeIn', () =>{
        const titulo = 'Titulo prueba';
        const url = 'https://roberto.morales/imagen.jpg'
        const wrapper = shallow( <GifItem title={titulo} url={url}/>);

        const aux = wrapper.find('div').prop('className');

        expect(aux.includes('animate__fadeIn')).toBe(true);

    })
})