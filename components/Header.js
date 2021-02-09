import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Shopping List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,

    }
});
