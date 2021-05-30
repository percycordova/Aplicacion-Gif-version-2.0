export const getGif = async (category,quantity) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&limit=${quantity}&api_key=Qk6fN3mpsj2lZFugrdDXpJJQCs7tMC1q`
    const resp = await fetch(url);
    const { data } = await resp.json();//tiene dos atributos data y meta
    // eslint-disable-next-line array-callback-return
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
}