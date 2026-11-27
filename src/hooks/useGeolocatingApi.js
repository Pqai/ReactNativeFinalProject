import { useState, useEffect } from "react";
import WeatherLayer from "../api/WeatherLayer";

const useGelocatingApi = (searchCityKey) => {

    //This was getApiData
    //Copy pasted from search screen
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchedCity, setSearchedCity] = useState([]);

    useEffect(() => {

        const getApiData = async () => {
            try {
                const response = await WeatherLayer.get("/geo/1.0/direct", {
                    params: {
                        q: searchCityKey,
                        limit: 3,
                    }
                });

                setSearchedCity(response.data);

                console.log("Search completed");

            } catch (error) {
                console.error("Geolocating API error:", error);
            } finally {

            }
        }
    }, [searchCityKey]);

    return [searchedCity, setSearchedCity];
}

export default useGelocatingApi;