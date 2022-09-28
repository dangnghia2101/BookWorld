import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from '@theme';

import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import IconView from '@components/Icon';

const {colors} = theme;

const HeaderThemeMode = ({title, action, titleAction}) => {
  const navigation = useNavigation();
  return (
    <Block height={100}>
      <Block row style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.SCREEN_EDIT_SETTINGS)}>
          <IconView
            component={'Ionicons'}
            name={'arrow-back'}
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
        <Text style={styles.titleSection}>{title}</Text>
      </Block>
    </Block>
  );
};

export default HeaderThemeMode;

const styles = StyleSheet.create({
  container: {
    left: 20,
    top: 35,
  },
  titleSection: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
    left: 80,
  },
});
