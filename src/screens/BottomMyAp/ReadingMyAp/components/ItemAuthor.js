import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Block } from '@components';
import { theme } from '@theme';
import Icon from '@components/Icon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { routes } from '@navigation/routes';
import { makeStyles, useTheme } from 'themeNew';
import { withNamespaces } from 'react-i18next';

const ItemAuthor = ({ item, t }) => {
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);
  const styles = useStyle(themeStore);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routes.DETAIL_AUTHOR_MY_AP)}>
      <Block width="100%" height={200} alignCenter marginTop={20} relative>
        <Block
          width="100%"
          height={145}
          backgroundColor={theme.colors.darkGray}
          radius={20}
          absolute
          row
          top={50}>
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
          width={100}
          height={100}
          radius={50}
          justifyCenter
          alignCenter
          padding={7}
          borderWidth={4}
          borderColor={theme.colors.creamRed}>
          <Image style={styles.avatar} source={{ uri: item.image }} />
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
    lineHeight: 21,
    fontWeight: '900',
    color: colors.textInBox,
  },
  textQuantity: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 14,
    marginLeft: 11,
    width: 122,
    color: colors.textInBox,
  },
  totalRate: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    marginLeft: 3.21,
    color: colors.textInBox,
  },
  textRate: {
    marginTop: 17,
    marginLeft: 22,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
    color: colors.textInBox,
  },
  nameAuthor: {
    marginTop: 11,
    marginLeft: 22,
    fontWeight: '600',
    lineHeight: 21,
    color: colors.textInBox,
  },
  textName: {
    marginTop: 22,
    marginLeft: 22,
    color: colors.textInBox,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 15,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 40,
    margin: 7,
  },
}));
