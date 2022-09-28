import {StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {Block, Text} from '@components';

// const {width, height} = Dimensions.get('window');

const ItemWelcome = ({item}) => {
  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();
  return (
    <Block styles={styles.cardView} height={height / 2.3}>
      <Image
        style={styles.image}
        width={width}
        height={height / 2.3}
        source={{uri: item.url}}
      />
      <Block marginTop={width / 5} width={width} paddingHorizontal={20}>
        <Text size={20} style={styles.textTitle} center>
          {item.title}
        </Text>
        <Text style={styles.textDescription} size={15} center>
          {item.description}
        </Text>
      </Block>
    </Block>
  );
};

export default ItemWelcome;

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    position: 'relative',
    width: '80%',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    marginHorizontal: 5,
    borderRadius: 20,
  },
  textDescription: {
    color: '#9D9D9D',
    lineHeight: 21,
    marginTop: 15,
    marginHorizontal: 20,
  },
  textTitle: {
    color: '#19191B',
    lineHeight: 30,
    fontWeight: 'bold',
  },
  text: {
    position: 'absolute',
    justifyContent: 'center',
  },
});
