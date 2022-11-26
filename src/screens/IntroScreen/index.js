import React, {useState, useRef} from 'react';
import SwipeContent from '../../components/IntroContent/SwipeContent';
import { Text, View, FlatList, Animated, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './style';
import slides from '../../datas/slides';
import Paginator from './Paginator';
import Button from '../../components/Button/NextButton';

const IntroScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const slidesRef = useRef(null);
    const textButton = () => {
        if(currentIndex === slides.length - 1)
            return "Let's Start";
        return "Next";
    }

    const scrollTo = () => {
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({index: currentIndex + 1});
        }
    }
    const skipALl = () => {
        slidesRef.current.scrollToIndex({index: slides.length - 1});
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={skipALl}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Skip
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.container}> 
                <View style={{flex: 3}}>
                    <FlatList 
                        data={slides} 
                        renderItem={({item}) => 
                            <SwipeContent 
                                imgName={item.image} 
                                title={item.title} 
                                body={item.body}
                            />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        keyExtractor={(item) => item.id}
                        onScroll={Animated.event([{nativeEvent: {contentOffset:{x:scrollX}}}], {
                            useNativeDriver: false,
                        })}
                        onViewableItemsChanged={viewableItemsChanged}
                        ref={slidesRef}
                    />
                </View>
                <Paginator data={slides} scrollX={scrollX}/>
                <Button label={textButton()} 
                        // scrollTo={
                        //     (currentIndex===slides.length - 1) ?
                        //         () => {navigation.navigate('Login')} : scrollTo
                        // }
                />
            </View>
        </SafeAreaView>
    );
};

export default IntroScreen;