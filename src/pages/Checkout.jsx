import useStore from "../stores/store";
import LinesEllipsis from "react-lines-ellipsis";
import bca_icon from "../../src/assets/icons/bca_bank.png";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();

  const store = useStore();
  const { cart } = store;

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <h1>Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="border px-4">
            <div className="flex flex-col h-20 justify-center">
              <div className="flex justify-between items-center text-sm font-semibold">
                <p>Jumlah Produk:</p>
                <p>{cart.reduce((acc, product) => acc + product.number, 0)}</p>
              </div>
            </div>
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 py-2 px-2 border-b items-center"
              >
                <div className="flex flex-col gap-1 w-full">
                  <LinesEllipsis
                    text={product.title}
                    maxLine="2"
                    ellipsis=" ... "
                    trimRight
                    basedOn="words"
                    className="text-[14px] tracking-tight text-gray-600"
                  />
                  <p className="text-xs">Jumlah: {product.number}</p>
                </div>
                <div className="w-20">
                  <p className="text-xs text-end">
                    $ {(product.price * product.number).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-col h-20 justify-center">
              <div className="flex justify-between items-center text-sm font-semibold">
                <p>Total</p>
                <p>${store.total}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="border p-4">
              <p className="text-end">{new Date().toLocaleDateString()}</p>
              <ul className="flex flex-col gap-1 border-b-2 py-3 my-3">
                <li>
                  Jumlah Produk :{" "}
                  {cart.reduce((acc, product) => acc + product.number, 0)}
                </li>
                <li>Total Harga : ${store.total}</li>
                <li>Tax : 10%</li>
                <li>Total Bayar: ${Math.round(store.total * 1.1)}</li>
              </ul>
              <div className="bank-card px-4 py-4 border flex flex-row gap-4 justify-between items-center">
                <img src={bca_icon} alt="bank_bca" />
                <div>
                  <p>Bank Central Asia</p>
                  <p>2208 4666</p>
                  <p>PT. Tokopaedi Indonesia</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="bukti-bayar">Upload bukti bayar</label>
                  <input name="bukti-bayar" type="file" accept="image/*" />
                  <p className="text-xs text-gray-500">
                    *Kosongkan jika metode pembayaran cash atau COD
                  </p>
                </div>
                <Button
                  style="bg-green-500 text-white w-full"
                  onClick={() => {
                    if (cart.length === 0) {
                      alert("Gak ada barang buat dicheckout nih!");
                    } else {
                      store.addToHistory(), navigate("/history")
                    }
                  }}
                >
                  Bayar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
