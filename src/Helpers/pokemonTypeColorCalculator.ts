import { APIType } from "../@types/pokemon";
import { TYPES, Type } from "../Constants/Types"

// Function to calculate Pokémon type colors
export default function pokemonTypeColorCalculator(types: Array<APIType>) {
  let pokemonTypes: Type[] = [];

  types.forEach(type => {
    const tempType = TYPES.find(t => t.id === type.id);
    tempType && pokemonTypes.push(tempType);
  });

  switch (pokemonTypes.length) {
    case 1:
      return [pokemonTypes[0].light, pokemonTypes[0].dark];
    case 2:
      return [pokemonTypes[0].light, pokemonTypes[1].light];
    default:
      return ['#8b8c9a', '#5f606d']; // Default case
  }
}