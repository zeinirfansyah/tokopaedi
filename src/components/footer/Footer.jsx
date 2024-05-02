import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import receipt from "../../assets/icons/receipt.svg";
import cart from "../../assets/icons/cart.svg";
import favorite from "../../assets/icons/favorite.svg";
import tokopaedi from "../../assets/icons/tokopaedi.png";
import envelope from "../../assets/icons/envelope.svg";
import useStore from "../../stores/store";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const store = useStore();

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = 768;
      setIsMobile(window.innerWidth < maxWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer
        className={`bg-white border-t py-5 ${
          isMobile ? "sticky bottom-0" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {!isMobile ? (
            <>
              <div className="flex justify-between items-center">
                <h1 className="text-green-600">Tokopaedi</h1>
                <a
                  href="https://zeinirfansyah.me"
                  target="_blank"
                  className="text-green-600"
                >
                  zeinirfansyah.me
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between gap-4">
                <img src={envelope} alt="tokopaedi" className="w-8" />

                <img src={favorite} alt="tokopaedi" className="w-8" />
                <Link to="/">
                  <img src={tokopaedi} alt="tokopaedi" className="w-8" />
                </Link>
                <Link to="/cart">
                  {store.count > 0 && (
                    <span className="absolute ms-4 -mt-3">
                      <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[8pt] font-semibold bg-red-500 text-white">
                        {store.count}
                      </div>
                    </span>
                  )}
                  <img src={cart} alt="" className="w-8 hover:cursor-pointer" />
                </Link>
                <Link to="/history">
                  <img src={receipt} alt="tokopaedi" className="w-8" />
                </Link>
              </div>
            </>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
