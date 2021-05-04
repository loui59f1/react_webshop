import { useState } from "react";

export default function Product(props) {
    // Her bruger vi en state variable og en updater function - 0'et er vores inital value/amount
    const [amount, setAmount] = useState(0);

    // Updater functions
    function handleClickUp(evt) {
        setAmount((prevState) => {
            return prevState + 1;
        });
    }
    function handleClickDown(evt) {
        setAmount((prevState) => {
            return prevState - 1;
        });
    }

    return (
        <article className="Product">
            <h2>{props.productdisplayname}</h2>
            <p>{props.price}</p>
            <div className="product_btn">
                <button disabled={amount === 0} onClick={handleClickDown}>{" "} -{" "}</button>
                {amount}
                <button onClick={handleClickUp}> + </button>
            </div>
        </article>
    );
}