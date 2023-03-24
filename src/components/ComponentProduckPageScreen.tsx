import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParams} from '../App';
import {Hitam, Primary, Putih} from '../utils/Color';

const ComponentProduckPageScreen = () => {
  const navigaton = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.ContainerNavbar}>
      <View style={styles.Container}>
        <TouchableOpacity onPress={() => navigaton.navigate('Categories')}>
          <Icon name="keyboard-backspace" size={30} color={Hitam} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cart-outline" size={30} color={Hitam} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/image/Model.png')}
          style={styles.Model}
        />
      </View>
      <View>
        <View style={styles.ContentProduck}>
          <Text style={styles.txt1}>Black Zipper</Text>
          <Text style={styles.txt2}>4.0/5</Text>
          <Image
            source={require('../assets/image/Bintang.png')}
            style={styles.ImgBintang}
          />
        </View>
        <Text style={styles.txt3}>Rs. 1,299</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.ContentBottom}>
          <Text style={styles.txtBottom}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ComponentProduckPageScreen;

const styles = StyleSheet.create({
  ContainerNavbar: {
    backgroundColor: Putih,
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  Model: {
    left: 29,
    height: 580,
    width: 385,
    right: 20,
  },
  ContentProduck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
  },
  txt1: {
    fontFamily: 'Poppins-Bold',
    color: Hitam,
    fontSize: 18,
    left: 20,
  },
  txt2: {
    color: Primary,
    fontSize: 16,
    left: 109,
  },
  txt3: {
    fontSize: 16,
    top: 4,
    left: 20,
  },
  ImgBintang: {
    height: 18,
    right: 20,
  },
  ContentBottom: {
    backgroundColor: Primary,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    top: 20,
  },
  txtBottom: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: Putih,
  },
});
