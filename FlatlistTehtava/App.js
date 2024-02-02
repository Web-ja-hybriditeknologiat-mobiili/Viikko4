import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { DATA } from './Data';
import Search from './components/Search';
import Row from './components/Row';


export default function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item )=> item.lastname.startsWith(search));
    setItems(searchArray);
  };
  const renderItem=({item}) =>(
    <Text key={item.id}> {item.fistname}{item.lastname}</Text>

  );

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem={({item}) => (
         <Row person={item} />
        )}
        
      ></FlatList>
    </SafeAreaView>
  );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});