import { Block, Container, Icon, Text, TextInput } from '@components';
import { useAppSelector } from '@hooks';
import { routes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/core';
import {
    useGetRoomChatQuery,
    useLazyGetRoomChatQuery,
} from '@redux/servicesNew';
import { theme } from '@theme';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width } from '@utils/responsive';

const ChatScreenMyApp = () => {
    const [clicked, setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState('');
    const socketRef = useRef();
    const [getRoomChat, { isSuccess, error }] = useLazyGetRoomChatQuery();
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const { colors } = useTheme(themeStore);
    const styles = useStyle(themeStore);
    const navigation = useNavigation();
    const bottomSheetRef = useRef();
    const inset = useSafeAreaInsets();
    const snapPoints = useMemo(() => [570 + inset.bottom], [inset.bottom]);

    const myInfo = useAppSelector(state => state.root.auth);
    const { data } = useGetRoomChatQuery(myInfo.token);

    const handleKeyExtractor = item => item.toString();

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
                    Tao nhom moi
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
                            Ten nhom
                        </Text>

                        <TextInput
                            placeholder="Nhap ten nhom"
                            style={styles.containerSearch}
                        />
                    </Block>
                    <Block width="90%">
                        <Text marginBottom={-20} size={16} fontType="bold">
                            Them thanh vien
                        </Text>

                        <TextInput
                            placeholder="Nhap ten, email hoac so dien thoai"
                            style={styles.containerSearch}
                        />
                    </Block>
                </Block>
                <TouchableOpacity>
                    <Block
                        width={width * 0.85}
                        height={50}
                        justifyCenter
                        alignCenter
                        backgroundColor={colors.primary}
                        radius={10}>
                        <Text color={colors.white}>Tao nhom</Text>
                    </Block>
                </TouchableOpacity>
            </Block>
        </BottomSheet>
    );

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
                        onPress={() => bottomSheetRef.current.snapToIndex(0)}>
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

                <FlatList
                    data={data}
                    keyExtractor={handleKeyExtractor}
                    renderItem={renderItemChat}
                    ItemSeparatorComponent={renderSpace}
                />
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
}));
