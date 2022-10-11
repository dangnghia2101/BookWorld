import {Block, Text} from '@components';
import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import IconView from '@components/Icon';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {makeStyles, useTheme} from 'themeNew';
import {useAppSelector, useAppDispatch} from '@hooks';
import {withNamespaces} from 'react-i18next';

const ItemEditMoreMy = props => {
  const navigation = useNavigation();
  const {t} = props;

  const themeStore = useAppSelector(state => state.root.themeApp.theme);
  const themeNew = useTheme(themeStore);
  const styles = useStyle(props, themeStore);

  return (
    <Block>
      <Block marginHorizontal={25} top={220}>
        <Text
          fontType={'bold'}
          color={themeNew.colors.textDark}
          size={16}
          marginVertical={10}>
          {t('purchase')}
        </Text>
        <Block>
          <Pressable
            style={[styles.btnItem, styles.shadowColor]}
            onPress={() => navigation.navigate(routes.PURCHASE_HISTORY)}>
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
                  component={'FontAwesome5'}
                  name={'clipboard-list'}
                  size={25}
                  color={'#33CCFF'}
                />
              </Block>
            </Block>
            <Block column absolute marginLeft={60}>
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Lịch sử mua hàng
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Xem thông tin mua hàng
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
            </Block>
          </Pressable>
        </Block>
        <Text
          fontType={'bold'}
          color={themeNew.colors.textDark}
          size={16}
          marginVertical={10}>
          {t('settings')}
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
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Chỉnh sửa thông tin
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Cập nhật và chỉnh sửa thông tin
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
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
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Riêng tư
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Thay đổi mật khẩu
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
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
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Thông báo
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Cài đặt thông báo
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
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
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Giao diện
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Thay đổi giao diện màn hình
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
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
              <Text
                fontType={'bold'}
                color={themeNew.colors.textDark}
                size={16}>
                Ngôn ngữ
              </Text>
              <Text color={themeNew.colors.textDark} size={12}>
                Thay đổi cài đặt ngôn ngữ
              </Text>
            </Block>
            <Block style={styles.iconItemMoreMy}>
              <IconView
                component={'AntDesigns'}
                name={'right'}
                size={15}
                color={themeNew.colors.textDark}
              />
            </Block>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
};

export default withNamespaces()(ItemEditMoreMy);

const useStyle = makeStyles()(({colors}) => ({
  btnItem: {
    width: '100%',
    height: 55,
    marginVertical: 8,
    backgroundColor: colors.backgroundDark2,
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
}));
