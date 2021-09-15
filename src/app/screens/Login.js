import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const imgDr = require('../assets/images/doctorimg.png');

export default function Login({navigation}) {
    return(
        <View>
            <Text style={styles.titles}> BIENVENIDO! </Text>
            <Image source={imgDr} style={styles.mainImg} />
            <Button
            title="Ir al consultorio"
            onPress={() => navigation.navigate('Chatbot')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titles: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2b80cf',
        textAlign: 'center'
    },
    mainImg: {
        marginTop: 40,
        height: 400,
        width: 400
    }
});