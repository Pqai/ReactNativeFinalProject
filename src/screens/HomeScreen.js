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

    return (
        <View style={styles.MainContainer}>
            <Image />

            <SearchBarComponent />

            <Text>Your Weather</Text>
            <View>{/**Dash Line */}</View>

            <TouchableOpacity onPress={navigation.navigate("DetailedWeather")}> {/**Fix this later */}
                <MainWeatherCardComponent
                    //city={ }
                    country={sys.country}
                //temperature={ }
                //measurementSystem={ }
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    }
})

export default HomeScreen;