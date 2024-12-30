import { useState, useEffect } from "react";
import usingServer from "./services/usingServer";
import Result from "./components/Results";

const App = () => {
  // First, initiating state hooks to manage query input, countries data, selected country, and weather data
  const [query, setQuery] = useState("")
  const [countries, setCountries] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  // Array to hold filtered countries based on search query  
  let filteredCountries = []

  useEffect(() => {   // useEffect to fetch country data from the server on initial load
    console.log("Inside Effect: 1")
    usingServer.getCountryNames().then(response => {    // Fetching country names from the server and setting them to state
      console.log(response)
      setCountries(response)
      // console.log("Contries:", countries.length)
    })
  }, [])

  // Filtering countries based on the search query if countries data exists
  if (countries) {
    filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    )
    console.log("Filtered Countries(in App): ", filteredCountries)
  }

  const handleSearch = (event) => {
    setQuery(event.target.value)
    // console.log("Query:", query)
    setSelectedCountry(null)   // Resetting selected country when new search is initiated
  }

  return (
    <div>
      <form>
        Find countries:
        <input type="query" onChange={handleSearch} />
      </form>
      {/* Passing filtered countries and other data to the Result component */}
      <Result filteredCountries={filteredCountries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setWeather={setWeather} weather={weather} />
    </div>
  )
}

export default App