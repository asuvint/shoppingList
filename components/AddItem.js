import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddItem(props) {
    const [text, setText] = useState('')
    const handleChange = (textvalue) => {
        setText(textvalue);
    }
    return (
        <View>
            <TextInput onChangeText={handleChange} placeholder="Add Item..." style={styles.input} value={text}></TextInput>
            <TouchableOpacity onPress={() => props.appendItem(text)} style={text ? [styles.btn, { backgroundColor: 'darkslateblue' }] : [styles.btn, { backgroundColor: '#c2bad8' }]}><Text style={styles.btntext}>Add Item <Icon name="plus" size={20} color="white" /></Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderRadius: 30,
        padding: 8,
        fontSize: 16

    },
    listItem: {
        backgroundColor: '#f8f8f8',
        padding: 15,

    },
    strip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333333'

    },
    btntext: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        // backgroundColor: 'darkslateblue',
        padding: 10,
        margin: 20,
        width: "80%",
        alignSelf: 'center',
        borderRadius: 10
    },
});
