import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AbuAbu, Hitam, Primary, Putih} from '../utils/Color';

const ComponentLoveProduck = () => {
  return (
    <View>
      <View style={styles.ContainerIcon}>
        <View style={styles.IconNavbar}>
          <TouchableOpacity>
            <Icon name="menu" size={36} color={Hitam} />
          </TouchableOpacity>
        </View>
        <View style={styles.IconNavbar2}>
          <Text style={styles.TxtIcon}>Favourites</Text>
        </View>
        <View style={styles.IconNavbar3}>
          <TouchableOpacity>
            <Icon name="magnify" size={36} color={Hitam} />
          </TouchableOpacity>
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
            source={require('../assets/image/orangJaket.jpg')}
            style={styles.img}
          />
          <Text style={styles.txtLove}>Black Zipper</Text>
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
          <Text style={styles.txtLove}>FILA Men’s Grey Shorts</Text>
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
      <View style={styles.Perintah}>
        <View style={styles.garis} />
        <Text style={styles.txtPerintah}>Add more to the list</Text>
        <View style={styles.garis2} />
      </View>
      <View style={styles.Bottom}>
        <Image
          source={require('../assets/image/Kacamata.png')}
          style={styles.BottomLove}
        />
        <Image
          source={require('../assets/image/stell.png')}
          style={styles.BottomLove2}
        />
        <TouchableOpacity>
          <Icon
            name="heart"
            size={20}
            color={Primary}
            style={styles.iconLove}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="heart"
            size={20}
            color={Primary}
            style={styles.iconLove2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComponentLoveProduck;

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
    right: 47,
    top: -10,
  },
  TxtIcon: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: Hitam,
  },
  IconNavbar3: {
    left: 42,
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
    marginVertical: 100,
    borderRadius: 18,
    elevation: 8,
    width: 397,
    height: 139,
    bottom: 189,
    left: 20,
  },
  ContentLove3: {
    backgroundColor: Putih,
    borderRadius: 18,
    elevation: 8,
    width: 397,
    height: 139,
    bottom: 279,
    left: 20,
  },
  Perintah: {
    position: 'absolute',
    top: 628,
  },
  garis: {
    backgroundColor: AbuAbu,
    borderWitdh: 1.5,
    left: 50,
    width: 40,
    height: 2,
    bottom: 62,
  },
  txtPerintah: {
    marginHorizontal: 110,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: -79,
    color: Hitam,
    fontSize: 21,
  },
  garis2: {
    backgroundColor: AbuAbu,
    borderWitdh: 1.5,
    left: 345,
    width: 40,
    height: 2,
    bottom: -59,
  },
  Bottom: {
    position: 'absolute',
    left: 18,
  },
  BottomLove: {
    position: 'absolute',
    marginVertical: 588,
    borderRadius: 10,
    width: 200,
  },
  BottomLove2: {
    position: 'absolute',
    marginVertical: 588,
    borderRadius: 10,
    width: 200,
    left: 209,
  },
  iconLove: {
    backgroundColor: Putih,
    borderRadius: 20,
    padding: 4.5,
    top: 599,
    left: 150,
    height: 28.5,
    width: 28.5,
  },
  iconLove2: {
    backgroundColor: Putih,
    borderRadius: 20,
    padding: 4.5,
    top: 576,
    left: 360,
    height: 28.5,
    width: 28.5,
  },
});
