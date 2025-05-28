import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Telas normais
import ProfileScreen from '../telas/ProfileScreen';
import HomeScreen from '../telas/HomeScreen';
import ShopScreen from '../telas/ShopScreen';
import CarrinhoScreen from '../telas/CarrinhoScreen';

// Importa o BottomTabNavigator no lugar do Settings direto
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Main"
        component={HomeScreen}
        options={{ title: 'Principal' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Perfil' }}
      />
      <Drawer.Screen
        name="Settings"
        component={BottomTabNavigator}
        options={{ title: 'Configurações' }}
      />
      <Drawer.Screen
        name="Shop"
        component={ShopScreen}
        options={{ title: 'Loja' }}
      />
      <Drawer.Screen
        name="Carrinho"
        component={CarrinhoScreen}
        options={{ title: 'Carrinho' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
