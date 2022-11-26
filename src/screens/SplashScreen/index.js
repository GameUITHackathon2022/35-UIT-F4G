import React, {useState} from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './style';
//import { IMG_Illustration } from '../../assets/images';
// import IntroScreen from '../IntroScreen/IntroScreen';
const SplashScreen = () => {
    // const [currentScreen, setCurrentScreen] = useState(true);

    // setTimeout(() => {
    //     setCurrentScreen(false)
    // }, 4000);

    // if(currentScreen)
        return ( 
        <SafeAreaView style={{backgroundColor: 'white', height:'100%'}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageSplashScreen} source={require("../../assets/images/SplashScreen.png")}/>
                </View>
                <View>
                    <Text style={styles.textContainer}>
                        Plant To Earn
                    </Text>
                    <Text style={styles.textDescription}>
                        Plant tree as a gift and send a personalized card to 
                    </Text>
                    <Text style={styles.textDescription}>
                        help reforest the world and fight climate change
                    </Text>

                </View>
            </View>
        </SafeAreaView>
        )
};
export default SplashScreen;
