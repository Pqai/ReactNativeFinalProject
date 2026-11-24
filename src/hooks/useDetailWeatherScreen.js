import { useState, useEffect, useState } from "react";
import WeatherLayer from "../api/WeatherLayer";

const useDetailWeatherScreen = async (item) => {

    try {
        const weatherResponse = await WeatherLayer.get("/data/2.5", {
            params: {
                lat: city.data.lat,
                lon: city.data.lon,
                units: measurementSystem,
            }
        });

        navigation.navigate("DetailedWeather", {
            weatherData: weatherResponse.data
        })

    } catch (error) {
        console.error("Weather retrieval API error:", error)
    }
}