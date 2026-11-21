import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

//Reusable cards to store other weather data on the WeatherDeatils screen such as humidity or visibility
const DetailWeatherCardsComponent = (weatherDetailName, weatherDetails) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textInformation}>{weatherDetailName}</Text>
                <Text style={styles.textInformationData}>{weatherDetails}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
    },
    textContainer: {
        marginHorizontal: 2,
        marginVertical: 5,
    },
    textInformation: {

    },
    textInformationData: {

    }
})

export default DetailWeatherCardsComponent;