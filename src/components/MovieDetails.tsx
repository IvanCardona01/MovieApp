import React from 'react'
import { Text, View } from 'react-native'
import { Cast } from '../model/Credits'
import { MovieComplete } from '../model/Movie'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import { Actors } from './Actors'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
    movie: MovieComplete;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <View style={{ marginTop: 5, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row'}}>
            <Icon name='star-outline' size={20} color='grey' />
            <Text style={{ color: 'black', fontSize: 16, opacity: 0.6}}> {movie.vote_average}</Text>
            <Text style={{marginHorizontal: 5, color: 'black'}}> - { movie.genres.map(genere => genere.name).join(', ') } </Text>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 15 }}>History</Text>
        <Text style={{ fontSize: 15, color: 'black'}}>{ movie.overview }</Text>

        <View style={{marginTop: 15}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Budget</Text>
            <Text style={{color: 'black', opacity: 0.6}}>{ currencyFormatter.format(movie.budget, { code:'USD' }) }</Text>
        </View>

         <View style={{ marginTop: 15, marginBottom: 60 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}>Actors</Text>

            <FlatList
                data={cast}
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({item}) => <Actors actor={ item }/>}
                horizontal={ true }
                showsHorizontalScrollIndicator={false}
            />
            
         </View>
    </View>
  )
}
