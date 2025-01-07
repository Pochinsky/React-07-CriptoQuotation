import { useMemo } from "react";
import { useCryptoStore } from "../stores";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  const { result, loading } = useCryptoStore();
  const hasResult = useMemo(
    () => !Object.values(result).includes(""),
    [result]
  );
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotización</h2>
            <div className="result">
              <img
                src={`https://cryptocompare.com/${result.IMAGEURL}`}
                alt="logo crypto"
              />
              <div>
                <p>
                  Precio actual: <span>{result.PRICE}</span>
                </p>
                <p>
                  Precio más alto del día: <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Precio más bajo del día: <span>{result.LOWDAY}</span>
                </p>
                <p>
                  Variación en las últimas 24 horas:{" "}
                  <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Última actualización: <span>{result.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
