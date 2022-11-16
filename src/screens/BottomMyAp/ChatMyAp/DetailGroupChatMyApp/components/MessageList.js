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
            {messages &&
                messages.map((message, index) => (
                    <Message
                        key={index}
                        createdAt={message.createdAt}
                        isLeft={!message.fromSelf}
                        message={message.message}
                        onSwipe={onSwipeToReply}
                    />
                ))}
        </ScrollView>
    );
};

export default MessagesList;
