import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../App';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Biru, Hitam, Merah, Primary, Putih} from '../utils/Color';

const ComponentLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.containerLogin}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={styles.txtLogin}>
        <Text style={styles.txt}>T</Text>
      </View>
      <View style={styles.contentTxt}>
        <Text style={styles.txtOrder}>Login to Tookoku</Text>
      </View>
      <View style={styles.contentUsername}>
        <Fumi
          label={'Username'}
          iconClass={Icon}
          iconName={'account-circle-outline'}
          iconColor={'#f95a25'}
          iconSize={30}
          inputPadding={26}
        />
      </View>
      <View style={styles.contentPassword}>
        <Fumi
          label={'Password'}
          iconClass={Icon}
          iconName={'lock'}
          iconColor={'#f95a25'}
          iconSize={30}
          inputPadding={26}
        />
      </View>
      <View style={styles.contentTxt2}>
        <TouchableOpacity>
          <Text style={styles.txtOrder2}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Bottom')}>
        <View style={styles.ButtonLogin}>
          <View>
            <Text style={styles.ButtonTxt}>Login</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: 175,
          height: 1,
          borderWidth: 0.5,
          position: 'absolute',
          bottom: 65,
          left: 25,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          marginVertical: 630,
          marginHorizontal: 216,
        }}>
        Or
      </Text>
      <View
        style={{
          position: 'absolute',
          width: 175,
          height: 1,
          borderWidth: 0.5,
          bottom: 65,
          right: 65,
        }}
      />
      <View style={styles.ButtonIcon}>
        <TouchableOpacity>
          <View style={styles.Icon1}>
            <Icon name="facebook" size={46} color={Putih} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Icon2}>
            <Icon name="google-plus" size={49} color={Putih} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.Icon3}>
            <Icon name="apple" size={46} color={Putih} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtomTxtEnd}>
        <Text style={styles.TxtEnd}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.TxtEnd2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ComponentLogin;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItmes: 'center',
  },
  containerLogin: {
    flex: 1,
    position: 'absolute',
    backgroundcolor: Putih,
  },
  txtLogin: {
    backgroundColor: '#6C70EB',
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: Hitam,
    borderWidth: 1,
    marginVertical: 35,
    marginHorizontal: 180,
  },
  txt: {
    marginHorizontal: 24,
    marginVertical: -3,
    color: Putih,
    fontSize: 70,
    width: 50,
  },
  contentTxt: {
    marginVertical: 100,
    marginHorizontal: 130,
  },
  txtOrder: {
    top: -20,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    height: 50,
    right: 20,
    color: Hitam,
  },
  contentUsername: {
    backgroundColor: Putih,
    marginVertical: -113,
    marginHorizontal: 30,
    marginRight: 70,
    elevation: 6,
  },
  contentPassword: {
    backgroundColor: Putih,
    marginVertical: 135,
    marginHorizontal: 30,
    marginRight: 70,
    elevation: 6,
  },
  contentTxt2: {
    marginHorizontal: 150,
    marginVertical: -100,
  },
  txtOrder2: {
    fontSize: 20,
    width: 180,
    height: 50,
    fontWeight: '800',
    color: Hitam,
  },
  ButtonLogin: {
    marginVertical: 100,
    marginHorizontal: 45,
    borderRadius: 10,
    backgroundColor: Primary,
    elevation: 5,
    height: 55,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTxt: {
    color: Putih,
    fontSize: 18,
    fontWeight: '800',
  },
  ButtonIcon: {
    position: 'absolute',
    flexDirection: 'row',
    marginVertical: 670,
    marginHorizontal: 180,
  },
  Icon1: {
    right: 60,
    backgroundColor: Biru,
    height: 47,
    widht: 40,
    borderRadius: 25,
    color: Putih,
  },
  Icon2: {
    marginHorizontal: -30,
    backgroundColor: Merah,
    width: 53,
    height: 50,
    borderRadius: 25,
  },
  Icon3: {
    left: 50,
    backgroundColor: Hitam,
    widht: 40,
    height: 50,
    borderRadius: 25,
  },
  ButtomTxtEnd: {
    position: 'absolute',
    flexDirection: 'row',

    left: 115,
    marginTop: 780,
  },
  TxtEnd: {
    fontFamily: 'Poppins-Black',
  },
  TxtEnd2: {
    color: '#071b75e8',
    fontFamily: 'Poppins-SemiBoldItalic',
    left: 5,
  },
});
