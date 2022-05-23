import React from 'react'
import { Image, Text, View } from 'react-native'
import { Cast } from '../model/Credits'
import { DetailsStyles } from '../themes/DetailsStyles';

interface Props {
    actor: Cast;
}

export const Actors = ({ actor }: Props) => {

    const uri = 'https://image.tmdb.org/t/p/w500' + actor.profile_path;
  return (
      <View style={ DetailsStyles.cardActor }>
          {
              actor.profile_path && (
                <Image 
                    source={{uri}}
                    style={{ width: 50, height: 50, borderRadius: 100 }}
                />)
          }
          
          <View style={{ marginHorizontal: 20}}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{ actor.name }</Text>
            <Text style={{ color: 'black', fontSize: 18, opacity: 0.7 }}>{ actor.character }</Text>
          </View>
      </View>
  )
}
