import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./stores";

export default function App() {
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, []);
  return (
    <div className="container">
      <h1 className="title">
        Cotizador de <span>Criptomonedas</span>
      </h1>
      <div className="content">
        <CriptoSearchForm />
      </div>
    </div>
  );
}
