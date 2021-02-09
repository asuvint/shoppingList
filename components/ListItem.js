import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function listItem(props) {
    return (
        <View style={{ maxHeight: "55%" }}>
            <FlatList data={props.items} renderItem={({ item }) =>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.strip}>
                        <Text style={styles.text}>{item.text}</Text>
                        <Icon name="remove" size={20} color='firebrick' onPress={() => props.removeItem(item.id)}></Icon>
                    </View>
                </TouchableOpacity>
            } />
        </View>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        padding: 15,

    },
    listItem: {
        // backgroundColor: '#f8f8f8',
        padding: 8,
        flex: 1,
        // backgroundColor: 'yellow',
        //maxHeight: 40,
        marginLeft: 40,
        marginRight: 40,

    },
    strip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#333333'

    }
});
