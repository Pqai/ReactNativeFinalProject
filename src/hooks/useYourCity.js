import { useState, useEffect, useState, useCallback } from "react";
import WeatherLayer from "../api/WeatherLayer";

const useYourCity = (item) => {

    const [yourCity, setYourCity] = useState([]);

    const fetchYourCity = useCallback(async (url) => {
        try {
            const weatherResponse = await WeatherLayer.get("/data/2.5", {
                params: {
                    lat: city.data.lat,
                    lon: city.data.lon,
                    units: measurementSystem,
                }
            });



        } catch (error) {
            console.error("Weather retrieval API error:", error)
        }
    })

}
/**
 * const getCityWeather = async (item) => {
 
         try {
             const weatherResponse = await WeatherLayer.get("/data/2.5/weather", {
                 params: {
                     lat: item.lat,
                     lon: item.lon,
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
 
     return [getCityWeather, isLoading, error];
 }
 */