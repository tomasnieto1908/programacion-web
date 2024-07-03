import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/903bc29e4edf80fbd7c0e7e9/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => setRates(data.conversion_rates))
      .catch((error) =>
        console.error("Error fetching the exchange rates:", error)
      );
  }, []);

  const handleConvert = () => {
    if (fromCurrency !== toCurrency) {
      const convertedAmount =
        amount * (rates[toCurrency] / rates[fromCurrency]);
      setResult(convertedAmount);
    } else {
      setResult(amount);
    }
  };

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      <div className="input-section">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="currency-select"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input-section">
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="currency-select"
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert} className="convert-button">
        Convert
      </button>
      {result && (
        <h2 className="result">{`${amount} ${fromCurrency} = ${result.toFixed(
          2
        )} ${toCurrency}`}</h2>
      )}
    </div>
  );
};

export default CurrencyConverter;
