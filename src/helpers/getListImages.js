import { API_KEY } from "../config";

export const getListImages = async () => {
    const image = await fetch('https://api.nft.storage/?limit=12', {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    })

    return await image.json();
}