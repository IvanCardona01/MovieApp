import { StyleSheet } from "react-native";


export const HomeStyles = StyleSheet.create({
    homeContent: {
        flex: 1,
        backgroundColor: 'white',
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    isLoading: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    moviePosterContent: {
        alignSelf: 'center',
        marginTop: 10,
        marginHorizontal: 5,
    },
    moviePosterImage: {
        flex: 1,
        borderRadius: 50,
        marginBottom: 1
    },
    detailsPosterContent: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.8,

        elevation: 6,
        borderRadius: 50,
    }


});