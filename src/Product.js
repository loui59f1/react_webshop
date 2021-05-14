import AddRemoveBtns from "./AddRemoveBtns";

export default function Product(props) {

    //console.log(props);

    // TODO: Send basket hertil fra App? 
    // TODO: Spørg om props.id er i basket, hvis ja, skriv props.amount - hvis ikke, skriv 0???


    // Other stuff
    return (

        <article className={props.soldout ? "Product soldout" : "Product"}>

            <h2>{props.productdisplayname}</h2>

            <h3>{props.price} DKK</h3>

            <AddRemoveBtns />

            <button onClick={() => props.addToBasket(props)}>Add to basket</button>

        </article>

    );
}