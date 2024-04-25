import SearchInput from "../ui/SearchInput";
import cart from "../../assets/icons/cart.svg";
import envelope from "../../assets/icons/envelope.svg";
import more from "../../assets/icons/more.svg";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-green-600 hidden lg:block">
            tokopaedi
          </h1>
          <div className="lg:w-full">
            <SearchInput type="text" placeholder="Cari di Tokopaedi" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={envelope} alt="" className="w-8" />
            <img src={cart} alt="" className="w-8" />
            <img src={more} alt="" className="w-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
