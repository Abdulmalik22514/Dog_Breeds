import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TabIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/colors';

const TabItem = ({focused, icon, label}) => {
  return (
    <View style={styles.tabContainer}>
      <TabIcon
        name={icon}
        size={23}
        color={focused ? COLORS.orange : COLORS.grey}
      />
      <Text
        style={[
          styles.tabIconLabel,
          {color: focused ? COLORS.orange : COLORS.grey},
        ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  tabIconLabel: {
    fontSize: 20,
  },
});

export default TabItem;
