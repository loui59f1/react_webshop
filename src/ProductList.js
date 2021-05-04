import Product from "./Product";

export default function ProductList(props) {
    return (
        <section className="Productlist">
            {props.products.map((item) => (
                <Product {...item} key={item.id} />
            ))}
        </section>
    );
}
