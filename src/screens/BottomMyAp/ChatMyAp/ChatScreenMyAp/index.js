import { StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { Block } from '@components';
import { theme } from '@theme';
import Header from '../Header';
import io from 'socket.io-client';
import TabChat from './components/TabChat';
import { Button, Text } from '@components';
import MessagesList from './components/MessageList';
import ChatInput from './components/ChatInput';

const ChatScreenMyApp = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [chat, setChat] = useState({
    message: 'Nghia ne',
    sid: 'sid',
    time: '2022',
    rid: '',
  });
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://192.168.0.105:4000', {
      transports: ['websocket'],
    });
    socketRef.current.on('message', ({ sid, message, time, rid }) => {
      setMessages([...messages, { message, sid, time, rid }]);
      console.log('Nhan duoc ne ', message);
    });
  }, [messages]);

  const onSubmitHandler = () => {
    console.log('====> submit');
    const { message, sid, time, rid } = chat;
    socketRef.current.emit('message2', { message, sid, time, rid });
  };

  const [reply, setReply] = useState('');
  const [isLeft, setIsLeft] = useState();

  const swipeToReply = (message, isLeft) => {
    setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
    setIsLeft(isLeft);
  };

  const closeReply = () => {
    setReply('');
  };

  return (
    <Block flex paddingHorizontal={20} backgroundColor={theme.colors.white}>
      <Header
        clicked={clicked}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <MessagesList onSwipeToReply={swipeToReply} />
      <ChatInput />
      {/* <TabChat /> */}
      <Button onPress={onSubmitHandler}>
        <Text>Submit</Text>
      </Button>
    </Block>
  );
};

export default ChatScreenMyApp;

const styles = StyleSheet.create({});
