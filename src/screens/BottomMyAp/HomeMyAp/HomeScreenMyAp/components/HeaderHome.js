import React, { useState, useEffect } from 'react';
import { Block, Text, Button } from '@components';
import {
  StyleSheet,
  Platform,
  NativeModules,
  StatusBar,
  Image,
} from 'react-native';
import { theme } from '@theme';
import IconView from '@components/Icon';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@navigation/routes';
import Collapsible from 'react-native-collapsible';
import { width } from '@utils/responsive';
import { makeStyles, useTheme } from 'themeNew';
import { useAppSelector, useAppDispatch } from '@hooks';
import { changeTheme } from '@redux/reducerNew';

const { colors, fonts } = theme;

const HeaderHome = props => {
  const { name, image, setIsCollapsible, isCollapsible } = props;
  const navigation = useNavigation();
  const [paddingTop, setPaddingTop] = useState(0);
  const [showMoney, setShowMoney] = useState(false);
  const dispatch = useAppDispatch();

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

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
    <Block
      style={{
        position: 'absolute',
        zIndex: 100,
        width: width,
      }}>
      <Block style={[styles.container, { paddingTop: paddingTop }]}>
        <Block width={'100%'} alignCenter marginTop={5}>
          <Block space={'between'} row width={'100%'}>
            <Block alignCenter row marginLeft={10}>
              <Image
                source={{ uri: image }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <Text
                marginLeft={10}
                size={18}
                marginHorizontal={5}
                color={themeNew.colors.text}
                style={{ fontFamily: 'Lato-Bold' }}>
                {name}
              </Text>
            </Block>

            <Button
              onPress={() =>
                dispatch(changeTheme(themeStore === 'dark' ? 'light' : 'dark'))
              }>
              <IconView
                component={'MaterialCommunityIcons'}
                name={'bell-outline'}
                size={25}
                color={themeNew.colors.text}
              />
            </Button>
          </Block>

          <Collapsible collapsed={isCollapsible} style={{ width: width }}>
            <Block space={'between'} row width={'100%'} marginTop={10}>
              <Block>
                <Block row marginLeft={7}>
                  <Text
                    marginLeft={10}
                    size={14}
                    marginHorizontal={5}
                    color={themeNew.colors.text}
                    // fontType={'bold'}
                    // fontType={fonts.fontFamily.bold1}
                    style={{
                      fontFamily: fonts.fontFamily.regular1,
                      fontWeight: 'normal',
                    }}>
                    Số dư tài khoản
                  </Text>
                  <Button onPress={() => setShowMoney(!showMoney)}>
                    <IconView
                      component={'Ionicons'}
                      name={showMoney ? 'md-eye' : 'md-eye-off'}
                      size={20}
                      color={themeNew.colors.text}
                    />
                  </Button>
                </Block>
                <Block justifyCenter height={40} marginLeft={10}>
                  {showMoney ? (
                    <Text
                      size={25}
                      marginHorizontal={5}
                      color={themeNew.colors.text}
                      fontType={'bold'}>
                      *********
                    </Text>
                  ) : (
                    <Text
                      size={25}
                      marginHorizontal={5}
                      color={themeNew.colors.text}
                      fontType={'bold'}>
                      1.200.000
                    </Text>
                  )}
                </Block>
              </Block>

              <Block marginRight={20} alignCenter>
                <Button
                  onPress={() => navigation.navigate(routes.SCREEN_PAYMENT)}>
                  <Block
                    backgroundColor={themeNew.colors.text}
                    radius={12}
                    width={40}
                    height={40}
                    justifyCenter
                    alignCenter>
                    <IconView
                      component={'Ionicons'}
                      name={'add'}
                      size={25}
                      color={themeNew.colors.icon}
                    />
                  </Block>
                </Button>
                <Text color={themeNew.colors.text}>Nap tien</Text>
              </Block>
            </Block>
          </Collapsible>

          <Button
            style={styles.btnExpand}
            onPress={() => setIsCollapsible(!isCollapsible)}>
            {isCollapsible === true ? (
              <IconView
                component={'AntDesign'}
                name={'downcircleo'}
                color={themeNew.colors.icon}
                size={25}
              />
            ) : (
              <IconView
                component={'AntDesign'}
                name={'upcircleo'}
                color={themeNew.colors.icon}
                size={25}
              />
            )}
          </Button>
        </Block>
        {/* </ImageBackground> */}
      </Block>
    </Block>
  );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
  container: {
    paddingHorizontal: -20,
    backgroundColor: colors.primary,
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
  btnExpand: {
    backgroundColor: colors.text,
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -15,
  },
}));

export default HeaderHome;
