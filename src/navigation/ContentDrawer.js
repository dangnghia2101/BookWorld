import {StyleSheet, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React from 'react';
import {Block} from '@components';
import Icons from '@utils/icons';
import {theme} from '@theme';
import {routes} from './routes';
import {DrawerActions, useNavigation} from '@react-navigation/core';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import actions from '@redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ContentDrawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let {data} = useSelector(state => state.login);
  const createButtonAlertLogout = () =>
    Alert.alert('Đăng xuất', 'Đăng xuất tài khoản', [
      {
        text: 'Cancel',

        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleLogOut()},
    ]);

  const handleLogOut = async () => {
    try {
      navigation.dispatch(DrawerActions.closeDrawer());
      await GoogleSignin.signOut();
      dispatch({type: actions.LOGOUT_ACCOUNT});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Block flex>
      <Block style={styles.modal}>
        <Block style={styles.modalUser}>
          <Block row>
            <Image
              style={styles.image}
              source={
                data?.user?.avatar
                  ? {uri: data?.user?.avatar}
                  : require('@assets/images/bee.png')
              }
            />
            <Block left={8}>
              <Text style={styles.textEmail}>Xin chào</Text>
              <Text style={styles.textEmail}>{data?.user?.displayName}</Text>
            </Block>
          </Block>

          <Block style={styles.optionModal}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: routes.HOME_MY_AP,
                  merge: true,
                });
              }}
              style={styles.optionViewBtn}>
              <Icons.AntDesign
                name="home"
                size={24}
                color={theme.colors.orangeBol}
              />
              <Text style={styles.textBtn}>Trang chủ</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => {}} style={styles.optionViewBtn}>
              <Icons.FontAwesome5
                name="user-circle"
                size={24}
                color={theme.colors.orangeBol}
              />
              <Text style={styles.textBtn}>Hồ sơ cá nhân</Text>
            </TouchableOpacity> */}
          </Block>
        </Block>
        <Block style={styles.viewLogout}>
          <TouchableOpacity
            onPress={createButtonAlertLogout}
            style={styles.flexRow}>
            <Icons.MaterialCommunityIcons
              name="logout-variant"
              size={24}
              color="blue"
            />
            <Text style={styles.textLogout}>Đăng xuất</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

export default ContentDrawer;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: theme.colors.orange2,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  textUser: {
    marginLeft: 5,
    color: 'white',
    fontWeight: '600',
  },
  textEmail: {
    color: 'black',
    fontWeight: '700',
  },
  safe: {
    backgroundColor: theme.colors.orange2,
  },
  modal: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 40,
    top: 0,
    left: 0,
    bottom: 0,
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewLogout: {
    padding: 40,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  textLogout: {
    marginLeft: 10,
    color: 'blue',
    fontWeight: '600',
  },
  modalUser: {
    marginLeft: 20,
    marginTop: 40,
  },
  marginTop: {
    marginTop: 20,
  },
  optionModal: {
    marginTop: 20,
  },
  optionViewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBtn: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
