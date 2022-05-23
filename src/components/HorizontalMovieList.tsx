import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../model/Movie'
import { HomeStyles } from '../themes/HomeStyles'
import { MoviePoster } from './MoviePoster'

interface Props {
    title: string
    movies: Movie[]
    
}

export const HorizontalMovieList = ({ movies, title }: Props) => {
  return (
    <View style={{ backgroundColor: 'white', height: 250, marginTop: 10}}>
        <Text style={HomeStyles.movieTitle }> { title } </Text>
        <FlatList 
            data={ movies }
            renderItem={ ({item}:any) => <MoviePoster movie={item} height={205} width={140} borderRadius={20}/> }
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true } 
            showsHorizontalScrollIndicator={ false }
        />
    </View>
  )
}
