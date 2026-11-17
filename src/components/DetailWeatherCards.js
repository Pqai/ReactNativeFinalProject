import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const DetailWeatherCardsComponent = (weatherDetailName, weatherDetails) => {

    //put this in a touchableopacity on the home screen.
    return (
        <View style={styles.container}>
            <Text>{weatherDetailName}</Text>
            <Text>{weatherDetails}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textInformation: {

    }
})

export default DetailWeatherCardsComponent;