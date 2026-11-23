import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const BackButtonComponent = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backButtonContainer: {
        margin: 5,
        width: 10,
        height: 10,
    }
})

export default BackButtonComponent;