import React, { useReducer, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, } from 'react-native-safe-area-context';

import SearchBarComponent from '../components/SearchBarComponent';
import MainWeatherCardComponent from '../components/MainWeatherCardComponent';
import DetailWeatherCardsComponent from '../components/DetailWeatherCardsComponent';


const DetailedWeatherScreen = () => {

    const route = useRoute();

    return (
        <View style={styles.MainContainer}>
            <TopBarLogoComponent />
            <SearchBarComponent />

            <MainWeatherCardComponent
                city={route.params.yourCity.city}
                country={route.params.yourCity.sys.country}
                temperature={route.params.yourCity.main.temp}
            />
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