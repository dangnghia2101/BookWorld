import { Block, Text, NoData } from '@components';
import React, {useState, useEffect} from 'react';
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
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  useEffect(() => {
    const fetchGetPurchase = async () => {
        let { data } = await getPurchaseHistoryCart(myInfo.token);
        setDataPurchase(data);
        console.log(data);
    };
    fetchGetPurchase();
}, []);

  return dataPurchase?.length > 0 ? (
    <Block marginHorizontal={20} flex>
      {dataPurchase?.map((item, index) => (
          <ItemPurchaseCart key={index} item={item} />
      ))}
    </Block>
    ) : (
      <NoData title={'Không có đơn mua nào'}></NoData>
    );
};

export default withNamespaces()(BodyPurchaseHistory);

const useStyle = makeStyles()(({ colors }) => ({
  
}));
