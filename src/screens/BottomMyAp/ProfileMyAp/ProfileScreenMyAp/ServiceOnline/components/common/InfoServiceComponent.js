import React, {memo, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector} from 'react-redux';
import SectionHeader from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/SectionHeader';
import SectionFooter from '@screens/BottomMyAp/ProfileMyAp/ProfileScreenMyAp/ServiceOnline/components/common/SectionFooter';
import {Text} from '@components';
import {theme} from '@theme';

function InfoServiceComponent({
  data,
  type,
  date,
  submit,
  number,
  reason,
  dataSlot,
  titleSelect1,
  titleSelect2,
}) {
  // const {info} = useSelector(state => state.infoUser);
  const info = {
    full_name: 'Nguyễn Văn A',
    user_code: 'PS00001',
  };
  const [typeSelect, setTypeSelect] = useState('');

  return (
    <>
      <SectionHeader date={date} />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.infoStudent}>Thông tin sinh viên</Text>
          <>
            <Text style={styles.text}>Họ và tên: {info.full_name}</Text>
            <Text style={styles.text}>Mã sinh viên: {info.user_code}</Text>
            <Text style={styles.text}>Ký thứ: 6</Text>
            <Text style={styles.text}>
              Trạng thái: <Text style={styles.colorStatus}>(HDI) Học đi</Text>
            </Text>
            <Text style={styles.text}>Loại dịch vụ: {type}</Text>
            <View style={styles.column}>
              <Text style={styles.lableSelect}>{titleSelect1}:</Text>
              <TouchableOpacity>
                <SelectDropdown
                  data={data}
                  buttonStyle={styles.buttonStyle}
                  buttonTextStyle={styles.buttonTextStyle}
                  dropdownStyle={styles.dropdownStyle}
                  defaultButtonText={`${titleSelect1} học`}
                  onSelect={selectedItem => {
                    setTypeSelect(selectedItem);
                  }}
                  buttonTextAfterSelection={selectedItem => {
                    return selectedItem;
                  }}
                  rowTextForSelection={item => {
                    return item;
                  }}
                />
              </TouchableOpacity>
            </View>
            {dataSlot && (
              <View style={styles.column}>
                <Text style={styles.lableSelect}>Chọn ca:</Text>
                <TouchableOpacity>
                  <SelectDropdown
                    data={dataSlot}
                    buttonStyle={styles.buttonStyle}
                    buttonTextStyle={styles.buttonTextStyle}
                    dropdownStyle={styles.dropdownStyle}
                    defaultButtonText={`${titleSelect2} học`}
                    onSelect={selectedItem => {}}
                    buttonTextAfterSelection={selectedItem => {
                      return selectedItem;
                    }}
                    rowTextForSelection={item => {
                      return item;
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.text}>Số tiền: 0</Text>
            {number && (
              <View>
                <Text style={styles.text}>Phí dịch vụ: 0</Text>
                <Text style={styles.text}>
                  Ngày đăng ký: {new Date().toLocaleDateString()}
                </Text>
                <Text style={styles.text}>
                  Số điện thoại <Text color={theme.colors.red}>*</Text>
                </Text>
                <TextInput
                  placeholder="Nhập số điện thoại( bắt buộc )"
                  required={true}
                  multiline={true}
                  numberOfLines={2}
                  style={styles.textInput}
                />
              </View>
            )}
            {reason && reason.length !== 0 ? (
              <View>
                <Text fontType={'bold'} marginTop={5} marginRight={20}>
                  Lí do <Text color={theme.colors.red}>*</Text>
                </Text>
                <TextInput
                  placeholder={`Nhập lí do muốn ${reason}(Bắt buộc)`}
                  required={true}
                  multiline={true}
                  numberOfLines={10}
                  style={[styles.textInput, styles.textInputReason]}
                />
              </View>
            ) : null}
          </>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => submit(typeSelect, info)}>
          <Text style={styles.touchable}>Hoàn tất đăng ký</Text>
        </TouchableOpacity>
      </View>
      <SectionFooter userCode={info.user_code} />
    </>
  );
}
export default memo(InfoServiceComponent);
const styles = StyleSheet.create({
  textInputReason: {
    height: 150,
  },
  textInput: {
    height: 40,
    marginTop: 5,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  touchable: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'green',
    color: '#ffffff',
    borderRadius: 15,
  },
  content: {
    padding: 15,
    borderColor: 'rgba(158, 150, 150, 0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  titleTime: {
    paddingLeft: 15,
    color: 'red',
  },
  infoStudent: {
    color: '#646c9a',
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: 'rgba(158, 150, 150, .5)',
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  column: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  dropdown: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 15,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  colorStatus: {
    color: 'green',
  },
  colorTextDate: {
    color: 'red',
    paddingLeft: 15,
    paddingTop: 5,
  },
  lableSelect: {
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 10,
    width: 80,
    color: 'black',
  },
  buttonStyle: {
    borderRadius: 10,
    height: 35,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  dropdownStyle: {
    borderRadius: 10,
    width: 230,
    height: 150,
  },
});
