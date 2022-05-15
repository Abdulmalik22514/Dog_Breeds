import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllBreeds from '../screens/AllBreeds';
import DogDetails from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackBreeds" component={AllBreeds} />
      <Stack.Screen name="DogDetails" component={DogDetails} />
    </Stack.Navigator>
  );
}

export default MyStack;
