import {useGetGifs} from '../../hooks/useGetGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas del custom hook useGetGifs', ()=>{

    test('Debe retornar el estado inicial del hook', ()=>{
        const {result} = renderHook(()=>useGetGifs('simpson'));
        const {gifs, cargando} = result.current;

        expect(gifs).toEqual([]);
        expect(cargando).toBe(true);
    })

    test('Debe retornar loso elementos del valor de la búsqueda', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useGetGifs('simpson'));
        await waitForNextUpdate();
        const {gifs, cargando} = result.current;
        
        expect(gifs.length).toBe(5);
        expect(cargando).toBe(false);
    })
    
})