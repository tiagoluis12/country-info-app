import React, { useState } from "react";
import "../styles/country.css";
import SearchForm from "./SearchForm";
import CountryService from "./services/CountryService";
import LoadingSpinner from "./Loading";

function CountryInfo() {
  const [countryName, setCountryName] = useState("");
  const [CountryInfo, setCountryInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await CountryService.fetchCountryInfo(countryName);

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

  const handleClear = () => {
    setCountryName("");
    setCountryInfo(null);
    setError(null);
  };

  return (
    <div className="container">
      <h1>Country Information - By Bounce insights</h1>
      <SearchForm
        countryName={countryName}
        onCountryNameChange={setCountryName}
        onSearch={handleSearch}
        onClear={handleClear} 
      />
      {loading && <LoadingSpinner />}
      {error && <p className="error">Error: {error}</p>}
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
