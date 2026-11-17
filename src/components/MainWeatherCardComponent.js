import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainWeatherCardComponent = () => {

    //put this in a touchableopacity on the home screen.
    return (
        <View>
            <View>
                <Text>City</Text>
                <Text>Country</Text>

                <Text>Temperature</Text>

                <TouchableOpacity

                />
            </View>
            <View>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default MainWeatherCardComponent;