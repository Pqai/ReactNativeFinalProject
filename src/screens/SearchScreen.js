import React, { useReducer, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';
import WeatherLayer from '../api/WeatherLayer';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [city, setCity] = useState("");

    //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    const getApiData = async (searchCityKey) => {

        try {
            const response = await WeatherLayer.get("/data/2.5/weather", {
                params: {
                    q: search,
                    appid: example,
                    units: measurementSystem
                }
            });

            setCity(response.data);

            console.log("Search completed");

        } catch (error) {
            console.error("API error:", error);
        }
    }

    return (
        <View style={styles.MainContainer}>
            <View style={styles.searchBar}>
                <BackButtonComponent />

                <SearchBarComponent
                    term={search}
                    onChangeTerm={(newSearch) => {
                        setSearch(newSearch);
                    }}
                />

            </View>

            <FlatList
                data={await}
                keyExtractor={(k) => k.id}
                renderItem={({ item }) => (
                    <View style={styles.miniWeatherCard}>
                        <MainWeatherCardComponent
                            city={item.city}
                            country={item.country}
                            temperature={item.temperature}
                        //Fix these later
                        />
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
    searchBar: {
        backgroundColor: '#2f9680',
        width: '70%',
        marginTop: 20
    },
    miniWeatherCard: {

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