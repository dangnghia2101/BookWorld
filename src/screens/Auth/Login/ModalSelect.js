import {Button, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomToast} from '@utils/helper';

const ModalSelect = ({
  isVisible,
  onHideModal,
  listDepartments,
  setIdDepartment,
}) => {
  const [selected, setSelected] = useState();
  const handleSelectDepartment = () => {
    if (!selected) {
      CustomToast('Vui lòng chọn cơ sở đào tạo');
      return;
    }
    setIdDepartment(selected);
  };
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={isVisible}
      onRequestClose={onHideModal}
      statusBarTranslucent={true}>
      <Pressable style={styles.touchableOpacity} onPress={onHideModal}>
        <Pressable style={styles.pressable}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {!listDepartments && (
              <ActivityIndicator size="small" color={theme.colors.orange} />
            )}
            {listDepartments?.map((item, index) => (
              <Button
                key={item._id}
                style={[
                  styles.buton,
                  {
                    backgroundColor:
                      selected?._id === item._id
                        ? theme.colors.orange
                        : theme.colors.white,
                  },
                ]}
                onPress={() => setSelected(item)}>
                <Text
                  style={[
                    {
                      color:
                        selected?._id === item._id
                          ? theme.colors.white
                          : theme.colors.black,
                    },
                  ]}
                  center>
                  {item.name}
                </Text>
              </Button>
            ))}
          </ScrollView>

          <View style={styles.view}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSelectDepartment}
              style={styles.TouchableOpacityOnHindeModal}>
              <Text color={selected ? theme.colors.orange : theme.colors.gray}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ModalSelect;

const styles = StyleSheet.create({
  touchableOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pressable: {
    backgroundColor: 'white',
    padding: 10,
    minWidth: '80%',
    borderRadius: 30,
    justifyContent: 'flex-end',
    height: 500,
  },
  TouchableOpacityOnHindeModal: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  view: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
  buton: {
    paddingVertical: 15,
    borderBottomColor: theme.colors.smoke,
    borderBottomWidth: 0.5,
    borderRadius: 30,
  },
});
