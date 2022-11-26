import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Input } from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import styles from './style'
const Login = () => {
  return (
    <SafeAreaView>
        <View style={styles.headerOverlay}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.backTouch}>
                    <View style={styles.backIconContainer}>
                        <Image style={styles.backIcon} source={require('../../assets/icons/backIcon.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Donation</Text>
            <View style={styles.container}>
                <></>
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>Search category</Text>
                    <Image style={styles.searchImage} source={require('../../assets/icons/SearchIcon.png')}></Image>
                </View>
                <></>
            </View>
            <Text style={styles.categoryTitle}>Category</Text>
            <View style={styles.categoryContainer}>
                <View style={{width:60}}>
                    <View style={styles.category}>
                        <Image style={styles.imageCategory} source={require('../../assets/images/plantImage.png')}></Image>
                    </View>
                    <Text style={styles.textCategory}>Plant</Text>
                </View>
                <View style={{width:60}}>
                    <View style={styles.category}>
                        <Image style={styles.imageCategory} source={require('../../assets/images/plantImage.png')}></Image>
                    </View>
                    <Text style={styles.textCategory}>Plant</Text>
                </View>
                <View style={{width:60}}>
                    <View style={styles.category}>
                        <Image style={styles.imageCategory} source={require('../../assets/images/plantImage.png')}></Image>
                    </View>
                    <Text style={styles.textCategory}>Plant</Text>
                </View>
                <View style={{width:60}}>
                    <View style={styles.category}>
                        <Image style={styles.imageCategory} source={require('../../assets/images/plantImage.png')}></Image>
                    </View>
                    <Text style={styles.textCategory}>Plant</Text>
                </View>
            </View>
        </View>
        <View style={styles.textAndFilter}>
            <Text style={styles.titleFilter}>Trending donation</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                <Text style={styles.filterText}>Latest</Text>
                <Image style={styles.arrowDown} source={require('../../assets/icons/arrowDown.png')}></Image>
            </View>
        </View>
        <></>
            <View style={styles.donateItem}>
                <Image style={styles.donateImage} source={require('../../assets/images/plantdonate.png')}></Image>
                <View style={{marginLeft: 20, marginRight: 20}}>

                    <Text style={styles.textDecor}>Accompanying us to contribute trees</Text>
                    <Text style={styles.textDecor}>for Ho Chi Minh City</Text>
                    <Text style={styles.textUser}>MB agent Life</Text>
                    <View style={styles.ratio}>
                        <Text style={styles.useRatio}>100000</Text>
                        <Text style={styles.allRatio}>/120000</Text>
                    </View>
                    <View style={styles.allPrecentage}>
                        <View style={styles.Precentage}></View>
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'regular'}}>Lượt quyên góp</Text>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'bold'}}>100000</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'regular'}}>Lượt quyên góp</Text>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'bold'}}>100000</Text>
                        </View>
                        <TouchableOpacity >
                            <View style={{alignItems: 'center', justifyContent: 'center',width: 84, height: 25, borderRadius: 10, borderWidth: 1, borderColor: '#45DF95'}}>
                                <Text style={{color:'#45DF95'}}>Donate</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.donateItem}>
                <Image style={styles.donateImage} source={require('../../assets/images/plantdonate.png')}></Image>
                <View style={{marginLeft: 20, marginRight: 20}}>

                    <Text style={styles.textDecor}>Accompanying us to contribute trees</Text>
                    <Text style={styles.textDecor}>for Ho Chi Minh City</Text>
                    <Text style={styles.textUser}>MB agent Life</Text>
                    <View style={styles.ratio}>
                        <Text style={styles.useRatio}>100000</Text>
                        <Text style={styles.allRatio}>/120000</Text>
                    </View>
                    <View style={styles.allPrecentage}>
                        <View style={styles.Precentage}></View>
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'regular'}}>Lượt quyên góp</Text>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'bold'}}>100000</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'regular'}}>Lượt quyên góp</Text>
                            <Text style={{fontSize: 13, color:'#62615F', fontWeight: 'bold'}}>100000</Text>
                        </View>
                        <TouchableOpacity >
                            <View style={{alignItems: 'center', justifyContent: 'center',width: 84, height: 25, borderRadius: 10, borderWidth: 1, borderColor: '#45DF95'}}>
                                <Text style={{color:'#45DF95'}}>Donate</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        <></>
    </SafeAreaView>
  )
}

export default Login