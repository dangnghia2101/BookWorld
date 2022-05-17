import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import ItemFeature from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/Settings/components/ItemFeature';
import {NameIconComponents} from '@components/Icon/config';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import {navigate} from '@navigation/RootNavigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import actions from '@redux/actions';
import {useDispatch} from 'react-redux';
const SettingScreen = () => {
  const dispatch = useDispatch();
  const createButtonAlertLogout = () =>
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn đăng xuất?', [
      {
        text: 'Trở lại',

        style: 'cancel',
      },
      {text: 'Đăng Xuất', onPress: () => handleLogOut()},
    ]);
  const handleLogOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch({type: actions.LOGOUT_ACCOUNT});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderWithButton title={'Cài Đặt'} isBackHeader={true} />
      <View style={styles.box}>
        <ItemFeature
          onPress={() =>
            navigate(routes.PRIVACY_SCREEN, {title: 'Quyền Riêng Tư'})
          }
          title={'Quyền riêng tư'}
          iconColor={theme.colors.blue}
          iconComponent={NameIconComponents.AntDesign}
          iconName={'lock'}
        />
        <ItemFeature
          onPress={() =>
            navigate(routes.SECURITY_SCREEN, {title: 'Tài khoản và bảo mật'})
          }
          title={'Tài khoản và bảo mật'}
          iconColor={theme.colors.lightGreen}
          iconComponent={NameIconComponents.Feather}
          iconName={'shield'}
        />
      </View>
      <View style={styles.box}>
        <ItemFeature
          title={'Thông báo'}
          iconColor={theme.colors.orangeBol}
          iconComponent={NameIconComponents.Ionicons}
          iconName={'notifications-outline'}
        />
        <ItemFeature
          onPress={createButtonAlertLogout}
          title={'Chuyển tài khoản'}
          iconColor={theme.colors.darkBlue}
          iconComponent={NameIconComponents.Feather}
          iconName={'user-check'}
        />
        <ItemFeature
          onPress={createButtonAlertLogout}
          title={'Đăng xuất'}
          colorTitle={theme.colors.red}
          iconColor={theme.colors.red}
          iconComponent={NameIconComponents.Feather}
          iconName={'log-out'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  boxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  text: {
    paddingBottom: 15,
    paddingTop: 15,
    marginLeft: 20,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    width: '100%',
    color: 'black',
  },
});
export default SettingScreen;
