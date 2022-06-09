import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '@theme';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import IconView from '@components/Icon';

const {colors} = theme;

const HeaderEditMoreMy = ({title, action, titleAction}) => {
  const navigation = useNavigation();
  return (
    <Block row style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.SCREEN_SETTINGS)}>
        <IconView
          component={'Ionicons'}
          name={'arrow-back'}
          size={30}
          color={'white'}
        />
      </TouchableOpacity>
      <Text style={styles.titleSection}>{title}</Text>
    </Block>
  );
};

export default HeaderEditMoreMy;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    top: 35,
  },
  titleSection: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    left: 80,
  },
});
