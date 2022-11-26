import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onClicked}>
        <View style={[styles.buttonContainer, props.styles]}>
            <Text style={[styles.textButton, props.styleText]}>{props.label}</Text>
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
    },
    textButton: {
        fontSize: 16,
        lineHeight: 18,
        color: 'White',
        fontWeight: 'bold',
    }
})