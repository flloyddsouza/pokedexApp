export default function pokemonNumberPadding(pokemonNumber: number): string {
  const paddedNumber = String(pokemonNumber).padStart(3, '0');
  return '#' + paddedNumber;
}