import { Block, Button, Text } from '@components';
import IconView from '@components/Icon';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import { changeLanguage, changeTheme } from '@redux/reducerNew';
import { theme } from '@theme';
import React, { useEffect, useState } from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, NativeModules, Platform, StatusBar } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';

const { fonts } = theme;

const HeaderHome = props => {
  const { name, image, setIsCollapsible, isCollapsible, t } = props;
  const navigation = useNavigation();
  const [paddingTop, setPaddingTop] = useState(0);
  const [showMoney, setShowMoney] = useState(false);
  const dispatch = useAppDispatch();

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const languageStore = useAppSelector(state => state.root.setting.language);
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
    <Block space={'between'} row width={'100%'} backgroundColor={themeNew.colors.text} paddingVertical={10}
    >
      <Block alignCenter row marginLeft={10}>
        <Image
          source={{ uri: image }}
          style={{ width: 40, height: 40, borderRadius: 100 }}
        />
        <Block>
          <Text
            marginLeft={10}
            size={12}
            marginHorizontal={5}
            color={themeNew.colors.grey8}
            style={{ fontFamily: 'Lato-Bold' }}>
            Welcom to BookWorld!
          </Text>
          <Text
            marginLeft={10}
            size={18}
            marginHorizontal={5}
            color={themeNew.colors.textInBox}
            style={{ fontFamily: 'Lato-Bold' }}>
            {name}
          </Text>
        </Block>
      </Block>

      <Button
        style={{ marginRight: 10 }}
        onPress={() => {
          dispatch(changeTheme(themeStore === 'dark' ? 'light' : 'dark'));
          dispatch(changeLanguage(languageStore === 'en' ? 'vi' : 'en'));
        }}>
        <IconView
          component={'MaterialCommunityIcons'}
          name={'bell-outline'}
          size={25}
          color={themeNew.colors.textInBox}
        />
      </Button>
      {/* </ImageBackground> */}
    </Block >
  );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
  container: {
    paddingHorizontal: -20,
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

export default withNamespaces()(HeaderHome);
