import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Hitam, Primary, Putih} from '../utils/Color';

const ComponentProduckPageDetailed = () => {
  return (
    <View>
      <View style={styles.Container}>
        <TouchableOpacity>
          <Icon name="keyboard-backspace" size={30} color={Hitam} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cart-outline" size={30} color={Hitam} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('../assets/image/Model2.png')}
          style={styles.img}
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
      <View style={styles.txt}>
        <Text>
          Trendy, youthful and innovative are what you can expect from the smart
          fashion for men, women and children from United Colors of Benetton.
          Cool track pants, stylish T-shirts, colourful backpacks, floral print
          trousers, canvas boat shoes – browse through the brand’s collection on
          AJIO to explore the latest in high street fashion.
        </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.ContentBottom}>
          <Text style={styles.txtBottom}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ComponentProduckPageDetailed;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  img: {
    width: 400,
    height: 410,
    left: 16,
    top: 10,
  },
  ContentProduck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 39,
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
    fontSize: 18,
    top: 37,
    left: 20,
  },
  ImgBintang: {
    height: 18,
    right: 20,
  },
  txt: {
    color: Hitam,
    top: 60,
    left: 9,
  },
  ContentBottom: {
    backgroundColor: Primary,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    top: 79,
  },
  txtBottom: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: Putih,
  },
});
