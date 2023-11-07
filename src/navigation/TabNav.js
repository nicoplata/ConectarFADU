import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation'
import Profile from '../screens/Profile'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const TabNav = () => {
  return (
    <Tab.Navigator
        initialRouteName='home' 
        screenOptions={{headerShown: false,}}
    >
        <Tab.Screen name='rootNavigation' component={RootNavigation}/>
        <Tab.Screen name='profile' component={Profile}/>
    </Tab.Navigator>
  )
}

export default TabNav

const styles = StyleSheet.create({})