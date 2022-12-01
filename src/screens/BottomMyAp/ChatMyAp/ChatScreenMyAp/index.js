import { Block, Container, Icon, Text, TextInput } from '@components';
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useAppSelector, useDebounce } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/core';
import {
    useCreateGroupMutation,
    useGetRoomChatQuery,
    useLazyGetRoomChatQuery,
} from '@redux/servicesNew';
import { theme } from '@theme';
import { CustomToast } from '@utils/helper';
import { height, width } from '@utils/responsive';
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { makeStyles, useTheme } from 'themeNew';

const handleKeyExtractor = item => item.toString();

const ChatScreenMyApp = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const socketRef = useRef();
    const [getRoomChat, { isSuccess, error }] = useLazyGetRoomChatQuery();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { authors } = useAppSelector(state => state.root.author);
    const { colors } = useTheme(themeStore);
    const styles = useStyle(themeStore);
    const navigation = useNavigation();
    const bottomSheetRef = useRef();
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(
        () => [height - 300 + inset.bottom],
        [inset.bottom],
    );
    const [peopleSearch, setPeopleSearch] = useState(authors);
    const [peoplesChoose, setPeopleChoose] = useState({});
    const [searchText, setSearchText] = useState('');
    const [nameGroup, setNameGroup] = useState('');
    const [dataGroups, setDataGroups] = useState([]);

    const myInfo = useAppSelector(state => state.root.auth);
    // const { data } = useGetRoomChatQuery(myInfo.token);
    const [createGroup] = useCreateGroupMutation();

    useEffect(() => {
        const fetchGetGroups = async () => {
            let { data } = await getRoomChat(myInfo.token);
            // const reversedData = data.reverse();
            setDataGroups(data);
        };
        fetchGetGroups();
    }, []);

    const searchDebounce = useDebounce(searchText, 300);

    useEffect(() => {
        const findPeople = authors.filter(item =>
            item.name.includes(searchDebounce),
        );
        setPeopleSearch(findPeople);
    }, [searchDebounce]);

    const renderItemChat = useCallback(({ item }) => {
        return (
            <Pressable
                onPress={() =>
                    navigation.navigate(routes.DETAIL_GROUP_CHAT_MY_APP, {
                        id: item._id,
                        image: item.image,
                        name: item.name,
                        users: item.users,
                    })
                }>
                <Block row alignCenter>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imageGroup}
                    />
                    <Block marginLeft={10} flex>
                        <Text size={14} fontType="bold">
                            {item.name}
                        </Text>
                        <Text>{item.description}</Text>
                    </Block>
                    <Block>
                        <Text size={10}>12:40</Text>
                    </Block>
                </Block>
            </Pressable>
        );
    });

    const searchIcon = () => (
        <Icon
            component="Ionicons"
            name="ios-search-outline"
            size={22}
            color={theme.colors.grey4}
        />
    );

    const renderSpace = () => (
        <Block height={20} justifyCenter>
            <Block height={2} backgroundColor={colors.grey16}></Block>
        </Block>
    );

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
                    Tạo nhóm mới
                </Text>
                <Block
                    flex
                    width="100%"
                    alignCenter
                    borderTopWidth={3}
                    borderColor={colors.grey16}
                    paddingVertical={10}>
                    <Icon
                        component="Ionicons"
                        name="ios-person-circle-outline"
                        size={100}
                        color={colors.grey4}
                    />
                    <Block row alignCenter>
                        <Icon
                            component="Feather"
                            name="edit-3"
                            color={colors.grey4}
                            size={20}
                        />
                    </Block>

                    <Block width="90%" paddingVertical={10}>
                        <Text marginBottom={-20} size={16} fontType="bold">
                            Tên nhóm
                        </Text>

                        <TextInput
                            value={nameGroup}
                            onChangeText={setNameGroup}
                            placeholder="Nhập tên nhóm"
                            style={styles.containerSearch}
                        />
                    </Block>
                    <Block width="90%">
                        <Text marginBottom={-20} size={16} fontType="bold">
                            Thêm thành viên
                        </Text>

                        <TextInput
                            placeholder="Nhập tên, email hoặc số điện thoại"
                            style={styles.containerSearch}
                            onChangeText={setSearchText}
                            value={searchText}
                        />
                    </Block>

                    <BottomSheetScrollView
                        style={{
                            width: width,
                            paddingHorizontal: 30,
                            marginTop: 10,
                        }}>
                        {peopleSearch.map(item => (
                            <TouchableOpacity
                                onPress={() => {
                                    if (peoplesChoose[item._id]) {
                                        setPeopleChoose({
                                            ...peoplesChoose,
                                            [item._id]: false,
                                        });
                                    } else {
                                        setPeopleChoose({
                                            ...peoplesChoose,
                                            [item._id]: true,
                                        });
                                    }
                                }}>
                                <Block
                                    borderColor={
                                        peoplesChoose[item._id]
                                            ? colors.green
                                            : colors.white
                                    }
                                    borderWidth={2}
                                    radius={15}
                                    row
                                    padding={10}
                                    marginVertical={5}
                                    alignCenter
                                    flex>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={styles.imagePeople}
                                    />
                                    <Text flex marginLeft={10}>
                                        {item.name}
                                    </Text>
                                    {peoplesChoose[item._id] && (
                                        <Icon
                                            component="AntDesign"
                                            name="checkcircleo"
                                            color={colors.green}
                                            size={20}
                                        />
                                    )}
                                </Block>
                            </TouchableOpacity>
                        ))}
                    </BottomSheetScrollView>
                </Block>
                <TouchableOpacity
                    onPress={async () => {
                        const body = {
                            bodySend: {
                                name: nameGroup,
                                image: '',
                                users: [
                                    ...Object.keys(peoplesChoose),
                                    myInfo._id,
                                ],
                            },
                            token: myInfo.token,
                        };

                        const response = await createGroup(body);

                        if (response.data.statusCode === 200) {
                            bottomSheetRef.current.snapToIndex(-1);
                            setPeopleChoose({});
                            setNameGroup('');
                            CustomToast('Tạo nhóm thành công');

                            const { data } = await getRoomChat(myInfo.token);
                            setDataGroups(data);
                        } else {
                            CustomToast('Đăng kí thất bại');
                        }
                    }}>
                    <Block
                        width={width * 0.85}
                        height={50}
                        justifyCenter
                        alignCenter
                        backgroundColor={colors.primary}
                        radius={10}>
                        <Text color={colors.white}>Tạo nhóm</Text>
                    </Block>
                </TouchableOpacity>
            </Block>
        </BottomSheet>
    );

    const renderGroup = useCallback(() => {
        return (
            <FlatList
                data={dataGroups}
                keyExtractor={handleKeyExtractor}
                renderItem={renderItemChat}
                ItemSeparatorComponent={renderSpace}
                showsVerticalScrollIndicator={false}
            />
        );
    }, [dataGroups]);

    return (
        <Container style={styles.root} statusColor={colors.white}>
            <Block
                flex
                paddingHorizontal={20}
                backgroundColor={theme.colors.white}>
                <Block row alignCenter>
                    <Text flex size={28} fontType="bold" color={colors.primary}>
                        Explore
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            bottomSheetRef.current.snapToIndex(0);
                            setSearchText('');
                            setPeopleSearch([]);
                        }}>
                        <Block
                            height={30}
                            width={30}
                            borderColor={colors.grey4}
                            borderWidth={2}
                            radius={6}
                            justifyCenter
                            alignCenter>
                            <Icon
                                component="Ionicons"
                                name="md-add"
                                color={colors.grey4}
                                size={25}
                            />
                        </Block>
                    </TouchableOpacity>
                </Block>

                <Block marginBottom={15}>
                    <TextInput
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                        placeholder="Search by name..."
                        iconLeft={searchIcon}
                        style={styles.containerSearch}
                    />
                </Block>

                {renderGroup()}
                {bottomSheetInfo()}
            </Block>
        </Container>
    );
};

export default ChatScreenMyApp;

const useStyle = makeStyles()(({ normalize, colors }) => ({
    imageGroup: {
        height: normalize(50)('moderate'),
        width: normalize(50)('moderate'),
        borderRadius: normalize(15)('moderate'),
    },
    root: {
        backgroundColor: colors.white,
    },
    containerSearch: {
        height: normalize(45)('moderate'),
    },
    imagePeople: {
        height: 40,
        width: 40,
        borderRadius: 10,
    },
}));
