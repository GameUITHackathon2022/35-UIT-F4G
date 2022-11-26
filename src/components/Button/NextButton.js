import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={
        props.scrollTo
    }>
        <View style={[styles.buttonContainer]}>
            <Text style={styles.textButton}>{props.label}</Text>
        </View>
    </TouchableOpacity>
  )
};
export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 311,
        height: 56,
        backgroundColor: '#45DF95',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        alignSelf: 'center',
    },
    textButton: {
        fontSize: 16,
        lineHeight: 18,
        color: 'white',
        fontWeight: 'bold',
    }
})