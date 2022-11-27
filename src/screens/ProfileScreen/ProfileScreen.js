import {Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import { AVATAR, COURSE, DONATION, ICON_BACK, TREE } from '../../assets/images';

const windowWidth = Dimensions.get('window').width;
export default function ProfileScreen(props) {

    return (
        <SafeAreaView>
          {/* header */}
          <View style={styles.Container1}>

            <TouchableOpacity style={styles.ButtonStyle} onPress={()=>props.navigation.goBack()}  >
              <Image source={ICON_BACK} style={styles.ImageStyle1}/>
            </TouchableOpacity>

            <Text style={styles.TextTitle}>Profile</Text>

          </View>

          <View style={styles.Container4}>
            
            <View style={styles.Container2}>
              <Image source={AVATAR} style={styles.StyleAvatar}/>
              <Image source={TREE} style={styles.StyleAvatar}/>
            </View>

            <View style={styles.Container3}>
              <Text style={styles.StyleName}>Annie</Text>
              <Text style={styles.StyleName}>126 trees</Text>
            </View>
          </View>

          <View style={styles.ContainerInfo}>
            <Text style={styles.StyleUserName}>User name:   Ms. Annie</Text>
          </View>

          <View style={styles.ContainerInfo}>
            <Text style={styles.StyleUserName}>Full Name:   Annie Jogjina </Text>
          </View>

          <View style={styles.ContainerInfo}>
            <Text style={styles.StyleUserName}>Phone number:   037102986</Text>
          </View>

          <View style={styles.ContainerInfo}>
            <Text style={styles.StyleUserName}>Gmail:   Annie@gmail.com</Text>
          </View>

          <TouchableOpacity style={styles.styleButtonHistory}>
            <Text style={styles.textButton}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.styleButtonHistory}>
            <Text style={styles.textButton}>Logout</Text>
          </TouchableOpacity>

         

        </SafeAreaView>
    );
  
}

const styles =StyleSheet.create({
    ContainerNavigate: {
      width: 40,
      height: 40,
      marginLeft: 55,
      marginTop: 30,
    },
    NavigateStyle: {
      width: windowWidth,
      height: 110,
      marginTop: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderColor: 'gray',
      flexDirection: 'row',
    },
    StyleImageCource:{
      width: 24,
      height: 24,
    },
    StyleTextNavigate: {
      fontSize: 12,
      width: 54,
      height: 24,
    },
    StyleTextNavigate1: {
      fontSize: 12,
      width: 54,
      height: 24,
      color: '#45DF95'
    },
    textButton: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      
    },
    styleButtonHistory:{
      width: windowWidth- 200, 
      marginHorizontal: 100,
      height: 50,
      backgroundColor: '#71BCE5',
      borderRadius: 20,
      marginTop: 10,
      justifyContent: 'center',
      
    },
    Container1: {
        width: 430,
        height: 53,
        margin: 30,
        flexDirection: 'row',
    },
    ButtonStyle:{
        height: 60,
        width: 60,
    },
    TextTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginHorizontal: 80,
    },
    ImageStyle1: {
      height: 50,
      width: 50,
    },
    Container2: {
        marginLeft: 80,
        marginTop: 40,
        flexDirection: 'row',
    },
    StyleAvatar: {
      width: 90,
      height: 90,
      margin: 20,
      marginTop: 0,
    },
    Container3:{
      flexDirection: 'row',
    },
    Container4: {
      flexDirection: 'column',
      width: 180,
    },
    StyleName: {
      marginLeft: 100,
      fontSize: 22,
      fontWeight: 'bold',
    },
    ContainerInfo: {
      height: 50,
      width: windowWidth - 30,
      justifyContent: 'center',
      paddingLeft: 20,
      marginHorizontal: 15,
      borderRadius: 20,
      marginTop: 10,
      borderWidth: 4,
    },
    StyleUserName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
});

