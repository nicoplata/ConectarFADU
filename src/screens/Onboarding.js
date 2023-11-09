import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Pressable, 
  StyleSheet 
  } from 'react-native'
import React, { useState } from 'react'
import { colors } from "../theme/colors"
import { firebase_auth } from '../firebase/firebase_auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { SafeAreaView } from 'react-native-safe-area-context'

const Onboarding = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
      try {
          const response = await createUserWithEmailAndPassword(
              firebase_auth, 
              email, 
              password
          );
          console.log(response);
          navigation.navigate('login')
      } catch (e) {
          console.log('Error en registro...', e)
      }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>ConectarFADU</Text>
        <Text style={styles.subTitle}>Registro</Text>
        <TextInput 
            placeholder=' Email'
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

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <Pressable onPress={() => navigation.navigate('login')}>
            <Text style={styles.loginText}>Ya tenes cuenta? Iniciar Sesión</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

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
  loginText: {
    marginTop: 30,
    fontSize: 15,
    color: colors.white,
    alignSelf: "center",
  },
});

export default Onboarding;