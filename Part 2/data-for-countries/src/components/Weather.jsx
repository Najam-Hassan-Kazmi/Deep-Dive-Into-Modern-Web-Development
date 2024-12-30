import { useEffect } from "react"
import usingServer from "../services/usingServer"

const Weather = ({ country, weather, setWeather }) => {

    console.log("The country in Weather Component:", country)
    useEffect(() => {    // useEffect hook is used to fetch the weather information whenever the country changes. The second parameter i.e. [country] decides when this useEffect runs.
        usingServer.getWeather(country).then(weatherReport => {
            console.log("Weather has been recieved:", weatherReport)
            setWeather(weatherReport)
        })
    }, [country])   // The effect runs only when the country changes
    console.log("setWeather has been used:", weather)

    if (!weather) {     // If the weather data is not yet available, show a loading message
        console.log("Weather Loading...")
        return <p>Fetching weather report...</p>
    }

    const iconCode = weather.weather[0].icon   // Extracting the weather icon code for displaying the icon

    return (
        <div>
            <p>temperature {(weather.main.temp - 273.15).toFixed(2)} ∘C</p>   {/* Displaying temperature (converted from Kelvin to Celsius) */}
            <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="" />   {/* Showing the weather icon using the icon code from the weather data */}
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather