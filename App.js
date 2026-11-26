import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailedWeatherScreen from './src/screens/DetailedWeatherScreen';
import { useMeasurementSystemContext } from './src/hooks/useMeasurementSystem';

const Stack = createNativeStackNavigator();

const navigator = () => {

  const [measurementSystem, setMeasurementSystem] = useState(null);

  return (
    <useMeasurementSystemContext.Provider value={{ measurementSystem: measurementSystem, setMeasurementSystem: setMeasurementSystem }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen
            name='Search'
            component={SearchScreen}
          />
          <Stack.Screen
            name='DetailedWeather'
            component={DetailedWeatherScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </useMeasurementSystemContext.Provider>
  )
}

export default navigator;