import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonItem from '../../Components/PokemonItem';
import { useApolloClient } from '@apollo/client';
import { GET_POKEMON_LIST } from '../../Constants/Queries';
import { APIPokemon } from '../../@types/pokemon';
import { EventRegister } from 'react-native-event-listeners';
import { Searchbar } from 'react-native-paper';

const Pokedex: React.FC = () => {

  const insets = useSafeAreaInsets();
  const client = useApolloClient();
  const [data, setData] = useState<APIPokemon[]>([]);
  const [filterData, setFilterData] = useState<APIPokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const searchQueryRef = useRef<string>('');

  useEffect(() => {

    getCachePokemon(searchQueryRef.current)

    EventRegister.addEventListener('pokedexChanged', (data) => {
      getCachePokemon(searchQueryRef.current)
    });

    return () => {
      EventRegister.removeEventListener('pokedexChanged')
    }

  }, []);

  const getCachePokemon = async (query: string) => {
    const cachedData = client.readQuery({ query: GET_POKEMON_LIST })
    setData(cachedData.pokemon)
    const tempData = cachedData.pokemon.filter((x: APIPokemon) => x.name.toLowerCase().includes(query.toLowerCase()))
    setFilterData([])
    setFilterData(tempData)
  }

  const onSearchBarTextChange = (query: string) => {
    setSearchQuery(query)
    searchQueryRef.current = query;
    const tempData = data.filter(x => x.name.toLowerCase().includes(query.toLowerCase()))
    setFilterData(tempData)
  }

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Pokédex</Text>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search Pokémon"
          onChangeText={(query) => onSearchBarTextChange(query)}
          value={searchQuery}
          keyboardType='default'
          textContentType='none'
          autoComplete='off'
        />
      </View>
      <FlatList
        data={filterData}
        renderItem={({ item }) => <PokemonItem pokemon={item} />}
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
    marginTop: 8,
    fontSize: 34,
    color: '#000000',
    fontWeight: '700'
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 6,
    borderRadius: 8,
    backgroundColor: '#EEEEEE'
  }
});

export default Pokedex