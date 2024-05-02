import cart from "../../assets/icons/cart.svg";
import envelope from "../../assets/icons/envelope.svg";
import more from "../../assets/icons/more.svg";
import { Link } from "react-router-dom";
import useStore from "../../stores/store";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  const store = useStore();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-3xl font-semibold text-green-600 hidden lg:block"
          >
            tokopaedi
          </Link>
          <div className="w-full">
            <SearchInput
              type="text"
              placeholder="Cari di Tokopaedi (Fitur ini masih pajangan saja)"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Link to="/history">
              <img src={envelope} alt="" className="w-8 hover:cursor-pointer" />
            </Link>
            <Link to="/cart">
              {store.count > 0 && (
                <span className="absolute ms-2 -mt-3">
                  <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8pt] font-semibold bg-red-500 text-white">
                    {store.count}
                  </div>
                </span>
              )}
              <img src={cart} alt="" className="w-8 hover:cursor-pointer" />
            </Link>
            <img src={more} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
