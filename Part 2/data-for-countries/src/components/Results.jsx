import Details from "./Details"

const Result = ({ filteredCountries, selectedCountry, setSelectedCountry, setWeather, weather }) => {

    // let countryCount = 0

    console.log("The filtered countries are:", filteredCountries)

    if (!filteredCountries) {     // Handling case where no countries are found or countries is null
        console.log("Countries contains null.")
        return <p>Loading countries...</p>
    } else if (filteredCountries.length > 10) {    // Handling case where there are too many countries to display (more than 10)
        console.log("Countries contains more than 10 countries.")
        return <p>That matches the whole world, bud. Try something more preciser...</p>
    } else if (filteredCountries.length === 1) {    // This is OUR case. Handling case where exactly one country is found, displaying its details
        const countryLanguages = []
        // Looping through the country's languages and creating a list
        for (let key in filteredCountries[0].languages) {
            countryLanguages.push(
                <li key={key}>{filteredCountries[0].languages[key]}</li>
            )
        }

        return (
            <div>
                <Details country={filteredCountries[0]} countryLanguages={countryLanguages} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setWeather={setWeather} weather={weather} />
            </div>
        )
    }

    const handleShow = (country) => { // Setting the selected country to show details

        console.log("Inside handleShow", country)
        setSelectedCountry(country) // Setting the selected country to show details
        console.log("Clicked Show!")
    }

    if (selectedCountry) {
        const countryLanguages = []
        for (let key in selectedCountry.languages) {
            countryLanguages.push(
                <li key={key}>{selectedCountry.languages[key]}</li>
            )
        }

        return (
            <div>
                <Details country={selectedCountry} countryLanguages={countryLanguages} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
            </div>
        )

    }

    // Default case: Display a list of filtered countries with a "show" button for each
    console.log("Total Countries:", filteredCountries.length)
    // if(countries.length) I wrote this but it was no longer needed.
    return (
        <div>
            {filteredCountries.map(fc =>
                <div key={fc.name.common}>
                    {fc.name.common} {/* Displaying the name of each country in the filtered list */}
                    <button onClick={() => handleShow(fc)}>show</button>
                </div>
            )}
        </div>
    )
}

export default Result