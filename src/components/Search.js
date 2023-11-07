import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../theme/colors'

const Search = ({ text, setText}) => {

    const clearText = () => {
        setText(null);
    }
 
    return (
        <View style={styles.container}>
            <TextInput
            onChangeText={(value) => setText(value)}
            placeholderTextColor= "#000000"
            value={text}
            style={styles.input}
            placeholder=" Buscar..."
            />
            <Pressable onPress={() => clearText()}>
                <AntDesign name='close' size={35} color='white'/>
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        gap: 5,
    },
    input: {
        width: 300,
        height: 45,
        backgroundColor: colors.white,
        color: colors.black,
        borderColor: "#cfcfcf",
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 17,
    },
})