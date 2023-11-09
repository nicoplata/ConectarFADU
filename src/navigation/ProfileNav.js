import React from 'react'
import Profile from '../screens/Profile'
import Map from "../screens/Map";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
        initialRouteName='profile'
        screenOptions={{
            headerShown: false,
        }}>
      <Stack.Screen name='profile' component={Profile} />
      <Stack.Screen name='map' component={Map} />
    </Stack.Navigator>
  )
}

export default ProfileNav