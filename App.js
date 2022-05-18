import {Loading, ModalCodePush} from '@components';
import React from 'react';
import RootStack from './src/navigation/RootStack';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

const App = () => {
  return (
    // <Provider>
    //   <SafeAreaProvider>
    //     <RootStack />
    //     <Loading />
    //   </SafeAreaProvider>
    // </Provider>
    <SafeAreaProvider>
      <RootStack />
      <Loading />
    </SafeAreaProvider>
  );
};

export default App;

//trong dự án, một là dùng yarn hai là dùng npm
//đừng dùng cả hai
//bây giờ bên react người ta chủ yếu dùng yarn vì, nó chỉ update nhưng cái thiếu, còn npm thì chạy lại từ đầu nên thưo
//chốt lại là dùng yarn nhé
//anh dung macOs nên ko quen bên win lắm
