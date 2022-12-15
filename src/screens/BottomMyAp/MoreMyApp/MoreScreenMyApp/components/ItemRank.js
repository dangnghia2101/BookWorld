import { Text, Block } from '@components';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { withNamespaces } from 'react-i18next';
import { Image, TouchableOpacity, View } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';

const ItemRank = ({ item, t, index}) => {
    const navigation = useNavigation();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const themeNew = useTheme(themeStore);
    const styles = useStyles(themeStore);
    
    return (
        <Block relative>
            <TouchableOpacity>
                <Block row style={styles.itemContainer} padding={10}>
                    <Block row justifyContent={'center'} alignItems={'center'}>
                        <Image source={require('../../../../../assets/images/Vector.png')} />
                        <Image
                        style={styles.imageRank}
                        source={{ uri: item?.image }}
                        />
                    </Block>
                <View style={styles.item}>
                    <Text fontType={'bold1'} color="white" size={15}>
                    {item?.name}
                    </Text>
                    <Block marginVertical={10}>
                    <Text fontType={'medium1'} color="#9A9B9B" size={10}>
                        {t('totalReadingTime')}
                        {item?.timeRead}
                    </Text>
                    <Text fontType={'medium1'} color="#9A9B9B" size={10}>
                        {t('numberOfBooksRead')}
                        {item?.historyBookRead}
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
            </TouchableOpacity>
      </Block>
    );
};

export default withNamespaces()(ItemRank);

const useStyles = makeStyles()(({ colors }) => ({
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
        height: 50,
        width: 50,
        borderRadius: 35,
      },
      item: {
        width: '45%',
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