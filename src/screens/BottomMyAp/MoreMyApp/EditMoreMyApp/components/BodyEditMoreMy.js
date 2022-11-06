import {Block, Text} from '@components';
import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const BodyEditMoreMy = props => {
  const {name, email, image} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block style={styles.container}>
      <Block style={[styles.itemUser, styles.shadowColor]} center>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageInformation}
        />
        <Text size={20} fontType={'bold'} color={themeNew.colors.textDark}>
          {name}
        </Text>
        <Text fontSize={13} color={themeNew.colors.textDark}>
          {email}
        </Text>
        <Block row marginVertical={10}>
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank3.png')}
          />
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank2.png')}
          />
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank4.png')}
          />
          <Image
            style={styles.imageRank}
            source={require('../../../../../assets/images/rank1.png')}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default withNamespaces()(BodyEditMoreMy);

const useStyle = makeStyles()(({colors}) => ({
  container: {
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemUser: {
    width: '85%',
    height: 'auto',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: colors.backgroundDark2,
  },
  imageInformation: {
    width: 144,
    height: 144,
    borderRadius: 15,
    marginVertical: 15,
  },
  imageRank: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 15,
    marginBottom: 10,
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
}));
