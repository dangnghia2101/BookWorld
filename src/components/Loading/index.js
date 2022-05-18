import {Block, Text} from '@components';
import {theme} from '@theme';
import {height, width} from '@utils/responsive';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const Loading = () => {
  // const {isShow} = useSelector(state => state.handlerLoadingReducer);
  const isShow = false;
  if (!isShow) {
    return <Block />;
  }
  return (
    <Block
      absolute
      zIndex={9999}
      flex
      backgroundColor={theme.colors.backgroundOpacity}
      width={width}
      height={height}
      justifyCenter
      alignCenter>
      <Text color={theme.colors.white} marginBottom={10}>
        Loading...
      </Text>
      <ActivityIndicator size="small" color={theme.colors.white} />
    </Block>
  );
};
export default Loading;
