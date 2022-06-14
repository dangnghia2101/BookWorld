import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '@theme';
import IconView from '@components/Icon';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';

const {colors} = theme;

const Header = ({title, action, titleAction}) => {
  const navigation = useNavigation();

  return (
    <Block row style={[styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleSection}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.editContainer}
        onPress={() => navigation.navigate(routes.SCREEN_EDIT_SETTINGS)}>
        <IconView
          component={'Ionicons'}
          name={'settings-sharp'}
          size={25}
          color={'black'}
        />
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    top: 35,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSection: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  editContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
  },
});

export default Header;
