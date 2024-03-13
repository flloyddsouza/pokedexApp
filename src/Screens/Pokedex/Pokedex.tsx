import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { gql, useQuery } from '@apollo/client'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { APIPokemon } from '../../@types/pokemon';
import pokemonTypeColorCalculator from '../../Helpers/pokemonTypeColorCalculator';
import capitalizeFirstLetter from '../../Helpers/capitalizeFirstLetter';
import TypeImage from '../../Components/TypeImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import pokemonNumberPadding from '../../Helpers/pokemonNumberPadding';

const POKEMON_LIST_QUERY = gql`{
  pokemon: pokemon_v2_pokemon {
    id
    name
    height
    weight
    order
    types: pokemon_v2_pokemontypes {
      id: type_id
      name: pokemon_v2_type {
        name
      }
    }
  }
}
`
interface PokemonItemProps {
  pokemon: APIPokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ( {pokemon} ) => {
  const typeColors = pokemonTypeColorCalculator(pokemon.types)
  const name = capitalizeFirstLetter(pokemon.name)
  const pokemonNumber = pokemonNumberPadding(pokemon.id)
  return(
    <View style={styles.pokemonItem}>
    <LinearGradient colors={typeColors} style={styles.linearGradient}  start={{ x: 0.5, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
      <View>
        <Text style={styles.pokemonName}>{name}</Text>
        <View style={styles.typeIconContainer}>
          {pokemon.types.map((type) => {
            return(
              <TypeImage key={type.id} id={type.id}></TypeImage>
          )})}
        </View>
      </View>
      <View style={styles.numberContainer}>
        <MaterialCommunityIcons name="cards-heart-outline" color='#FFF' style={{opacity: 0.5}} size={22} />
        <Text style={styles.pokemonNumberText}>{pokemonNumber}</Text>
      </View>
    </LinearGradient>
  </View>
  )
}

  
const Pokedex: React.FC = () => {

  const { data, loading, error } = useQuery(POKEMON_LIST_QUERY)
  const insets = useSafeAreaInsets();

  if (loading) {
    return <View style={{flex: 1, backgroundColor: 'green'}}/>
  }

  if (error) {
    return <View style={{flex: 1, backgroundColor: 'red'}}/>
  }
  

  return (
    <View style={{...styles.container, paddingTop: insets.top}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Pokedex</Text>
      </View>
      <FlatList
        data={data.pokemon}
        renderItem={({ item }) => <PokemonItem pokemon={item}/>}
        keyExtractor={(pokemon) => pokemon.id.toString()}
      />
    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleText: {
    fontSize: 34, 
    color: '#000000', 
    fontWeight: '700'
  },
  pokemonItem: {
    borderRadius: 12,
    height: 85,
    marginHorizontal: 16,
    marginBottom: 20
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  pokemonName: {
    fontSize: 20, 
    color: '#FFFFFF', 
    fontWeight: '700'
  },
  typeIconContainer: {
    paddingVertical: 6,
    flexDirection: 'row',
  },
  numberContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  pokemonNumberText: {
    fontSize: 28, 
    color: '#FFFFFF', 
    fontWeight: '700',
    opacity: 0.5
  }
});

export default Pokedex;