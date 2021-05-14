import { useState } from "react";

export default function AddRemoveBtns(props) {
    // Amount
    const [counterAmount, setAmount] = useState(0);

    function add() {
        console.log("plus")
        setAmount((prevState) => { return prevState + 1 });

    }

    function min() {
        console.log("minus")
        setAmount((prevState) => { return prevState - 1 });
    }

    return (
        <div className="Buttons">

            <button disabled={counterAmount === 0} onClick={min}>-</button>
            <p>{props.amount}</p>
            <button onClick={add}>+</button>

        </div>
    );
}