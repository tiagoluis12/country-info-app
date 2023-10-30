# Country Information App (FrontEnd)

This is the frontend part of the "Country Information" project By Bounce Insights. It provides an input to search for a country by name and a list of countries that match the search criteria. When a country is selected, it displays information about the country, including its flag, name, population, region, subregion, capital, currencies, languages, and border countries.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Setup

1. You can clone the repository to your local machine:

git clone https://github.com/tiagoluis12/country-info-app.git

## Start

1. Navigate to the frontend directory:
   cd country-info
   cd frontend

2. Install all dependencies: npm install

3. To start the frontend, run the following command: npm start

This will launch the server, and the application will be accessible in your web browser at http://localhost:3000

### Testing

Run Cypress tests: npx cypress open
The Cypress panel will open, click on E2E testing, then select Start E2E Testing in Chrome.

To navigate in Cypress browser and see the test, you have to follow the steps below:

1. click on Specs then
2. Click on FrontendTest to go straight to the test screen. Then, you have to insert any country name inside the input to see the test running.

OBS: The test code folder is in cypress/e2e/FrontendTest.cy.js

## Usage

1. Open your web browser and navigate to http://localhost:3000. or

## Hosting

The frontend is hosted on Render. You can access the application through the link: https://country-info-app.onrender.com

2. You'll see the Country Information App's main page.

3. When you start typing in the search box, the list of countries will be filtered by the search criteria.

4. Country information will be displayed on the page.
