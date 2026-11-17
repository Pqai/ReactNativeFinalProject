import React, { useReducer, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';
import WeatherLayer from '../api/WeatherLayer';
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
        <View>
            <SearchBarComponent
                term={search}
                onChangeTerm={(newSearch) => {
                    setSearch(newSearch);
                }}
            />

            <FlatList
                data={await}
                keyExtractor={(k) => k.id}
                renderItem={({ item }) => (
                    <View>

                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    }
})

export default SearchScreen;