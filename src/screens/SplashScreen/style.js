import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: 210,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageContainer: {
        width: '100%',
        height: 264,
    },
    imageSplashScreen: {
        width: '100%',
        height: 264,
    },
    textContainer: {
        width: 341,
        height: 46,
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 40,
        lineHeight: 46,
        marginTop: 20,
        marginBottom: 14,
        fontWeight: 'bold',
        color: '#45DF95',
    },
    textDescription: {
        width: 341,
        height: 14,
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 14,
        lineHeight: 14,
        marginTop: 10,
        fontWeight: 'regular',
        color: '#78746D',
    }
});
export default styles;