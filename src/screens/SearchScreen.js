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

    const getApiData = async () => {

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
                            city={item.name}
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