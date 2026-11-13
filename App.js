import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailedWeatherScreen from './src/screens/DetailedWeatherScreen';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
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
  )
}

export default navigator;