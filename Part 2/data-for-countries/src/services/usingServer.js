import axios from "axios"   // These help us communicate with the server using HTTP requests i.e. GET, POST, PUT etc
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all"    // Base URL for fetching country data from the restcountries API
const weatherApi = import.meta.env.VITE_SOME_KEY   // Accessing the weather API key stored in the environment variables

const getCountryNames = () => {
    const request = axios.get(baseURL)   // Making a GET request to the restcountries API to fetch all countries
    return request.then(response => response.data)
}

const getWeather = (country) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${weatherApi}`)    // Making a GET request to fetch the weather of the country using the OpenWeather API
    return request.then(response => response.data)
}

export default { getCountryNames, getWeather }