import { useParams } from "react-router-dom";
import useStore from "../stores/store";

const CheckoutHistoryDetail = () => {
  const { id } = useParams();
  const store = useStore();
  const history = store.history;

  const checkout = history.find((item) => item.id === id);

  console.log(checkout);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4">
        {checkout.products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutHistoryDetail;
