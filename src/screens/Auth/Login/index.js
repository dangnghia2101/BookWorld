import {images} from '@assets';
import {Block, Button, Text} from '@components';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import actions from '@redux/actions';
import {handleShowLoading, HIDE} from '@redux/actions/HandlerLoading';
import {theme} from '@theme';
import {hanldeError} from '@utils/handleError';
import {width} from '@utils/responsive';
import Storage from '@utils/storage';
import React, {useEffect, useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ModalSelect from './ModalSelect';
const {colors} = theme;
import API from '@utils/api';

const Login = () => {
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const listDepartment = useSelector(state => state.listDepartment);
  const [unit, setUnit] = useState({});
  const WIDTH_UNIT_BUTTON = width - 30;
  const ITEM_WIDTH = width * 0.88;
  GoogleSignin.configure({
    webClientId:
      '37810002148-m8bl8vj2bb67k6vf3encqtfc3pmshil9.apps.googleusercontent.com',
  });
  const carouselItems = [
    {
      imgUrl: images.slide1_iamge,
    },
    {
      imgUrl: images.slide2_iamge,
    },
    {
      imgUrl: images.slide3_iamge,
    },
  ];
  async function getToken() {
    return await messaging().getToken();
  }
  const getIsSignedIn = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        const userInfo = await GoogleSignin.signInSilently();
        const UnitData = await Storage.getItem('unit');
        Storage.getItem('tokenId')
          .then(item => {
            if (item) {
              dispatch(handleShowLoading());
              getToken().then(token_fcm => {
                console.log({
                  idToken: userInfo.idToken,
                  id: UnitData._id,
                  token_fcm,
                });
                _handleLogin(userInfo.idToken, UnitData._id, token_fcm);
              });
            }
          })
          .catch();
      }
    } catch (error) {
      await API.post(`logs/write`, {message: error});
    }
  };
  useEffect(() => {
    dispatch({type: actions.FETCH_DEPARTMENTS});
    // const getIsSignedIn = async () => {
    //   try {
    //     const isSignedIn = await GoogleSignin.isSignedIn();
    //     if (isSignedIn) {
    //       const userInfo = await GoogleSignin.signInSilently();
    //       Storage.getItem('tokenId')
    //         .then(item => {
    //           if (item !== null) {
    //             dispatch(handleShowLoading());
    //             _handleLogin(userInfo.idToken, item.unit, item.token_fcm);
    //           }
    //         })
    //         .catch();
    //     }
    //   } catch (error) {
    //     await API.post(`logs/write`, {message: error});
    //   }
    // };
    // getIsSignedIn();
  }, []);
  const _signIn = async () => {
    await GoogleSignin.signOut();
    const idUnit = unit?._id;
    if (!idUnit) {
      return Alert.alert('Vui lòng chọn cơ sở');
    }
    dispatch(handleShowLoading());
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      //get fcm token
      const fcmToken = await getToken();
      _handleLogin(idToken, fcmToken, idUnit);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      await API.post(`logs/write`, {message: error});
      dispatch({type: HIDE});
      hanldeError(error);
    }
  };

  const _handleLogin = (token, fcmToken, idUnit) => {
    const body = {
      token: token,
      unit: idUnit,
      token_fcm: fcmToken,
    };
    dispatch({type: actions.LOGIN_ACCOUNT, body: body});
  };

  const carouselCardItem = ({item, index}) => {
    return (
      <Block width={ITEM_WIDTH} key={index}>
        <Image style={styles.imageSlide} source={item.imgUrl} />
      </Block>
    );
  };

  const titleSelectedUnit = unit?.name ? unit?.name : 'Chọn cơ sở đào tạo';

  return (
    <Block flex alignCenter paddingTop={40}>
      <Block
        height={300}
        width={ITEM_WIDTH}
        marginBottom={30}
        overflow={'hidden'}>
        <Carousel
          data={carouselItems}
          renderItem={carouselCardItem}
          sliderWidth={ITEM_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
          onSnapToItem={index => setActiveSlide(index)}
        />
      </Block>
      <Pagination
        containerStyle={{paddingVertical: 0}}
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotColor="orange"
        dotColor="red"
        animatedDuration={100}
        inactiveDotScale={1}
      />
      <View style={styles.ViewFoodter}>
        <Button
          style={{marginTop: 20}}
          onPress={() => {
            setIsVisible(true);
          }}>
          <Block
            style={styles.button}
            width={WIDTH_UNIT_BUTTON}
            paddingHorizontal={10}
            justifyCenter>
            <Text fontType={theme.fonts.fontWeight.bold} size={17}>
              {titleSelectedUnit}
            </Text>
          </Block>
        </Button>
        <Button onPress={_signIn} style={{marginTop: 20}}>
          <Block
            style={styles.button}
            width={WIDTH_UNIT_BUTTON}
            paddingHorizontal={30}
            justifyContent={'space-between'}>
            <Ionicons
              name="logo-google"
              size={30}
              color="red"
              marginLeft={10}
            />
            <Text fontType={theme.fonts.fontWeight.bold} size={17} color="red">
              Đăng nhập bằng tài khoản Google
            </Text>
          </Block>
        </Button>
        {/* <Text fontType={theme.fonts.fontWeight.bold} size={17} paddingTop={15}>──────────  Hoặc  ──────────</Text>
        <Button>
          <Block
            justifyCenter
            paddingHorizontal={10}
            alignCenter
            row
            marginTop={20}
            borderRadius={40}
            borderColor={colors.black}
            backgroundColor={''}
            borderWidth={2}
            width={WIDTH_UNIT_BUTTON}
            height={60}>
            <Text fontType={theme.fonts.fontWeight.bold} size={17}>
              Đăng nhập bằng tài khoản của phụ huynh
            </Text>
          </Block>
        </Button> */}
      </View>
      <ModalSelect
        isVisible={isVisible}
        listDepartments={listDepartment?.data || []}
        onHideModal={() => setIsVisible(false)}
        setIdDepartment={idDepartment => {
          setIsVisible(false);
          setUnit(idDepartment || '');
          Storage.setItem('unit', idDepartment);
        }}
      />
    </Block>
  );
};

export default Login;
const styles = StyleSheet.create({
  ViewFoodter: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  imageSlide: {
    height: 300,
    width: 400,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    borderColor: colors.black,
    borderWidth: 2,
    height: 60,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: '#000',
    borderColor: 'red',
    borderWidth: 1,
  },
});
