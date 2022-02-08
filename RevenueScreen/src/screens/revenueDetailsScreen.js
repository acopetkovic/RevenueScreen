import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

// === COMPONENTS == //
import ProjectDetailsComponent from '../components/projectDetailsComponent';
import ReceiptComponent from '../components/receiptComponent';



const RevenueDetailsScreen = () => {
  return (
    <View style={styles.mainContainer}>
        <ReceiptComponent />
        <ProjectDetailsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#EFF2F2'
  }
});

export default RevenueDetailsScreen;
