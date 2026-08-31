import { useEffect, useState } from "react";

export default function Main() {
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [currencies, setCurrencies] = useState([]);

  const [result, setResult] = useState(0);

  function handleSwapButton() {
    setAmount(result);
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  }

  useEffect(function () {
    async function getCurrencies() {
      const res = await fetch("https://api.frankfurter.dev/v2/currencies");
      const currs = await res.json();

      const isoCodes = currs.map((currency) => currency.iso_code);

      setCurrencies(isoCodes);
    }

    getCurrencies();
  }, []);

  useEffect(() => {
    async function getResult() {
      const api = "https://api.frankfurter.dev";

      const res = await fetch(
        `${api}/v2/rate/${firstCurrency}/${secondCurrency}`,
      );

      const data = await res.json();

      setResult((Number(amount || 0) * data.rate).toFixed(2));
    }

    getResult();
  }, [firstCurrency, secondCurrency, amount]);

  return (
    <div className="main">
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={firstCurrency}
          onChange={(e) => setFirstCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option value={cur}>{cur}</option>
          ))}
        </select>
        <button onClick={handleSwapButton}>
          <svg
            viewBox="0 0 24 24"
            width="36"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.5L8 7.5M21 7.5L16.6667 3M21 7.5L16.6667 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16.5L17 16.5M4 16.5L8.33333 21M4 16.5L8.33333 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="left-line">
        <select
          value={secondCurrency}
          onChange={(e) => setSecondCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option value={cur}>{cur}</option>
          ))}
        </select>
        <input disabled={true} value={result} />
      </div>
    </div>
  );
}
