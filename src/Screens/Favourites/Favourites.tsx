import { useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { GET_POKEMON_LIST } from '../../Constants/Queries';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonItem from '../../Components/PokemonItem';
import { APIPokemon } from '../../@types/pokemon';
import { getIdList } from '../../Services/localStorage';
import { EventRegister } from 'react-native-event-listeners';
import NoFavourites from '../../Components/NoFavourites';


const Favourites: React.FC = () => {

  const insets = useSafeAreaInsets();
  const client = useApolloClient();
  const [data, setData] = useState<APIPokemon[]>([]);

  useEffect(() => {
    getFavouritePokemon()

    EventRegister.addEventListener('favouriteChanged', (data) => {
      getFavouritePokemon()
    });

    return () => {
      EventRegister.removeEventListener('favouriteChanged')
    }

  }, []);

  const getFavouritePokemon = async() => {
    const cachedData = client.readQuery({ query: GET_POKEMON_LIST })
    const ids = await getIdList()
    setData( cachedData ? filterPokemonByIds(ids, cachedData.pokemon) : [])
  }

  const filterPokemonByIds = (ids: number[], pokemonData: APIPokemon[]): APIPokemon[] => {
    return pokemonData.filter(pokemon => ids.includes(pokemon.id));
  };

  return (
    <View style={{...styles.container, paddingTop: insets.top}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Favourites</Text>
      </View>
      {data.length == 0 ? (<NoFavourites/>) : (<FlatList
        data={data}
        renderItem={({ item }) => <PokemonItem pokemon={item}/>}
        keyExtractor={(pokemon) => pokemon.id.toString()}
      />)}
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
    marginTop: 8,
    fontSize: 34,
    color: '#000000',
    fontWeight: '700'
  },
});

export default Favourites;