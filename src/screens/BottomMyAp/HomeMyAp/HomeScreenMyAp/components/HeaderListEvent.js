import { Block, Text } from '@components';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@theme';
import { useAppSelector } from '@hooks';
import { makeStyles, useTheme } from 'themeNew';

const { colors } = theme;

const HeaderListBook = ({ title, action }) => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);

  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore); return (
    <Block row justifyContent={'space-between'} alignCenter marginLeft={12} marginTop={20}>
      <Text style={styles.titleSection}>{title}</Text>
      {action && (
        <TouchableOpacity onPress={action}>
          <Text style={styles.titleViewAll}>Xem thêm</Text>
        </TouchableOpacity>
      )}
    </Block>
  );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
  titleSection: {
    fontSize: 18,
    color: colors.grey4,
    fontWeight: 'bold',
  },
  titleViewAll: {
    color: colors.primary,
    marginRight: 10
  },
}));
export default HeaderListBook;
