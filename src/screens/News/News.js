import {SafeAreaView, ScrollView, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Poster from './Poster';
import {IMG_Post1} from '../../assets/images';
import {Icon_Auth} from '../../assets/icons';

export default class News extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
        }}>
        <View style={styles.header}>
          <Text style={styles.text}>Plant to earn</Text>
        </View>
        <ScrollView style={styles.Posts}>
          <Poster
            name={'Manh'}
            authImage={Icon_Auth}
            style={styles.Post}
            ImageSource={IMG_Post1}
            afterTime={'10 minutes'}
            Description={'Ho Chi Minh'}></Poster>
          <Poster
            name={'Ho'}
            authImage={Icon_Auth}
            style={styles.Post}
            ImageSource={IMG_Post1}
            afterTime={'10 minutes'}
            Description={'Ho Chi Minh'}></Poster>
             <Poster
            name={'Dinh'}
            authImage={Icon_Auth}
            style={styles.Post}
            ImageSource={IMG_Post1}
            afterTime={'10 minutes'}
            Description={'Ho Chi Minh'}></Poster>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = {
  header: {
    flex: 0.1,
    backgroundColor: '#45DF95',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    left: 30,
    fontWeight: '500',
  },
  Posts: {
    flex: 0.9,
  },
  Post: {
    height: 600,
  },
};
