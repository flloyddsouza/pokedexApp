import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`{
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