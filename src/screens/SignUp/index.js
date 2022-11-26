import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import styles from './style'
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.backTouch}>
            <View style={styles.backIconContainer}>
                <Image style={styles.backIcon} source={require('../../assets/icons/backIcon.png')}/>
            </View>
        </TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../../assets/images/SignUpImage.png')}/>
            </View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.infoText}>Create your account</Text>
            <View style={styles.LoginInput}>
                <Input label="Name" secureTextEntry={false}/>
                <View style={{height: 16}}></View>
                <Input label="Email" secureTextEntry={false}/>
                <View style={{height: 16}}></View>
                <Input label="Password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.textForgotPass}>
                <Text style={styles.textPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button label="Sign up" style={styles.buttonLogin}/>
            <TouchableOpacity style={styles.textForgotPass}>
                <Text style={styles.textSignup}>Log in</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignUp