import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Block, Text, Button} from '@components';
import React from 'react';
import {theme} from '@theme';
import Icon from '@components/Icon';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@navigation/routes';

const ChapterBook = ({detailBook}) => {
  const navigation = useNavigation();

  console.log('=====> ', detailBook);

  return (
    <Block
      marginTop={20}
      row
      width={'100%'}
      marginBottom={20}
      style={{flexWrap: 'wrap'}}>
      {detailBook?.chapter?.map(item => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(routes.PLAY_BOOK_MY_AP, {item: item})
          }
          style={styles.button}>
          <Text>{item.id}</Text>
        </TouchableOpacity>
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '18%',
    backgroundColor: theme.colors.gray4,
    borderRadius: 5,
    paddingHorizontal: 5,
    margin: 3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChapterBook;
