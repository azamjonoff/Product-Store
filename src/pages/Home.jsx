import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";

function Home() {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => {
        setProducts(products.products);
        setIsPending(false);
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="max-w-[1000px] w-[100%] mx-auto px-12">
      {isPending && <Loader />}
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Home;
