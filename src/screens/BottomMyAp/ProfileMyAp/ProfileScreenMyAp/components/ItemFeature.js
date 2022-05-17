import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@components';
import IconView from '@components/Icon';
import Block from '@components/Block';
import Text from '@components/Text';
import {theme} from '@theme';
import {navigate} from '@navigation/RootNavigation';

const ItemFeature = ({item}) => {
  return (
    <Button onPress={() => navigate(item.route, {title: item.content})}>
      <Block
        row
        alignCenter
        borderWidth={1}
        padding={16}
        backgroundColor={theme.colors.white}
        radius={8}
        borderColor={theme.colors.gray3}
        style={styles.touchable}>
        <Block marginRight={20}>
          <IconView
            color={item.color}
            component={item.link}
            name={item.icon}
            size={35}
          />
        </Block>
        <Block>
          <Text paddingBottom={8} fontType={'bold'}>
            {item.content}
          </Text>
          <Text color={theme.colors.gray}>{item.intro}</Text>
        </Block>
      </Block>
    </Button>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 32,
  },
  touchable: {
    shadowColor: '#7e7e7e',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingBottom: 10,
  },
  text2: {
    color: 'gray',
  },
});
export default ItemFeature;
