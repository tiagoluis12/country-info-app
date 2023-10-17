import React, { useState, useEffect } from "react";
import "../src/styles/country.css";

function CountryInfo() {
  const [countryName, setCountryName] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define a function to fetch country information
    const fetchCountryInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        // Make a request to your NodeJS backend to fetch country information
        const response = await fetch(
          `http://localhost:3001/api/countries/${encodeURIComponent(
            countryName
          )}`
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
        setCountryInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch country information when countryName changes
    if (countryName) {
      fetchCountryInfo();
    }
  }, [countryName]);

  return (
    <div className="container">
      <h1>Country Information - By Bounce insights</h1>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter a country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => setCountryName("")}
        >
          Clear
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {countryInfo && (
        <div className="infos">
          <h2>{countryInfo.name.common}</h2>
          <p>Official Name: {countryInfo.name.official}</p>
          <p>Capital: {countryInfo.capital}</p>
          <p>Population: {countryInfo.population.toLocaleString()}</p>
          <p>Region: {countryInfo.region}</p>
          <p>Subregion: {countryInfo.subregion}</p>
          <p>Languages: {Object.values(countryInfo.languages).join(", ")}</p>
          <p>
            Currency:{" "}
            {Object.keys(countryInfo.currencies)
              .map(
                (currencyCode) =>
                  `${currencyCode} - ${countryInfo.currencies[currencyCode].name}`
              )
              .join(", ")}
          </p>
          <p>Flag: {countryInfo.flag}</p>
          {/* Render other country information here */}
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
