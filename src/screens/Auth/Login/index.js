import {Block, Text} from '@components';
import React, {useEffect} from 'react';
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
import {loginReducer, changeLoading} from '@redux/reducerNew';

const Login = () => {
  // New way
  const [login, {isLoading: isUpdating}] = useLoginMutation();
  const dispatch = useAppDispatch();

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
    dispatch(loginReducer(dataLogin?.data?.data?.account));
  };

  return (
    // <Block flex paddingTop={56} backgroundColor={'white'}>
    //   <Block style={styles.logo}>
    //     <Image
    //       style={styles.image}
    //       source={require('../../../assets/images/Logo.png')}
    //     />
    //   </Block>
    //   <Block alignStart>
    //     <Text h1 bold size={30} paddingHorizontal={20} style={styles.textLogo}>
    //       Xin chào!
    //     </Text>
    //     <Block style={styles.textWelcome}>
    //       <Text h1 bold size={20} paddingLeft={20} style={styles.textLogo}>
    //         Chào mừng đến với
    //       </Text>
    //       <Text h1 bold size={25} paddingLeft={5} style={styles.textLogo}>
    //         BookWorld
    //       </Text>
    //     </Block>
    //     <Text paddingHorizontal={20} size={14} style={styles.textDescribes}>
    //       {' '}
    //       Bạn cần đăng nhập để sử dụng{' '}
    //     </Text>
    //   </Block>
    //   <Block alignCenter style={styles.loginContainer}>
    //     <TouchableOpacity
    //       onPress={_signIn}
    //       style={[styles.iconLogin, styles.loginGoogle]}>
    //       <Image source={require('../../../assets/images/gmail.png')} />
    //       <Text style={styles.textLoginGmail}>Log in with Google</Text>
    //     </TouchableOpacity>
    //     <Block
    //       marginTop={32}
    //       width={25}
    //       height={25}
    //       style={styles.loginFacebook}
    //       marginHorizontal={10}>
    //       <Image source={require('../../../assets/images/facebook.png')} />
    //       <Text style={styles.textLoginGmail}>Log in with Facebook</Text>
    //     </Block>
    //   </Block>
    // </Block>
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
      <Block marginTop={30} style={styles.or}>
        <Image
          style={styles.lien}
          source={require('../../../assets/images/left.png')}
        />
        <Text size={12}> Hoặc </Text>
        <Image
          style={styles.lien}
          source={require('../../../assets/images/right.png')}
        />
      </Block>
      <Block style={styles.loginContainer}>
        <TouchableOpacity
          onPress={_signIn}
          style={styles.Ellip}
          marginHorizontal={10}>
          <Image
            style={styles.icon}
            source={require('../../../assets/images/GG.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          marginTop={32}
          width={25}
          height={25}
          // style={styles.Ellip}
          marginHorizontal={10}>
          <Image source={require('../../../assets/images/Facbook.png')} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Login;

const styles = StyleSheet.create({
  // textWelcome: {
  //   flexDirection: 'row',
  // },
  // textDescribes: {
  //   marginTop: 5,
  //   fontWeight: '600',
  //   color: '#859398',
  // },
  // textLoginGmail: {
  //   marginLeft: '20%',
  //   fontSize: 18,
  //   color: '#ffff',
  //   fontWeight: '700',
  // },
  // logo: {
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   marginTop: 20,
  // },
  // loginContainer: {
  //   marginTop: '25%',
  // },
  // loginFacebook: {
  //   width: 340,
  //   height: 65,
  //   borderRadius: 10,
  //   paddingHorizontal: '5%',
  //   alignItems: 'center',
  //   backgroundColor: '#4267B2',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },
  // loginGoogle: {
  //   width: 340,
  //   height: 65,
  //   borderRadius: 10,
  //   paddingHorizontal: '5%',
  //   alignItems: 'center',
  //   backgroundColor: '#f12711',
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  // },
  // image: {
  //   marginTop: 20,
  //   width: 160,
  //   height: 160,
  // },
  // textLogo: {
  //   fontFamily: 'Poppins',
  //   fontWeight: 'bold',
  //   lineHeight: 45,
  //   color: '#464444',
  // },
  lien: {
    marginTop: 7,
    marginHorizontal: 20,
  },
  or: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 32,
  },
  Ellip: {
    width: 47,
    height: 47,
    borderRadius: 52,
    marginHorizontal: 10,
    // borderColor: 'gray',
    // borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ECE9EC',
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
    borderRadius: 15,
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
});
