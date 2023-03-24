import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Primary, Putih} from '../utils/Color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParams} from '../App';

export default function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text style={styles.ContainerTxtSplash}>TOOKOKU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Primary,
  },
  ContainerTxtSplash: {
    fontSize: 42,
    fontWeight: '900',
    color: Putih,
  },
});
