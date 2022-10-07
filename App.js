import { useFCM } from '@hooks';
import React, { useEffect } from 'react';
import RootStack from './src/navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Loading } from '@components';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '@redux/storeNew';
import { StripeProvider } from '@stripe/stripe-react-native';
import ScreenUpdateProfile from '@screens/BottomMyAp/MoreMyApp/MoreScreenMyApp/components/ScreenUpdateProfile';
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
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StripeProvider publishableKey="pk_test_51LksFaBV28KdDJtD2M1w8WjYtDm8HGnb3KG4GGRPK31114970YssBRsc6KNft4I6iQSYC4U0DH89kODj2Lh82pUM00zEio45Oq">
            <App />
            <Loading />
          </StripeProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>

  );
};

export default AppWrapper;

//trong dự án, một là dùng yarn hai là dùng npm
//đừng dùng cả hai
//bây giờ bên react người ta chủ yếu dùng yarn vì, nó chỉ update nhưng cái thiếu, còn npm thì chạy lại từ đầu nên thưo
//chốt lại là dùng yarn nhé
//anh dung macOs nên ko quen bên win lắm
