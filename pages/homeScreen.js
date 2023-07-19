"use strict";
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) =>
{
    return (
        <View style={styles.container}>
            <Image
                source={require('./../assets/images/bus.png')}
                style={styles.image}
            />
            <Text style={styles.heading}>Book Your Ticket</Text>
            <Button
                title="Select Your City"
                onPress={() => navigation.navigate('Select Your City')}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 125,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 200,
        paddingVertical: 20,
        paddingBottom: 20,
        borderRadius: 20,
        textAlign: "center"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        width: 10
    },
});