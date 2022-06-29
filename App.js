import {useFCM} from '@hooks';
import React, {useEffect} from 'react';
import RootStack from './src/navigation/RootStack';
import store from '@redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Loading} from '@components';

const App = () => {
  const fcm = useFCM();
  useEffect(() => {
    fcm.requestUserPermission();
    fcm
      .getDeviceToken()
      .then(device_token => {
        console.log('device_token----->', device_token);
      })
      .catch(e => console.log('error get token firebase -----> ', e));
  }, [fcm]);

  return <RootStack />;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
        <Loading />
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;

//trong dự án, một là dùng yarn hai là dùng npm
//đừng dùng cả hai
//bây giờ bên react người ta chủ yếu dùng yarn vì, nó chỉ update nhưng cái thiếu, còn npm thì chạy lại từ đầu nên thưo
//chốt lại là dùng yarn nhé
//anh dung macOs nên ko quen bên win lắm
