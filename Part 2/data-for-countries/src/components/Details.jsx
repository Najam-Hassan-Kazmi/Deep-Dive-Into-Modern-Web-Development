import Weather from "./Weather"

const Details = ({ country, countryLanguages, selectedCountry, setSelectedCountry, weather, setWeather }) => {
    
    console.log("Selected Country is(inside Details):", selectedCountry) // For debugging purposes.
        
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}<br />Area: {country.area}</p>
            <p><b>Languages:</b></p>
            <ul>
                <div>
                    {/* Here, countryLanguages is expected to be an array of languages. 
                        We render each language as a list item inside the <ul> element. 
                        If the country has multiple languages, they will all be shown in the list */}
                    <ul>{countryLanguages}</ul>
                </div>
            </ul>
            <img src={country.flags.png} alt="Flag Loading" />
            <h2>Weather in {country.capital}</h2>
            {/* Passing the country’s capital, the setWeather function, and the weather state to the Weather component.
                This allows the Weather component to update the weather state with fresh data when needed */}
            <Weather country={country.capital} setWeather={setWeather} weather={weather}/>
        </div>
    )
}

export default Details