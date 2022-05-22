import React, {useState, useEffect} from 'react';
import {Block} from '@components';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';
import {theme} from '@theme';
import IconView from '@components/Icon';
import {useNavigation, useRoute} from '@react-navigation/native';

const Topbar = ({route}) => {
  const navigation = useNavigation();

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
    <Block
      height={height}
      paddingTop={paddingTop}
      paddingHorizontal={10}
      alignCenter
      justifyCenter>
      <Block style={styles.container}>
        <TouchableOpacity style={styles.iconBack}>
          <IconView name="arrow-left" size={20} color={theme.colors.black} />
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  iconBack: {
    alignItems: 'center',
    justifyCenter: 'center',
    padding: 5,
  },
  textHeader: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
    flex: 1,
    fontWeight: 'bold',
  },
});

export default Topbar;
