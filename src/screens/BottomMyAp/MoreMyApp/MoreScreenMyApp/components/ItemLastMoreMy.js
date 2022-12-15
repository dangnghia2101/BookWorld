import { Block, Text } from '@components';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '@hooks';

const ItemLastMoreMy = props => {
  const { t } = props;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);
  return (
    <Block marginHorizontal={26} relative>
      <Text fontType={'bold1'} size={16} color={themeNew.colors.textDark}>
        {t('rank')}
      </Text>
      <Block row style={styles.itemContainer} padding={10}>
        <Block row justifyContent={'center'} alignItems={'center'}>
          <Image source={require('../../../../../assets/images/Vector.png')} />
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank.png')}
          />
        </Block>
        <View style={styles.item}>
          <Text fontType={'bold1'} color="white" size={15}>
            Hồ Hoàng Phúc
          </Text>
          <Block marginVertical={10}>
            <Text fontType={'medium1'} color="#9A9B9B" size={10}>
              Tổng thời gian đọc
            </Text>
            <Text fontType={'medium1'} color="#9A9B9B" size={10}>
              Số sách đã đọc
            </Text>
          </Block>
        </View>
        <Block row justifyContent={'center'}>
          <View style={styles.rankContainer} opacity={0.15} />
          <Text style={styles.sttRank} fontSize={15} color="#FA4D96">
            1
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default withNamespaces()(ItemLastMoreMy);

const useStyle = makeStyles()(({ colors }) => ({
  itemContainer: {
    backgroundColor: '#242042',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginVertical: 10,
  },
  imageRank: {
    position: 'absolute',
  },
  item: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rankContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#FA4D96',
    borderRadius: 8,
  },
  sttRank: {
    position: 'absolute',
    top: 4.5,
  },
}));
