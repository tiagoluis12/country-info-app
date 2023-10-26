import React, { useState, useEffect } from "react";
import "../styles/country.css";
import SearchForm from "./SearchForm";
import CountryService from "./services/CountryService";

function CountryInfo() {
  const [countryName, setcountryName] = useState("");
  const [CountryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await CountryService.fetchCountryInfo(countryName);

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
        setCountryInfo(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
      } finally {
        setLoading(false);
      }
    };

    if (countryName) {
      fetchCountryInfo();
    }
  }, [countryName]);

  const handleClear = () => {
    setcountryName("");
    setError(null);
  };

  return (
    <div className="container">
      <h1>Country Information - By Bounce insights</h1>
      <SearchForm //SearchForm component
        countryName={countryName}
        oncountryNameChange={setcountryName}
        onClear={handleClear}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {CountryInfo && (
        <div className="infos">
          <h2>{CountryInfo.name.common}</h2>
          <p>Official Name: {CountryInfo.name.official}</p>
          <p>Capital: {CountryInfo.capital}</p>
          <p>Population: {CountryInfo.population.toLocaleString()}</p>
          <p>Region: {CountryInfo.region}</p>
          <p>Subregion: {CountryInfo.subregion}</p>
          <p>Languages: {Object.values(CountryInfo.languages).join(", ")}</p>
          <p>
            Currency:{" "}
            {Object.keys(CountryInfo.currencies)
              .map(
                (currencyCode) =>
                  `${currencyCode} - ${CountryInfo.currencies[currencyCode].name}`
              )
              .join(", ")}
          </p>
          <p>Timezone: {CountryInfo.timezones.toLocaleString()}</p>
          <p>Flag: {CountryInfo.flag}</p>
          {/* Display country information */}
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
