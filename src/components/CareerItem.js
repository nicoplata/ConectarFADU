import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CareerItem = ({ item, navigation}) => {

  return (
    <Pressable onPress={() => navigation.navigate('classes',{item : item})}>
      <Text style={styles.classText}>{item}</Text>
    </Pressable>
  )
}

export default CareerItem

const styles = StyleSheet.create({
    classText: {
        fontSize: 22,
        marginHorizontal: 20,
        marginVertical: 8,
        color: colors.black,
        alignItems: 'center',
        justifyContent: 'center',

        borderColor: colors.blue,
        borderWidth: 2,
        borderRadius: 10,

        textAlign: "center",
        padding: 5,
        margin: 2,
    }
})