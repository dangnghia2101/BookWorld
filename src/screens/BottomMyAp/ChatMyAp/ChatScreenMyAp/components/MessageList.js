import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import Message from './Message';

const MessagesList = ({ onSwipeToReply, messages }) => {

  const user = useRef(0);
  const scrollView = useRef();

  return (
    <ScrollView
      style={{ backgroundColor: 'white', flex: 1 }}
      ref={ref => (scrollView.current = ref)}
      onContentChange={() => {
        scrollView.current.scrollToEnd({ animated: true });
      }}
      showsVerticalScrollIndicator={false}>
      {messages.map((message, index) => (
        <Message
          key={index}
          time={message.time}
          isLeft={message.user !== user.current}
          message={message.content}
          onSwipe={onSwipeToReply}
        />
      ))}
    </ScrollView>
  );
};

export default MessagesList;
