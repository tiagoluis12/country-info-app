const API_BASE_URL = "https://country-info-back.onrender.com/api/countries";

const CountryService = {
  fetchCountryInfo: async (countryName) => {
    return await fetch(`${API_BASE_URL}/${encodeURIComponent(countryName)}`);
  },
};

export default CountryService;
