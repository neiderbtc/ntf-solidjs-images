import { createEffect, createMemo, createSignal } from "solid-js";
import { API_KEY } from "../config";
import ButtonAction from "./ButtonAction";
import Img from '../assets/img/loading.gif';

const getImage = async (id) => {
    const _getImage = await fetch(`https://${id}.ipfs.dweb.link/metadata.json`);
    return await _getImage.json();
}


const CardImage = ({ item, destroy }) => {
    const [data, setData] = createSignal({})

    getImage(item.cid)
        .then(response => setData(response))


        console.log(Img);
    return (
        <div class="col-lg-3">
            <div class="card m-2">
                <div class="h-50">
                    <img class="card-img-top image-card rounded"
                        src={data().image ?  data().image.replace('ipfs://','https://ipfs.io/ipfs/')  : Img}
                        alt="" />
                </div>

                <div class="card-body">
                    <h5 class="card-title">{data().name} </h5>
                    <h4>{data().price} eth</h4>
                    <p class="card-text">{data().description} </p>

                    <ButtonAction danger onClick={() => destroy(item?.cid)} text="Delete" />
                </div>
            </div>
        </div>
    )
}

export default CardImage;