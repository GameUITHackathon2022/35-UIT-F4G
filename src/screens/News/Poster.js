import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMG_Post1} from '../../assets/images';
import {
  Icon_Close,
  Icon_Comment,
  Icon_Like,
  Icon_Liked,
  Icon_MoreDetail,
  Icon_Share,
} from '../../assets/icons';

export default function Poster(props) {
  return (
    <View style={[props.style, styles.container]}>
      <View style={[styles.header, {marginLeft: 20}]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={props.authImage}
              style={{height: 50, width: 50}}></Image>
          </TouchableOpacity>
          <View style={{left: 20}}>
            <TouchableOpacity>
              <Text style={[styles.textColor, {fontSize: 30}]}>
                {props.name}
              </Text>
            </TouchableOpacity>
            <Text style={styles.textColor}>{props.afterTime}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            right: 10,
          }}>
          <Image source={Icon_MoreDetail} style={{right: 20}}></Image>
          <Image source={Icon_Close}></Image>
        </View>
      </View>
      <View>
        <Text style={[styles.textColor, {marginLeft: 20}]}>
          {props.Description}
        </Text>
      </View>
      <Image style={{height: 400, width: 600}} source={props.ImageSource} />
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 10,
          marginLeft: 20,
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icon_Liked}></Image>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 5},
            ]}>
            100
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.textColor, {justifyContent: 'center'}]}>
            100
          </Text>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 5},
            ]}>
            comments
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 5},
            ]}>
            100
          </Text>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 5},
            ]}>
            shares
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#D9D9D9',
          height: 1,
          marginLeft: 20,
          marginRight: 10,
        }}></View>
      <View
        style={{
          height: 1,
          marginLeft: 20,
          marginRight: 10,
        }}></View>
      <View
        style={{
          height: 50,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
          <Image source={Icon_Like}></Image>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 15},
            ]}>
            Like
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icon_Comment}></Image>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 15},
            ]}>
            Comment
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <Image source={Icon_Share}></Image>
          <Text
            style={[
              styles.textColor,
              {justifyContent: 'center', marginLeft: 15},
            ]}>
            Share
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: '#D9D9D9', height: 3}}></View>
    </View>
  );
}
const styles = {
  textColor: {
    color: '#333',
  },
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
};
