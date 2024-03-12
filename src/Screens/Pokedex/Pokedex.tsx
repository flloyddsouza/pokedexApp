import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client'

const POKEMON_LIST_QUERY = gql`{
  gen1_species: pokemon_v2_pokemonspecies(
    where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
    order_by: { id: asc }
  ) {
    name
    id
  }
}
`

const Pokedex: React.FC = () => {

  const { data, loading } = useQuery(POKEMON_LIST_QUERY)

  if (loading) {
    return <View style={{flex: 1, backgroundColor: 'red'}}/>
  }

  return (
    <FlatList
      data={data.gen1_species}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(pokemon) => pokemon.id.toString()}
    />
  )
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#123456',
    width: '100%',
    height: '100%',
  },
});

export default Pokedex;