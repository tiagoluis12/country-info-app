const API_BASE_URL = "https://backend-country-a4390b041bcf.herokuapp.com/api/countries";

// If you want to run using the hosted backend on Render, you have to change the URL in the line above to the following:
// const API_BASE_URL = "https://country-info-back.onrender.com/api/countries";

const CountryService = {
  fetchCountryInfo: async (countryName) => {
    return await fetch(`${API_BASE_URL}/${encodeURIComponent(countryName)}`);
  },
};

export default CountryService;
