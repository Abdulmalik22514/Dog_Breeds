import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import Tabs from './TabNav';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const {authToken} = useSelector(state => state.authReducer);

  return (
    <NavigationContainer>
      {!authToken ? <AuthStack /> : <Tabs />}
    </NavigationContainer>
  );
};

export default RootNavigation;
