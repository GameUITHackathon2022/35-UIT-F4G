import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        position: 'relative',
        top: 30,
        alignItems: 'center',
    },
    imgContainer:{
        width: 343,
    },
    headerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        width: 390,
        textAlign: 'center',
        marginTop: 30,
    },
    backIconContainer: {
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
    backIcon:{
        width: 20,
        height: 20,
    },
    searchContainer: {
        width: 343,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    searchText: {
        fontWeight: 'regular',
        fontSize: 14,
        color: '#78746D',
    },
    headerOverlay: {
        width: '100%',
        height: 280,
        backgroundColor: '#45DF95',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    category: {
        width: 60,
        height: 60,
        backgroundColor: '#74FFBC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 30,
    },
    imageCategory: {
        width: 50,
        height: 50,
    },
    textCategory: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign:'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 10,
    },
    titleFilter: {
        color: '#5A5656',
        fontWeight: 'bold',
        fontSize: 18,
    },
    arrowDown: {
        width: 15,
        height: 15,
        alignSelf: 'center',
        marginLeft: 5,
    },
    textAndFilter: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    donateItem: {
        width: '100%',
    },
    donateImage:{
        width: '100%',
        height: 200,
    },
    textDecor: {
        fontSize: 21,
        fontWeight: 'regular',
        color: 'black',
    },
    textUser: {
        color: '#62615F',
        fontSize: 13,
        fontWeight: 'regular',
    },
    ratio: {
        flexDirection: 'row',
    },
    useRatio: {
        color: 'black',
        fontFamily: 'regular',
        fontSize: 13,
    },
    allRatio:{
        color: '#62615F',
        fontFamily: 'regular',
        fontSize: 13,
    },
    allPrecentage:{
        height: 5,
        width: '100%',
        backgroundColor: '#D9D9D9',
        marginTop: 10,
    },
    Precentage: {
        height: 5,
        width: '80%',
        backgroundColor: '#B5E892',
    },
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,    
    }

});

export default styles;