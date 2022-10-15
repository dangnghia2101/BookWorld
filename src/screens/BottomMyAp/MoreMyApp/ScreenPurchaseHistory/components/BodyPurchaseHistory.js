import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable, TouchableOpacity, Image, View} from 'react-native';
import IconView from '@components/Icon';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {colors, makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const BodyPurchaseHistory = props => {
  const navigation = useNavigation();
  const {t} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block marginHorizontal={20} flex height={2000}>
      <Block>
        <Text
          fontType={'bold'}
          color={themeNew.colors.textDark}
          size={16}
          marginVertical={10}>
          {t('myPurchase')}
        </Text>
        <Block>
          <TouchableOpacity style={[styles.itemPurchase, styles.shadowColor]}>
            <Block row marginHorizontal={15} marginVertical={15}>
              <Image
                style={styles.image}
                source={require('../../../../../assets/images/Vector.png')}
              />
              <Block column marginLeft={10}>
                <Text
                  size={18}
                  fontType="bold"
                  numberOfLines={2}
                  color={themeNew.colors.textDark}>
                  Tên sách
                </Text>
                <Text size={14} color={themeNew.colors.textDark}>
                  Tên tác giả
                </Text>
                <Text size={14} color={themeNew.colors.textDark}>
                  Tên tác giả
                </Text>
              </Block>
            </Block>
            <Block borderBottomWidth={0.4}
          backgroundColor={themeNew.colors.grey8}>
              </Block>
              <Block row marginHorizontal={15} marginVertical={15} alignSelf={'baseline'}>
                <Block width={'40%'}>
                <Text size={12} color={themeNew.colors.grey8}>
                  2 sản phẩm
                </Text>
                </Block>
               <Block row width={'60%'} alignItems={'flex-end'}>
               <Image
                style={styles.icon_logo}
                source={require('../../../../../assets/images/logo_icon.png')}
              />
               <Text size={14} color={themeNew.colors.grey8}>
                  Thành tiền:
                </Text>
                <Text size={14} color={themeNew.colors.grey8}>
                  15.000 VNĐ
                </Text>
               </Block>
              
              </Block>
              
                <Block borderBottomWidth={0.4}
                       backgroundColor={themeNew.colors.grey8}>
              </Block>
              <Block alignItems={'flex-end'} right={10}>
                <TouchableOpacity style={[styles.btnCmt, styles.shadowColor]}>
                  <Text size={14} color={themeNew.colors.white}>Đánh giá</Text>
                </TouchableOpacity>
              </Block>
              
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

export default withNamespaces()(BodyPurchaseHistory);

const useStyle = makeStyles()(({colors}) => ({
  itemPurchase: {
    width: '100%',
    backgroundColor: colors.backgroundDark2,
    justifyContent: 'center',
    borderRadius: 10,
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
  image: {
    borderRadius: 5,
    width: 80,
    height: 100,
    backgroundColor: 'black',
  },
  btnCmt: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  icon_logo: {
    width: 20,
    height: 20,
  },
}));
