import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

//The Big weather card displayed on the home menu and detailed weather screen
const MainWeatherCardComponent = (city, country, temperature, measurementSystem, changeMeasurements, image_url) => {

    //put this in a touchableopacity on the home screen.
    return (
        <View style={styles.container}>
            <View style={styles.innerInformationContainer}>

                <View style={styles.textInformationSide}>
                    <Text style={styles.cityName}>{city}</Text>
                    <Text style={styles.countryName}>{country}</Text>

                    <Text style={styles.temperatureInfo}>{temperature}</Text>

                    <TouchableOpacity
                        style={styles.switchMeasurementsButton}
                        onPress={changeMeasurements}
                    >
                        <Text style={styles.measurementSystemText}>{measurementSystem}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.weatherIconSide}>
                    <Image
                        style={styles.weatherIcon}
                        source={{ uri: image_url }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //margin: 20,
        flexDirection: "row",
        padding: 10,
        height: "100%",
        width: "100%"
    },
    textInformationSide: {
        flex: 2.5,
        flexDirection: "column",
        justifyContent: "center",
    },
    weatherIconSide: {
        flex: 1.5,
        alignItems: "center"
    },
    weatherIcon: {
        width: 5,
        height: 5,
    },
    cityName: {
        fontSize: 25,
    },
    countryName: {
        fontSize: 20,

    },
    temperatureInfo: {
        fontSize: 40,

    },
    switchMeasurementsButton: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#000000"
    },
    measurementSystemText: {
        fontSize: 10
    },
    innerInformationContainer: {
        paddingVertical: 15,
        paddingHorizontal: 5
    }
})

export default MainWeatherCardComponent;