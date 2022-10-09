import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Platform,
  Image,
} from 'react-native';
import { Block } from '@components';
import { theme } from '@theme';
import IconView from '@components/Icon';
import { useNavigation, useRoute } from '@react-navigation/native';

const { colors } = theme;

function TopBar({ headerTitle }) {
  const navigation = useNavigation();
  const activeRoute = useRoute();

  let headerName = headerTitle ? headerTitle : activeRoute.name;

  const [paddingTop, setPaddingTop] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      NativeModules.StatusBarManager.getHeight(statusBarHeight => {
        const STATUS_BAR_HEIGHT = statusBarHeight.height;
        const HEIGHT = 50 + STATUS_BAR_HEIGHT;
        setPaddingTop(STATUS_BAR_HEIGHT);
        setHeight(HEIGHT);
      });
    } else {
      const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
      const HEIGHT = 50 + STATUS_BAR_HEIGHT;
      setPaddingTop(STATUS_BAR_HEIGHT);
      setHeight(HEIGHT);
    }
  }, []);

  return (
    <Block relative>
      <Image source={require('@assets/images/Ellipse.png')} />
      <Block style={styles.container}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <IconView
            component={'Ionicons'}
            name={'arrow-back'}
            size={30}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        {<Text style={styles.textHeader}>{headerName}</Text>}
      </Block>
    </Block>
  );
}

TopBar.propTypes = {};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    height: 60,
    marginTop: -5,
  },
  iconBack: {
    alignItems: 'center',
    justifyCenter: 'center',
    padding: 5,
    height: 40,
    marginLeft: 10,
  },
  textHeader: {
    position: 'absolute',
    left: '35%',
    fontSize: 18,
    color: 'white',
    marginRight: 10,
    flex: 1,
    fontWeight: 'bold',
  },
  safe: {
    backgroundColor: '#F95B00',
  },
});

export default TopBar;
