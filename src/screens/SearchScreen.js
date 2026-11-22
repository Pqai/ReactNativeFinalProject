import React, { useReducer, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, } from 'react-native-safe-area-context';

import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';
import WeatherLayer from '../api/WeatherLayer';
import MiniWeatherCardComponent from '../components/MiniWeatherCardComponent';

const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [city, setCity] = useState("");

    const navigation = useNavigation();

    const goToCityWeatherScreen = async (item) => {

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

    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const getApiData = async (searchCityKey) => {

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
    }

    return (
        <View style={styles.MainContainer}>
            <TopBarLogoComponent />

            <SearchBarComponent
                term={search}
                onChangeTerm={(newSearch) => {
                    setSearch(newSearch);
                }}
                searchCity={search}
            />

            <FlatList
                data={city}
                keyExtractor={(k) => k.id}
                renderItem={({ item }) => (
                    <View
                        style={styles.miniWeatherCard}
                    >
                        <TouchableOpacity
                            onPress={() => goToCityWeatherScreen}
                        >
                            <MiniWeatherCardComponent
                                city={item.name}
                                country={item.country}
                                temperature={item.temp}
                                image_url={item.icon}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    miniWeatherCard: {
        margin: 10,
    }
})

export default SearchScreen;

/**
 * 
 * {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 277.71,
        "feels_like": 274.86,
        "temp_min": 277.71,
        "temp_max": 277.71,
        "pressure": 1001,
        "humidity": 86,
        "sea_level": 1001,
        "grnd_level": 938
    },
    "visibility": 97,
    "wind": {
        "speed": 3.37,
        "deg": 205,
        "gust": 8.57
    },
    "clouds": {
        "all": 39
    },
    "dt": 1795039160,
    "sys": {
        "type": 2,
        "id": 2011351,
        "country": "IT",
        "sunrise": 1794982539,
        "sunset": 1795016817
    },
    "timezone": 3600,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
}
 */