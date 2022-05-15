import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabItem from '../components/TabItems';
import Profile from '../screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './StackNav';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AllBreeds"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#E3E3E3',
            height: 60,
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
    </NavigationContainer>
  );
};

export default Tabs;
