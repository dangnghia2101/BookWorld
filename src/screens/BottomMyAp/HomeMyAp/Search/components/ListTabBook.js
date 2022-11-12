import { Block, Icon, Text } from '@components';
import { useAppSelector } from '@hooks';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Pressable, Image } from 'react-native';
import { makeStyles, useTheme } from 'themeNew';

const DATA_SEARCH = [
    { name: 'Sach 1', key: 1 },
    { name: 'Sach 1', key: 1 },
    { name: 'Sach 1', key: 1 },
];

const ListTabBook = ({ route, search, setSearch }) => {
    const themeStore = useAppSelector(state => state.root.themeApp.theme);
    const allBooks = useAppSelector(state => state.root.book.bookList);
    const { colors } = useTheme(themeStore);
    const styles = useStyle(themeStore);
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        if (search) {
            setListSearch(
                allBooks
                    .filter(item => item.name.search(search) !== -1)
                    .slice(0, 3),
            );
        } else {
            setListSearch([]);
        }
    }, [search]);

    const ItemHistory = ({ title }) => (
        <Pressable onPress={() => setSearch(title)} style={styles.itemHistory}>
            <Icon
                component="MaterialIcons"
                name="history"
                size={25}
                color={colors.grey10}
            />
            <Text style={styles.titleItemHistory}>{title}</Text>
            <Block>
                <Icon
                    component="MaterialIcons"
                    name="clear"
                    size={25}
                    color={colors.grey10}
                />
            </Block>
        </Pressable>
    );

    const ItemBook = item => {
        return (
            <Block height={70} row alignCenter marginHorizontal={20}>
                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                <Block flexGrow={1} marginLeft={10} paddingTop={10}>
                    <Text fontType="bold">{item.name}</Text>
                    <Text flexGrow={1}>{item.introduction}</Text>
                </Block>
                <Pressable>
                    <Block
                        backgroundColor={colors.primary}
                        radius={5}
                        paddingHorizontal={10}
                        paddingVertical={5}>
                        <Text color={colors.text}>Read</Text>
                    </Block>
                </Pressable>
            </Block>
        );
    };

    const SectionHeader = title => (
        <View style={styles.containerSection}>
            <Text style={styles.headerSection}>{title}</Text>
        </View>
    );

    return (
        <Block paddingTop={15}>
            {listSearch && listSearch?.slice(0, 3).map(item => ItemBook(item))}

            {listSearch.length > 0 && (
                <Text
                    color={colors.primary}
                    fontType="bold"
                    marginLeft={20}
                    marginBottom={10}>
                    View all {allBooks.length - 4} books
                </Text>
            )}
            <FlatList
                ListHeaderComponent={SectionHeader('Research History')}
                data={DATA_SEARCH}
                keyExtractor={item => item._id}
                renderItem={item => <ItemHistory title={item.item.name} />}
            />
        </Block>
    );
};

export default ListTabBook;

const useStyle = makeStyles()(({ colors }) => ({
    itemHistory: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: colors.grey14,
        borderBottomWidth: 2,
    },
    titleItemHistory: {
        fontSize: 16,
        color: colors.grey4,
        marginLeft: 10,
        flexGrow: 1,
    },
    containerSection: {
        height: 60,
        backgroundColor: colors.grey15,
        justifyContent: 'center',
    },
    headerSection: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    imageStyle: {
        height: 50,
        width: 40,
        borderRadius: 5,
    },
}));
