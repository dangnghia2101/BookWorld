import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Block} from '@components';
import {theme} from '@theme';
import Header from '../Header';
import TabChat from './components/TabChat';

const ChatScreenMyApp = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  return (
    <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
      <Header
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <TabChat />
    </Block>
  );
};

export default ChatScreenMyApp;

const styles = StyleSheet.create({});
