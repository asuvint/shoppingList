import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'


export default function App() {
  function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  const [items, setItems] = useState([
    { id: "1", text: "egg" },
    { id: "2", text: "bread" },
    { id: "3", text: "juice" },
    { id: "4", text: "sausage" },
  ])
  const removeItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }
  const appendItem = (text) => {
    var unique = items.filter(item => item.text == text).length
    if (unique == 0)
      setItems([...items, { id: create_UUID(), text }])
    else
      Alert.alert('Duplicate', 'This Item is already Present in the list', [
        { text: 'Add Another', onPress: () => flag = 1 }
      ]);
  }
  return (
    <View style={styles.container}>
      <Header />
      <AddItem items={items} appendItem={appendItem} />
      <ListItem items={items} removeItem={removeItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

