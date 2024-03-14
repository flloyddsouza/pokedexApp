import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pokedex from '../Screens/Pokedex/Pokedex';
import Favourites from '../Screens/Favourites/Favourites';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../Constants/Queries';
import Loading from '../Components/Loading';

const Root: React.FC = () => {

  const Tab = createBottomTabNavigator();
  const { data, loading, error } = useQuery(GET_POKEMON_LIST)

  if (loading) return <Loading/>;
  if (error) return <View  style={{...styles.rootContainer , backgroundColor: 'red'}}/>;

  return (
    <View style={styles.rootContainer}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Pokedex"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e91e63',
          }}
        >
          <Tab.Screen
            name="Pokedex"
            component={Pokedex}
            options={{
              tabBarLabel: 'Pokedex',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="catching-pokemon" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={Favourites}
            options={{
              tabBarLabel: 'Favourites',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="star" color={color} size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
  },
});

export default Root;