import { Block, Text } from '@components';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'themeNew';
const HeaderWithButton = props => {
  const { title, isBackHeader, children, rightIcon } = props;
  const insets = useSafeAreaInsets();
  const HEIGHT_HEADER = 50;
  const PADDING_TOP = insets.top;
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();
  const Title = ({ title }) => {
    return (
      <Text
        justifyCenter
        alignCenter
        flex
        size={20}
        color={theme.colors.textInBox}
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
        color={theme.colors.textDark}
        name={Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left'}
      />
    );
  };

  const renderBackHeader = () => {
    return (
      <Block width={WINDOW_WIDTH - 50} alignSelf='center' row space={'between'}>
        <Block justifyCenter>
          {backIcon()}
        </Block>
        <Block alignCenter justifyCenter>
          <Text color={theme.colors.textInBox} size={18} fontType={'bold'}>
            {title}
          </Text>
        </Block>
        <Block justifyCenter alignCenter>
          {rightIcon}
        </Block>
      </Block>
    );
  };
  return (
    <>
      {isBackHeader ? (
        <Block
          marginTop={insets.top - 20}
          paddingVertical={15}
          backgroundColor={theme.colors.text}
        >
          {renderBackHeader()}
        </Block>
      ) : (
        <Block
          style={{
            marginTop: insets.top,
            backgroundColor: theme.colors.text,
            height: HEIGHT_HEADER,
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

export default HeaderWithButton;
