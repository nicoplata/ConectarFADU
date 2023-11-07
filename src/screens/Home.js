import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { careers } from '../data/careers'
import CareerItem from '../components/CareerItem';

const Home = ({ navigation }) => {


  return (
    <SafeAreaView>
      <Header title='ConectarFADU'/>
      <FlatList
      data={careers}
      keyExtractor={(key) => key}
      renderItem={({item}) => (
        <CareerItem navigation={navigation} item={item} />
      )}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})