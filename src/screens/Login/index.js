import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
//import { FacebookIcon, InstagramIcon, GoogleIcon } from '../../assets/icon'
//import { IMG_Login } from '../../assets/images'
import { Input } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import styles from './style'
const Login = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../../assets/images/LoginImageApp.png')}/>
            </View>
            <Text style={styles.title}>Log in</Text>
            <Text style={styles.infoText}>Login with social networks</Text>
            <View style={styles.iconContainer}>
                <View style={styles.facebookContainer}>
                    <Image style={styles.facebook} source={require('../../assets/images/facebookIcon.png')}/>    
                </View>
                <View style={styles.instaContainer}>
                    <Image style={styles.insta} source={require('../../assets/images/instagramIcon.png')}/>    
                </View>
                <View style={styles.GoogleContainer}>
                    <Image style={styles.google} source={require('../../assets/images/googleIcon.png')}/>    
                </View>
            </View>
            <View style={styles.LoginInput}>
                <Input label="Email" secureTextEntry={false}/>
                <View style={{height: 16}}></View>
                <Input label="Password" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.textForgotPass}>
                <Text style={styles.textPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button label="Log in" style={styles.buttonLogin}/>
            <TouchableOpacity style={styles.textForgotPass}>
                <Text style={styles.textSignup}>Sign up</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Login