import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClassesDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title={item.title} />
        <View>
          <Text>Código de Materia: {item.code}</Text>
          {item.days && item.days.length > 0 && (
            <Text>Días de cursada: {item.days.join(' y ')}</Text>
          )}
          <Text>Nivel: {item.level}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "left", 
    justifyContent: "center",
  },
});

export default ClassesDetail;