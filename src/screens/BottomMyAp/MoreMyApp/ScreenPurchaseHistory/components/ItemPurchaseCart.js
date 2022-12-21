import { Text, Block } from '@components';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import { formatDay } from '@utils/helper';

const ItemPurchaseCart = ({ item, t}) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const styles = useStyles(themeStore);

return(
        <Block marginBottom={15}>
          <TouchableOpacity style={[styles.itemPurchase, styles.shadowColor]} backgroundColor={'#00000020'}>
            <Block row marginHorizontal={15} marginVertical={15}>
              <Image
                style={styles.image}
                source={{ uri: item.allProduct[0].nameBook}}
              />
              <Block column marginHorizontal={10}>
                <Text
                  size={18}
                  fontType="bold1"
                  numberOfLines={2}
                  color={themeNew.colors.textDark}>
                  {item.allProduct[0].ineBook}
                </Text>
                <Text fontType={'regular1'} size={14} color={themeNew.colors.textDark}>
                  {item.allProduct[0].imtroductionBook}
                </Text>
                <Block row>
                  <Text fontType={'regular1'} size={14} color={themeNew.colors.textDark}>
                    {t('chapTer')}
                  </Text>
                  <Text fontType={'regular1'} size={14} color={themeNew.colors.textDark} marginHorizontal={4}>
                    {item.allProduct[0].chapterNumber}
                  </Text>
                </Block>
              </Block>
            </Block>
            
            <Block borderWidth={0.2} borderColor={'#42424240'} marginHorizontal={15}/>
            
            <Block row marginHorizontal={15} marginVertical={15} justifyContent={'space-between'}>
              <Block>
                <Text fontType='medium1' size={12} color={themeNew.colors.grey8}>
                {''}{formatDay(new Date(item.purchaseDate))}
                </Text>
              </Block>
              <Block row alignItems={'flex-end'}>
                <Image
                  style={styles.icon_logo}
                  source={require('../../../../../assets/images/logo_icon.png')}
                />
                <Text fontType='medium1' size={14} color={themeNew.colors.grey8}>
                  {' '}{t('intoMoney')}:
                </Text>
                <Text fontType='medium1' size={14} color={themeNew.colors.grey8}>
                  {item.totalPrice}{' '}VNĐ
                  {/* {priceBook()
                                            .toFixed(0)
                                            .replace(
                                                /(\d)(?=(\d{3})+(?!\d))/g,
                                                '$1.',
                                            )}{' '}
                                        đ */}
                </Text>
              </Block>
            </Block>

            <Block borderWidth={0.2} borderColor={'#42424240'} marginHorizontal={15}/>
            
            <Block alignItems={'flex-end'} right={10}>
              <TouchableOpacity style={[styles.btnCmt, styles.shadowColor]}>
                <Text fontType='medium1' size={14} color={themeNew.colors.white}>{t('rate')}</Text>
              </TouchableOpacity>
            </Block>
          </TouchableOpacity>
        </Block>
    );
};



export default withNamespaces()(ItemPurchaseCart);

const useStyles = makeStyles()(({ colors }) => ({
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
        width: '25%',
        height: 100,
        backgroundColor: 'black',
      },
      btnCmt: {
        width: 100,
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
      },
      icon_logo: {
        width: 20,
        height: 20,
      },
}));