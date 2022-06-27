import React, {useState, useEffect} from 'react';
import {Block, Text, Button} from '@components';
import {
  StyleSheet,
  ImageBackground,
  Platform,
  NativeModules,
  StatusBar,
  Image,
} from 'react-native';
import {images} from '@assets';
import {theme} from '@theme';
import IconView from '@components/Icon';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const {colors, fonts} = theme;

const HeaderHome = ({name, image}) => {
  const navigation = useNavigation();
  const [paddingTop, setPaddingTop] = useState(0);
  const [showMoney, setShowMoney] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      NativeModules.StatusBarManager.getHeight(statusBarHeight => {
        const STATUS_BAR_HEIGHT = statusBarHeight.height;
        setPaddingTop(STATUS_BAR_HEIGHT);
      });
    } else {
      const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
      setPaddingTop(STATUS_BAR_HEIGHT);
    }
  }, []);

  return (
    <Block style={[styles.container, {paddingTop: paddingTop}]}>
      <Block width={'100%'} alignCenter marginTop={20}>
        <Block space={'between'} row width={'100%'}>
          <Block alignCenter row marginLeft={10}>
            <Image
              source={{uri: image}}
              style={{width: 40, height: 40, borderRadius: 100}}
            />
            <Text
              marginLeft={10}
              size={18}
              marginHorizontal={5}
              color={colors.white}
              style={{fontFamily: 'Lato-Bold'}}>
              {name}
            </Text>
          </Block>

          <Block row marginRight={20}>
            <IconView
              component={'MaterialCommunityIcons'}
              name={'bell-outline'}
              size={25}
              color={colors.white}
            />
          </Block>
        </Block>

        <Block space={'between'} row width={'100%'} marginTop={10}>
          <Block>
            <Block row marginLeft={7}>
              <Text
                marginLeft={10}
                size={14}
                marginHorizontal={5}
                color={colors.white}
                fontType={'bold1'}>
                Số dư tài khoản
              </Text>
              <Button onPress={() => setShowMoney(!showMoney)}>
                <IconView
                  component={'Ionicons'}
                  name={showMoney ? 'md-eye' : 'md-eye-off'}
                  size={20}
                  color={colors.white}
                />
              </Button>
            </Block>
            <Block justifyCenter height={40} marginLeft={10}>
              {showMoney ? (
                <Text
                  size={25}
                  marginHorizontal={5}
                  color={colors.white}
                  fontType={'bold'}>
                  *********
                </Text>
              ) : (
                <Text
                  size={25}
                  marginHorizontal={5}
                  color={colors.white}
                  fontType={'bold'}>
                  1.200.000
                </Text>
              )}
            </Block>
          </Block>

          <Block marginRight={20} alignCenter>
            <Button onPress={() => navigation.navigate(routes.SCREEN_PAYMENT)}>
              <Block
                backgroundColor={theme.colors.white}
                radius={12}
                width={40}
                height={40}
                justifyCenter
                alignCenter>
                <IconView
                  component={'Ionicons'}
                  name={'add'}
                  size={25}
                  color={colors.gray}
                />
              </Block>
            </Button>
            <Text color={theme.colors.gray4}>Nap tien</Text>
          </Block>
        </Block>
      </Block>
      {/* </ImageBackground> */}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    paddingHorizontal: -20,
    backgroundColor: theme.colors.red,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  bg_sell: {
    width: '100%',
    height: 150,
    zIndex: 0,
    flex: 1,
    resizeMode: 'cover',
  },
  border_bg_sell: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  borderPersent: {
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textDecoration: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'black',
  },
  btnBuyNow: {
    borderRadius: 8,
    backgroundColor: colors.lightGreen1,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginTop: 5,
  },
});

export default HeaderHome;
