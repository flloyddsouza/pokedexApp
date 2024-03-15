import 'react-native';
import { it, expect } from '@jest/globals';
import capitalizeFirstLetter from '../src/Helpers/capitalizeFirstLetter';
import pokemonNumberPadding from '../src/Helpers/pokemonNumberPadding';
import pokemonTypeColorCalculator from '../src/Helpers/pokemonTypeColorCalculator';
import { APIType } from '../src/@types/pokemon';

const grass: APIType = {
  id: 12,
  name: {
    name: 'grass'
  }
}

const water: APIType = {
  id: 11,
  name: {
    name: 'water'
  }
}

const unknown: APIType = {
  id: 1000,
  name: {
    name: 'unknown'
  }
}

it('Given a word with lower cases should capalise the first, capitalizeFirstLetter() returns the word with first letter in Uppercase', () => {
  expect(capitalizeFirstLetter('pokemon')).toBe('Pokemon');
});

it('Given a number add padding of 0 and a # in the begining, pokemonNumberPadding() returns a string with padded number in format #000', () => {
  expect(pokemonNumberPadding(43)).toBe('#043');
});

it('Given a number greater than 3 digit add no padding of 0 and a # in the begining, pokemonNumberPadding() returns a string with padded number in format #000', () => {
  expect(pokemonNumberPadding(1008)).toBe('#1008');
});


it('Given a pokemon has a single Type it will give two colors by matching type a light and a dark, pokemonTypeColorCalculator() returns a array of strings with colors', () => {
  expect(pokemonTypeColorCalculator([grass])).toStrictEqual(['#90c8a5', '#5dbd62']);
});


it('Given a pokemon has two Types it will give two colors by matching type a light of first and a light of second, pokemonTypeColorCalculator() returns a array of strings with colors', () => {
  expect(pokemonTypeColorCalculator([grass, water])).toStrictEqual(['#90c8a5', '#a4c6e6']);
});


it('Given a pokemon has unknown type will return default colors, pokemonTypeColorCalculator() returns a array of strings with colors', () => {
  expect(pokemonTypeColorCalculator([unknown])).toStrictEqual(['#8b8c9a', '#5f606d']);
});