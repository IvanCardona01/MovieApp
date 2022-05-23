import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MovieDetailsScreen } from '../screens/MovieDetailsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Movie } from '../model/Movie';

export type RootStackParams = {
    HomeScreen: undefined;
    MovieDetailsScreen: Movie
}

export const NavigatorScreens = () => {
    const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Stack.Screen name='HomeScreen' component={ HomeScreen }/>
        <Stack.Screen name='MovieDetailsScreen' component={ MovieDetailsScreen }/>
    </Stack.Navigator>
  )
}
