import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {makeStyles, useTheme} from 'themeNew';
import {withNamespaces} from 'react-i18next';
import {useAppSelector, useAppDispatch} from '@hooks';

const ItemMoreMy = props => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);
  return (
    <Block
      row
      justifyContent={'space-around'}>
      <View style={[styles.dataContainer, styles.shadowColor]}>
        <Text center color={themeNew.colors.textDark}>
          Tổng thời gian đọc
        </Text>
        <Text size={40} center color={themeNew.colors.textDark}>
          1280
        </Text>
        <Text center color={themeNew.colors.textDark}>
          phút
        </Text>
        </View>
      <View style={[styles.dataContainer, styles.shadowColor]}>
        <Text center marginTop={10} color={themeNew.colors.textDark}>
          Số sách đã đọc
        </Text>
        <Text size={40} center color={themeNew.colors.textDark}>
          23
        </Text>
        <Text center color={themeNew.colors.textDark}>
          sách
        </Text>
      </View>
    </Block>
  );
};

export default withNamespaces()(ItemMoreMy);

const useStyle = makeStyles()(({colors}) => ({
  dataContainer: {
    backgroundColor: colors.backgroundDark2,
    borderRadius: 20,
    width: 171,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  shadowColor: {
    shadowColor: colors.shadowDark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
}));
