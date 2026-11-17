import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';

const DetailedWeatherScreen = () => {

    return (
        <View>
            <SearchBarComponent />

            <MainWeatherCardComponent />


        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    }
})

export default DetailedWeatherScreen;