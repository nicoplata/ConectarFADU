import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CareerItem from '../components/CareerItem';
import { useGetCareersQuery } from '../services/Api';

const Home = ({ navigation }) => {

  const items = useGetCareersQuery()

  const careers = items.data;

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