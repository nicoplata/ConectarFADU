import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        alignItems: 'left',
        justifyContent: "center",
        backgroundColor: colors.blue,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 25,
        color: colors.white,
        fontFamily: 'RobotoBold',
        margin: 20,
    },
});

export default Header