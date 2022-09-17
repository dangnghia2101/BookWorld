import { Block, Text } from '@components';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import { useLoginMutation } from '@redux/servicesNew';
import { useAppDispatch } from 'hooks';
import { loginReducer } from '@redux/reducerNew';
import Storage from '@utils/storage';

const Login = () => {
  // New way
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  GoogleSignin.configure({
    webClientId:
      '1078600024718-r4kttklrp4av6li4mqs9b5ctnhbm6aob.apps.googleusercontent.com',
  });

  async function getToken() {
    return await messaging().getToken();
  }

  const _signIn = async () => {
    await GoogleSignin.signOut();
    const currentUser = await GoogleSignin.getCurrentUser();

    if (currentUser) {
      await GoogleSignin.revokeAccess();
    }

    try {
      // Get the users ID token
      // await GoogleSignin.hasPlayServices();

      const { idToken } = await GoogleSignin.signIn();
      // get fcm token
      const fcmToken = await getToken();

      _handleLogin(idToken, fcmToken);

      // Storage.setItem('tokenId', idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('=========> id error login', error);

      // await API.post('logs/write', {message: error});
    }
  };

  const _handleLogin = async (token, fcmToken) => {
    const body = {
      token: token,
      token_fcm: fcmToken,
    };
    // dispatch({ type: 'LOGIN', body: body });
    const dataLogin = await login(body);
    dispatch(loginReducer(dataLogin?.data?.data?.account));
  };

  return (
    <Block flex alignCenter paddingTop={56} backgroundColor={'white'}>
      <Text h1 bold size={30} style={styles.textWelcomLogin}>
        {' '}
        Chào Mừng Trở Lại{' '}
      </Text>
      <Text paddingHorizontal={61} size={13} lineHeight={20} center>
        {' '}
        Bạn phải đăng nhập để sử dụng ứng dụng Chúng tôi có hỗ trợ đăng nhập
        bằng số điện thoại hoặc gmail{' '}
      </Text>
      <TextInput placeholder={'Số điện thoại'} style={styles.textInput} />
      <TextInput placeholder={'Mật khẩu'} style={styles.textInput2} />
      <Text bold size={15} style={styles.textRemember}>
        {' '}
        Quên mật khẩu ?{' '}
      </Text>
      <Pressable style={styles.buttomLogin}>
        <Text style={styles.textButtomLogin}>Đăng nhập</Text>
      </Pressable>
      <Block marginTop={22}>
        <Text size={12}> Hoặc </Text>
      </Block>
      <Block style={styles.loginContainer}>
        <TouchableOpacity
          onPress={_signIn}
          style={[styles.iconLogin, styles.Ellip]}>
          <Image source={require('../../../assets/images/GG.png')} />
        </TouchableOpacity>
        <Block
          marginTop={32}
          width={25}
          height={25}
          style={styles.Ellip}
          marginHorizontal={10}>
          <Image source={require('../../../assets/images/Facbook.png')} />
        </Block>
      </Block>
    </Block>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Ellip: {
    width: 47,
    height: 47,
    borderRadius: 52,
    borderColor: '#923D47',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE9EC',
  },
  image: {
    marginTop: 42,
  },
  gradients1: {
    position: 'absolute',
    width: 157,
    height: 10,
    backgroundColor: '#DD4455',
  },
  gradients: {
    position: 'absolute',
    width: 157,
    height: 10,
    backgroundColor: '#DD4455',
  },
  textButtomLogin: {
    fontSize: 22,
    lineHeight: 50,
    alignItems: 'center',
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
  buttomLogin: {
    width: '88%',
    height: 59,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#DD4455',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textRemember: {
    fontFamily: 'Poppins',
    lineHeight: 23,
    color: '#2D2626',
    fontWeight: '700',
    marginTop: 22,
    marginLeft: '57%',
  },
  textInput2: {
    borderRadius: 15,
    width: '88%',
    color: '#818181',
    height: 59,
    fontWeight: '600',
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    paddingLeft: 18,
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textInput: {
    borderRadius: 15,
    width: '88%',
    color: '#818181',
    height: 59,
    fontWeight: '600',
    backgroundColor: '#F3F3F3',
    marginTop: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    paddingLeft: 18,
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  textWelcomLogin: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 45,
    color: '#464444',
  },
  textDescribe: {
    marginTop: 12,
    fontWeight: '500',
  },
  iconLogin: {
    marginTop: 32,
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});
