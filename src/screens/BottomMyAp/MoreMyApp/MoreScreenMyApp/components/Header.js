import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '@theme';

const {colors} = theme;

const Header = ({title, action, titleAction}) => {
  return (
    <Block style={[styles.container]}>
      <Text style={styles.titleSection}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.edit}>Edit</Text>
      </TouchableOpacity>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 35,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  titleSection: {
    fontSize: 18,
    color: colors.blueTitle,
    fontWeight: 'bold',
  },
  edit: {
    color: colors.orange,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
