import axios from 'axios';

export default axios.create({
    baseURL: "http://api.openweathermap.org",
    params: {
        appid: process.env.EXPO_PUBLIC_WEATHER_API_KEY
    },
})