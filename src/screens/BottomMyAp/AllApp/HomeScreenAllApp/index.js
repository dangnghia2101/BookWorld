import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Block} from '@components';
import HeaderWithButton from '@components/HeaderWithButton';
import {routes} from '@navigation/routes';
import {FlatList} from 'react-native-gesture-handler';
import {width} from '@utils/responsive';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HeaderScheduleMyAp from '@screens/BottomMyAp/ScheduleMyAp/components/HeaderScheduleMyAp';

const HomeScreenAllApp = () => {
  const navigation = useNavigation();
  const login = useSelector(state => state.login);

  const listApp = [
    {
      name: 'Emotion Passport',
      icon: require('@assets/images/IconNotification.png'),
      path: routes.BOTTOM_TAB,
    },
  ];

  const renderApp = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.path)}
        style={styles.button}>
        <Image style={styles.icon} source={item.icon} />
        <Text numberOfLines={1} style={styles.nameApp}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block flex>
      <HeaderScheduleMyAp data={login.data?.user} />
      {/* <Button onPress={navigation.toggleDrawer} title="Thêm ứng dụng" /> */}
      <FlatList
        data={listApp}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderApp}
        contentContainerStyle={styles.container}
      />
    </Block>
  );
};

export default HomeScreenAllApp;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  icon: {
    width: width / 5,
    height: width / 5,
    borderRadius: 8,
  },
  nameApp: {
    fontSize: 16,
    color: theme.colors.dark,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3,
  },
});
