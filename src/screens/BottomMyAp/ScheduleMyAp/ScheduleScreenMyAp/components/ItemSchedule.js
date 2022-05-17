import React, {useState, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View, Linking, Alert} from 'react-native';
// import moment from 'moment';
import Collapsible from 'react-native-collapsible';
// import DatePicker from 'react-native-date-picker';
// import PushNotification from 'react-native-push-notification';
// import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {notification, removeNoti} from '@redux/reducers';
import ConfirmMessage from '../../components/ConfirmMessage';
import {theme} from '@theme';
import {Text} from '@components';
const {colors} = theme;

const ItemSchedule = ({schedule}) => {
  const [expanded, setExpanded] = React.useState(true);
  const [messgage, setMessgage] = useState('');
  // const {users} = useSelector(state => state.auths);

  // const dispatch = useDispatch();
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // const {notis} = useSelector(state => state.notis);
  const [isShowModal, setIsShowModal] = useState(false);
  const onShowModal = () => {
    setIsShowModal(prev => !prev);
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

  let check = false;

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
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={toggleExpanded}>
          <View style={styles.box_content_item}>
            <View style={styles.box_left_title}>
              <Text style={styles.text_left_title}>
                {schedule.room_name} - Ca {schedule.slot}
              </Text>
            </View>
            <View style={styles.box_right_title}>
              <Text style={[styles.text_top, {color: colors.text}]}>
                {schedule.day}
              </Text>
              <Text
                numberOfLines={2}
                style={[styles.text_bottom, {color: colors.text}]}>
                {schedule.subject_name} - {schedule.subject_code}
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
            {schedule.url_room_online ? (
              <OpenURLButton url={schedule.url_room_online}></OpenURLButton>
            ) : null}

            <View style={[styles.box_content_item, styles.text_content_item]}>
              <View style={styles.box_left_dropdown}>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Giảng đường:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.data_text_note_content,
                      {color: colors.text},
                    ]}>
                    {schedule.area_name}
                  </Text>
                </Text>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Mã môn:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.data_text_note_content,
                      {color: colors.text},
                    ]}>
                    {schedule.subject_code}
                  </Text>
                </Text>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Thời gian:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.data_text_note_content,
                      {color: colors.text},
                    ]}>
                    {schedule.slot_time}
                  </Text>
                </Text>
              </View>
              <View style={styles.box_right_dropdown}>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Lớp:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.data_text_note_content,
                      {color: colors.text},
                    ]}>
                    {schedule.group_name}
                  </Text>
                </Text>
                <Text>
                  <Text
                    style={[styles.text_note_content, {color: colors.text}]}>
                    Giảng viên:{' '}
                  </Text>
                  <Text
                    style={[
                      styles.data_text_note_content,
                      {color: colors.text},
                    ]}>
                    {schedule.activity_leader_login}
                  </Text>
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
    margin: 5,
  },
  text_content_item: {
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    margin: 10,
  },
  box_left_title: {
    width: 120,
    fontSize: 14,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(249, 92, 4)',
  },
  text_left_title: {
    fontSize: 14,
    color: colors.text,
  },
  text_bottom: {
    fontSize: 14,
    maxWidth: '75%',
  },
  text_top: {
    fontSize: 14,
  },
  box_right_title: {
    paddingLeft: 10,
  },
  box_right_dropdown: {
    marginLeft: 30,
    marginBottom: 10,
    flex: 1,
  },
  text_note_content: {
    color: '#333',
    fontSize: 14,
  },
  data_text_note_content: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  box_left_dropdown: {
    marginTop: 10,
    flex: 1,
  },
  viewIcon: {
    position: 'absolute',
    right: 0,
  },

  clock: {
    position: 'absolute',
    left: -8,
    top: -8,
  },
});

export default ItemSchedule;
