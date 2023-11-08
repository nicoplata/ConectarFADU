import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Header from '../components/Header';
import { colors } from '../theme/colors';
import ClassDetail from '../components/ClassDetail';
import { useSelector } from 'react-redux';

const Classes = ({ route, navigation }) => {
  const [text, setText] = useState("");
  const [classesFiltered, setClassesFiltered] = useState([]);

  const { item }= route.params;
  career = item;

  const classes = useSelector( state => state.homeSlice.allClasses)
  
  useEffect(() => {
    const filteredByCareer = classes.filter((item) => item.career.includes(career));

    const filteredClasses = text
      ? filteredByCareer.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
      : filteredByCareer;

    setClassesFiltered(filteredClasses);
  }, [career, text]);

  const groupedClasses = classesFiltered.reduce((groups, item) => {
    const group = groups[item.level] || [];
    group.push(item);
    groups[item.level] = group;
    return groups;
  }, {});

  const sections = Object.keys(groupedClasses).map((level) => ({
    title: level,
    data: groupedClasses[level],
  }));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Materias" />
        <Search setText={setText} text={text} />
        
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ClassDetail navigation={navigation} item={item}/>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.levelHeader}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 200,
  },
  levelHeader: {
    fontSize: 30,
    color: colors.blue,
    padding: 10,
    fontFamily: 'RobotoBold',
  },
});

export default Classes;