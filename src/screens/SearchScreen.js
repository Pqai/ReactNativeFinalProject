import React, { useReducer, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SearchBarComponent from '../components/SearchBarComponent';

const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    return (
        <View>
            <SearchBarComponent
                term={search}
                onChangeTerm={(newSearch) => {
                    setSearch(newSearch);
                }}
            />

            <FlatList

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