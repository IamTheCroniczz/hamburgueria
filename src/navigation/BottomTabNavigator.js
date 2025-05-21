import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreen from '../telas/DetailsScreen';
import SettingsScreen from '../telas/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Detalhes" component={DetailsScreen} />
      <Tab.Screen name="Config" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
