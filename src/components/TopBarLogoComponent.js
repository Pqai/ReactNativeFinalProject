import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import BackButtonComponent from "./BackButtonComponent";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

//The dedicated row at the top of every screen to display a logo image
const TopBarLogoComponent = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.logoContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start"
    },
    logoContainer: {
        width: 5,
        height: 5,
    },
})

export default TopBarLogoComponent;