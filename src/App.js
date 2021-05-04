import { useState, useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import Basket from "./Basket";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [sortKey, setSortKey] = useState("price");
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const basket = [];
  const copy = [...products];
  copy.sort((a, b) => a[sortKey] > b[sortKey]);
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="sort_btn">
          <button onClick={() => setSortKey("productdisplayname")}>Sort By Name</button>
          <button onClick={() => setSortKey("price")}>Sort By Price</button>
        </div>
        <ProductList products={products} />
        <Basket basket={basket} />
      </main>
    </div>
  );
}

export default App;