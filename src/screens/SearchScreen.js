import React, { useReducer, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';
import WeatherLayer from '../api/WeatherLayer';
const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [city, setCity] = useState("");

    const getApiData = async (term) => {
        try {
            const response = await WeatherLayer.get("/data/2.5/weather", {
                params: {
                    lat: 10,
                    lon: 10,
                    appid: example
                }
            }),
                settheCity(response.data.search);

            console.log("Search completed");

        } catch (error) {
            console.error("API error:", error);
        }
    }

    //To finally search a city
    useEffect(() => {
        axios.get('')
            .then(response => {
                setFilteredData(search)
            })
            .catch(error => {
                console.log(error);
            })
    })

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