import React, { useReducer, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, } from 'react-native-safe-area-context';

import SearchBarComponent from '../components/SearchBarComponent';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
import DetailWeatherCardsComponent from '../components/DetailWeatherCardsComponent';
import TopBarLogoComponent from '../components/TopBarLogoComponent';


const DetailedWeatherScreen = ({ route }) => {

    const { weatherData } = route.params;

    return (
        <View style={styles.MainContainer}>
            <TopBarLogoComponent />
            <SearchBarComponent />

            <MainWeatherCardComponent
                city={route.name}
                country={route.sys.country}
                temperature={route.main.temp}
            />
            <View style={styles.weatherCardGrid}>
                <DetailWeatherCardsComponent
                    weatherDetailName={"Pressure"}
                    weatherDetails={route.main.pressure}
                />
                <DetailWeatherCardsComponent
                    weatherDetailName={"Humidity"}
                    weatherDetails={route.main.humidity}
                />
                <DetailWeatherCardsComponent
                    weatherDetailName={"Visibility"}
                    weatherDetails={route.main.humidity}
                />
                <SplitDetailWeatherCardsComponent
                    weatherDetailName={"Sunrise"}
                    weatherDetails={route.main.humidity}

                    secondWeatherDetailName={"Sunset"}
                    secondWeatherDetails={route.main.humidity}
                />
            </View>

        </View>
    )
}

/**
 * 
 * /**
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

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    weatherCardGrid: {

    }
})

export default DetailedWeatherScreen;