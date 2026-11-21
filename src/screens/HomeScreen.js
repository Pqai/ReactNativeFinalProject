import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
import SearchBarComponent from '../components/SearchBarComponent';

const HomeScreen = ({ navigation }) => {

    const [yourCity, setCity] = useState("")
    const [measurementSystem, setMeasurementSystem] = useState(true)

    function setMeasurementSystems(celsOrFaren) {
        return celsOrFaren ? "Metric" : "Imperial"
    }

    const getApiData = async (term) => {
        try {
            const responese = await WeatherLayer.get("/search", {

                params: {

                }
            })
        }
        catch (error) {

        }
    }
    //https://api.openweathermap.org/data/2.5/weather?lat=51.0501&lon=-114.0853&appid={API key}
    return (
        <View style={styles.MainContainer}>
            <TopBarLogoComponent />

            <SearchBarComponent />

            <View style={styles.HeaderContainer}>
                <Text style={styles.HeaderText}>Your Weather</Text>
                <View style={styles.DashLine}>{/**Dash Line that act slik an underline for the header*/}</View>
            </View>

            <TouchableOpacity onPress={navigation.navigate("DetailedWeather")}> {/**Fix this later */}
                <MainWeatherCardComponent
                    city={yourCity.city}
                    country={yourCity.sys.country}
                    temperature={yourCity.main.temp}
                //measurementSystem={ }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    HeaderText: {

    },
    HeaderContainer: {

    },
    DashLine: {
        backgroundColor: "#000000"

    },
    EmptyBlock: {

    }
})

export default HomeScreen;