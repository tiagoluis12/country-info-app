const API_BASE_URL = "https://country-info-back.onrender.com/api/countries";

// If you want to run using the locally, you have to change the URL in the line above to the following:
// const API_BASE_URL = "http://localhost:3001/api/countries";

const CountryService = {
  fetchCountryInfo: async (countryName) => {
    return await fetch(`${API_BASE_URL}/${encodeURIComponent(countryName)}`);
  },
};

export default CountryService;
