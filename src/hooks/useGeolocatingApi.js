import { useState, useEffect, useState } from "react";
import WeatherLayer from "../api/WeatherLayer";

const useGelocatingApi = async (searchCityKey) => {

    //Copy pasted from search screen
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);

    try {
        const response = await WeatherLayer.get("/geo/1.0/direct", {
            params: {
                q: searchCityKey,
                limit: 3,
            }
        });

        setCity(response.data);

        console.log("Search completed");

    } catch (error) {
        console.error("Geolocating API error:", error);
    }

    return [city, setCity];
}

export default useGelocatingApi;