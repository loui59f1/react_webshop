import MyBasket from "./MyBasket";
import CheckoutForm from "./CheckoutForm";

export default function Basket(props) {
    return (

        <div className="Basket">

            <MyBasket basket={props.basket} />

            {props.basket.length > 0 ? <CheckoutForm /> : <p>But more stuff</p>}

        </div>
    );
}