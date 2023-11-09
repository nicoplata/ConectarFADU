import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation'
import Profile from '../screens/Profile'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../theme/colors'
import ProfileNav from './ProfileNav'

const Tab = createBottomTabNavigator()

const TabNav = () => {
  return (
    <Tab.Navigator
        initialRouteName='home' 
        screenOptions={{headerShown: false, title:""}}>

        <Tab.Screen 
        options={{ tabBarIcon: ( {focused} ) => <Ionicons name="ios-home-sharp" size={30} color={ focused ? colors.blue : colors.lightBlue} />}}
        name='rootNavigation' 
        component={RootNavigation}/>

        <Tab.Screen
        options={{ tabBarIcon: ( {focused} ) => <MaterialIcons name="account-circle" size={30} color={ focused ? colors.blue : colors.lightBlue} />}}
        name='profileNav' 
        component={ProfileNav}/>

    </Tab.Navigator>
  )
}

export default TabNav

const styles = StyleSheet.create({
})