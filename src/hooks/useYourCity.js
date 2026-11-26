import { useState, useEffect, useState, useCallback } from "react";
import WeatherLayer from "../api/WeatherLayer";

const useYourCity = (item) => {

    const fetchYourCity = useCallback(async (url) => {
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
    })

}