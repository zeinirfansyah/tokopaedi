import { PropTypes } from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import star from "../../assets/icons/star.svg";
import ellipsis from "../../assets/icons/ellipsis.svg";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Product = ({ product, onAddToCart, onProductDetails }) => {
  return (
    <div key={product.id} className="flex flex-col gap-4 p-4 border rounded">
      <Link onClick={() => onProductDetails(product)} to="product-detail">
        <div className="flex flex-col gap-2">
          <img
            src={product.image}
            alt={product.title}
            className="focus:outline-none w-full h-44"
          />
          <LinesEllipsis
            text={product.description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-[14px] tracking-tight text-gray-600"
          />
          <h1 className="font-bold tracking-tight">${product.price}</h1>
          <div className="flex justify-between">
            <div className="flex gap-1 text-[12px] tracking-tight text-gray-500">
              <span className="flex gap-1">
                <img src={star} alt="" />
                {product.rating.rate}
              </span>
              <span>|</span>
              <span>{product.rating.count}+ terjual</span>
            </div>
            <img src={ellipsis} alt="" />
          </div>
        </div>
      </Link>
      <Button onClick={() => onAddToCart(product)} color="bg-white text-green-600">+ Keranjang</Button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onProductDetails: PropTypes.func.isRequired,
};

export default Product;
