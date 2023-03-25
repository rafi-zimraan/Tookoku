import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Hitam, Primary, Putih} from '../utils/Color';
import FotoProduck from './FotoProduck';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const ComponentHomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollToOverflowEnabled={false}>
      <View style={styles.ContainerHome}>
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
        </View>
        <View style={styles.Makiko}>
          <Icon name="magnify" size={46} color={Hitam} style={styles.Icon} />
          <TextInput
            placeholder="Search for tshirts, jeans, shorts, jackets"
            style={styles.Search}
          />
        </View>
        <FotoProduck />
        <View style={styles.TxtStatement}>
          <Text style={styles.Statement1}>Recommended</Text>
          <Text style={styles.Statement2}>See all</Text>
        </View>
        <View style={styles.ContainerNavbar}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/orang1.png')} />
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
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/celana.png')} />
              <TouchableOpacity>
                <Icon
                  name="heart"
                  size={20}
                  color={Primary}
                  style={styles.iconLove}
                />
              </TouchableOpacity>
              <Text style={styles.txt1}>FILA Men’s shorts</Text>
              <Text style={styles.txt}>Rs. 3,499</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContainerNavbar}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/orang1.png')} />
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
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/celana.png')} />
              <TouchableOpacity>
                <Icon
                  name="heart"
                  size={20}
                  color={Primary}
                  style={styles.iconLove}
                />
              </TouchableOpacity>
              <Text style={styles.txt1}>FILA Men’s shorts</Text>
              <Text style={styles.txt}>Rs. 3,499</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContainerNavbar}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/orang1.png')} />
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
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Image source={require('../assets/image/celana.png')} />
              <TouchableOpacity>
                <Icon
                  name="heart"
                  size={20}
                  color={Primary}
                  style={styles.iconLove}
                />
              </TouchableOpacity>
              <Text style={styles.txt1}>FILA Men’s shorts</Text>
              <Text style={styles.txt}>Rs. 3,499</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ComponentHomeScreen;

const styles = StyleSheet.create({
  ContainerHome: {
    flex: 1,
    backgroundColor: Putih,
  },
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
    marginHorizontal: 24,
    marginVertical: 85,
    justifyContent: 'center',
    backgroundColor: '#d2d5d8',
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
  TxtStatement: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 430,
  },
  Statement1: {
    fontFamily: 'Poppins-Medium',
    color: Hitam,
    fontSize: 20,
    left: 29,
  },
  Statement2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
    left: 190,
  },
  Buttom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    margin: 28,
  },
  ButtomNav: {
    backgroundColor: Putih,
  },
  ContainerNavbar: {
    flexDirection: 'row',
    height: 350,
    top: 130,
  },
  container: {
    flexDirection: 'column',
    left: 30,
    // marginVertical: 20,
  },
  iconLove: {
    borderRadius: 20,
    backgroundColor: Putih,
    padding: 4.5,
    height: 28.5,
    width: 28.5,
    left: 140,
    top: -170,
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
