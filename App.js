import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailedWeatherScreen from './src/screens/DetailedWeatherScreen';
import { useMeasurementSystemContext } from './src/hooks/useMeasurementSystem';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const navigator = () => {

  return (
    <MeasurementSystemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
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
    </MeasurementSystemProvider>
  )
}

export default navigator;