
export const getGifs = async (valorBusqueda, limit=5) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=I0WTOUbrxDeqB8bJynhKbAcvguq1OeQu&q=${valorBusqueda}&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( ({id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images.downsized.url
        }
    })

    return gifs;
}