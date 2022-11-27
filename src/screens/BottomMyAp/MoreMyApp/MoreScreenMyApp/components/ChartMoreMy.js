import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Block, Text, Button} from '@components';

import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
const screenWidth = Dimensions.get('window').width;

import {makeStyles, useTheme} from 'themeNew';
import {withNamespaces} from 'react-i18next';
import {useAppSelector, useAppDispatch} from '@hooks';

import { useGetReadTimeBookQuery, useLazyGetReadTimeBookQuery } from '@redux/servicesNew';
import { ScrollView } from 'react-native-gesture-handler';

const ChartMoreMy = props => {
  const [data, setData] = useState([]);
  const [getReadTimeBook] = useLazyGetReadTimeBookQuery();
  //thuc hien dau goi do getReadTimeBook(id);
  const myInfo = useAppSelector(state => state.root.auth);
  const actions = myInfo._id;
  //console.log("token", myInfo.token);
  //console.log("id >>>", actions);
  //data = useGetReadTimeBookQuery(actions);
  //chay 1 lan

  const {t} = props;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);
  
 useEffect(async () => {
  const getDataChart = async () => {
    const dataChart = await getReadTimeBook(actions);
    setData(dataChart.data);
    console.log(dataChart.data[0]);
    console.log(dataChart.data[0][2022][0]);
    console.log("datachart: ", dataChart.data[0][2022][0].November[0][16]);
    // if(data?.data[0]){
    // console.log(">>", setData(data?.data[0][2022]));
    // }
    // console.log("datasever >>", setData(data?.data[0][2022]));
  }
  getDataChart();
 }, [getReadTimeBook])

  const dataMonth = [
    // {
    //   "month": data?.data[0][2022][0].map(x => x.November),
    //   "time":  data?.data[0][2022][0].map(x => x.November)
    // },
    {
        "month": "February",
        "time": 300000,
    }
  ]
 

  // function handleClick(e){
  //   data.forEach(each => {
  //     if(each. === e.target.id){
  //       setData({values: each.values, types: each.types})
  //       console.log(">>>", {values: each.values, types: each.types});
  //     }
  //   })
  // }
 
  return (
    <Block marginVertical={20} column justifyCenter>
      <Block
        style={styles.dateContainer}
        row
        justifyContent={'space-around'}
        marginHorizontal={15}>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('day')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('month')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemChartContainer, styles.shadowColor]}>
          <Text color={themeNew.colors.textDark}>{t('year')}</Text>
        </TouchableOpacity>
      </Block>

<ScrollView>
<VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          style={{data: {fill: '#0D7EF9', width: 15}}}
          animate={{
            duration: 3000,
            onLoad: {
              duration: 3000,
            },
          }}
          data={dataMonth} x="month" y="time"
        />
      </VictoryChart>
</ScrollView>
      
    </Block>
  );
};

export default withNamespaces()(ChartMoreMy);

const useStyle = makeStyles()(({colors}) => ({
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
  itemChartContainer: {
    width: 118,
    height: 32,
    backgroundColor: colors.backgroundDark2,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
