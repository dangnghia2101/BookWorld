import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '@theme';

const {colors} = theme;

const HeaderListBook = ({title, action}) => {
  return (
    <Block row justifyContent={'space-between'} height={50} alignCenter>
      <Text style={styles.titleSection}>{title}</Text>
      {action && (
        <TouchableOpacity onPress={action}>
          <Text style={styles.titleViewAll}>Xem thêm</Text>
        </TouchableOpacity>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 18,
    color: colors.blueTitle,
    fontWeight: 'bold',
  },
  titleViewAll: {
    color: colors.orange,
  },
});
export default HeaderListBook;
