import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export class SwipeContent extends Component {
    constructor (props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.imageContent} source={this.props.imgName}/>
                </View>
                <Text style={styles.titleContent}>{this.props.title}</Text>
                <Text style={styles.bodyContent}>{this.props.body}</Text>
            </View>
        );
    }
};

export default SwipeContent;
