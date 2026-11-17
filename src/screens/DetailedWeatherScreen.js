import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';

const DetailedWeatherScreen = () => {

    return (
        <View style={styles.MainContainer}>
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