import { Link } from "react-router-dom";
import useStore from "../stores/store";

export const CheckoutHistory = () => {
  const store = useStore();
  const history = store.history;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Checkout History</h2>
        {console.log(history)}
        <div className="flex flex-col gap-1 border p-4 h-[60vh] overflow-y-auto">
          {history.map((checkout) => (
            <Link to={`/history/${checkout.id}`} key={checkout.id}>
              <div className="flex justify-between items-center border shadow-sm p-4">
                <p>{checkout.date}</p>
                <p className="font-semibold">{checkout.totalPrice}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
