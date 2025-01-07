import { useEffect } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
import { useCryptoStore } from "./stores";

export default function App() {
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <h1 className="title">
        Cotizador de <span>Criptomonedas</span>
      </h1>
      <div className="content">
        <CryptoSearchForm />
        <CryptoPriceDisplay />
      </div>
    </div>
  );
}
