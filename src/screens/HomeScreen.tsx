import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import { useMovies } from '../hooks/UseMovies'
import { HomeStyles } from '../themes/HomeStyles'
import { MoviePoster } from '../components/MoviePoster'
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalMovieList } from '../components/HorizontalMovieList';

interface Props extends StackScreenProps<any, any>{};

const { width: windowWidth } = Dimensions.get('window');


export const HomeScreen = ({ navigation }: Props ) => {
  
  const { nowMovies, popularMovies, isLoading, topMovies, upcomingMovies } = useMovies();

  if( isLoading ){
    return (
      <View style={ HomeStyles.isLoading }>
          <ActivityIndicator color="black" size={ 80 } />
      </View>
    )
  }

  return (
    <ScrollView>
        <View style={ HomeStyles.homeContent }>
          
          <View style={{ height: 400 }}>
              <Carousel 
                  data={ nowMovies }
                  renderItem={({ item }: any) => <MoviePoster movie={ item }/>}
                  sliderWidth={windowWidth}
                  itemWidth={250}
              />
          </View>
          <HorizontalMovieList title='Popular' movies={ popularMovies }/>
          <HorizontalMovieList title='Top Rated' movies={ topMovies }/>
          <HorizontalMovieList title='Upcoming' movies={ upcomingMovies }/>
        </View>
    </ScrollView>
  )
}
