import { TouchableOpacity } from "react-native";

//A smaller version of the main weather card meant for being displayed in the Flatlist when searching on the search screen
const MiniWeatherCardComponent = (city, country, temperature, measurementSystem, changeMeasurements, image_url, navigateToPage) => {

    return (
        <View style={styles.miniWeatherCard}>
            <View style={styles.textInformationSide}>
                <Text style={styles.cityNameText}>{city}</Text>
                <Text style={styles.countryNameText}>{country}</Text>

                <Text style={styles.temperatureText}>{temperature}</Text>
            </View>

            <View style={styles.weatherIconSide}>
                <Image style={styles.weatherIcon}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    miniWeatherCard: {
        padding: 5,

    },
    textInformationSide: {

    },
    weatherIconSide: {

    },
    temperatureText: {

    },
    cityNameText: {

    },
    countryNameText: {

    },
    weatherIcon: {
        width: 5,
        height: 5,
    }
})

export default MiniWeatherCardComponent;