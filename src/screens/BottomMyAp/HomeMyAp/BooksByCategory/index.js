import { Block, HeaderWithButton, Text } from '@components';
import { useAppSelector } from '@hooks';
import { useLazyGetAllBookByCategoryQuery } from '@redux/servicesNew';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'themeNew';
import ItemCateBook from '../HomeScreenMyAp/components/ItemCateBook';

const BooksByCategory = ({ route }) => {
  const { id, title } = route.params
  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const { colors } = useTheme(themeStore)

  const [getAllBookByCategory] = useLazyGetAllBookByCategoryQuery();
  const [data, setData] = useState([])

  useEffect(async () => {
    const listBookByCategory = await getAllBookByCategory(id)
    setData(listBookByCategory.data)
  }, [])

  const renderEmty = useCallback(() => (
    <Block flex justifyCenter alignCenter>
      <Text>Không có sách</Text>
    </Block>
  ))

  return (
    <Block flex>
      <HeaderWithButton title={title} isBackHeader backgroundColor={colors.grey16} />
      {data.length > 0 ? (<ScrollView>
        {data?.map((item, index) => (
          <ItemCateBook key={item._id} item={item} />
        ))}
      </ScrollView>) : renderEmty()}

    </Block>
  );
};

const styles = StyleSheet.create({

});

export default BooksByCategory;
