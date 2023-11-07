import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors';
import Search from '../components/Search';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.title}>ConectarFADU</Text>
            <TextInput
                placeholder='Nombre de usuario'
                placeholderTextColor= "#000000"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput 
                placeholder='Contraseña'
                placeholderTextColor= "#000000"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={console.log('login')}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Pressable /* onPress={() => navigation.navigate('register')} */>
                <Text style={styles.registroText}>Registrate</Text>
            </Pressable>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        paddingBottom: 50,
        fontSize: 30,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: colors.white,
        color: colors.black,
        borderColor: "#cfcfcf",
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        fontSize: 17,
    },
    button: {
        backgroundColor: colors.pink,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    registroText: {
        marginTop: 30,
        fontSize: 15,
        color: colors.white,
    },
})