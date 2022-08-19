import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabItem from '../components/TabItems';
import Profile from '../screens/Profile';
import AllBreeds from '../screens/AllBreeds';
import DogDetails from '../screens/DetailsScreen';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StackBreeds" component={AllBreeds} />
      <Stack.Screen name="DogDetails" component={DogDetails} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllBreeds"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#E3E3E3',
          height: Platform.OS === 'android' ? 60 : 80,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="AllBreeds"
        component={MyStack}
        options={{
          tabBarIcon: ({focused}) => {
            return <TabItem focused={focused} icon="folder" label={'Home'} />;
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabItem focused={focused} icon="person" label={'Profile'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
