import axios from 'axios';

//this is for the home screen
export default axios.create({
    baseURL: "http://api.openweathermap.org",
    params: {
        appid: process.env.EXPO_PUBLIC_WEATHER_API_KEY
    },
})