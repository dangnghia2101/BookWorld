import React, {useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HeaderWithButton from '@components/HeaderWithButton';
import {Text} from '@components';
import {theme} from '@theme';
import ContentData from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/TuititonScreen/ContentData';
import DocumentPicker from 'react-native-document-picker';

const data = {
  name: 'Nguyễn Đức Hải',
  studentcode: 'PH13158',
  semester: '6',
  status: '(HDI) Học đi',
  total: 0,
  time: '2019-01-01 to 2021-01-01',
};

const TuitionScreen = ({route}) => {
  const {title} = route?.params;
  const [reasonText, setReasonText] = useState('');
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [DocumentPicker.types.allFiles],
      });
      const newFileResponse = fileResponse.concat(response);
      setFileResponse(newFileResponse);
    } catch (err) {
      console.warn(err);
    }
  }, [fileResponse]);
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <>
      <HeaderWithButton title={title} isBackHeader={true} />
      <ScrollView style={styles.scroll}>
        <ContentData item={data} />
        <View style={styles.container}>
          <>
            <Text paddingVertical={10} fontType={'bold'}>
              Lí do gia hạn <Text color={theme.colors.red}>*</Text>
            </Text>
            <TextInput
              onChangeText={text => setReasonText(text)}
              value={reasonText}
              placeholder="Nhập lí do gia hạn học phí (Bắt buộc)"
              required={true}
              multiline={true}
              numberOfLines={10}
              style={styles.textInput}
            />
          </>
        </View>
        <View style={[styles.container, styles.containerFile]}>
          <>
            <Text fontType={'bold'} paddingVertical={10}>
              Tệp đính kèm
            </Text>
            <TouchableOpacity onPress={handleDocumentSelection}>
              <Text color={theme.colors.blue}>Chọn tệp đính kèm</Text>
            </TouchableOpacity>
            {fileResponse.map((file, index) => (
              <Text
                key={index.toString()}
                style={styles.uri}
                numberOfLines={1}
                ellipsizeMode={'middle'}>
                {file?.name}
              </Text>
            ))}
          </>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonJoin}>
          <Text
            size={15}
            fontType={theme.fonts.fontFamily.medium}
            color={theme.colors.white}>
            {title}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  containerFile: {
    marginBottom: 30,
  },
  textInput: {
    height: 150,
    textAlignVertical: 'top',
    borderTopWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
  },
  buttonJoin: {
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.orangeBol,
  },
  scroll: {
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginHorizontal: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    borderRadius: 8.5,
    elevation: 3,
    flex: 1,
  },
  textContent: {
    color: '#000',
    marginTop: 10,
  },
  textBody: {
    borderTopWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    margin: 10,
    borderColor: '#F5B16D',
    borderWidth: 2,
    padding: 10,
    borderRadius: 24,
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'black',
  },
});
export default TuitionScreen;
