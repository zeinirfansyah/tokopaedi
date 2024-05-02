import LinesEllipsis from "react-lines-ellipsis";
import useStore from "../stores/store";
import { useEffect } from "react";
import star from "../../src/assets/icons/star.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import Icon from "@mdi/react";
import { mdiTrashCanOutline } from "@mdi/js";
import BelumBelanja from "./BelumBelanja";

export const Cart = () => {
  const navigate = useNavigate();

  const store = useStore();
  const products = store.cart;

  useEffect(() => {
    store.updateTotalCart();
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex flex-col justify-between h-[70vh]">
          <div className="flex flex-col gap-3">
            <div>
              <p
                onClick={store.clearCart}
                className="text-end text-sm px-2 hover:text-red-600 transition-all duration-300 cursor-pointer"
              >
                Clear Cart
              </p>
            </div>
            <div className="border rounded-xl px-4 h-[60vh] overflow-y-auto">
              {store.cart.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <BelumBelanja />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-6 py-2 px-2 border"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex flex-col gap-1 w-full">
                        <LinesEllipsis
                          text={product.title}
                          maxLine="2"
                          ellipsis=" ... "
                          trimRight
                          basedOn="words"
                          className="text-[14px] tracking-tight text-gray-600"
                        />
                        <p className="text-[14px] font-bold">
                          $ {(product.price * product.number).toFixed(2)}
                        </p>
                        <div className="flex justify-between">
                          <div className="flex gap-1 items-center text-xs tracking-tight">
                            <span className="flex gap-1">
                              <img src={star} alt="" />
                              {product.rating.rate}
                            </span>
                            <span>|</span>
                            <span>{product.rating.count}+ terjual</span>
                          </div>
                          <div className="flex items-center border rounded-md">
                            {product.number === 1 ? (
                              <button
                                onClick={() =>
                                  store.removeProductFromCart(product)
                                }
                                className="px-2 py-1 border-e"
                              >
                                <Icon
                                  path={mdiTrashCanOutline}
                                  title="User Profile"
                                  size={0.7}
                                  color="gray"
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  store.decrementProductNumber(product)
                                }
                                className="px-2 py-1 border-e"
                              >
                                -
                              </button>
                            )}
                            <p className="px-2 text-xs">{product.number}</p>
                            <button
                              onClick={() =>
                                store.incrementProductNumber(product)
                              }
                              className="px-2 py-1 border-s"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p>Total</p>
              <p className="font-bold">${store.total}</p>
            </div>
            <div>
              <Button onClick={() => {
                if(products.length === 0) {
                  alert("Keranjang masih kosong");
                  return;
                }
                navigate("/checkout");
              }} style="bg-green-600 text-white">
                Checkout ({products.length})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
