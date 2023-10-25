import { BrowserRouter, Routes, Route } from "react-router-dom"
import CountryInfo from "./components/CountryInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryInfo />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;


