import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoveProduck from './LoveProduck';
import KeranjangProduck from '../components/KeranjangProduck';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 70},

        tabBarIcon: ({focused, size, color}) => {
          let iconImage: any;
          if (route.name === 'house') {
            iconImage = focused ? 'home' : 'home';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          } else if (route.name === 'Love') {
            iconImage = focused ? 'heart' : 'heart';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          } else if (route.name === 'Keranjang') {
            iconImage = focused ? 'cart' : 'cart';
            color = focused ? '#6C70EB' : 'gray';
            size = focused ? size + 12 : size + 5;
          }
          return <Icon name={iconImage} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="house" component={HomeScreen} />
      <Tab.Screen name="Love" component={LoveProduck} />
      <Tab.Screen name="Keranjang" component={KeranjangProduck} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
