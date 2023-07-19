import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const CityScreen = ({navigation}) => {
    const [fair, setFair] = useState(null);
    const [city, setCity] = useState(null);
    const [buttonPressed, setButtonPressed] = useState(false);
    useEffect (() => {
        if(buttonPressed) {
            alert('Your ticket for ' + city + ' is booked. Your Fair is: Rs.' + fair);
        }
    }, [fair, city, buttonPressed]);
    const Lahore = () => {
        setFair(1285);
        setCity('Lahore');
        setButtonPressed(true);
    };
    const Karachi = () => {
        setFair(5285);
        setCity('Karachi');
        setButtonPressed(true);
    };
    const Sialkot = () => {
        setFair(4285);
        setCity('Sialkot');
        setButtonPressed(true);
    };
    const Peshawar = () => {
        setFair(5450);
        setCity('Peshawar');
        setButtonPressed(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Select Your City</Text>
            <TouchableOpacity style={styles.button} onPress={Lahore}>
                <Text style={styles.text}>Lahore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Karachi}>
                <Text style={styles.text}>Karachi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Sialkot}>
                <Text style={styles.text}>Sialkot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Peshawar}>
                <Text style={styles.text}>Peshawar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CityScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingVertical: 200,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        width: 150,
        padding: 8,
        borderRadius: 5, 
        backgroundColor: '#007AFF',
        textAlign: "center"
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        color: 'white',
        fontWeight: "bold"
    },
    text01: {
        fontSize: 12,
        textAlign: "center",
        color: 'black',
        fontWeight: "normal"
    },
})