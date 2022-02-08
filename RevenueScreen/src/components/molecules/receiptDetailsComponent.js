import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';



const ReceiptDetails = (props) => {
    return (
        <View style={styles.receiptDetailsItem}>
            <View style={styles.receiptDetailsIcon}></View>
            <View style={styles.receiptDetailsAmountText}><Text>{props.receiptDetailsText}</Text></View>
            <View style={styles.receiptDetailsRightAmountText}><Text>${props.receiptDetailsAmountText}</Text></View>
        </View>
    );
  };

  const styles = StyleSheet.create({
    receiptDetailsItem:{
      flexDirection: 'row',
      width: '90%',
      height: '25%',
      marginTop: '2.5%',
      alignItems: 'center',
    },
    receiptDetailsIcon:{
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: '#EFF2F2'
    },
    receiptDetailsText:{
      marginLeft: '5%'
    },
    receiptDetailsAmountText:{
      width: '40%',
      marginLeft: '5%',
    },
    receiptDetailsRightAmountText:{
      width: '40%',
      marginLeft: '5%',
      alignItems: 'flex-end'
    }
  });
  
  export default ReceiptDetails;