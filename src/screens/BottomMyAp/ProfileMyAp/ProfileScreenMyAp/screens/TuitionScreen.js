import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import {Block, Text} from '@components';
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import {theme} from '@theme';
import {Row, Table} from 'react-native-table-component';
import {height} from '@utils/responsive';
import ItemWallet from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/components/ItemWallet';
const TuitionScreen = ({route}) => {
  const {title} = route.params;
  const dispatch = useDispatch();
  const tuition = useSelector(state => state.walletsReducer.data);
  const transactions = useSelector(
    state => state.transactionsHistoryReducer.data,
  );
  const [tableData, setTableData] = useState([]);
  const flexArrTable = [1.7, 2, 1.7, 1.8, 2, 2];
  const conditionFlex = transactions && transactions.length > 0;
  const styleRowTable = amount => ({
    backgroundColor: Number(amount) < 0 ? '#f9c2c2' : '#d4f4f4', // giá trị âm màu đỏ| giá trị dương màu xanh
  });
  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const dataColumns = transactions.map(item => {
        // loại nạp tiền hoặc chi tiền
        const isIn = item.in_out === 1;
        return [
          item.id,
          isIn ? `+${item.amount}` : `-${item.amount}`,
          item.type,
          item.term_name,
          item.created_at_format,
          item.note,
        ];
      });
      setTableData(dataColumns);
    } else {
      setTableData([]);
    }
  }, [transactions]);

  useEffect(() => {
    dispatch({type: actions.GET_WALLETS});
    dispatch({type: actions.GET_TRANSACTIONS_HISTORY});
  }, [dispatch]);
  const tableHead = [
    '#',
    'Số tiền',
    'Loại',
    'Học kỳ',
    'Thời gian',
    'Chú thích',
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderWithButton title={title} isBackHeader={true} />
      {tuition ? (
        <>
          <Block
            marginHorizontal={4}
            row={conditionFlex}
            wrap={conditionFlex}
            marginBottom={16}
            marginTop={10}>
            <ItemWallet
              iconColor={theme.colors.green}
              nameWallet={'Ví học phí'}
              amountWallet={tuition.study_wallet}
            />
            <ItemWallet
              iconColor={theme.colors.red}
              nameWallet={'Ví học lại/Thi lại'}
              amountWallet={tuition.relearn_wallet}
            />
            <ItemWallet
              iconColor={theme.colors.darkBlue}
              nameWallet={'Ví khác'}
              amountWallet={tuition.etc_wallet}
            />
            <ItemWallet
              iconColor={theme.colors.yellow}
              nameWallet={'Ví ưu đãi'}
              amountWallet={tuition.promotion_wallet}
            />
          </Block>
          <Block
            padding={4}
            radius={8}
            marginHorizontal={8}
            backgroundColor={theme.colors.white}>
            <Text
              padding={8}
              marginBottom={8}
              color={theme.colors.lightBlue}
              fontType={'bold'}
              size={22}>
              Thông tin giao dịch, hoá đơn
            </Text>
            {tableData && tableData.length > 0 ? (
              <Table borderStyle={styles.borderStyleTable}>
                <Row
                  flexArr={flexArrTable}
                  data={tableHead}
                  style={styles.head}
                  textStyle={styles.textRowTable}
                />
                {tableData.map((rowData, index) => (
                  <Row
                    flexArr={flexArrTable}
                    key={index}
                    data={rowData}
                    style={styleRowTable(rowData[1])}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            ) : (
              <Block alignCenter>
                <Text style={styles.textItalic}>
                  Bạn chưa có giao dịch nào cả!
                </Text>
              </Block>
            )}
          </Block>
        </>
      ) : (
        <Block flex center height={height}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </Block>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  borderStyleTable: {borderWidth: 1, borderColor: '#c8e1ff'},
  head: {backgroundColor: '#f1f8ff'},
  textRowTable: {
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  text: {padding: 4},
  textItalic: {
    fontStyle: 'italic',
  },
});
export default TuitionScreen;
