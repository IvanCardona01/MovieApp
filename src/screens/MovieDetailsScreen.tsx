import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/NavigatorScreens'
import { DetailsStyles } from '../themes/DetailsStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { UseMovieDetails } from '../hooks/UseMovieDetails'
import { MovieDetails } from '../components/MovieDetails'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<RootStackParams, 'MovieDetailsScreen'>{};

export const MovieDetailsScreen = ( { route, navigation } : Props) => {

    const movie = route.params
    
    const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    const { isLoading, cast, movieComplete } = UseMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={ DetailsStyles.detailsContent }>
                <Image source={{uri}} style={ DetailsStyles.moviePoster }/>
            </View>
            <View style={ DetailsStyles.contentText}>
                <Text style={{ color: 'black', opacity: 0.6, fontSize: 16 }}>{ movie.original_title }</Text>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{ movie.title }</Text>
            </View>
            {
                isLoading
                    ?<ActivityIndicator animating={true} size={30} color='grey'/>
                    :<MovieDetails movie={ movieComplete! } cast={ cast }/>
            }
            <View style={ DetailsStyles.arrowBack }>
                <TouchableOpacity onPress={ () => navigation.pop()}>
                    <Icon name='arrow-back' size={60} color='white' />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
