import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigator;