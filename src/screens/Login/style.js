import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: 63,
        alignItems: 'center',
    },
    imgContainer:{
        width: 343,
    },
    image:{
        width: '100%',
    },
    title:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        width: 341,
        textAlign: 'center',
        marginTop: 16,
    },
    infoText:{
        color: '#78746D',
        fontSize: 14,
        LineHeight: 21,
        width: 341,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'regular',

    },
    iconContainer:{
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 16,
    },
    facebookContainer:{
        borderRadius: 10,
    },
    facebook:{
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    instaContainer:{
        marginLeft: 12,
        marginRight: 12,
    },
    insta:{
        width: 40,
        height: 40,
    },
    GoogleContainer:{
        width: 40,
        height: 40,
        backgroundColor: '#65AAEA',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    google:{
        width: 30,
        height: 30,
    },
    LoginInput:{
        marginBottom: 16,
    },
    textForgotPass:{

    },
    textPassword:{
        color: '#78746D',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 16,
    },
    buttonLogin:{
        
    },
    textForgotPass:{
        
    },
    textSignup: {
        color: '#78746D',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        marginTop: 16,
    }
});

export default styles;