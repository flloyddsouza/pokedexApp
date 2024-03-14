import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Root from './src/Navigation/Root';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App(): React.JSX.Element {

  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache()
  });

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </SafeAreaView>
  );
}

export default App;
