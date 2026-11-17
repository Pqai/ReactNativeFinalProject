import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {

    const [yourCity, setCity] = useState("")
    const [measurementSystem, setMeasurementSystem] = useState("Metric")

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
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    }
})

export default HomeScreen;