import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AbuAbu, Hitam, Primary, Putih} from '../utils/Color';

export default function ComponentHomeScreenFull() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <View style={styles.ContainerIcon}>
        <View style={styles.IconNavbar}>
          <TouchableOpacity>
            <Icon name="menu" size={36} color={Hitam} />
          </TouchableOpacity>
        </View>
        <View style={styles.IconNavbar2}>
          <Text style={styles.TxtIcon}>Tookoku</Text>
        </View>
        <View style={styles.IconNavbar3}>
          <TouchableOpacity>
            <Icon name="bell-badge-outline" size={36} color={Primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.Makiko}>
          <Icon name="magnify" size={46} color={Hitam} style={styles.Icon} />
          <TextInput
            placeholder="Search for tshirts, jeans, shorts, jackets"
            style={styles.Search}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Image
              source={require('../assets/image/orang1.png')}
              style={styles.Img}
            />
            <TouchableOpacity>
              <Icon
                name="heart"
                size={20}
                color={Primary}
                style={styles.iconLove}
              />
            </TouchableOpacity>
            <Text style={styles.txt1}>Olive Zip-Front Jacket</Text>
            <Text style={styles.txt}>Rs. 3,499</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Image
              source={require('../assets/image/orang1.png')}
              style={styles.Img2}
            />
            <TouchableOpacity>
              <Icon
                name="heart"
                size={20}
                color={Primary}
                style={styles.iconLove2}
              />
            </TouchableOpacity>
            <Text style={styles.txt1}>Olive Zip-Front Jacket</Text>
            <Text style={styles.txt}>Rs. 3,499</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    right: 46,
    top: -14,
  },
  TxtIcon: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: Hitam,
  },
  IconNavbar3: {
    left: 52,
    top: 5,
  },
  Makiko: {
    position: 'absolute',
    flexDirection: 'row',
    marginHorizontal: -154,
    marginVertical: 85,
    justifyContent: 'center',
    backgroundColor: AbuAbu,
    borderRadius: 15,
    width: 380,
    height: 70,
  },
  Icon: {
    top: 10,
  },
  Search: {
    marginHorizontal: 10,
    borderRadius: 20,
  },
  container: {
    position: 'absolute',
    marginTop: 170,
    marginHorizontal: -120,
  },
  Img: {
    width: 399,
    height: 390,
    right: 41,
  },
  Img2: {
    width: 399,
    height: 390,
    right: 41,
    top: 40,
  },
  iconLove: {
    borderRadius: 20,
    padding: 4.5,
    top: -350,
    left: 280,
    height: 28.5,
    width: 28.5,
    backgroundColor: Putih,
  },
  iconLove2: {
    borderRadius: 20,
    padding: 4.5,
    top: -310,
    left: 280,
    height: 28.5,
    width: 28.5,
    backgroundColor: Putih,
  },
  txt: {
    color: 'black',
    left: 10,
    top: 32,
  },
  txt1: {
    fontFamily: 'Poppins-SemiBold',
    marginVertical: -30,
    color: 'black',
    fontSize: 16,
    left: 10,
  },
});
