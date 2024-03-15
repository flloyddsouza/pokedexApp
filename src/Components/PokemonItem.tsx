import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { APIPokemon } from '../@types/pokemon';
import pokemonTypeColorCalculator from '../Helpers/pokemonTypeColorCalculator';
import capitalizeFirstLetter from '../Helpers/capitalizeFirstLetter';
import TypeImage from '../Components/TypeImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';;
import pokemonNumberPadding from '../Helpers/pokemonNumberPadding';
import { addIdToList, checkIfIdExists, removeIdFromList } from '../Services/localStorage';
import FastImage from 'react-native-fast-image';

interface PokemonItemProps {
  pokemon: APIPokemon
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {

  const typeColors = pokemonTypeColorCalculator(pokemon.types)
  const name = capitalizeFirstLetter(pokemon.name)
  const pokemonNumber = pokemonNumberPadding(pokemon.id)
  const [isFavourite, setIsFavourite] = useState(false);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const loadFavoriteStatus = async () => {
      const tempIsFavourite = await checkIfIdExists(pokemon.id)
      setIsFavourite(tempIsFavourite);
    };

    const findImageURL = () => {
      try {
        const URL = pokemon.sprites[0].sprites.other['official-artwork'].front_default
        setImageURL(URL ? URL : '')
      } catch (e) {
        setImageURL('')
      }
    }

    loadFavoriteStatus();
    findImageURL();
  }, [pokemon.id]);

  const toggleFavourite = async () => {
    try {

      // Toggle local state
      const previousState = isFavourite
      setIsFavourite(!previousState);

      //Update Local Storage
      previousState ? await removeIdFromList(pokemon.id) : await addIdToList(pokemon.id)

    } catch (error) {
      console.error('Error toggling favorite status:', error);
    }
  };

  return (
    <View style={styles.pokemonItem}>
      <LinearGradient colors={typeColors} style={styles.linearGradient} start={{ x: 0.5, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
        <View>
          <FastImage
            source={{
              uri: imageURL,
              priority: FastImage.priority.normal,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.pokemonName}>{name}</Text>
          <View style={styles.typeIconContainer}>
            {pokemon.types.map((type) => {
              return (
                <TypeImage key={type.id} id={type.id}></TypeImage>
              )
            })}
          </View>
        </View>
        <View style={styles.numberContainer}>
          <MaterialCommunityIcons suppressHighlighting onPress={toggleFavourite} name={isFavourite ? "cards-heart" : "cards-heart-outline"} color='#FFF' style={{ opacity: 0.5 }} size={22} />
          <Text style={styles.pokemonNumberText}>{pokemonNumber}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  pokemonItem: {
    borderRadius: 12,
    height: 85,
    marginHorizontal: 16,
    marginBottom: 20
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
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
  },
  image: {
    height: 70,
    width: 70
  },
  nameContainer: {
    flex: 1,
    paddingHorizontal: 16
  }
});

export default PokemonItem