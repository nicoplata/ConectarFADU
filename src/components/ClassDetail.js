import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

const ClassDetail = ({ item, navigation }) => {
  return (
    <Pressable style={styles.classes} onPress={() => navigation.navigate('classesDetail', { item: item })}>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  classes: {
    textAlignVertical: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.grey,
    height: 'auto',
    margin: 10,
  },
  text: {
    padding: 10,
    fontSize: 15,
    fontFamily: 'RobotoRegular',
  }
});

export default ClassDetail;