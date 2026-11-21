import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
import DetailWeatherCardsComponent from '../components/DetailWeatherCardsComponent';

const DetailedWeatherScreen = () => {

    return (
        <View style={styles.MainContainer}>
            <TopBarLogoComponent />
            <SearchBarComponent />

            <MainWeatherCardComponent />
            <View style={styles.weatherCardGrid}>
                <DetailWeatherCardsComponent />
                <DetailWeatherCardsComponent />
                <DetailWeatherCardsComponent />
                <DetailWeatherCardsComponent />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    weatherCardGrid: {

    }
})

export default DetailedWeatherScreen;