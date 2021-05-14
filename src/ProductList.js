import Product from "./Product";
export default function ProductList(props) {
    return (
        <section className="ProductList">
            {props.info.map((item) => (
                <Product addToBasket={props.addToBasket} {...item} key={item.id} />
            ))}
        </section>
    );
}
