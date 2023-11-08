import { Pressable, StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView>
      <Header title="Mi Perfil"/>

      <View style={styles.container}>
        <Image 
        style={styles.image}
        source={{
          uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"
        }}
        />
        <Pressable>
          <Text>Cambiar foto de perfil</Text>
        </Pressable>
        <Pressable>
          <Text>Cambiar foto de perfil</Text>
        </Pressable>
        <Pressable></Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    margin: 10,
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 90,
    marginBottom: 10,
  }
})