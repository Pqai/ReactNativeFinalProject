import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const SearchBarComponent = () => {

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);


    const handleSearch = (text) => {
        sestSeatch(text);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
    }

    return (
        <View>
            <TextInput
                style={styles.searchBar}
                placeholder="Enter location"
                value={search}
                onChangeText={handleSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    searchBar: {

    }
})

export default SearchBarComponent;