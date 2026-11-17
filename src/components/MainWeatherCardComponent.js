import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainWeatherCardComponent = (city, country, temperature, measurementSystem) => {

    //put this in a touchableopacity on the home screen.
    return (
        <View style={styles.container}>
            <View style={styles.textInformationSide}>
                <Text>{city}</Text>
                <Text>{country}</Text>

                <Text>{temperature}</Text>

                <TouchableOpacity>
                    <Text>{measurementSystem}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.weatherIcon}>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textInformationSide: {

    },
    weatherIcon: {

    }
})

export default MainWeatherCardComponent;