import { Link } from "react-router-dom";
import useStore from "../stores/store";
import { Button } from "../components/ui/Button";
import star from "../assets/icons/star.svg";

const ProductDetail = () => {
  const store = useStore();
  const product = store.Product;
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="head my-7 text-lg border-b border-gray-300 py-4">
          <Link
            to="/"
            className="text-green-600 hover:text-green-300 cursor-pointer"
          >
            Home
          </Link>{" "}
          / {product.title}
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex justify-center w-full lg:w-1/2 rounded-md p-4 ">
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] h-[200px] object-contain "
            />
          </div>
          <div className="flex flex-col justify-between gap-2 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl lg:text-2xl font-bold">{product.title}</h1>
                <div className="my-1">
                  <span className="text-green-800 py-1 px-2 border border-green-400 rounded bg-green-200 text-xs">
                    {product.category}
                  </span>
                </div>
                <div>
                  <h1 className="">
                    <span className="flex gap-1">
                      <img src={star} alt="" />
                      {product.rating.rate} | {product.rating.count} terjual
                    </span>
                  </h1>
                </div>
              </div>
              <p>{product.description}</p>
            </div>
            <div className="flex justify-between border-t-2 py-4">
              <h1 className="text-xl font-bold">${product.price}</h1>
              <Button
                onClick={() => store.addToCart(product)}
                style="bg-green-600 text-white"
              >
                + Keranjang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
