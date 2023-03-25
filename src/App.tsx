import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabScreen from './screens/BottomTabScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import HomeScreenFull from './screens/HomeScreenFull';
import ProduckPageScreen from './screens/ProduckPageScreen';
import ProduckPageDetailed from './screens/ProduckPageDetailed';
import LoveProduck from './screens/LoveProduck';
import ComponentProduckPageScreen from './components/ComponentProduckPageScreen';
import ComponentProduckPageDetailed from './components/ComponentProduckPageDetailed';
import ComponentLoveProduck from './components/ComponentLoveProduck';
import CheckOutscreen from './screens/CheckOutscreen';
import ComponentCheckoutScreen from './components/ComponentCheckoutScreen';

export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Bottom: undefined;
  Produck: undefined;
  Categories: undefined;
  PageProduck: undefined;
  PageProduckDetailed: undefined;
  CheackOut: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  // return <CheckOutscreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Produck"
          component={HomeScreenFull}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PageProduck"
          component={ProduckPageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PageProduckDetailed"
          component={ComponentProduckPageDetailed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheackOut"
          component={ComponentCheckoutScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
