import { Pressable, StyleSheet, Image, View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from "expo-image-picker"
import { useGetImageQuery, usePutImageMutation } from '../services/Api'

const Profile = () => {

  const [putImage, result] = usePutImageMutation();
  
  const { data, isLoading, error, isError, refetch } = useGetImageQuery();

  const defaultImage = "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699315200&semt=ais"
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });

      refetch();
    }
  }

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      if (!result.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        refetch();
      }
    }
  };

  return (
    <SafeAreaView>
      <Header title="Mi Perfil"/>
      <View style={styles.container}>
          { isLoading ? (
            <View 
              style={{
                flex: 1, 
                justifyContent: 'center', 
                alignContent: 'center'
              }}
            >
              <ActivityIndicator 
                style={{ flex: 1 }}
                size="large" 
                color="#0000ff" 
              />
            </View>
            ) : (
            <Image 
              style={styles.image} 
              source={{
                uri: data ? data.image : defaultImage,
              }}
            />
          )}
        <Text style={styles.changeProfilePhotoText} >Cambiar foto de perfil</Text>
        <Pressable
        style={styles.iconContainer}
        onPress={() => openCamera()}
        >
          <Text style={styles.changeProfilePhotoText}>Abrir Cámara</Text>
        </Pressable>
        <Pressable
        style={styles.iconContainer}
        onPress={() => pickImage()}
        >
          <Text style={styles.changeProfilePhotoText}>Abrir Galería</Text>
        </Pressable>
        <Pressable style={styles.singOutButton} onPress={() => console.log('cerrar sesion')}>
          <Text style={styles.singOutText}>Cerrar Sesion</Text>
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
    width: 250,
    height: 250,
    borderRadius: 90,
    marginBottom: 10,
  },
  changeProfilePhotoText: {
    fontSize: 25,
    marginTop: 20,
    fontFamily: "RobotoMedium",
  },
  iconContainer: {
    marginVertical: 20,
  },
  singOutButton: {
    marginTop: 100,
  },
  singOutText: {
    fontSize: 25,
    marginTop: 20,
    fontFamily: "RobotoMedium",
  }
})