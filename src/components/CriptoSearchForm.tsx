import { useCryptoStore } from "../stores";
import { currencies } from "../data";
import { ChangeEvent, FormEvent, useState } from "react";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
  const { cryptoCurrencies } = useCryptoStore();
  const [pair, setPair] = useState<Pair>({ currency: "", cryptoCurrency: "" });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({ ...pair, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validate not empty fields
    if (Object.values(pair).includes("")) {
      setError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    // API request
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">Seleccione una moneda</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptoCurrency">Criptomoneda</label>
        <select
          name="cryptoCurrency"
          id="cryptoCurrency"
          onChange={handleChange}
          value={pair.cryptoCurrency}
        >
          <option value="">Seleccione una criptomoneda</option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
