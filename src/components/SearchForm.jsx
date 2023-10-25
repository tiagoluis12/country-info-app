import React from "react";

function SearchForm({ countryName, oncountryNameChange, onClear }) {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Enter a country name"
        value={countryName}
        onChange={(e) => oncountryNameChange(e.target.value)}
        required
        pattern="[A-Za-z\s]+"
      />
      <button className="search-btn" type="button" onClick={onClear}>
        Clear
      </button>
    </form>
  );
}

export default SearchForm;
