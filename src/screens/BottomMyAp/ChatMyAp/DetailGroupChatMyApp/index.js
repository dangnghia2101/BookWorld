import { Block, Container, Icon, Text } from '@components';
import { useAppSelector } from '@hooks';
import { useGetChatsMutation } from '@redux/servicesNew';
import { theme } from '@theme';
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import io from 'socket.io-client';
import { useTheme } from 'themeNew';
import Header from '../Header';
import ChatInput from './components/ChatInput';
import MessagesList from './components/MessageList';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/core';

const RoomChat = ({ route }) => {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const socketRef = useRef();
    const { id, image, name, users } = route.params;
    const [getChats, { isSuccess }] = useGetChatsMutation();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const myInfo = useAppSelector(state => state.root.auth);
    const [messages, setMessages] = useState([]);
    const inset = useSafeAreaInsets();
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => [570 + inset.bottom], [inset.bottom]);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchApiChat = async () => {
            const { data } = await getChats({ token: myInfo.token, room: id });
            setMessages(data);
        };
        fetchApiChat();
    }, []);

    useEffect(() => {
        socketRef.current = io('https://bookworlddasboard.herokuapp.com');
        socketRef.current.emit('add-user', id);
    }, []);

    //👇🏻 Runs whenever there is new trigger from the backend

    const onSubmitHandler = _message => {
        setMessages([
            ...messages,
            {
                user: 0,
                createdAt: new Date(),
                message: _message.msg,
                fromSelf: true,
            },
        ]);

        socketRef.current.emit('send-msg', _message);
    };

    useEffect(() => {
        socketRef.current.on('msg-recieve', msg => {
            setMessages([
                ...messages,
                {
                    user: 1,
                    createdAt: new Date().toDateString(),
                    message: msg,
                    fromSelf: false,
                },
            ]);
        });
    }, [socketRef, messages]);

    const [reply, setReply] = useState('');
    const [isLeft, setIsLeft] = useState();

    const swipeToReply = (message, isLeft) => {
        setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
        setIsLeft(isLeft);
    };

    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                {...props}
                enableTouchThrough={true}
            />
        ),
        [],
    );

    const bottomSheetInfo = () => (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}>
            <Block
                backgroundColor={colors.white}
                paddingHorizontal={10}
                alignCenter
                flex>
                <Text marginVertical={10} size={16} fontType="bold">
                    Thong tin nhom
                </Text>
                <Block
                    width="100%"
                    alignCenter
                    borderTopWidth={3}
                    borderColor={colors.grey16}
                    paddingVertical={10}>
                    <Image source={{ uri: image }} style={styles.imageRoom} />
                    <Block row alignCenter>
                        <Text
                            marginRight={10}
                            marginTop={10}
                            size={20}
                            fontType="bold">
                            {name}
                        </Text>
                        <Icon
                            component="Feather"
                            name="edit-3"
                            color={colors.grey4}
                            size={20}
                        />
                    </Block>
                    <Block
                        row
                        width="90%"
                        paddingVertical={20}
                        borderBottomWidth={2}
                        borderColor={colors.grey16}
                        justifyCenter>
                        <Block alignCenter>
                            <Block
                                height={40}
                                width={40}
                                backgroundColor={colors.grey14}
                                radius={40}
                                alignCenter
                                justifyCenter>
                                <Icon
                                    component="Ionicons"
                                    name="notifications-outline"
                                    color={colors.grey4}
                                    size={25}
                                />
                            </Block>
                            <Text
                                marginTop={5}
                                size={12}
                                style={{ width: 80, textAlign: 'center' }}>
                                Tat thong bao
                            </Text>
                        </Block>
                        <Block alignCenter>
                            <Block
                                height={40}
                                width={40}
                                backgroundColor={colors.grey14}
                                radius={40}
                                alignCenter
                                justifyCenter>
                                <Icon
                                    component="Ionicons"
                                    name="ios-attach"
                                    color={colors.grey4}
                                    size={25}
                                />
                            </Block>
                            <Text
                                marginTop={5}
                                size={12}
                                style={{ width: 80, textAlign: 'center' }}>
                                Tin ghim
                            </Text>
                        </Block>
                        <Block alignCenter>
                            <Block
                                height={40}
                                width={40}
                                backgroundColor={colors.grey14}
                                radius={40}
                                alignCenter
                                justifyCenter>
                                <Icon
                                    component="Ionicons"
                                    name="ios-person-add-outline"
                                    color={colors.grey4}
                                    size={25}
                                />
                            </Block>
                            <Text
                                marginTop={5}
                                size={12}
                                style={{ width: 80, textAlign: 'center' }}>
                                Tat thong bao
                            </Text>
                        </Block>
                        <Block alignCenter>
                            <Block
                                height={40}
                                width={40}
                                backgroundColor={colors.grey14}
                                radius={40}
                                alignCenter
                                justifyCenter>
                                <Icon
                                    component="Ionicons"
                                    name="settings-outline"
                                    color={colors.grey4}
                                    size={25}
                                />
                            </Block>
                            <Text
                                marginTop={5}
                                size={12}
                                style={{ width: 80, textAlign: 'center' }}>
                                Cai dat
                            </Text>
                        </Block>
                    </Block>
                    <Block
                        width="90%"
                        paddingVertical={20}
                        borderBottomWidth={2}
                        borderColor={colors.grey16}>
                        <Text size={16} fontType="bold">
                            Thanh vien nhom
                        </Text>

                        <Block row alignCenter paddingVertical={5}>
                            <Icon
                                component="Ionicons"
                                name="people-outline"
                                color={colors.grey4}
                                size={25}
                            />
                            <Text marginLeft={10} size={16}>
                                {users.length} thanh vien
                            </Text>
                        </Block>
                    </Block>
                    <Block width="90%" paddingVertical={20}>
                        <Text size={16} fontType="bold">
                            Thiet lap bao mat
                        </Text>

                        <Block row alignCenter paddingVertical={5}>
                            <Icon
                                component="Ionicons"
                                name="eye-off-outline"
                                color={colors.grey4}
                                size={25}
                            />
                            <Text marginLeft={10} size={16}>
                                {users.length} an tro chuyen
                            </Text>
                        </Block>
                        <Block row alignCenter paddingVertical={5}>
                            <Icon
                                component="Ionicons"
                                name="warning-outline"
                                color={colors.grey4}
                                size={25}
                            />
                            <Text marginLeft={10} size={16}>
                                Bao cao
                            </Text>
                        </Block>
                        <Block
                            marginLeft={-5}
                            row
                            alignCenter
                            paddingVertical={5}>
                            <Icon
                                component="MaterialCommunityIcons"
                                name="delete-empty-outline"
                                color={colors.primary}
                                size={27}
                            />
                            <Text
                                marginLeft={10}
                                size={16}
                                color={colors.primary}>
                                Xoa lich su tro chuyen
                            </Text>
                        </Block>
                        <Block row alignCenter paddingVertical={5}>
                            <Icon
                                component="Feather"
                                name="log-out"
                                color={colors.primary}
                                size={20}
                            />
                            <Text
                                marginLeft={10}
                                size={16}
                                color={colors.primary}>
                                Roi khoi nhom
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </BottomSheet>
    );

    return (
        <Block
            flex
            marginTop={inset.top}
            paddingHorizontal={10}
            backgroundColor={theme.colors.white}>
            <Block
                borderBottomWidth={2}
                borderColor={colors.grey16}
                row
                paddingVertical={10}
                alignCenter
                paddingHorizontal={10}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        component="MaterialIcons"
                        name="arrow-back-ios"
                        size={20}
                        color={colors.grey4}
                    />
                </TouchableOpacity>
                <Image source={{ uri: image }} style={styles.imageRoom} />
                <Block flex>
                    <Text marginLeft={10} size={18} fontType="bold">
                        {name}
                    </Text>
                    <Text marginLeft={10} size={14}>
                        Gioi thieu ne
                    </Text>
                </Block>
                <TouchableOpacity
                    onPress={() => bottomSheetRef.current?.snapToIndex(0)}>
                    <Icon
                        component="Ionicons"
                        name="ios-information-circle-outline"
                        color={colors.grey4}
                        size={30}
                    />
                </TouchableOpacity>
            </Block>
            <MessagesList onSwipeToReply={swipeToReply} messages={messages} />
            <ChatInput onSubmitHandler={onSubmitHandler} id={id} />
            {bottomSheetInfo()}
        </Block>
    );
};

export default RoomChat;

const styles = StyleSheet.create({
    imageRoom: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
});
