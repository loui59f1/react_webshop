import { useState, useEffect } from "react";
import './App.css';
import Nav from "./Nav";
import Basket from "./Basket";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);

  // Basket 
  const [basket, setBasket] = useState([]);



  // Hvis antallet er sat til 0, skal den ikke kunne lægges i kurv

  function addToBasket(payload) {
    // Check if item in basket already exists
    const inBasket = basket.findIndex((item) => item.id === payload.id);

    // If not, add the item
    if (inBasket === -1) {
      // Copy array
      const nextPayload = { ...payload };
      // Add amount 1
      nextPayload.amount = 1;
      // Update array
      setBasket((prevState) => [...prevState, nextPayload]);

    } else {

      // If it exists, modify amount
      const nextBasket = basket.map((item) => {

        if (item.id === payload.id) {
          item.amount += 1;
        }

        return item;
      });

      // Update the array
      setBasket(nextBasket);
    }
  }




  // Sort 
  const [sortKey, setSortKey] = useState("price");

  const copy = [...products];

  copy.sort((a, b) => {

    if (a[sortKey] < b[sortKey]) {
      return -1;
    }

    if (a[sortKey] > b[sortKey]) {
      return 1;
    }

    // a must be equal to b
    return 0;
  });

  // Fetch json data
  useEffect(() => {

    async function getFetch() {

      const data = await fetch("https://kea-alt-del.dk/t7/api/products");

      const allProducts = await data.json();

      setProducts(allProducts)
    };

    getFetch()

  }, []);


  return (
    <div className="App">
      <Nav />
      <div className="sort_btn">
        <button onClick={() => setSortKey("productdisplayname")}>
          Sort By Name
      </button>
        <button onClick={() => setSortKey("price")}>Sort By Price</button>
      </div>
      <main>
        <ProductList info={products} addToBasket={addToBasket} />
        <Basket basket={basket} />
      </main>
    </div>
  );
}

export default App;