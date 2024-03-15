import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NoFavourites: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='star' color='#DDD' size={200} />
      <Text style={styles.title}>Oops! No Favourites found</Text>
      <Text>Click ♥️ on a pokemon to mark as Favourite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4
  }
});

export default NoFavourites;
