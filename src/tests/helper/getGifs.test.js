import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en helper getGifs',() => {
    test('debe traer 5 elementos por defecto', async () =>{
        
        const gifs = await getGifs('simpsons');

        expect(gifs.length).toBe(5);
        
    })

    test('debe traer 10 elementos como parámetro', async () =>{
        
        const gifs = await getGifs('simpsons', 10);
        expect(gifs.length).toBe(10);
        
    })

   
})