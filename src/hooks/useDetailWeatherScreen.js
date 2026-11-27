import { useState, useEffect } from "react";
import WeatherLayer from "../api/WeatherLayer";
import { useNavigation } from "@react-navigation/native";

const useDetailWeatherScreen = (measurementSystem) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigation = useNavigation();
    //this was goToCityWeatherScreen in search screen.

    const getCityWeather = async (item) => {

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

export default useDetailWeatherScreen;