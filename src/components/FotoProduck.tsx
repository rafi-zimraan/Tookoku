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

const FotoProduck = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginTop: -60, top: 50}}>
      <TouchableOpacity>
        <View style={styles.Container}>
          <Image
            style={styles.Foto}
            source={require('../assets/image/woman.png')}
          />
          <Text style={styles.txtMen}>woman</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.ContainerMen}>
          <Image
            style={styles.Foto}
            source={require('../assets/image/men.png')}
          />
          <Text style={styles.txtMen}>woman</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.Container}>
          <Image
            style={styles.Foto}
            source={require('../assets/image/woman.png')}
          />
          <Text style={styles.txtMen}>woman</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.ContainerMen}>
          <Image
            style={styles.Foto}
            source={require('../assets/image/men.png')}
          />
          <Text style={styles.txtMen}>woman</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FotoProduck;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Primary,
    borderRadius: 16,
    elevation: 20,
    marginTop: 200,
    left: 10,
    width: 309,
    height: 186,
    margin: 10,
  },
  ContainerMen: {
    backgroundColor: '#7BCFFF',
    borderRadius: 16,
    marginTop: 200,
    elevation: 20,
    left: 10,
    width: 309,
    height: 186,
    margin: 10,
  },
  Foto: {
    width: 150,
    height: 220,
    bottom: 35,
    left: 150,
  },
  txtMen: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    bottom: 200,
    left: 30,
  },
});
