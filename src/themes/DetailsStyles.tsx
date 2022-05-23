import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export const DetailsStyles = StyleSheet.create({
    detailsContent:{
        width: width,
        height: height * 0.7,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 7.8,

        elevation: 6,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    detailsTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    moviePoster: {
        flex: 1,
        
    },
    contentText: {
        marginHorizontal: 20,
        marginTop: 10,

    },
    cardActor:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 7.8,

        elevation: 6,
        padding: 10,
        borderRadius: 20,
    },
    arrowBack: {
        position: 'absolute',
        
    }
});