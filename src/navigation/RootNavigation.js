import React from 'react'
import Classes from '../screens/Classes'
import ClassesDetail from '../screens/ClassesDetail'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName='home' 
      screenOptions={{headerShown: false,}}
    >
        <Stack.Screen component={Home} name='home'/>
        <Stack.Screen component={Classes} name='classes'/>
        <Stack.Screen component={ClassesDetail} name='classesDetail'/>
    </Stack.Navigator>
  )
}

export default RootNavigation