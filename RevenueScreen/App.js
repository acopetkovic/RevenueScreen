import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";



// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://tigra-5mgmi.ondigitalocean.app/graphql/',
  cache: new InMemoryCache()
});

// === SCREENS === // 
import RevenueDetailsScreen from './src/screens/revenueDetailsScreen';


const App = () => {
 
  return (
    <ApolloProvider client={client}>
      <View style={styles.mainContainer}>
        <RevenueDetailsScreen />
      </View>  
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
