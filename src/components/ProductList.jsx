import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-5 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="rounded-md bg-base-200 p-5 grid ">
            <div className="flex justify-center">
              <img src={product.thumbnail} alt="" width={150} height={100} />
            </div>
            <h1 className="text-2xl my-3">{product.title}</h1>
            <small className="text-emerald-700 font-medium">
              Price:{product.price}$
            </small>
            {/* <p className="line-clamp-3">{product.description}</p> */}
            <div className="card-actions justify-end">
              <Link
                className="btn btn-accent text-white"
                to={`/singleProduct/${product.id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
