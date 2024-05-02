import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

const BelumBelanja = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-4">
        <p className="text-center">Kamu belum belanja</p>
        <Button onClick={() => navigate("/")} style="bg-green-600 text-white">Gas Belanja Sekarang</Button>
      </div>
    </>
  );
};

export default BelumBelanja;
