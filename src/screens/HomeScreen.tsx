import {useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../App';
import ComponentCategories from '../components/ComponentCategories';
import ComponentCheckoutScreen from '../components/ComponentCheckoutScreen';
import ComponentHomeScreen from '../components/ComponentHomeScreen';
import ComponentHomeScreenFull from '../components/ComponentHomeScreenFull';
import ComponentProduckPageDetailed from '../components/ComponentProduckPageDetailed';
import ComponentProduckPageScreen from '../components/ComponentProduckPageScreen';

const HomeScreenComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const Stack = createNativeStackNavigator<RootStackParams>();
  function Home() {
    return <ComponentHomeScreen />;
  }
  function HomeScreen() {
    return <ComponentHomeScreenFull />;
  }
  function Categories() {
    return <ComponentCategories />;
  }
  function ProduckPage() {
    return <ComponentProduckPageScreen />;
  }
  function ProduckPageDetailed() {
    return <ComponentProduckPageDetailed />;
  }
  function CheackOut() {
    return <ComponentCheckoutScreen />;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ComponentHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Produck"
        component={ComponentHomeScreenFull}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Categories"
        component={ComponentCategories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageProduck"
        component={ComponentProduckPageScreen}
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
  );
};

export default HomeScreenComponent;
