const API_BASE_URL = "https://country-info-back.onrender.com/api/countries";

// if you want to run locally use this URL above | const API_BASE_URL = "http://localhost:3001/api/countries";

const CountryService = {
  fetchCountryInfo: async (countryName) => {
    return await fetch(`${API_BASE_URL}/${encodeURIComponent(countryName)}`);
  },
};

export default CountryService;
