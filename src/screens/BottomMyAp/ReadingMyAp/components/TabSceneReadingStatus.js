import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Block, Text } from '@components';
import ItemCateBook from '@screens/BottomMyAp/HomeMyAp/HomeScreenMyAp/components/ItemCateBook';
import { useAppSelector } from 'hooks';
import { withNamespaces } from 'react-i18next';
const TabSceneReadingStatus = ({ route, t }) => {
  const allBooks = useAppSelector(state => state.root.book.bookList);
  return allBooks.length > 0 ? (
    <ScrollView>
      {allBooks.map((item, index) => (
        <ItemCateBook key={index} item={item} />
      ))}
    </ScrollView>
  ) : (
    <Text>{t('noBook')}</Text>
  );
};

export default withNamespaces()(TabSceneReadingStatus);
