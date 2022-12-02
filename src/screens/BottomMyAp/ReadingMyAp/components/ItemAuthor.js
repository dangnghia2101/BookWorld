import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Block, Text } from '@components';
import { theme } from '@theme';
import Icon from '@components/Icon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { routes } from '@navigation/routes';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';
import { useAppSelector } from '@hooks';

const ItemAuthor = ({ item, t }) => {
  const navigation = useNavigation();
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAIL_AUTHOR_MY_AP, { bookmark: true, item })}>
      <Block width="100%" height={200} alignCenter marginTop={20} relative >
        <Block
          width="100%"
          height={145}
          backgroundColor={theme.colors.text}
          radius={20}
          absolute
          row
          top={50}
        >

          <Block width="50%" height="100%">
            <Text color={theme.colors.textInBox} style={styles.textName}>{t('textNameAuthor')}</Text>
            <Text color={theme.colors.textInBox} style={styles.nameAuthor}>{item.name}</Text>
            <Text color={theme.colors.textInBox} style={styles.textRate}>{t('textRating')}</Text>
            <Block row marginLeft={22} marginTop={5}>
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Icon
                component={'AntDesign'}
                name="star"
                color={theme.colors.yellow}
                size={16}
              />
              <Text color={theme.colors.textInBox} style={styles.totalRate}>4.0</Text>
            </Block>
          </Block>

          <Block width="50%" height="100%" alignCenter>
            <Text color={theme.colors.textInBox} numberOfLines={2} style={styles.textQuantity}>
              {t('texQuantity')}
            </Text>
            <Text color={theme.colors.textInBox} style={styles.totalRead}>23</Text>
            <Text color={theme.colors.textInBox} style={styles.textName}>{t('textToltalRead')}</Text>
            <Text color={theme.colors.textInBox} style={styles.totalRead}>23</Text>
          </Block>
        </Block>
        <Block
          backgroundColor={theme.colors.white}
          width={110}
          height={110}
          radius={50}
          justifyCenter
          alignCenter
          padding={7}
          borderWidth={4}
          borderColor={theme.colors.grey16}
        >
          <Block
            // backgroundColor={theme.colors.white}
            width={100}
            height={100}
            radius={50}
            justifyCenter
            alignCenter
            padding={7}
            borderWidth={4}
            borderColor={theme.colors.black}>
            <Image style={styles.avatar} source={{ uri: item.avatar }} />
          </Block>
        </Block>

      </Block>
    </TouchableOpacity>
  );
};

export default withNamespaces()(ItemAuthor);

const useStyle = makeStyles()(({ normalize, colors }) => ({
  totalRead: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: '15%',
    lineHeight: 21,
    fontWeight: '900',
  },
  textQuantity: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: '8%',
    marginLeft: '20%',
    width: 122,
  },
  totalRate: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 3.21,
  },
  textRate: {
    marginTop: '10%',
    marginLeft: '12%',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
  },
  nameAuthor: {
    marginTop: '5%',
    marginLeft: '12%',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 21,
  },
  textName: {
    marginTop: '10%',
    marginLeft: '12%',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 15,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 40,
    margin: 7,
  },
  Container: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
  }
}));
