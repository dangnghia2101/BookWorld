import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Block } from '@components';
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

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAIL_AUTHOR_MY_AP, { bookmark: true, item })}>
      <Block width="100%" height={200} alignCenter marginTop={20} relative >
        <Block
          width="100%"
          height={145}
          backgroundColor={theme.colors.grey12}
          radius={20}
          absolute
          row
          shadowColor={theme.colors.blue}
          shadowOffset
          top={50}
        >
          <Block width="50%" height="100%">
            <Text style={styles.textName}>{t('textNameAuthor')}</Text>
            <Text style={styles.nameAuthor}>{item.name}</Text>
            <Text style={styles.textRate}>{t('textRating')}</Text>
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
              <Text style={styles.totalRate}>4.0</Text>
            </Block>
          </Block>

          <Block width="50%" height="100%" alignCenter>
            <Text numberOfLines={2} style={styles.textQuantity}>
              {t('texQuantity')}
            </Text>
            <Text style={styles.totalRead}>23</Text>
            <Text style={styles.textName}>{t('textToltalRead')}</Text>
            <Text style={styles.totalRead}>23</Text>
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
          borderColor={theme.colors.text}
        >
          <Block
            backgroundColor={theme.colors.white}
            width={100}
            height={100}
            radius={50}
            justifyCenter
            alignCenter
            padding={7}
            borderWidth={4}
            borderColor={theme.colors.black}>
            <Image style={styles.avatar} source={{ uri: item.image }} />
          </Block>
        </Block>

      </Block>
    </TouchableOpacity>
  );
};

export default withNamespaces()(ItemAuthor);

const styles = StyleSheet.create({
  totalRead: {
    color: theme.colors.black,
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
    color: '#464444'
  },
  totalRate: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.black,
    marginLeft: 3.21,
  },
  textRate: {
    marginTop: '10%',
    marginLeft: '12%',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.black
  },
  nameAuthor: {
    marginTop: '5%',
    marginLeft: '12%',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 21,
    color: '#19191B',
  },
  textName: {
    marginTop: '10%',
    marginLeft: '12%',
    color: '#464444',
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
});
