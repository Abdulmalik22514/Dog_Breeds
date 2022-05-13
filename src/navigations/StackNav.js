// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllBreeds from '../screens/AllBreeds';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AllBreeds" component={AllBreeds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
