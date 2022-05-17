import React, {useState, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View, Linking, Alert} from 'react-native';
import moment from 'moment';
import Collapsible from 'react-native-collapsible';
// import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {notification, removeNoti} from '@redux/reducers';
import ConfirmMessage from '../../components/ConfirmMessage';
import {theme} from '@theme';
import {Text, Block} from '@components';

const ItemHistory = ({schedule}) => {
  const {colors} = theme;
  const [expanded, setExpanded] = React.useState(true);
  const [messgage, setMessgage] = useState('');
  // const {users} = useSelector(state => state.auths);

  const dispatch = useDispatch();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const [date, setDate] = useState(new Date(schedule['timestamp']));

  const [open, setOpen] = useState(false);
  // const {notis} = useSelector(state => state.notis);
  const [isShowModal, setIsShowModal] = useState(false);
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
  };

  const createChannels = (id, name) => {
    PushNotification.createChannel({
      channelId: id,
      channelName: name,
    });
  };

  const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={1}>
        <Text color={colors.text} marginLeft={15}>
          Link Online: <Text color={colors.blue}> {url} </Text>{' '}
        </Text>
      </TouchableOpacity>
    );
  };
  const handelNoti = time => {
    if (
      new Date(schedule.timestamp).getTime() - time > 0 &&
      new Date(schedule.timestamp).getTime() - new Date().getTime() > 0
    ) {
      // PushNotification.deleteChannel(`${schedule.id}_${users.user_code}`);
      PushNotification.localNotificationSchedule({
        channelId: `${schedule.id}_${users.user_code}`,
        subText: `Thông báo lịch học`,
        title: 'Click xem lịch học',
        message: `Bạn sắp có lịch học môn ${schedule.subject_name} vào ${moment(
          new Date(schedule.timestamp),
        ).format('h:mm DD-MM-YYYY')} - 
        Nội dung tiết học: ${schedule.syllabus_plan_description} - ${
          schedule.syllabus_plan_noi_dung
        }`, // message text
        date: new Date(time),
        allowWhileIdle: true,
        largeIcon: 'playstore',
        smallIcon: 'playstore',
        shortcutId: `${schedule.id}_${users.user_code}`,
        playSound: true,
        soundName: 'bcd',
        vibration: 30000,
        autoCancel: false,
        priority: 'max',
      });
    }
  };

  const onSetTime = date => {
    const message = `Bạn đã đặt báo lịch học môn ${
      schedule.subject_name
    } - thời gian là ${moment(new Date(date)).format('h:mm DD-MM-YYYY')}`;
    setMessgage(message);
    setOpen(false);
    setDate(date);
    onShowModal();
    const notifi = {
      id: `${schedule.id}_${users.user_code}`,
      time: date,
      user_code: users.user_code,
    };
    const name = `${schedule.subject_name} - ${schedule.id} - ${users.user_code}`;
    createChannels(`${schedule.id}_${users.user_code}`, name);
    handelNoti(date);
    setExpanded(false);
    dispatch(notification(notifi));
    toggleExpanded();
  };

  let check = false;
  // if (notis.length > 0) {
  //   const checkID = `${schedule.id}_${users.user_code}`;
  //   const checkClock = notis.find(item => item.id === checkID);
  //   if (checkClock && new Date(checkClock?.time) - new Date().getTime() > 0) {
  //     check = true;
  //   }
  // }

  // const renderEditTime = () => {
  //   const checkID = `${schedule.id}_${users.user_code}`;
  //   const checkClock = notis.find(item => item.id === checkID);

  //   return (
  //     <TouchableOpacity style={styles.btnBox} onPress={() => setOpen(true)}>
  //       <Text style={{color: colors.text}}>
  //         {moment(new Date(checkClock.time)).format('h:mm DD-MM-YYYY')}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  const onRemoveClock = () => {
    PushNotification.deleteChannel(`${schedule.id}_${users.user_code}`);
    const message = 'Huỷ đặt lịch thông báo thành công !';
    setMessgage(message);
    dispatch(removeNoti(`${schedule.id}_${users.user_code}`));
    onShowModal();
    toggleExpanded();
  };

  return (
    <View style={styles.accordion}>
      {isShowModal && (
        <ConfirmMessage
          message={messgage}
          onShowModal={onShowModal}
          type="success"
        />
      )}
      {check && (
        <View style={styles.clock}>
          <Ionicons name="clockcircle" size={30} color={colors.white} />;
        </View>
      )}
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleExpanded}>
          <View style={styles.box_content_item}>
            <View style={styles.box_left_title}>
              <Text size={14} colors={colors.text} fontType={'bold'}>
                {schedule.subject_name}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                color={colors.text}
                style={styles.text_bottom}>
                {schedule.subject_code}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text
                numberOfLines={2}
                color={colors.text}
                style={styles.text_bottom}>
                {schedule.subject_classname}
              </Text>
            </View>

            <View style={styles.viewIcon}>
              {expanded ? (
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color={colors.dark}
                />
              ) : (
                <Ionicons
                  name="chevron-down-outline"
                  size={24}
                  color={colors.dark}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <Collapsible duration={200} collapsed={expanded} align="center">
          <View>
            <View style={[styles.box_content_item, styles.line_top]}>
              <View style={styles.box_left_dropdown}>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Số tín chi:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {schedule.slot}
                  </Text>
                </Text>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Kỳ:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {schedule.subject_session}
                  </Text>
                </Text>
                <Text>
                  <Text color={colors.text} style={styles.text_note_content}>
                    Điểm trung bình:{' '}
                  </Text>
                  <Text color={colors.text} size={14}>
                    {schedule.average}
                  </Text>
                </Text>
              </View>
              <View style={styles.box_right_dropdown}>
                <Text>
                  <Text color={colors.text} size={14}>
                    Trạng thái:{' '}
                  </Text>
                  <Text
                    color={colors.text}
                    size={14}
                    style={
                      schedule.subject_state === 'Passed'
                        ? {color: colors.green}
                        : schedule.subject_state === 'Not passed'
                        ? {color: colors.red}
                        : {color: colors.yellow}
                    }>
                    {schedule.subject_state}
                  </Text>
                </Text>
                <Text>
                  <Text color={colors.text} size={14}>
                    Tổng số buổi học:{' '}
                  </Text>
                  <Text color={colors.text}>{schedule.sum_class}</Text>
                </Text>
              </View>
            </View>
          </View>
        </Collapsible>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  box_content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  line_top: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  box_left_title: {
    padding: 10,
    flex: 2,
  },
  text_bottom: {
    fontSize: 14,
    maxWidth: '85%',
    left: -5,
  },
  box_right_dropdown: {
    marginLeft: 30,
    marginBottom: 10,
  },
  text_note_content: {
    color: '#333',
    fontSize: 14,
  },
  box_left_dropdown: {
    marginTop: 10,
  },
  viewIcon: {
    position: 'absolute',
    right: 0,
    marginRight: -10,
  },
  clock: {
    position: 'absolute',
    left: -8,
    top: -8,
  },
});

export default ItemHistory;
