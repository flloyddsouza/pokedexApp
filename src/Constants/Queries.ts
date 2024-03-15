import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`{
    pokemon: pokemon_v2_pokemon (where: { id: { _lte: 151} }) {
      id
      name
      types: pokemon_v2_pokemontypes {
        id: type_id
        name: pokemon_v2_type {
          name
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`