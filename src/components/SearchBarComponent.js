import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import BackButtonComponent from "./BackButtonComponent";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const SearchBarComponent = ({ term, onChangeTerm, searchCity, navigation }) => {

    return (
        <View style={styles.container}>
            <BackButtonComponent />

            <TextInput
                style={styles.searchBar}
                placeholder="Enter location"
                value={term}
                onChangeText={onChangeTerm}
                onPress={() => navigation.navigate("Search")}
            />

            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={searchCity}>
                <FontAwesome5 name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#a47ea2"
    },
    searchBar: {
        fontSize: 40,
        fontWeight: "bold"
    },
    backButtonContainer: {

    }
})

export default SearchBarComponent;