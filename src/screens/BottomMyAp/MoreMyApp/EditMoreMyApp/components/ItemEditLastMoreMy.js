import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import actions from '@redux/actions';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const ItemEditLastMoreMy = props => {
  GoogleSignin.configure({
    webClientId:
      '1078600024718-r4kttklrp4av6li4mqs9b5ctnhbm6aob.apps.googleusercontent.com',
  });

  const {t} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch({type: actions.LOGOUT_ACCOUNT});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Block marginHorizontal={30} marginTop={250}>
      <Pressable
        onPress={handleLogOut}
        style={[styles.buttonLastMoreMy, styles.shadowColor]}>
        <Text color={themeNew.colors.white} size={16}>
          Đăng xuất
        </Text>
      </Pressable>
    </Block>
  );
};

export default withNamespaces()(ItemEditLastMoreMy);

const useStyle = makeStyles()(({colors}) => ({
  buttonLastMoreMy: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
}));
