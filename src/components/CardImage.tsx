import { createEffect, createMemo, createSignal, onMount } from "solid-js";
import ButtonAction from "./ButtonAction";
import Img from '../assets/img/loading.gif';
import { getNft } from "../helpers/getNft";
import PlaceholderLoading from "./PlaceholderLoading";

type TypeData = {
    description: string;
    image: string;
    price: string;
    name: string;
}

const CardImage = ({ item, destroy }) => {

    const [data, setData] = createSignal<TypeData | null>(null)

    onMount(async () => getNft(item.cid)
        .then(response => setData(response)
        ));

    return <>
        {data() ?
            <div className="col-lg-3">
                <div className="card m-2">
                    <div className="h-50">
                        <img className="card-img-top image-card rounded"
                            src={data().image ? data().image.replace('ipfs://', 'https://ipfs.io/ipfs/') : Img}
                            alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{data().name} </h5>
                        <h4>{data().price} eth</h4>
                        <p className="card-text">{data().description} </p>
                        <ButtonAction danger onClick={() => destroy(item?.cid)} text="Delete" />
                    </div>
                </div>
            </div> :
            <div className="col-lg-3"><PlaceholderLoading /></div>}
    </>
}

export default CardImage;