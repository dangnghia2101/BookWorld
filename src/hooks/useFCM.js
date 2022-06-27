import messaging from '@react-native-firebase/messaging';
import Storage from '@utils/storage';
import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
  channelId: 'notification-channel-id',
  channelName: 'notification-channel',
  soundName: 'default',
});

PushNotification.configure({
  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});
const useFCM = () => {
  const requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus) {
      // console.log('Permission status:', authorizationStatus);
    }
  };

  const getDeviceToken = async () => {
    const token = await messaging().getToken();
    Storage.setItem('fcmToken', token);
    return token;
  };

  useEffect(() => {
    //When the application in the foreground
    messaging().onMessage(remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      PushNotification.localNotification({
        channelId: 'notification-channel-id',
        title: remoteMessage.notification.title,
        bigText: remoteMessage.notification.body, //content for Android
        message: remoteMessage.notification.body, //content for Ios
        ignoreInForeground: false,
        smallIcon: remoteMessage.notification.android.smallIcon,
        largeIconUrl: remoteMessage.notification.android.smallIcon,
        bigPictureUrl: remoteMessage.notification.android.smallIcon,
        when: new Date(Date.now() + 60 * 1000),
        picture: remoteMessage.notification.android.smallIcon,
        color: 'red',
        ...remoteMessage,
      });
    });
  }, []);

  return {requestUserPermission, getDeviceToken};
};

export default useFCM;
