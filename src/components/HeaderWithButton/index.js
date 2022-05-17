import React from 'react';
import {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  NativeModules,
  Platform,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme';
import {useNavigation} from '@react-navigation/core';
import {Block, Text} from '@components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {colors} = theme;
const HeaderWithButton = props => {
  const {title, isBackHeader, children} = props;
  const insets = useSafeAreaInsets();
  const HEIGHT_HEADER = insets.top + 50;
  const PADDING_TOP = insets.top;

  const navigation = useNavigation();
  const Title = ({title}) => {
    return (
      <Text
        justifyCenter
        alignCenter
        flex
        size={24}
        color={theme.colors.white}
        fontType="bold">
        {title}
      </Text>
    );
  };
  const backIcon = () => {
    return (
      <Feather
        onPress={() => navigation.goBack()}
        size={Platform.OS === 'ios' ? 30 : 24}
        color="white"
        name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
      />
    );
  };

  const renderBackHeader = () => {
    return (
      <Block flex>
        <Block style={styles.containHeaderBack}>
          <Block flex justifyCenter>
            {backIcon()}
          </Block>
          <Block alignCenter justifyCenter>
            <Text style={styles.title}>{title}</Text>
          </Block>
          <Block flex />
        </Block>
      </Block>
    );
  };
  return (
    <>
      {isBackHeader ? (
        <View
          style={{
            height: HEIGHT_HEADER,
            paddingTop: PADDING_TOP,
            backgroundColor: colors.orange,
          }}>
          {renderBackHeader()}
        </View>
      ) : (
        <Block
          style={{
            height: HEIGHT_HEADER,
            paddingTop: PADDING_TOP,
            backgroundColor: colors.orange,
          }}>
          <Block alignCenter justifyCenter row paddingHorizontal={20}>
            <Title title={title} />
            {children}
          </Block>
        </Block>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  containHeaderBack: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.orange,
  },
});

export default HeaderWithButton;
