import React from "react";

function SearchForm({ countryName, onCountryNameChange, onSearch, onClear }) {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter a country name"
        value={countryName}
        onChange={(e) => onCountryNameChange(e.target.value)}
        required
        pattern="[A-Za-z ]+"
      />
      <button className="search-btn" type="button" onClick={onSearch}>
        Search
      </button>
      <br /> {/* Add a line break */}
      <button className="clear-btn" type="button" onClick={onClear}>
        Clear
      </button>
    </form>
  );
}

export default SearchForm;