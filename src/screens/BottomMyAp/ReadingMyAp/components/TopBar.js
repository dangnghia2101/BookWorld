import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';
import {Block} from '@components';
import {theme} from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const {colors} = theme;

function TopBar({headerTitle}) {
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
    <Block
      backgroundColor={colors.orange}
      height={height}
      paddingTop={paddingTop}
      paddingHorizontal={10}>
      <Block style={styles.container}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" color="white" size={30} />
        </TouchableOpacity>
        {<Text style={styles.textHeader}>{headerName}</Text>}
      </Block>
    </Block>
  );
}

TopBar.propTypes = {};

const styles = StyleSheet.create({
  container: {
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
  },
  textHeader: {
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
