import { Block, Text } from '@components';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

import { useAppSelector } from '@hooks';
import { withNamespaces } from 'react-i18next';
import { makeStyles, useTheme } from 'themeNew';

import {
    useGetReadTimeBookQuery,
    useLazyGetReadTimeBookQuery,
} from '@redux/servicesNew';
import { MONTHS } from '@utils/constants';
import { VictoryBar, VictoryChart } from 'victory-native';

const thisYear = new Date().getFullYear();
const thisMonth = MONTHS[new Date().getMonth() + 1];

const ChartMoreMy = props => {
    const [data, setData] = useState([]);
    const myInfo = useAppSelector(state => state.root.auth);
    // const dataReadTime = useLazyGetReadTimeBookQuery(myInfo._id);
    //thuc hien dau goi do getReadTimeBook(id);
    const { data: dataReadTime } = useGetReadTimeBookQuery(myInfo._id);
    console.log('Data read time ', dataReadTime);
    //chay 1 lan
    console.log('token', myInfo.token);

    const { t } = props;
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const styles = useStyle(props, themeStore);

    // useEffect(() => {
    //     getReadTimeBook(myInfo._id);
    // }, []);

    useEffect(() => {
        if (dataReadTime) {
            handleDataMonth();
        }
    }, [dataReadTime]);

    const handleDataYear = useCallback(() => {
        try {
            if (dataReadTime) {
                let handleData = [];

                for (const year in dataReadTime) {
                    let sum = 0;
                    for (const month in dataReadTime[year]) {
                        for (const day in dataReadTime[year][month]) {
                            sum += dataReadTime[year][month][day];
                        }
                    }
                    handleData.push({
                        x: year,
                        y: (sum / 1000 / 60).toFixed(0),
                    });
                }

                setData(handleData);
            }
        } catch (e) {
            console.log('[Error handleDataMonth] ', e);
        }
    }, [dataReadTime]);

    const handleDataMonth = useCallback(() => {
        try {
            if (dataReadTime) {
                let handleData = [];

                for (const month in dataReadTime[thisYear]) {
                    let sum = 0;

                    for (const day in dataReadTime[thisYear][month]) {
                        sum += dataReadTime[thisYear][month][day];
                    }
                    console.log('SUM NE ', sum, month);
                    handleData.push({
                        x: month,
                        y: (sum / 1000 / 60).toFixed(0),
                    });
                }

                setData(handleData);
            }
        } catch (e) {
            console.log('[Error handleDataMonth] ', e);
        }
    }, [dataReadTime]);

    const handleDataDate = useCallback(() => {
        console.log('handleDataDate');
        try {
            if (dataReadTime) {
                let handleData = [];

                if (dataReadTime[thisYear][thisMonth]) {
                    for (const day in dataReadTime[thisYear][thisMonth]) {
                        handleData.push({
                            x: day,
                            y:
                                dataReadTime[thisYear][thisMonth][day] /
                                1000 /
                                60,
                        });
                    }
                    setData(handleData);
                }
            }
        } catch (e) {
            console.log('Error handle data date ', e);
        }
    }, [dataReadTime]);

    return (
        <Block marginVertical={20} column justifyCenter>
            <Block
                style={styles.dateContainer}
                row
                justifyContent={'space-around'}>
                <TouchableOpacity
                    style={[styles.itemChartContainer, styles.shadowColor]}
                    onPress={handleDataDate}
                    id="A">
                    <Text fontType={'medium1'} color={themeNew.colors.textDark}>
                        {t('day')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.itemChartContainer, styles.shadowColor]}
                    onPress={handleDataMonth}
                    id="B">
                    <Text fontType={'medium1'} color={themeNew.colors.textDark}>
                        {t('month')}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.itemChartContainer, styles.shadowColor]}
                    onPress={handleDataYear}
                    id="C">
                    <Text fontType={'medium1'} color={themeNew.colors.textDark}>
                        {t('year')}
                    </Text>
                </TouchableOpacity>
            </Block>

            {data.length > 0 ? (
                <VictoryChart>
                    <VictoryBar
                        style={{ data: { fill: '#0D7EF9', width: 15 } }}
                        animate={{
                            duration: 3000,
                            onLoad: {
                                duration: 3000,
                            },
                        }}
                        x={'x'}
                        y={'y'}
                        data={data}
                    />
                </VictoryChart>
            ) : null}
        </Block>
    );
};

export default withNamespaces()(ChartMoreMy);

const useStyle = makeStyles()(({ colors }) => ({
    shadowColor: {
        shadowColor: colors.grey12,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 2,
    },
    itemChartContainer: {
        width: '25%',
        height: 32,
        backgroundColor: colors.backgroundDark2,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
