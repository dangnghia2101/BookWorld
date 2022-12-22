import { Block, Text, NoData } from '@components';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, TouchableOpacity, Image, View } from 'react-native';
import IconView from '@components/Icon';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { colors, makeStyles, useTheme } from 'themeNew';
import { useAppSelector, useAppDispatch } from '@hooks';
import { withNamespaces } from 'react-i18next';
import {
  useLazyGetPurchaseHistoryCartQuery,
  useGetPurchaseHistoryCartQuery
} from '@redux/servicesNew';
import ItemPurchaseCart from './ItemPurchaseCart';

const BodyPurchaseHistory = props => {
  const [getPurchaseHistoryCart] = useLazyGetPurchaseHistoryCartQuery();
  const { t } = props;
  const [dataPurchase, setDataPurchase] = useState([]);

  const myInfo = useAppSelector(state => state.root.auth);
  console.log(myInfo.token);
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  useEffect(() => {
    const fetchGetPurchase = async () => {
      let { data } = await getPurchaseHistoryCart(myInfo.token);
      setDataPurchase(data);
      console.log("data", data);
    };
    fetchGetPurchase();
  }, []);

  return dataPurchase?.length > 0 ? (
    <Block marginHorizontal={20} flex>
      <Block>
        <Text
          fontType={'bold1'}
          color={themeNew.colors.textDark}
          size={16}
          marginVertical={10}>
          {t('myPurchase')}
        </Text>
        {dataPurchase?.map((item, index) => (
          <ItemPurchaseCart key={index} item={item} />
        ))}
      </Block>
    </Block>
  ) : (
    <NoData title={t('noOrdersYet')}></NoData>
  );
};

export default withNamespaces()(BodyPurchaseHistory);

const useStyle = makeStyles()(({ colors }) => ({
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
