import {StyleSheet, Text, TextInput, Image, FlatList} from 'react-native';
import {Block, Button} from '@components';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DetailGroupChatMyApp = () => {
  const navigation = useNavigation();
  return (
    <Block>
      <Block style={styles.Top}>
        <Button onPress={() => navigation.goBack()}>
          <Image source={require('@assets/icons/icons_back.png')} />
        </Button>
        <Block style={styles.textName}>
          <Text style={styles.nameChat}>My group</Text>
        </Block>
      </Block>
      <FlatList style={{height: '80%'}}></FlatList>
      <Block style={styles.mess}>
        <TextInput placeholder="Type message"></TextInput>
      </Block>
    </Block>
  );
};

export default DetailGroupChatMyApp;

const styles = StyleSheet.create({
  mess: {
    height: 50,
    marginTop: '5%',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  Top: {
    flexDirection: 'row',
    marginTop: '10%',
    marginLeft: '5%',
  },
  textName: {
    width: '70%',
    alignItems: 'center',
  },
  nameChat: {
    fontSize: 24,
    color: 'black',
  },
});
