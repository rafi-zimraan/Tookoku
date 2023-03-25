import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Hitam, Primary, Putih} from '../utils/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

export default function ComponentCheckoutScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <View style={styles.ContainerIcon}>
        <View style={styles.IconNavbar}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={36} color={Hitam} />
          </TouchableOpacity>
        </View>
        <View style={styles.IconNavbar2}>
          <Text style={styles.TxtIcon}>Cart</Text>
        </View>
        <View style={styles.IconNavbar3}>
          <Icon name="magnify" size={36} color={Hitam} />
        </View>
      </View>
      <View>
        <View style={styles.ContentLove}>
          <Image
            source={require('../assets/image/orang1.png')}
            style={styles.img}
          />
          <Text style={styles.txtLove}>Olive Zip-Front Jacket</Text>
          <Text style={styles.txtLove2}>Rs. 3,499</Text>
          <Text style={styles.txtLove3}>4.5/5</Text>
          <Image
            source={require('../assets/image/Bintang.png')}
            style={styles.txtLove4}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/image/Vector.png')}
              style={styles.txtLove5}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ContentLove2}>
          <Image
            source={require('../assets/image/Kacamata.png')}
            style={styles.img}
          />
          <Text style={styles.txtLove}>Olive Zip-Front Jacket</Text>
          <Text style={styles.txtLove2}>Rs. 3,499</Text>
          <Text style={styles.txtLove3}>4.5/5</Text>
          <Image
            source={require('../assets/image/Bintang.png')}
            style={styles.txtLove4}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/image/Vector.png')}
              style={styles.txtLove5}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ContentLove3}>
          <Image
            source={require('../assets/image/celana.png')}
            style={styles.img}
          />
          <Text style={styles.txtLove}>Olive Zip-Front Jacket</Text>
          <Text style={styles.txtLove2}>Rs. 3,499</Text>
          <Text style={styles.txtLove3}>4.5/5</Text>
          <Image
            source={require('../assets/image/Bintang.png')}
            style={styles.txtLove4}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/image/Vector.png')}
              style={styles.txtLove5}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.txtHarga}>
          <Text style={styles.harga1}>Subtotal:</Text>
          <Text style={styles.harga1}>Rs. 6,027.00</Text>
        </View>
        <View style={styles.txtHarga}>
          <Text style={styles.harga1}>Shipping:</Text>
          <Text style={styles.harga1}>Rs. 100.00</Text>
        </View>
        <View style={styles.txtHargaEnd}>
          <Text style={styles.txtEnd}>Total Price:</Text>
          <Text style={styles.txtEndCenter}>(3 items)</Text>
          <Text style={styles.txtEnd}>Rs. 6,127.00</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.ContentBottom}>
          <Text style={styles.txtBottom}>Checkout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerIcon: {
    position: 'absolute',
    flexDirection: 'row',
    marginHorizontal: 180,
    marginVertical: 15,
  },
  IconNavbar: {
    right: 165,
    top: 5,
  },
  IconNavbar2: {
    justifyContent: 'center',
    right: 27,
    top: 5,
  },
  TxtIcon: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: Hitam,
  },
  IconNavbar3: {
    left: 110,
    top: 5,
  },
  ContentLove: {
    backgroundColor: Putih,
    marginVertical: 100,
    borderRadius: 18,
    elevation: 8,
    width: 397,
    height: 133,
    left: 20,
  },
  img: {
    borderRadius: 10,
    height: 130,
    width: 130,
    left: 14,
    top: 4,
  },
  txtLove: {
    fontFamily: 'Poppins-Medium',
    color: Hitam,
    fontSize: 16,
    bottom: 117,
    left: 150,
  },
  txtLove2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13.5,
    bottom: 119,
    left: 150,
  },
  txtLove3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13.5,
    bottom: 70,
    left: 150,
    color: Primary,
  },
  txtLove4: {
    bottom: 95,
    left: 190,
  },
  txtLove5: {
    bottom: 209,
    left: 355,
  },
  ContentLove2: {
    backgroundColor: Putih,
    borderRadius: 18,
    bottom: 83,
    elevation: 8,
    width: 397,
    height: 133,
    left: 20,
  },
  ContentLove3: {
    backgroundColor: Putih,
    borderRadius: 18,
    bottom: 67,
    elevation: 8,
    width: 397,
    height: 133,
    left: 20,
  },
  txtHarga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    top: -40,
    margin: 7,
  },
  harga1: {
    fontSize: 15,
  },
  txtHargaEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    top: -34,
  },
  txtEnd: {
    color: Hitam,
    fontSize: 19,
    fontWeight: '800',
  },
  txtEndCenter: {
    fontSize: 14,
    fontWeight: '800',
    left: 57,
    bottom: -3,
  },
  ContentBottom: {
    backgroundColor: Primary,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 68,
    bottom: 25,
  },
  txtBottom: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    fontWeight: '600',
    color: Putih,
  },
});
