import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Text} from '@components';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ItemSemestor({attendance, content, point}) {
  const {colors} = useTheme();
  return (
    <View style={styles.box_content_item}>
      <View>
        <Text color={colors.text} style={styles.titleSemestor}>
          {content.subject_name}({content.subject_code}) -{' '}
          {' ' + content.group_name}
          {content.subject_class}
        </Text>
        {attendance && (
          <>
            <Text style={styles.text}>
              Điểm trung bình:{' '}
              <Text style={styles.total_point}>{content.medium_score}</Text>{' '}
            </Text>
            <Text style={styles.text}>
              Trạng thái:{' '}
              {content.status_name == 'Passed' ? (
                <Text style={styles.text_passed}> {content.status_name} </Text>
              ) : content.tatus === 'Studying' ? (
                <Text style={styles.text_studying}>
                  {' '}
                  {content.status_name}{' '}
                </Text>
              ) : (
                <Text style={styles.text_failed}> {content.status_name} </Text>
              )}
            </Text>
          </>
        )}

        <View style={styles.viewIcon}>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={colors.dark}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#888',
    fontSize: 13,
    paddingBottom: 5,
    paddingTop: 5,
  },
  titleSemestor: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text_passed: {
    color: 'green',
    fontWeight: 'bold',
  },
  text_failed: {
    color: 'red',
    fontWeight: 'bold',
  },
  text_studying: {
    color: 'orange',
    fontWeight: 'bold',
  },
  total_point: {
    color: 'red',
    fontWeight: 'bold',
  },
  viewIcon: {
    position: 'absolute',
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  box_content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default ItemSemestor;
