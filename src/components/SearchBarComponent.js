import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import BackButtonComponent from "./BackButtonComponent";

const SearchBarComponent = ({ term, onChangeTerm, navigation }) => {

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    }

    return (
        <View>
            {<BackButtonComponent />}
            <TextInput
                style={styles.searchBar}
                placeholder="Enter location"
                value={search}
                onChangeText={handleSearch}
                onPress={navigation.navigate("Search")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    searchBar: {

    }
})

export default SearchBarComponent;