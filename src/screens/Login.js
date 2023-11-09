import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase_auth } from '../firebase/firebase_auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      try {
          const response = await signInWithEmailAndPassword(
            firebase_auth, 
            email, 
            password
          );
          AsyncStorage.setItem("userEmail",response.user.email)      
          dispatch(setUser(response.user.email))
          dispatch(setIdToken(response._tokenResponse.idToken))
      } catch (e) {
          console.log('Error en registro...', e)
      }
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>ConectarFADU</Text>
                <Text style={styles.subTitle}>Iniciar Sesión</Text>
                <TextInput
                    placeholder=' Usuario'
                    placeholderTextColor= "#000000"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput 
                    placeholder=' Contraseña'
                    placeholderTextColor= "#000000"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <Pressable onPress={() => navigation.navigate('register')}>
                    <Text style={styles.registroText}>Registrate</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: colors.blue,
    },
    title: {
        textAlign: "center",
        color: colors.white,
        fontFamily: "RobotoBold",
        paddingVertical: 80,
        fontSize: 40,
    },
    subTitle: {
        textAlign: "center",
        color: colors.white,
        fontFamily: "RobotoBold",
        paddingBottom: 40,
        fontSize: 25,
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
        backgroundColor: colors.white,
        alignSelf: "center",
        justifyContent: "center",
        width: 200,
        marginTop: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.blue,
        textAlign: "center",
        fontSize: 17,
        fontFamily: "RobotoRegular"
    },
    registroText: {
        marginTop: 30,
        fontSize: 15,
        color: colors.white,
        alignSelf: "center",
    },
})