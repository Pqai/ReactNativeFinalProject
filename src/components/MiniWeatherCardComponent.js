import { TouchableOpacity } from "react-native";

const MiniWeatherCardComponent = (cityName, cityState, cityCountry, cityTemp, navigateToPage) => {

    return (
        <TouchableOpacity
            style={styles.miniWeatherCard}
            onPress={() => navigateToPage}
        >

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    miniWeatherCard: {
        margin: 20,

    }
})

export default MiniWeatherCardComponent;