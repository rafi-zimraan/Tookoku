import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Biru, Hitam, Primary, Putih} from '../utils/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContentProduck = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollToOverflowEnabled={false}>
      <View style={styles.ContainerNavbar}>
        <View style={styles.container}>
          <TouchableOpacity>
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
          <TouchableOpacity>
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
    </ScrollView>
  );
};

export default ContentProduck;

const styles = StyleSheet.create({
  ContainerNavbar: {
    flexDirection: 'row',
    height: 350,
    top: 120,
  },
  container: {
    flexDirection: 'column',
    marginTop: -20,
    left: 30,
  },
  iconLove: {
    borderRadius: 20,
    padding: 4.5,
    top: -170,
    left: 140,
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
