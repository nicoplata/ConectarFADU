import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();


const AuthNav = () => {
  return (
    <Stack.Navigator 
        initialRouteName='home' 
        screenOptions={{headerShown: false, title:""}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Onboarding}/>
    </Stack.Navigator>
  )
}

export default AuthNav
