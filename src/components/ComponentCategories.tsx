import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BiruMuda, Hitam, Primary, Putih} from '../utils/Color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';

const ComponentCategories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <ScrollView>
      <View>
        <View style={styles.Container}>
          <View style={styles.IconNavbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Produck')}>
              <Icon name="keyboard-backspace" size={36} color={Hitam} />
            </TouchableOpacity>
          </View>
          <View style={styles.IconNavbar2}>
            <Text style={styles.TxtIcon}>Categories</Text>
          </View>
          <View style={styles.IconNavbar3}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PageProduck')}>
              <Icon name="magnify" size={46} color={Primary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.txtCategories}>
          <Text style={styles.txt1}>Men</Text>
          <Text style={styles.txt1}>Women</Text>
          <Text style={styles.txt1}>kids</Text>
        </View>
        <View style={styles.ContentCategories}>
          <Text style={styles.txtContent}>SEASON SALE</Text>
          <Text style={styles.txtContent2}>UP TO 25% OFF</Text>
          <Text style={styles.txtContent3}>Terms & Conditions apply*</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/kaos.png')}
                  style={styles.ImgCategories}
                />
                <Text>Tshirt</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ProduckCategoris}>
                <Image
                  source={require('../assets/image/rok.png')}
                  style={styles.ImgCategories}
                />
                <Text>Shorts</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ComponentCategories;

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconNavbar: {
    left: 25,
    top: 15,
  },
  IconNavbar2: {
    justifyContent: 'center',
    left: 120,
    top: 15,
  },
  TxtIcon: {
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
    color: Hitam,
  },
  IconNavbar3: {
    left: 190,
    top: 15,
  },
  txtCategories: {
    flexDirection: 'row',
    marginTop: 83,
    justifyContent: 'space-around',
  },
  txt1: {
    color: Hitam,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  ContentCategories: {
    backgroundColor: Primary,
    marginHorizontal: 18,
    marginVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    height: 134,
  },
  txtContent: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: Putih,
    left: 30,
  },
  txtContent2: {
    fontSize: 18,
    color: BiruMuda,
    left: 32,
    top: -10,
    fontFamily: 'Poppins-Bold',
  },
  txtContent3: {
    fontSize: 12,
    color: Putih,
    left: 32,
    top: 3,
    fontFamily: 'Poppins-reguler',
  },
  ProduckCategoris: {
    backgroundColor: Putih,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 14,
    borderRadius: 20,
    elevation: 15,
    height: 150,
    right: 38,
    width: 180,
    left: 10,
    margin: 10,
  },
  ImgCategories: {
    height: 30,
    width: 30,
    color: Primary,
  },
});
