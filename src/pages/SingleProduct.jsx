import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((data) => data.json())
      .then((products) => setProduct(products))
      .catch((error) => console.log(error));
  }, []);
  console.log(product);

  return (
    <div className="max-w-[800px] w-[100%] mx-auto px-12">
      <Navbar />
      <div className="max-w-[600px] w-[100%] mx-auto px-12 py-5 rounded-xl bg-base-200">
        {product && (
          <div className="grid gap-y-4">
            <div className="flex justify-center">
              <img src={product.thumbnail} alt="" width={200} height={200} />
            </div>
            <h2 className="text-2xl">{product.title}</h2>
            <p className="line-clamp-3">{product.description}</p>
            <div className="flex justify-between items-center">
              <p>Price: {product.price}$</p>
              <span className="">Rating: {product.rating}</span>
            </div>
            <div className="flex justify-between">
              <Link className="btn btn-info" to="/">
                Go Home
              </Link>
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
