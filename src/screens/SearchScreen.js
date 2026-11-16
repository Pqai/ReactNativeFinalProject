import React, { useReducer, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';
import axios from 'axios';

const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

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