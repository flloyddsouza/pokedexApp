import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Root from './src/Navigation/Root';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache()
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </SafeAreaView>
  );
}

export default App;
