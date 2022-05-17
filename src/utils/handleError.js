import API from '@utils/api';
import {CustomToast} from '@utils/helper';
import Storage from '@utils/storage';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';
export const hanldeError = error => {
  async function handleError() {
    await API.post(`logs/write`, {message: error});
  }
  handleError();
  if (error?.data?.statusCode === 401) {
    Storage.removeItem('tokenId');
    RNRestart.Restart();
    // Alert.alert(
    //   'Phiên bản đăng nhập hết hạn',
    //   'Vui lòng đăng nhập lại tài khoản của bạn',
    //   [
    //     {
    //       text: 'Đồng ý',

    //       onPress: () => {
    //         Storage.removeItem('tokenId');
    //         RNRestart.Restart();
    //       },
    //     },
    //   ],
    //   {cancelable: false},
    // );
  } else if (error?.data?.code === 403) {
    Alert.alert(
      'Phiên bản đăng nhập hết hạn',
      'Vui lòng đăng nhập lại tài khoản của bạn',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            Storage.removeItem('tokenId');
            // store.dispatch({type: _onUnmount(actions.TOKEN_USER)});
            // store.dispatch({type: _onUnmount(actions.GET_USER_INFORMATION)});
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    CustomToast(error.data.message);
  }
};
