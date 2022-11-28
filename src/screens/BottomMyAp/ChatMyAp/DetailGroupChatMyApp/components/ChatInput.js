import React, { useEffect, useState } from 'react';
import {
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { makeStyles, useTheme } from 'themeNew';

// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import EmojiPicker from "./emojis/EmojiPicker";

import IconView from '@components/Icon';
import { useAppSelector } from '@hooks';
import { useSendMessageMutation } from '@redux/servicesNew';

const ChatInput = ({
    reply,
    closeReply,
    isLeft,
    username,
    onSubmitHandler,
    id,
}) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const height = useSharedValue(70);
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const myInfo = useAppSelector(state => state.root.auth);
    const [sendMessage] = useSendMessageMutation();

    const styles = useStyle(themeStore);

    useEffect(() => {
        if (showEmojiPicker) {
            height.value = withTiming(400);
        } else {
            height.value = reply ? withSpring(130) : withSpring(70);
        }
    }, [showEmojiPicker]);

    useEffect(() => {
        if (reply) {
            height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
        } else {
            height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
        }
    }, [reply]);

    const heightAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
        };
    });

    return (
        <Animated.View style={[styles.container, heightAnimatedStyle]}>
            {reply ? (
                <View style={styles.replyContainer}>
                    <TouchableOpacity
                        onPress={closeReply}
                        style={styles.closeReply}>
                        <IconView
                            component="MaterialCommunityIcons"
                            name="close"
                            color="#000"
                            size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Response to {isLeft ? username : 'Me'}
                    </Text>
                    <Text style={styles.reply}>{reply}</Text>
                </View>
            ) : null}
            <View style={styles.innerContainer}>
                <View style={styles.inputAndMicrophone}>
                    <TextInput
                        multiline={true}
                        placeholder={'Type something...'}
                        placeholderTextColor="black"
                        style={styles.input}
                        value={message}
                        onChangeText={text => setMessage(text)}
                    />
                    <TouchableOpacity style={styles.rightIconButtonStyle}>
                        <IconView
                            component="MaterialCommunityIcons"
                            name="paperclip"
                            size={23}
                            color={colors.grey6}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rightIconButtonStyle}>
                        <IconView
                            component="MaterialCommunityIcons"
                            name="camera"
                            size={23}
                            color={colors.grey6}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={() => {
                        onSubmitHandler({
                            from: myInfo._id,
                            to: id,
                            msg: message,
                        });
                        sendMessage({
                            token: myInfo.token,
                            message: message,
                            room: id,
                        });

                        setMessage('');
                    }}>
                    {/* 6329ba557a5b2854e9a16383 cua Vy
            63254bcca085e871f7a1f933 cua Nghia
        */}
                    <IconView
                        component="MaterialCommunityIcons"
                        name={message ? 'send' : 'microphone'}
                        size={23}
                        color={colors.white}
                    />
                </TouchableOpacity>
            </View>
            {/* <EmojiPicker /> */}
        </Animated.View>
    );
};

const useStyle = makeStyles()(({ normalize, colors }) => ({
    container: {
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    replyContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    closeReply: {
        position: 'absolute',
        right: 10,
        top: 5,
    },
    reply: {
        marginTop: 5,
    },
    innerContainer: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    inputAndMicrophone: {
        flexDirection: 'row',
        backgroundColor: colors.grey14,
        flex: 3,
        marginRight: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: normalize(50)('moderate'),
    },
    input: {
        paddingLeft: 20,
        color: 'black',
        flex: 3,
        fontSize: 15,
        paddingTop: 0,
        paddingBottom: 0,
    },
    rightIconButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
    },
    swipeToCancelView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    },
    swipeText: {
        color: 'black',
        fontSize: 15,
    },
    emoticonButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
    },
    recordingActive: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    recordingTime: {
        color: 'black',
        fontSize: 20,
        marginLeft: 5,
    },
    microphoneAndLock: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    lockView: {
        backgroundColor: '#eee',
        width: 60,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 130,
        paddingTop: 20,
    },
    sendButton: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        height: normalize(50)('moderate'),
        width: normalize(50)('moderate'),
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default ChatInput;