export const getNft = async (_cid: string): Promise<{
    description: string;
    image: string;
    price: string;
    name: string;
}> => {
    const _nft = await fetch(`https://${_cid}.ipfs.dweb.link/metadata.json`);
    return await _nft.json();
}