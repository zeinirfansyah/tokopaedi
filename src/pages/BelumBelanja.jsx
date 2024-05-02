import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const BelumBelanja = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-center">Kamu belum belanja</p>
        <Link to="/">
          <Button style="bg-green-600 text-white">Gas Belanja Sekarang</Button>
        </Link>
      </div>
    </>
  );
};

export default BelumBelanja;
