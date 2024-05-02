import { Link } from "react-router-dom";
import useStore from "../stores/store";
import BelumBelanja from "./BelumBelanja";

export const CheckoutHistory = () => {
  const store = useStore();
  const history = store.history;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Checkout History</h2>
          <p
            onClick={store.clearHistory}
            className="text-green-600 hover:text-red-600 cursor-pointer transition-all duration-500"
          >
            Clear History
          </p>
        </div>
        <div className="border p-4 h-[60vh] overflow-y-auto">
          {store.history.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <BelumBelanja />
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {history.map((checkout) => (
                <Link to={`/history/${checkout.id}`} key={checkout.id}>
                  <div className="flex justify-between items-center border shadow-sm p-4 rounded-md hover:shadow-green-200 transition-all duration-500">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-gray-500">Tanggal Belanja</p>
                      <p className="text-sm">{checkout.date}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-gray-500">Total belanja: </p>
                      <p className="text-sm font-semibold">{checkout.totalPrice}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/">
          <p className="text-end my-4 text-green-600 cursor-pointer hover:text-green-300 transition-all duration-500">
            Belanja Lagi!
          </p>
        </Link>
      </div>
    </>
  );
};
