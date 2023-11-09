import { Pressable, StyleSheet, Image, View, Text, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from "expo-image-picker"
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons"
import { useGetImageQuery, usePutImageMutation } from '../services/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { clearUser } from '../redux/slices/authSlice'

const Profile = ({ navigation }) => {

  const [putImage, result] = usePutImageMutation();
  
  const { data, isLoading, error, isError, refetch } = useGetImageQuery();

  const [location, setLocation] = useState(null);

  const dispatch = useDispatch();

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

  const getCoords = async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permiso fue denegado");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    navigation.navigate("map", {location});  
  };

  const handleLogout = async () => {
    try {
      dispatch(clearUser());
      await AsyncStorage.removeItem("userEmail");
    }catch (e) {
      console.log(e);
    }
  }

  const onLogout = () =>
    Alert.alert('Cerrar Sesión', '¿Estás seguro que deseas cerrar sesión?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleLogout()},
    ]);

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
        <Text style={styles.changeProfilePhotoTextTitle}>Cambiar foto de perfil</Text>
        <View>
          <Pressable
          style={styles.buttonContainer}
          onPress={() => openCamera()}
          >
            <Entypo name='camera' size={24} color="black"/>
            <Text style={styles.changeProfilePhotoText}> Abrir Cámara</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
          style={styles.buttonContainer}
          onPress={() => pickImage()}
          >
            <FontAwesome name='photo' size={24} color="black"/>
            <Text style={styles.changeProfilePhotoText}> Abrir Galería</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.buttonContainer} onPress={() => getCoords()}>
                  <FontAwesome name='map' size={20} color="black"/>
                  <Text style={styles.changeProfilePhotoText}> Abrir Mapa</Text>
          </Pressable>
        </View>
        <Pressable style={styles.singOutButton} onPress={onLogout}>
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
    width: 200,
    height: 200,
    borderRadius: 90,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  changeProfilePhotoTextTitle:{
    fontSize: 25,
    marginTop: 20,
    fontFamily: "RobotoMedium",
  },
  changeProfilePhotoText: {
    fontSize: 20,
    fontFamily: "RobotoRegular",
  },
  singOutButton: {
    marginTop: 50,
  },
  singOutText: {
    fontSize: 25,
    fontFamily: "RobotoMedium",
  }
})