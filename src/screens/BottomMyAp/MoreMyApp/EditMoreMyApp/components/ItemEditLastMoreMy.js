import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import actions from '@redux/actions';

const ItemEditLastMoreMy = () => {
  GoogleSignin.configure({
    webClientId:
      '1078600024718-r4kttklrp4av6li4mqs9b5ctnhbm6aob.apps.googleusercontent.com',
  });

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
    <Block marginHorizontal={40} style={styles.itemContainer2}>
      <Pressable
        onPress={handleLogOut}
        style={[styles.buttonLastMoreMy, styles.shadowColor]}>
        <Text style={styles.text2}>Đăng xuất</Text>
      </Pressable>
    </Block>
  );
};

export default ItemEditLastMoreMy;

const styles = StyleSheet.create({
  itemContainer2: {
    marginVertical: 40,
  },
  buttonLastMoreMy: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginTop: 100,
    backgroundColor: '#D45555',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
