import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Movie } from '../model/Movie'
import { MovieDetailsScreen } from '../screens/MovieDetailsScreen'
import { HomeStyles } from '../themes/HomeStyles'

interface Props {
    movie: Movie
    height?: number
    width?: number
    borderRadius?: number
}

export const MoviePoster = ({ movie, height = 380 , width = 250, borderRadius = 50 }: Props) => {

    const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    const navigation = useNavigation();

  return (
    <TouchableOpacity 
        onPress={ () => navigation.navigate('MovieDetailsScreen', movie) }
        activeOpacity={0.8}
        style={{ 
            ...HomeStyles.moviePosterContent, 
            height, 
            width,
            marginHorizontal: 2
        }}
    >
        <View style={ HomeStyles.detailsPosterContent }>
            <Image source={{ uri }} style={ {...HomeStyles.moviePosterImage, borderRadius} }/> 
        </View>
     </TouchableOpacity>
  )
}
