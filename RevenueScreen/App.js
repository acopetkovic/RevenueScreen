import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



// === SCREENS === // 
import RevenueDetailsScreen from './src/screens/revenueDetailsScreen';


const App = () => {
 
  return (
    <View style={styles.mainContainer}>
      <RevenueDetailsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'black'
  }
});

export default App;
