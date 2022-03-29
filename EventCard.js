import React, {Component} from 'react';
import {Text, View ,StyleSheet} from 'react-native';

export default function EventCard ({eventItem}) {
    return(
        <View style={styles.card}>
             <Text style={styles.title}>{eventItem.Hour}</Text>
             <Text style={styles.title}>{eventItem.Time} </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ded264',
        flex: 1,
        padding: 1,
        margin: 20,
        borderWidth: 1,
        border: '#000000',
        borderRadius: 10,
        borderStyle: 'solid',
        textAlign: "center",
    },
    title: {
        fontSize: 30,
    }
});