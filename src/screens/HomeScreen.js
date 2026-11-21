import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, } from 'react-native-safe-area-context';

import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
import SearchBarComponent from '../components/SearchBarComponent';


const HomeScreen = ({ navigation }) => {

    const [yourCity, setYourCity] = useState("")
    const [measurementSystem, setMeasurementSystem] = useState(true)

    function setMeasurementSystems(celsOrFaren) {
        return celsOrFaren ? "Metric" : "Imperial"
    }

    function changeMeasurements() {
        setMeasurementSystem(previousState => !previousState);
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
                <View style={styles.TheMainDeco}>
                    <Text style={styles.HeaderText}>Your Weather</Text>
                    <View style={styles.DashLine}>{/**Dash Line that act slik an underline for the header*/}</View>
                </View>

                <View style={styles.EmptyBlock}>{/** Empty Block to allow open styling needed in the wireframe*/}</View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("DetailedWeather")}> {/**Fix this later */}
                <MainWeatherCardComponent
                    city={yourCity.name}
                    country={yourCity.sys.country}
                    temperature={yourCity.main.temp}
                    measurementSystem={measurementSystem}
                    changeMeasurements={changeMeasurements}
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