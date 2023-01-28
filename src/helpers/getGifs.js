
export const getGifs = async(category) => {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=jT61s3S7PprZwxWcRnTL66YFDKrhVS5X&limit=5&q=${category}`
    const resp = await fetch(API_URL)
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
 
    return gifs
}