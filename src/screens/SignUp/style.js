import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: 63,
        alignItems: 'center',
    },
    backIcon:{
        width: 20,
        height: 20,
    },
    backIconContainer:{
        position: 'absolute',
        top: 27,
        left: 15,
        borderRadius: 48,
        borderWidth: 1,
        width: 48,
        height: 48,
        borderColor: '#78746D',
        justifyContent: 'center',
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
        color: 'black',
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
    LoginInput:{
        marginBottom: 16,
        marginTop: 16,
    },
    textForgotPass:{

    },
    textPassword:{
        color: 'black',
        fontWeight: 'regular',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 16,
    },
    buttonLogin:{
        
    },
    textForgotPass:{
        
    },
    textSignup: {
        color: 'black', 
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        marginTop: 16,
    }
});

export default styles;