import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

function Home() {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => setProducts(products.products))
      .catch((error) => console.log(error));
    setIsPending(false);
  }, []);

  return (
    <div className="max-w-[1000px] w-[100%] mx-auto px-12">
      {isPending && <Loader />}
      <Navbar />
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Home;
