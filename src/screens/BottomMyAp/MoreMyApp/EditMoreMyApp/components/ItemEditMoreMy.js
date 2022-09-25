import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import IconView from '@components/Icon';
import {theme} from '@theme';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';

const ItemEditMoreMy = () => {
  const navigation = useNavigation();
  return (
    <Block marginHorizontal={25} top={200}>
      <Text fontType={'bold'} color={theme.colors.black} size={16}>
        Cài đặt
      </Text>
      <Block>
        <Pressable style={[styles.btnItem, styles.shadowColor]}>
          <Block
            marginHorizontal={10}
            backgroundColor={'#00000020'}
            width={40}
            height={40}
            alignCenter
            justifyContent="center"
            borderRadius={10}>
            <Block>
              <IconView
                component={'Ionicons'}
                name={'settings'}
                size={25}
                color={'#33CCFF'}
              />
            </Block>
          </Block>
          <Block column absolute marginLeft={60}>
            <Text fontType={'bold'} color={theme.colors.black} size={16}>
              Chỉnh sửa thông tin
            </Text>
            <Text color={theme.colors.black} size={12}>
              Cập nhật và chỉnh sửa thông tin
            </Text>
          </Block>
          <Block style={styles.iconItemMoreMy}>
            <IconView component={'AntDesigns'} name={'right'} size={15} />
          </Block>
        </Pressable>

        <Pressable style={[styles.btnItem, styles.shadowColor]}>
          <Block
            marginHorizontal={10}
            backgroundColor={'#00000020'}
            width={40}
            height={40}
            alignCenter
            justifyContent="center"
            borderRadius={10}>
            <Block>
              <IconView
                component={'MaterialCommunityIcons'}
                name={'shield-lock'}
                size={25}
                color={'#33CCFF'}
              />
            </Block>
          </Block>
          <Block column absolute marginLeft={60}>
            <Text fontType={'bold'} color={theme.colors.black} size={16}>
              Riêng tư
            </Text>
            <Text color={theme.colors.black} size={12}>
              Thay đổi mật khẩu
            </Text>
          </Block>
          <Block style={styles.iconItemMoreMy}>
            <IconView component={'AntDesigns'} name={'right'} size={15} />
          </Block>
        </Pressable>

        <Pressable style={[styles.btnItem, styles.shadowColor]}>
          <Block
            marginHorizontal={10}
            backgroundColor={'#00000020'}
            width={40}
            height={40}
            alignCenter
            justifyContent="center"
            borderRadius={10}>
            <Block>
              <IconView
                component={'MaterialIcons'}
                name={'notifications-active'}
                size={25}
                color={'#33CCFF'}
              />
            </Block>
          </Block>

          <Block column absolute marginLeft={60}>
            <Text fontType={'bold'} color={theme.colors.black} size={16}>
              Thông báo
            </Text>
            <Text color={theme.colors.black} size={12}>
              Cài đặt thông báo
            </Text>
          </Block>
          <Block style={styles.iconItemMoreMy}>
            <IconView component={'AntDesigns'} name={'right'} size={15} />
          </Block>
        </Pressable>

        <Pressable
          style={[styles.btnItem, styles.shadowColor]}
          onPress={() => navigation.navigate(routes.THEME_MODE)}>
          <Block
            marginHorizontal={10}
            backgroundColor={'#00000020'}
            width={40}
            height={40}
            alignCenter
            justifyContent="center"
            borderRadius={10}>
            <Block>
              <IconView
                component={'Feather'}
                name={'moon'}
                size={25}
                color={'#33CCFF'}
              />
            </Block>
          </Block>
          <Block column absolute marginLeft={60}>
            <Text fontType={'bold'} color={theme.colors.black} size={16}>
              Giao diện
            </Text>
            <Text color={theme.colors.black} size={12}>
              Thay đổi giao diện màn hình
            </Text>
          </Block>
          <Block style={styles.iconItemMoreMy}>
            <IconView component={'AntDesigns'} name={'right'} size={15} />
          </Block>
        </Pressable>

        <Pressable
          style={[styles.btnItem, styles.shadowColor]}
          onPress={() => navigation.navigate(routes.CHANGE_LANGUAGE)}>
          <Block
            marginHorizontal={10}
            backgroundColor={'#00000020'}
            width={40}
            height={40}
            alignCenter
            justifyContent="center"
            borderRadius={10}>
            <Block>
              <IconView
                component={'Entypo'}
                name={'language'}
                size={25}
                color={'#33CCFF'}
              />
            </Block>
          </Block>
          <Block column absolute marginLeft={60}>
            <Text fontType={'bold'} color={theme.colors.black} size={16}>
              Ngôn ngữ
            </Text>
            <Text color={theme.colors.black} size={12}>
              Thay đổi cài đặt ngôn ngữ
            </Text>
          </Block>
          <Block style={styles.iconItemMoreMy}>
            <IconView component={'AntDesigns'} name={'right'} size={15} />
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
};

export default ItemEditMoreMy;

const styles = StyleSheet.create({
  btnItem: {
    width: '100%',
    height: 55,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  shadowColor: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconItemMoreMy: {
    position: 'absolute',
    right: 20,
  },
  text2: {
    position: 'absolute',
    left: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
