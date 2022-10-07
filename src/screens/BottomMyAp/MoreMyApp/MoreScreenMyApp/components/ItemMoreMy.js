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
      marginHorizontal={25}
      marginTop={220}
      row
      justifyContent={'space-between'}>
      <View style={[styles.dataContainer, styles.shadowColor]}>
        <Text center marginTop={10} color={themeNew.colors.textDark}>
          Tổng thời gian đọc
        </Text>
        <View style={styles.textDataContainer}>
          <Text size={40} center color={themeNew.colors.textDark}>
            1280
          </Text>
        </View>
        <Text center color={themeNew.colors.textDark}>
          phút
        </Text>
      </View>
      <View style={[styles.dataContainer, styles.shadowColor]}>
        <Text center marginTop={10} color={themeNew.colors.textDark}>
          Số sách đã đọc
        </Text>
        <View style={styles.textDataContainer}>
          <Text size={40} center color={themeNew.colors.textDark}>
            23
          </Text>
        </View>
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
  },
  textDataContainer: {
    height: 90,
    justifyContent: 'center',
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
