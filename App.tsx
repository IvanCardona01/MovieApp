import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorScreens } from './src/navigation/NavigatorScreens';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorScreens/>
    </NavigationContainer>
  )
}

export default App;