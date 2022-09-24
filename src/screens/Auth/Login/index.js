
import { Block, Text, ModalBox } from '@components';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import {useLoginMutation} from '@redux/servicesNew';
import {useAppDispatch} from 'hooks';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';
import { loginReducer, changeLoading } from '@redux/reducerNew';
import { icons } from '@assets';

const Login = () => {
  const navigation = useNavigation();
  const [login, { isLoading: isUpdating }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    dispatch(changeLoading(isUpdating ? 'SHOW' : 'HIDE'));
  }, [dispatch, isUpdating]);

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
      const {idToken} = await GoogleSignin.signIn();
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
    if (dataLogin?.error?.data?.error) {
      setVisibleModal(true);
    } else {
      dispatch(loginReducer(dataLogin?.data?.data?.account));
    }
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
      <TextInput
        keyboardType="numeric"
        placeholder={'Số điện thoại'}
        style={styles.textInput}
        // onChangeText={text => {
        //   const isValid = verifyPhoneNumber(text);
        //   isValid ? setValidPhone(true) : setValidPhone(false);
        // }}
        // value={number}222
      />
      {/* <Text>{'Số điện thoại không đúng'}</Text> */}
      <TextInput placeholder={'Mật khẩu'} style={styles.textInput2} />
      <Text bold size={15} style={styles.textRemember}>
        {' '}
        Quên mật khẩu ?{' '}
      </Text>
      <Pressable style={styles.buttomLogin}>
        <Text style={styles.textButtomLogin}>Đăng nhập</Text>
      </Pressable>
      <Block marginTop={20}>
        <TouchableOpacity
          onPress={_signIn}
          style={styles.loginGoogle}
          marginHorizontal={10}>
          <Image
            style={styles.icon}
            source={require('../../../assets/images/GG.png')}
          />
          <Text style={styles.textLoginGmail}>Log in with Google</Text>
        </TouchableOpacity>
      </Block>
      <Block marginTop={100}>
        <Text>
          Bạn chưa có tài khoản? {'  '}
          <Text
            style={styles.textRegister}
            onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}>
            Đăng ký
          </Text>
        </Text>
      </Block>

      {/* Modle when api wrong */}
      <ModalBox
        isVisible={visibleModal}
        onBackdropPress={() => setVisibleModal(!visibleModal)}>
        <Block
          backgroundColor={'white'}
          radius={15}
          alignSelf={'center'}
          justifyCenter={'center'}
          padding={20}>
          <Image source={icons.logo} style={styles.iconLogo} />
          <Text>Server not work</Text>
        </Block>
      </ModalBox>
    </Block>
  );
};

export default Login;

const styles = StyleSheet.create({
  textRegister: {
    fontSize: 14,
    color: 'blue',
    fontWeight: '600',
  },
  textLoginGmail: {
    marginLeft: '15%',
    fontSize: 18,
    color: '#2D2626',
    fontWeight: '700',
  },
  loginGoogle: {
    width: 340,
    height: 65,
    borderRadius: 10,
    paddingHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,

    elevation: 7,
  },
  lien: {
    marginTop: 7,
    marginHorizontal: 20,
  },
  or: {
    paddingLeft: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 32,
  },
  Ellip: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 47,
    height: 47,
    borderRadius: 52,
    marginHorizontal: 10,
    alignItems: 'center',
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
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
    borderRadius: 10,
    width: '88%',
    color: '#000',
    height: 59,
    fontWeight: '600',
    backgroundColor: '#F3F3F3',
    marginTop: 16,
    fontSize: 16,
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
    borderRadius: 10,
    width: '88%',
    color: '#000',
    fontSize: 16,
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
  iconLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
